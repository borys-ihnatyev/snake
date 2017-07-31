import { CREATE, DIRECT, MOVE } from './snakeActionTypes'

export const createSnakeAction = () => (dispatch, getState) => {
    const { settings } = getState()

    dispatch({
        type: CREATE,
        fieldSize: settings.fieldSize,
        snakeLength: settings.snakeLength
    })
}

export const moveSnakeAction = () => (dispatch, getState) => {
    const { settings } = getState()

    dispatch({
        type: MOVE,
        fieldSize: settings.fieldSize,
    })
}

export const directSnakeAction = (direction) => ({
    type: DIRECT,
    direction,
})
