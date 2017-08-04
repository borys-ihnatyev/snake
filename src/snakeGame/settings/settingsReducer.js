const defaultSettingsState = {
    scale: 20,
    level: 1,
    snakeLength: 20,
    fieldSize: {
        width: 40,
        height: 20,
    },
    transitionDuration: 250 // todo should be dynamic
}

export const settingsReducer = () => defaultSettingsState
