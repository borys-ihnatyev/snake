import React from 'react'
import { Snake } from '../../characters'
import { PlayField, Prey } from '../../environment'
import { KeyboardController } from '../../keyboardController'
import { playSceneKeyboardActionMap } from './playSceneKeyboardActionMap'
import { SnakeMovement } from './SnakeMovement'

export const PlayScene = () => (
    <KeyboardController actionMap={playSceneKeyboardActionMap}>
        <SnakeMovement>
            <PlayField>
                <Snake />
                <Prey />
            </PlayField>
        </SnakeMovement>
    </KeyboardController>
)
