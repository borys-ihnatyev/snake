import React from 'react'
import { connect } from 'react-redux'
import { createSnakeGameAction, renderSnakeGameNextFrameAction } from '../../rules/redux'

export const SnakeMovement = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
        componentDidMount() {
            const { interval, onInit, onNextFrame } = this.props

            onInit()
            this.timer = setInterval(onNextFrame, interval)
        }

        componentWillUnmount() {
            clearInterval(this.timer)
        }

        render() {
            return null
        }
    },
)

function mapStateToProps({ settings }) {
    return {
        interval: settings.transitionDuration,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInit: () => dispatch(createSnakeGameAction()),
        onNextFrame: () => dispatch(renderSnakeGameNextFrameAction()),
    }
}
