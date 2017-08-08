import React from 'react'
import { connect } from 'react-redux'
import { createSnakeGameAction } from '../../rules/redux'
import './WelcomeScene.css'

const mapDispatchToProps = (dispatch) => ({
    onStartClick: () => dispatch(createSnakeGameAction()),
})

export const WelcomeScene = connect(null, mapDispatchToProps)(
    ({ onStartClick }) => (
        <div className="welcome-scene"
             onClick={onStartClick}>
            <span>SNAKE</span>
        </div>
    ),
)
