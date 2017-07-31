import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { settingsReducer } from './settings'
import { sceneReducer } from './scenes'
import { snakeReducer } from './characters'
import { preyReducer } from './environment'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const createSnakeGameStore = () => createStore(
    combineReducers({
        settings: settingsReducer,
        scene: sceneReducer,
        snake: snakeReducer,
        prey: preyReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
)
