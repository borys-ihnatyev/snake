import { changeSnakeDirectionAction, createSnakeGameAction } from '../../rules/redux'
import { DOWN, LEFT, RIGHT, UP } from '../../rules/spaceMetrics/direction'

export const playSceneKeyboardActionMap = {
    'ArrowUp': changeSnakeDirectionAction(UP),
    'ArrowDown': changeSnakeDirectionAction(DOWN),
    'ArrowLeft': changeSnakeDirectionAction(LEFT),
    'ArrowRight': changeSnakeDirectionAction(RIGHT),
    'Escape': createSnakeGameAction(),
}
