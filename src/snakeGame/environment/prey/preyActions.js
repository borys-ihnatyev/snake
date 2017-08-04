import {CREATE_PREY} from './preyActionTypes'

export const createPreyAction = () => (dispatch, getState) => {
    const {snake, settings: {fieldSize}} = getState()

    dispatch({
        type: CREATE_PREY,
        snake,
        fieldSize,
    })
}
