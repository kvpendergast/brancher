import React, { ReactNode } from 'react'

interface ButtonType {
    onClick: () => void,
    children: ReactNode
}

export default function Button ({ onClick, children }: ButtonType) {
    return (
        <button onClick={onClick} className='hover:bg-black/30 p-1 rounded-md'>
            {children}
        </button>
    )
}