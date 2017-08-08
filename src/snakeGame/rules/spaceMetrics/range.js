export const Range = {
    fromSize,
    valueWithin,
    randomIn,
}

function fromSize(size) {
    return { from: 0, to: size - 1 }
}

function valueWithin(value, { from, to }) {
    if (value < from) {
        return to
    }

    if (value > to) {
        return from
    }

    return value
}

function randomIn({ from, to }) {
    return Math.trunc((to - from) * Math.random())
}
