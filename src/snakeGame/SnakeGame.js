import React from 'react'
import { Provider } from 'react-redux'
import { createSnakeGameStore } from './snakeGameStore'
import { SceneRenderer } from './scenes'

export class SnakeGame extends React.Component {
    store = createSnakeGameStore()
    render() {
        return (
            <Provider store={this.store}>
                <SceneRenderer />
            </Provider>
        )
    }
}
