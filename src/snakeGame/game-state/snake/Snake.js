import React from 'react'
import { connect } from 'react-redux'
import { scaleToPx, toPx } from '../../physics/scale'
import './Snake.css'
import { SnakePart } from './snakePart'

export const Snake = connect(mapStateToProps)(
    ({ size, head, tail, transitionDuration }) => (
        <div className="snake">
            <SnakePart type="head"
                       size={size}
                       transitionDuration={transitionDuration}
                       {...head}
            />
            {tail.map((x) => (
                <SnakePart type="tail"
                           size={size}
                           transitionDuration={transitionDuration}
                           {...x}
                />
            ))}
        </div>
    ),
)

function mapStateToProps({
                             settings: { scale, transitionDuration },
                             game: { state: { snake: [ head, ...tail ], snakeDirection } },
                         }) {
    return {
        size: toPx(scale),
        head: {
            rotation: toRotation(snakeDirection),
            hasPrey: head.hasPrey,
            position: scaleToPx(scale, head.position),
        },
        tail: tail.map(({ hasPrey, position }) => ({
            key: `${position.x}:${position.y}`,
            hasPrey,
            position: scaleToPx(scale, position),
        })),
        transitionDuration,
    }
}

function toRotation(direction) {

    if (direction.x === -1) {
        return -90 + 'deg'
    }

    if (direction.x === 1) {
        return 90 + 'deg'
    }

    if (direction.y === 1) {
        return 180 + 'deg'
    }

    return 0 + 'deg'
}
