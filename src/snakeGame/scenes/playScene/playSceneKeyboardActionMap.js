import { UP, DOWN, LEFT, RIGHT } from '../../physics/direction'
import { directSnakeAction } from '../../characters'
import { startWelcomeSceneAction } from '../sceneActions'

export const playSceneKeyboardActionMap = {
    'ArrowUp': directSnakeAction(UP),
    'ArrowDown': directSnakeAction(DOWN),
    'ArrowLeft': directSnakeAction(LEFT),
    'ArrowRight': directSnakeAction(RIGHT),
    'Escape': startWelcomeSceneAction(),
}
