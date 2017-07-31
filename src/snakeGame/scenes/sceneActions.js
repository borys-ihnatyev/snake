import { createSnakeAction } from '../characters'
import { createPreyAction } from '../environment'

export const sceneActionTypes = {
    startPlayScene: 'scene/startPlayScene',
    startWelcomeScene: 'scene/startWelcomeScene',
}

export const startPlaySceneAction = () => (dispatch, getState) => {
    dispatch(createSnakeAction())
    dispatch(createPreyAction())
    dispatch({ type: sceneActionTypes.startPlayScene })
}

export const startWelcomeSceneAction = () => (dispatch) => {
    dispatch({ type: sceneActionTypes.startWelcomeScene })
}
