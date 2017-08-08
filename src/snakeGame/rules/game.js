import { createPrey } from './prey'
import { createSnake, isSnakeGrewToFieldSize, isSnakeSelfBitten, moveSnake } from './snake'
import { UP } from './spaceMetrics/direction'

export const GameStatus = {
    NOT_STARTED: 'not_started',
    LOOSE: 'loose',
    WIN: 'win',
    CONTINUE: 'continue',
}

export function createGame({ snakeLength, fieldSize }) {
    const snake = createSnake({
        size: snakeLength,
        position: {
            x: Math.round(fieldSize.width / 2),
            y: Math.round((fieldSize.height - snakeLength) / 2),
        },
    })

    const prey = createPrey({ snake, fieldSize })

    return {
        status: GameStatus.CONTINUE,
        state: {
            snake,
            prey,
            snakeDirection: UP,
            fieldSize,
            score: 0,
        },
    }
}

export function processGame(state) {
    const { snake, prey, score, snakeDirection, fieldSize } = state

    const newSnake = moveSnake(snake, { snakeDirection, prey, fieldSize })

    let newScore = score
    let newPrey = prey

    if (isSnakeSelfBitten(snake)) {
        return {
            status: GameStatus.LOOSE,
            state: {
                ...state,
                snake: newSnake,
                prey: newPrey,
                score: newScore,
            },
        }
    }

    if (isSnakeGrewToFieldSize(snake, { fieldSize })) {
        return {
            status: GameStatus.WIN,
            state: {
                ...state,
                snake: newSnake,
                prey: newPrey,
                score: newScore,
            },
        }
    }

    if (newSnake[ 0 ].hasPrey) {
        newPrey = createPrey({ snake, fieldSize })
        newScore = newScore + 1
    }

    return {
        status: GameStatus.CONTINUE,
        state: {
            ...state,
            snake: newSnake,
            prey: newPrey,
            score: newScore,
        },
    }
}

export function changeSnakeDirection(state, newDirection) {
    if (canChangeDirectionTo(state.snakeDirection, newDirection)) {
        return {
            status: GameStatus.CONTINUE,
            state: {
                ...state,
                snakeDirection: newDirection,
            },
        }
    }

    return {
        status: GameStatus.CONTINUE,
        state,
    }
}


function canChangeDirectionTo(from, to) {
    return from.x !== -to.x && from.y !== to.y
}
