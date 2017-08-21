import React from 'react'
import { connect } from 'react-redux'
import { createSnakeGameAction } from '../../rules/redux'
import { KeyboardController } from '../../keyboard-controller'
import { Overlay } from '../../../ui'
import './LooseScene.css'

const mapDispatchToProps = (dispatch) => ({
    onRestartClick: () => dispatch(createSnakeGameAction()),
})

const looseSceneKeyboardActionMap = {
    'Enter': createSnakeGameAction()
}

export const LooseScene = connect(null, mapDispatchToProps)(
    ({ onRestartClick }) => (
        <KeyboardController actionMap={looseSceneKeyboardActionMap}>
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
        </KeyboardController>
    ),
)
