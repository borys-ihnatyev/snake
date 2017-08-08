import React from 'react'
import { connect } from 'react-redux'
import { createSnakeGameAction } from '../../rules/redux'
import { Overlay } from '../../../ui'
import './LooseScene.css'

const mapDispatchToProps = (dispatch) => ({
    onRestartClick: () => dispatch(createSnakeGameAction()),
})

export const LooseScene = connect(null, mapDispatchToProps)(
    ({ onRestartClick }) => (
        <Overlay>
            <div className="loose-scene">
                <div className="loose-scene__loose">
                    You loose <span role="img" aria-label="sad">😞</span>
                </div>
                <div className="loose-scene__restart" onClick={onRestartClick}>
                    Restart <span role="img" aria-label="snake">🐍</span>
                </div>
            </div>
        </Overlay>
    ),
)
