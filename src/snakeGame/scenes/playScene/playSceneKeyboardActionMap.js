import { UP, DOWN, LEFT, RIGHT } from '../../physics/direction'
import { startWelcomeSceneAction } from '../sceneActions'
import { changeSnakeMoveDirectionAction } from '../../characters'

export const playSceneKeyboardActionMap = {
    'ArrowUp': changeSnakeMoveDirectionAction(UP),
    'ArrowDown': changeSnakeMoveDirectionAction(DOWN),
    'ArrowLeft': changeSnakeMoveDirectionAction(LEFT),
    'ArrowRight': changeSnakeMoveDirectionAction(RIGHT),
    'Escape': startWelcomeSceneAction(),
}
