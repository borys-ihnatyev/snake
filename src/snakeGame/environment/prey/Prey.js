import { connect } from 'react-redux'
import { Cake } from './cake'
import { toPx, scaleToPx } from '../../physics/scale'

const mapStateToProps = ({ settings: { scale }, prey: { position } }) => ({
    size: toPx(scale),
    position: scaleToPx(scale, position)
})

export const Prey = connect(mapStateToProps)(Cake)