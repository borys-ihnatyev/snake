import { none, equals } from 'ramda'
import { preyActionTypes } from './preyActions'

const defaultPreyState = {
}

export function preyReducer(state = defaultPreyState, action) {

    if (action.type === preyActionTypes.create) {
        const { snake, fieldSize } = action
        return { position: calculatePreyPosition(snake, fieldSize) }
    }

    return state
}

function calculatePreyPosition(snake, fieldSize) {
    let point
    do point = randomPoint(sizeToRange(fieldSize))
    while (none(equals, toSnakePoints(snake), point)) // TODO: handle when all points are unavailable
    return point
}

const sizeToRange = (size) => ({
    x: { from: 0, to: size.width - 1 },
    y: { from: 0, to: size.height - 1 }
})

const toSnakePoints = (snake) => [
    snake.head,
    ...snake.tail.map((x) => x.position)
]

function randomPoint(range) {
    return { x: random(range.x), y: random(range.y) }
}

function random({ from, to }) {
    return from + to * Math.random()
}

