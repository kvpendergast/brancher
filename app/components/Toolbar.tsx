import React, { useContext } from 'react'
import Button from './Button'
import { ArrowsContext } from '../providers/ArrowsProvider'

interface ToolbarType {
    createLogicStep: () => void,
    createActionStep: () => void
}

const colors = [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-500',
]

export default function Toolbar ({ createLogicStep, createActionStep }: ToolbarType) {
    const { editConfiguration, setEditConfiguration } = useContext(ArrowsContext)

    const handleColorChange = (c: string) => () => {
        setEditConfiguration({ ...editConfiguration, color: c })
    }

    return (
        <div className='flex items-center space-x-4 rounded-full fixed bottom-16 left-1/2 w-max border border-black py-2 px-4 transform -translate-x-1/2'>
            {colors.map((c) => <button key={c} onClick={handleColorChange(c)} className={'w-6 h-6 rounded-full hover:border-2 hover:border-black' + ' ' + c + (editConfiguration.color === c ? ' border-2 border-black' : '')} />)}
            <Button onClick={createLogicStep}>Logic Step</Button>
            <Button onClick={createActionStep}>Action</Button>
        </div>
    )
}