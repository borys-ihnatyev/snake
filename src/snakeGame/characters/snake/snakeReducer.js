import { range } from 'ramda'
import { CREATE, MOVE } from './snakeActionTypes'
import { Vector } from '../../physics/vector'

const defaultState = []

export function snakeReducer(state = defaultState, action) {

    if (action.type === CREATE) {
        const { fieldSize, snakeLength } = action

        const head = {
            x: (fieldSize.width - snakeLength) / 2,
            y: fieldSize.height / 2,
        }

        const tail = range(head.x + 1, head.x + snakeLength).map((x) => ({ x, y: head.y }))

        return [ head, ...tail, ]
    }

    if (action.type === MOVE) {
        const [ prevHead, ...prevTail ] = state
        const { fieldSize, direction } = action

        const newHead = onField(Vector.add(prevHead, direction), fieldSize)

        return [
            newHead,
            prevHead,
            ...prevTail.slice(0, prevTail.length - 1)
        ]
    }

    return state
}

function onField(point, fieldSize) {
    return {
        x: mod(point.x, fieldSize.width),
        y: mod(point.y, fieldSize.height),
    }
}

function mod(value, size) {
    if (value < 0) {
        return size - 1
    }

    if (value >= size) {
        return 0
    }

    return value
}
