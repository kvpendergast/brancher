import React, { Dispatch, ReactNode, SetStateAction, createContext, useRef, useState } from "react"

export interface Arrow {
    id: number,
    parentId: number,
    startX: number,
    endX: number,
    startY: number,
    endY: number,
    dragging: boolean
}

interface NodeInfo {
    element: HTMLElement | null;
    parentId: string;
  }
  
interface Nodes {
    [key: string]: NodeInfo;
}

interface ArrowsContextType {
    arrows: Arrow[],
    setArrows: Dispatch<SetStateAction<Arrow[]>>
    nodes: Nodes,
}

export const ArrowsContext = createContext<ArrowsContextType>({
    arrows: [],
    setArrows: () => {},
    nodes: {},
})

interface ArrowsProviderProps {
    children: ReactNode;
}

export const ArrowsProvider = ({ children }: ArrowsProviderProps) => {
    const [arrows, setArrows] = useState<Arrow[]>([])
    const nodes = useRef<Nodes>({})

    return (
        <ArrowsContext.Provider value={{ arrows, setArrows, nodes }}>
            { children }
        </ArrowsContext.Provider>
    )
}

export default ArrowsProvider