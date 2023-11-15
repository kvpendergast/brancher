import React, { Dispatch, MutableRefObject, ReactNode, SetStateAction, createContext, useRef, useState } from "react"

export interface Arrow {
    id: number,
    parentId: number,
    endParentId?: number | null,
    startX: number,
    endX: number,
    startY: number,
    endY: number,
    dragging: boolean
}

export interface Rectangle {
    id: number,
    x: number,
    y: number,
    color: string,
    dragging: boolean
}

interface Node {
    ref: HTMLElement | null;
    parentId: number;
    location: 'left' | 'right' | 'top' | 'bottom'
}

interface EditConfiguration {
    color: string
}

interface ArrowsContextType {
    arrows: Arrow[],
    setArrows: Dispatch<SetStateAction<Arrow[]>>
    nodes: MutableRefObject<Node[]>,
    moveArrow: (parentId: number, arrowId: number, x: number, y: number) => void,
    stopArrow: (arrowId: number) => void,
    editConfiguration: EditConfiguration,
    setEditConfiguration: Dispatch<SetStateAction<EditConfiguration>>
    rectangles: Rectangle[],
    setRectangles: Dispatch<SetStateAction<Rectangle[]>>
}

export const ArrowsContext = createContext<ArrowsContextType>({
    arrows: [],
    setArrows: () => {},
    nodes: { current: [] },
    moveArrow: () => {},
    stopArrow: () => {},
    editConfiguration: { color: 'bg-red-500' },
    setEditConfiguration: () => {},
    rectangles: [{ id: 1, x: 50, y: 50, color: 'bg-red-500', dragging: false }],
    setRectangles: () => {}
})

interface ArrowsProviderProps {
    children: ReactNode;
}

export const ArrowsProvider = ({ children }: ArrowsProviderProps) => {
    const [arrows, setArrows] = useState<Arrow[]>([])
    const [rectangles, setRectangles] = useState([
        { id: 1, x: 50, y: 50, color: 'bg-red-500', dragging: false },
      ]);
    const [editConfiguration, setEditConfiguration] = useState({
        color: 'bg-red-500'
    })
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
                    endParentId: parentId 
                } : a))
                return true
            } else {
                setArrows(arrows.map((a) => a.id === arrowId ? {
                    ...a,
                    endX: x,
                    endY: y,
                    endParentId: null
                } : a))
            }

            return false
        })
    }

    function stopArrow (arrowId: number) {
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
            stopArrow,
            editConfiguration,
            setEditConfiguration,
            rectangles,
            setRectangles
        }}>
            { children }
        </ArrowsContext.Provider>
    )
}

export default ArrowsProvider