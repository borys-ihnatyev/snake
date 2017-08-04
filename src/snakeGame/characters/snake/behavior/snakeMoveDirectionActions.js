import { CHANGE_SNAKE_MOVE_DIRECTION } from './snakeMoveDirectionActionTypes'

export function changeSnakeMoveDirectionAction(direction) {
    return {
        type: CHANGE_SNAKE_MOVE_DIRECTION,
        direction,
    }
}
