import React from 'react'
import { KeyboardController } from '../../keyboardController'
import { playSceneKeyboardActionMap } from './playSceneKeyboardActionMap'
import { SnakeMovement } from './SnakeMovement'

export const PlayScene = () => (
    <KeyboardController actionMap={playSceneKeyboardActionMap}>
        <SnakeMovement />
    </KeyboardController>
)
