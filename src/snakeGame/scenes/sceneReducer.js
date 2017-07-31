import { WelcomeScene } from './welcomeScene'
import { PlayScene } from './playScene'
import { sceneActionTypes } from './sceneActions'

export function sceneReducer(scene = WelcomeScene, action) {

    if (action.type === sceneActionTypes.startPlayScene) {
        return PlayScene
    }

    if (action.type === sceneActionTypes.startWelcomeScene) {
        return WelcomeScene
    }

    return scene
}
