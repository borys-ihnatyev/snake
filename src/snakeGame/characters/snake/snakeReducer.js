import uuid from 'uuid/v1'
import { range } from 'ramda'
import { UP } from '../../physics/direction'
import { CREATE, MOVE, DIRECT } from './snakeActionTypes'

const defaultState = {}

export function snakeReducer(state = defaultState, action) {

    if (action.type === CREATE) {
        const { fieldSize, snakeLength } = action

        const head = {
            x: (fieldSize.width - snakeLength) / 2,
            y: fieldSize.height / 2,
        }

        const tail = range(head.x + 1, head.x + snakeLength)
            .map((x) => createSnakePart({ x, y: head.y }))

        return {
            direction: UP,
            head,
            tail,
        }
    }

    if (action.type === MOVE) {
        const { direction, head: prevHead, tail } = state
        const { fieldSize } = action

        return {
            ...state,
            head: mapPointToField({
                x: prevHead.x + direction.x,
                y: prevHead.y + direction.y
            }, fieldSize),
            tail: [createSnakePart(prevHead), ...withoutLast(tail)],
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

function createSnakePart({ x, y }) {
    return {
        id: uuid(),
        position: { x, y }
    }
}

function withoutLast(arr) {
    return arr.slice(0, arr.length - 1)
}

function mapPointToField(point, fieldSize) {
    return {
        x: mod(point.x, fieldSize.width),
        y: mod(point.y, fieldSize.height),
    }
}

function mod(x, width) {
    if (x < 0) {
        return width - 1
    }

    if (x >= width) {
        return 0
    }

    return x
}