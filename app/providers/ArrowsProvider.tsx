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
    moveArrow: (parentId: number, arrowId: number, x: number, y: number) => void
}

export const ArrowsContext = createContext<ArrowsContextType>({
    arrows: [],
    setArrows: () => {},
    nodes: { current: [] },
    moveArrow: () => {}
})

interface ArrowsProviderProps {
    children: ReactNode;
}

export const ArrowsProvider = ({ children }: ArrowsProviderProps) => {
    const [arrows, setArrows] = useState<Arrow[]>([])
    const nodes = useRef<Node[]>([])

    function moveArrow (parentId: number, arrowId: number, x: number, y: number) {
        nodes.current.filter(n => n.parentId !== parentId).some(({ parentId, ref }) => {
            if (!ref) return
            const startBoundX = ref?.getBoundingClientRect().x
            const endBoundX = ref?.getBoundingClientRect().x + ref?.getBoundingClientRect().width
            const startBoundY = ref?.getBoundingClientRect().y
            const endBoundY = ref?.getBoundingClientRect().y + ref?.getBoundingClientRect().height

            if (x > startBoundX && x < endBoundX && y < endBoundY && y > startBoundY) {
                setArrows(arrows.map((a) => a.id === arrowId ? {
                    ...a,
                    endX: endBoundX - ref?.getBoundingClientRect().width / 2,
                    endY: endBoundY - ref?.getBoundingClientRect().height,
                    endParent: parentId 
                } : a))
                return true
            } else {
                setArrows(arrows.map((a) => a.id === arrowId ? {
                    ...a,
                    endX: x,
                    endY: y,
                    endParent: null
                } : a))
            }

            return false
        })
    }

    function stopArrow (arrowId: number, x: number, y: number) {
        setArrows((prevState) => prevState.map((a) => a.id === arrowId ? {
            ...a,
            endX: a.endX,
            endY: a.endY,
            dragging: false,
        } : a))
    }

    return (
        <ArrowsContext.Provider value={{
            arrows,
            setArrows,
            nodes,
            moveArrow,
            stopArrow
        }}>
            { children }
        </ArrowsContext.Provider>
    )
}

export default ArrowsProvider