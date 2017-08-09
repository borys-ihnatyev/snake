import React from 'react'
import { connect } from 'react-redux'
import { createSnakeGameAction } from '../../rules/redux'
import { KeyboardController } from '../../keyboardController'
import './WelcomeScene.css'

const mapDispatchToProps = (dispatch) => ({
    onStartClick: () => dispatch(createSnakeGameAction()),
})

const welcomeSceneKeyboardActionMap = {
    'Enter': createSnakeGameAction()
}

export const WelcomeScene = connect(null, mapDispatchToProps)(
    ({ onStartClick }) => (
        <KeyboardController actionMap={welcomeSceneKeyboardActionMap}>
            <div className="welcome-scene"
                onClick={onStartClick}>
                <span>SNAKE</span>
            </div>
        </KeyboardController>
    ),
)
