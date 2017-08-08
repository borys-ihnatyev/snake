import React from 'react'
import { connect } from 'react-redux'
import { createSnakeGameAction } from '../../rules/redux'
import './LooseScene.css'

const mapDispatchToProps = (dispatch) => ({
    onRestartClick: () => dispatch(createSnakeGameAction()),
})

export const LooseScene = connect(null, mapDispatchToProps)(
    ({ onRestartClick }) => (
        <div className="loose-scene">
            <div className="loose-scene__loose">
                You loose 😞
            </div>
            <div className="loose-scene__restart" onClick={onRestartClick}>
                Restart 🐍
            </div>
        </div>
    ),
)
