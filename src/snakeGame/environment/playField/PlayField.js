import React from 'react'
import { connect } from 'react-redux'
import { scaleToPx } from '../../physics/scale'
import './PlayField.css'

export const PlayField = connect(mapStateToProps)(
    ({ children, size: { width, height } }) => (
        <div className="play-field"
            style={{ width, height }}>
            {children}
        </div>
    )
)

function mapStateToProps({ settings: { scale, fieldSize } }) {
    return {
        size: scaleToPx(scale, fieldSize)
    }
}