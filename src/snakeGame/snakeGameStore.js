import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { snakeGameReducer } from './rules/redux'
import { settingsReducer } from './settings'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const createSnakeGameStore = () => createStore(
    combineReducers({
        settings: settingsReducer,
        game: snakeGameReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
)
