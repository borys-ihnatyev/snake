import React from 'react'
import { connect } from 'react-redux'
import { GameStatus } from '../../rules/game'
import { createSnakeGameAction, renderSnakeGameNextFrameAction } from '../../rules/redux'

export const SnakeMovement = connect(mapStateToProps)(
    class extends React.Component {
        componentDidMount() {
            const { interval, dispatch } = this.props
            dispatch(createSnakeGameAction())
            this.timer = setInterval(() => dispatch(renderSnakeGameNextFrameAction()), interval)
        }

        componentWillUnmount() {
            clearInterval(this.timer)
        }

        render() {
            if (this.props.isReady) {
                return this.props.children
            }

            return null
        }
    },
)

function mapStateToProps({ settings, game }) {
    return {
        isReady: game.status === GameStatus.CONTINUE,
        interval: settings.transitionDuration,
    }
}
