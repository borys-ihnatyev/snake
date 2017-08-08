import { any, equals, range } from 'ramda'
import { Range } from './spaceMetrics/range'
import { Vector } from './spaceMetrics/vector'

export function createSnake({ size, position }) {
    const head = {
        hasPrey: false,
        position,
    }

    const tail = range(position.y + 1, position.y + size)
        .map((y) => ({ hasPrey: false, position: { x: position.x, y } }))

    return [ head, ...tail, ]
}

export function moveSnake(snake, { prey, snakeDirection, fieldSize }) {
    const [ prevHead, ...prevTail ] = snake

    const newHeadPosition = within(Vector.add(prevHead.position, snakeDirection), fieldSize)

    const newHead = {
        hasPrey: equals(newHeadPosition, prey),
        position: newHeadPosition,
    }

    const newSnake = [
        newHead,
        prevHead,
        ...prevTail.slice(0, prevTail.length - 1),
    ]

    const lastInTail = prevTail[ prevTail.length - 1 ]

    if (lastInTail.hasPrey) {
        newSnake.push({ hasPrey: false, position: lastInTail.position })
    }

    return newSnake
}

export function isSnakeSelfBitten([ head, ...tail ]) {
    return any(equals(head), tail)
}

export function isSnakeGrewToFieldSize(snake, { fieldSize }) {
    return snake.length === (fieldSize.width * fieldSize.height)
}

function within(point, fieldSize) {
    return {
        x: Range.valueWithin(point.x, Range.fromSize(fieldSize.width)),
        y: Range.valueWithin(point.y, Range.fromSize(fieldSize.height)),
    }
}

