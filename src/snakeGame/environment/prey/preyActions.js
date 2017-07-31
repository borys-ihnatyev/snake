export const preyActionTypes = {
    create: `prey/create`
}

export const createPreyAction = () => (dispatch, getState) => {
    const { snake, settings: { fieldSize } } = getState()

    dispatch({
        type: preyActionTypes.create,
        snake,
        fieldSize
    })
}
