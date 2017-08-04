import { UP } from '../../../physics/direction'
import { CHANGE_SNAKE_MOVE_DIRECTION } from './snakeMoveDirectionActionTypes'

const defaultSnakeMoveDirectionState = UP

export function snakeMoveDirectionReducer(state = defaultSnakeMoveDirectionState, action) {
    if (action.type === CHANGE_SNAKE_MOVE_DIRECTION) {
        const { direction } = action

        if ((state.x !== -direction.x) && (state.y !== -direction.y)) {
            return action.direction
        }

    }
    return state
}
