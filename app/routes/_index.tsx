import React from 'react'
import { ArrowsProvider } from '../providers/ArrowsProvider'
import BranchPage from './draw'

export default function HomePage () {
    return (
        <ArrowsProvider>
            <BranchPage />
        </ArrowsProvider>
    )
}