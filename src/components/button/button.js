import React, { useState } from 'react'
import colors from '../../styles/colors';


function Button({ text, onClick, type, disabled, styles }) {    
    const [hoverState, setHoverState] = useState(false)    
    return (
        <button
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
            type={type || 'button'}
            disabled={disabled || false}
            onClick={onClick}
            style={Object.assign(
                { ...style.button },
                { ...styles },
                (hoverState) && { ...style.hover }
            )}
        >
            {text}
        </button>
    )
}

const style = {

    cell: (widthQuota) => {
        return {}},

    button: {
        background: 'transparent',
        color: colors.fg_blue,
        border: 'none',
        padding: '8px 16px',
        outline: 'none',
        textTransform: 'uppercase',
        transition: 'background 250ms ease-out',
        minWidth: '100px',
        fontSize: '1em',
        fontWeight: '500'
    },
    hover: {
        cursor: 'pointer',
        background: colors.bg_button_hover,
        // boxShadow: '0px 2px 4px 0px rgba(122,122,122,0.6)'
    }
}


export default Button
