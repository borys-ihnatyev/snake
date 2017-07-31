import React from 'react'
import { connect } from 'react-redux'
import './SceneRenderer.css'

const mapStateToProps = ({ scene }) => ({ Scene: scene })

export const SceneRenderer = connect(mapStateToProps)(
    ({ Scene }) => (
        <div className="scene">
            <Scene />
        </div>
    )
)
