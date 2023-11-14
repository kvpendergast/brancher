import React, { Dispatch, MutableRefObject, ReactNode, SetStateAction, createContext, useRef, useState } from "react"

export interface Arrow {
    id: number,
    parentId: number,
    startX: number,
    endX: number,
    startY: number,
    endY: number,
    dragging: boolean
}

interface Node {
    ref: HTMLElement | null;
    parentId: number;
    location: 'left' | 'right' | 'top' | 'bottom'
}

interface ArrowsContextType {
    arrows: Arrow[],
    setArrows: Dispatch<SetStateAction<Arrow[]>>
    nodes: MutableRefObject<Node[]>,
    checkOverlap: (parentId: number, x: number, y: number) => void
}

export const ArrowsContext = createContext<ArrowsContextType>({
    arrows: [],
    setArrows: () => {},
    nodes: { current: [] },
    checkOverlap: () => {}
})

interface ArrowsProviderProps {
    children: ReactNode;
}

export const ArrowsProvider = ({ children }: ArrowsProviderProps) => {
    const [arrows, setArrows] = useState<Arrow[]>([])
    const nodes = useRef<Node[]>([])

    function checkOverlap (parentId: number, arrowId: number, x: number, y: number) {
        nodes.current.filter(n => n.parentId !== parentId).map(({ ref }) => {
            if (!ref) return
            const startX = ref?.getBoundingClientRect().x
            const endX = ref?.getBoundingClientRect().x + ref?.getBoundingClientRect().width
            const startY = ref?.getBoundingClientRect().y
            const endY = ref?.getBoundingClientRect().y + ref?.getBoundingClientRect().height

            if (x > startX && x < endX && y < endY && y > startY) {
                setArrows(arrows.map((a) => a.id === arrowId ? {
                    ...a,
                    endX,
                    endY
                } : a))
            } else {
                setArrows(arrows.map((a) => a.id === arrowId ? {
                    ...a,
                    endX: x,
                    endY: y
                } : a))
            }
        })
    }

    console.log("arrows ", arrows[0])

    return (
        <ArrowsContext.Provider value={{ arrows, setArrows, nodes, checkOverlap }}>
            { children }
        </ArrowsContext.Provider>
    )
}

export default ArrowsProvider