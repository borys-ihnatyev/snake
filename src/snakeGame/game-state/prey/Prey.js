import { connect } from 'react-redux'
import { scaleToPx, toPx } from '../../physics/scale'
import { Cake } from './cake/index'

const mapStateToProps = ({ settings: { scale }, game: { state: { prey } } }) => ({
    size: toPx(scale),
    position: scaleToPx(scale, prey),
})

export const Prey = connect(mapStateToProps)(Cake)
