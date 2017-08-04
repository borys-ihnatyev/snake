import React from 'react'
import { connect } from 'react-redux'
import { moveSnakeAction } from '../../characters'

export const SnakeMovement = connect()(
    class extends React.Component {
        componentDidMount() {
            this.timer = setInterval(() => {
                this.props.dispatch(moveSnakeAction())
            }, 250)
        }

        componentWillUnmount() {
            clearInterval(this.timer)
        }

        render() {
            return this.props.children
        }
    }
)
