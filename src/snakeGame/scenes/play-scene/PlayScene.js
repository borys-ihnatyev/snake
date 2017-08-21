import React from 'react'
import { KeyboardController } from '../../keyboard-controller'
import { playSceneKeyboardActionMap } from './playSceneKeyboardActionMap'
import { SnakeMovement } from './SnakeMovement'

export const PlayScene = () => (
    <KeyboardController actionMap={playSceneKeyboardActionMap}>
        <SnakeMovement />
    </KeyboardController>
)
