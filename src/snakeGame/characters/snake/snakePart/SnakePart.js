import React from 'react'
import './SnakePart.css'

export class SnakePart extends React.Component {
    render() {
        const { type, size, position: { x, y }, transitionDuration, rotation = '0' } = this.props

        const style = {
            width: size,
            height: size,
            transform: `translate(${x}, ${y}) rotateZ(${rotation})`,
            transition: `transform ${transitionDuration}ms`,
        }

        return (<div className={`snake-part snake-part_${type}`} style={style} />)
    }
}