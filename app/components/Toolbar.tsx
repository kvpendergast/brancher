import React from 'react'
import Button from './Button'

export default function Toolbar ({ createLogicStep, createActionStep }) {
    return (
        <div className='space-x-4 rounded-full fixed bottom-16 left-1/2 w-max border border-black py-2 px-4 transform -translate-x-1/2'>
            <Button onClick={createLogicStep}>Logic Step</Button>
            <Button onClick={createActionStep}>Action</Button>
        </div>
    )
}