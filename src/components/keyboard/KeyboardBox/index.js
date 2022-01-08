import React from 'react'
import './keyboard-box-styles.css'

export const KeyboardBox = (props) => {
    return (
        <div className="keyboard-box">
            {props.children}
        </div>
    )
}
