import React from 'react'
import { connect } from 'react-redux'
import { KeyboardController } from '../../keyboardController'
import { welcomeSceneKeyboardActionMap } from './welcomeSceneKeyboardActionMap'
import { startPlaySceneAction } from '../sceneActions'
import './WelcomeScene.css'

const mapDispatchToProps = (dispatch) => ({
    onStartClick: () => dispatch(startPlaySceneAction())
})

export const WelcomeScene = connect(null, mapDispatchToProps)(
    ({ onStartClick }) => (
        <KeyboardController actionMap={welcomeSceneKeyboardActionMap}>
            <div className="start-scene" onClick={onStartClick}>SNAKE</div>
        </KeyboardController>
    )
)
