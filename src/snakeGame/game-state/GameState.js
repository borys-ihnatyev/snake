import * as React from 'react'
import { connect } from 'react-redux'
import { Snake } from './snake'
import { PlayField } from './playField'
import { Prey } from './prey'

export const GameState = connect(mapStateToProps)(
    ({ hasState }) => {
        if (hasState) {
            return (
                <PlayField>
                    <Snake/>
                    <Prey/>
                </PlayField>
            )
        }

        return null
    },
)

function mapStateToProps({ game }) {
    return {
        hasState: game.state !== null,
    }
}
