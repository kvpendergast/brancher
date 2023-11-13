import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

export interface Arrow {
    id: number,
    parentId: number,
    startX: number,
    endX: number,
    startY: number,
    endY: number,
    dragging: boolean
}

interface ArrowsContextType {
    arrows: Arrow[],
    setArrows: Dispatch<SetStateAction<Arrow[]>>
}

export const ArrowsContext = createContext<ArrowsContextType>({
    arrows: [],
    setArrows: () => {}
})

interface ArrowsProviderProps {
    children: ReactNode;
}

export const ArrowsProvider = ({ children }: ArrowsProviderProps) => {
    const [arrows, setArrows] = useState<Arrow[]>([])
    return (
        <ArrowsContext.Provider value={{ arrows, setArrows }}>
            { children }
        </ArrowsContext.Provider>
    )
}

export default ArrowsProvider