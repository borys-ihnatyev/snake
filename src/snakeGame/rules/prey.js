import { equals, none } from 'ramda'
import { Range } from './spaceMetrics/range'

export function createPrey({ snake, fieldSize }) {
    let point

    do point = randomPoint(sizeToRange(fieldSize))

    while (none(equals, snake, point)) // TODO: handle when all points are unavailable

    return point
}


function sizeToRange(size) {
    return {
        x: Range.fromSize(size.width),
        y: Range.fromSize(size.height),
    }
}

function randomPoint(range) {
    return {
        x: Range.randomIn(range.x),
        y: Range.randomIn(range.y),
    }
}
