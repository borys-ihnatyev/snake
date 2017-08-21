import React from 'react'
import { connect } from 'react-redux'

export const KeyboardController = connect()(
    class extends React.Component {
        render() {
            return this.props.children
        }

        componentDidMount() {
            document.addEventListener('keydown', this.onDocumentKeyDown, true)
        }

        componentWillUnmount() {
            document.removeEventListener('keydown', this.onDocumentKeyDown, true)
        }

        onDocumentKeyDown = (event) => {
            const action = this.resolveActionByKeyCode(event.code)
            action && this.props.dispatch(action)
        }

        resolveActionByKeyCode(keyCode) {
            return this.props.actionMap[keyCode]
        }

    }
)
