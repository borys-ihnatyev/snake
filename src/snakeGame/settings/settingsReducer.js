const defaultSettingsState = {
    scale: 20,
    level: 1,
    snakeLength: 20,
    fieldSize: {
        width: 40,
        height: 20,
    },
}

export const settingsReducer = () => defaultSettingsState