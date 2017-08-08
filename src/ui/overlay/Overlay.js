import * as React from 'react'
import './Overlay.css'

export const Overlay = ({ children }) => (
    <div className="overlay">
        <div className="overlay__content">
            {children}
        </div>
    </div>
)
