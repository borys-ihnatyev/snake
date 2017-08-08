import { changeSnakeDirection, createGame, GameStatus, processGame } from './game'

const CREATE_SNAKE_GAME = 'snakeGame/create'
const RENDER_NEXT_GAME_FRAME = 'snakeGame/renderNextFrame'
const CHANGE_SNAKE_DIRECTION = 'snakeGame/changeSnakeDirection'

const defaultGameState = {
    status: GameStatus.NOT_STARTED,
    state: null
}

export function snakeGameReducer({ status, state } = defaultGameState, action) {

    if (action.type === CREATE_SNAKE_GAME) {
        const { snakeLength, fieldSize } = action.payload
        return createGame({ snakeLength, fieldSize })
    }

    if (status === GameStatus.CONTINUE) {

        if (action.type === RENDER_NEXT_GAME_FRAME) {
            return processGame(state)
        }

        if (action.type === CHANGE_SNAKE_DIRECTION) {
            return changeSnakeDirection(state, action.payload.direction)
        }

    }


    return { status, state }
}


export function createSnakeGameAction() {
    return (dispatch, getState) => {
        const { settings: { snakeLength, fieldSize } } = getState()
        return dispatch({
            type: CREATE_SNAKE_GAME,
            payload: { snakeLength, fieldSize },
        })
    }
}

export function renderSnakeGameNextFrameAction() {
    return {
        type: RENDER_NEXT_GAME_FRAME,
    }
}

export function changeSnakeDirectionAction(direction) {
    return {
        type: CHANGE_SNAKE_DIRECTION,
        payload: { direction },
    }
}
