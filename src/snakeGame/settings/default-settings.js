const scale = 20

export const defaultSettings = {
    scale,
    level: 1,
    snakeLength: 10,
    fieldSize: {
        width: calcMaxSize(window.screen.availWidth, scale),
        height: calcMaxSize(window.screen.availHeight, scale),
    },
    transitionDuration: 50
}

function calcMaxSize(size, scale) {
    return Math.trunc(size / scale)
}
