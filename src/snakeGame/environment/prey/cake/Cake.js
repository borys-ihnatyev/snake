import React from 'react'
import './Cake.css'

export function Cake({ size, position: { x, y } }) {
    const style = {
        width: size,
        height: size,
        transform: `translate(${x}, ${y})`
    }
    return (<div className="cake" style={style} />)
}
