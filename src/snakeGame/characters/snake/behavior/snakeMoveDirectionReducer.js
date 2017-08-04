import { UP } from '../../../physics/direction'
import { CHANGE_SNAKE_MOVE_DIRECTION } from './snakeMoveDirectionActionTypes'

const defaultSnakeMoveDirectionState = UP

export function snakeMoveDirectionReducer(state = defaultSnakeMoveDirectionState, action) {
    if (action.type === CHANGE_SNAKE_MOVE_DIRECTION) {
        return action.direction
    }
    return state
}
