import React from 'react'
import { connect } from 'react-redux'
import { SnakePart } from './snakePart'
import { toPx, scaleToPx } from '../../physics/scale'
import './Snake.css'

export const Snake = connect(mapStateToProps)(
    ({ size, head, tail, transitionDuration }) => (
        <div className="snake">
            <SnakePart type="head"
                       size={size}
                       position={head.position}
                       rotation={head.rotation}
                       transitionDuration={transitionDuration}/>
            {tail.map((x) => (
                <SnakePart key={x.id}
                           type="tail"
                           size={size}
                           position={x.position}
                           transitionDuration={transitionDuration}/>
            ))}
        </div>
    ),
)

function mapStateToProps({
                             settings: { scale, transitionDuration },
                             snake: [ head, ...tail ],
                             snakeMoveDirection,
                         }) {
    return {
        size: toPx(scale),
        head: {
            rotation: toRotation(snakeMoveDirection),
            position: scaleToPx(scale, head),
        },
        tail: tail.map((position) => ({
            id: `${position.x}:${position.y}`,
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
