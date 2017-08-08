import * as c from 'classnames'
import React from 'react'
import './SnakePart.css'

export class SnakePart extends React.Component {
    render() {
        const {
            type,
            size,
            position: { x, y },
            transitionDuration,
            rotation = '0',
            hasPrey = false,
        } = this.props

        const style = {
            width: size,
            height: size,
            transform: `translate(${x}, ${y}) rotateZ(${rotation})`,
            transition: `transform ${transitionDuration}ms`,
        }

        return (
            <div className={c(
                'snake-part',
                `snake-part_${type}`,
                { 'snake-part_with-prey': hasPrey, })
            }
                 style={style}/>)
    }
}
