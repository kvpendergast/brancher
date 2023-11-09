import React from 'react'

export default function Button ({ onClick, children }) {
    return (
        <button onClick={onClick} className='hover:font-bold'>
            {children}
        </button>
    )
}