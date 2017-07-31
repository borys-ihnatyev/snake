import React from 'react'
import { KeyboardController } from '../../keyboardController'
import { SnakeMovement } from './SnakeMovement'
import { playSceneKeyboardActionMap } from './playSceneKeyboardActionMap'
import { PlayField, Prey } from '../../environment'
import { Snake } from '../../characters'

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