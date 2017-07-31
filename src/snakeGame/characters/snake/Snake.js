import React from 'react'
import { connect } from 'react-redux'
import { SnakePart } from './SnakePart'
import { toPx, scaleToPx } from '../../physics/scale'
import './Snake.css'

export const Snake = connect(mapStateToProps)(
    ({ size, head, tail, transitionDuration }) => (
        <div className="snake">
            <SnakePart type="head"
                size={size}
                position={head.position}
                rotation={head.rotation}
                transitionDuration={transitionDuration} />
            {tail.map((x) => (
                <SnakePart key={x.id}
                    type="tail"
                    size={size}
                    position={x.position}
                    transitionDuration={transitionDuration} />
            ))}
        </div>
    )
)

function mapStateToProps({ settings: { scale }, snake: { direction, head, tail } }) {
    return {
        size: toPx(scale),
        head: {
            rotation: toRotation(direction),
            position: scaleToPx(scale, head)
        },
        tail: tail.map((x) => ({
            id: x.id,
            position: scaleToPx(scale, x.position)
        })),
        transitionDuration: 250 // todo map from smwhr
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
