import uuid from 'uuid/v1'
import { range } from 'ramda'
import { UP } from '../../physics/direction'
import { CREATE, MOVE, DIRECT } from './snakeActionTypes'

const defaultState = {}

export function snakeReducer(state = defaultState, action) {

    if (action.type === CREATE) {
        const { fieldSize, snakeSize } = action

        const head = {
            x: (fieldSize.width - snakeSize) / 2,
            y: fieldSize.height / 2,
        }

        const tail = range(head.x + 1, head.x + snakeSize)
            .map((x) => ({ id: uuid(), position: { x, y: head.y } }))

        return {
            direction: UP,
            head,
            tail,
        }
    }

    if (action.type === MOVE) {
        return {
            ...state,
            head: {
                x: within(state.head.x + state.direction.x, action.fieldSize.width),
                y: within(state.head.y + state.direction.y, action.fieldSize.height),
            },
            tail: [{ id: uuid(), position: state.head }, ...withoutLast(state.tail)],
        }
    }

    if (action.type === DIRECT) {
        return {
            ...state,
            direction: action.direction
        }
    }

    return state
}

function withoutLast(arr) {
    return arr.slice(0, arr.length - 1)
}

function within(x, width) {
    if (x < 0) {
        return width - 1
    }

    if (x >= width) {
        return 0
    }

    return x
}