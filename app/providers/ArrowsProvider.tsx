import React, { type Dispatch, type MutableRefObject, type ReactNode, type SetStateAction, createContext, useRef, useState } from 'react'

export interface Arrow {
  id: number
  parentId: number
  endParentId?: number | null
  startX: number
  endX: number
  startY: number
  endY: number
  dragging: boolean
}

export interface Rectangle {
  id: number
  x: number
  y: number
  color: string
  dragging: boolean
}

interface Node {
  ref: HTMLElement | null
  parentId: number
  location: 'left' | 'right' | 'top' | 'bottom'
}

interface EditConfiguration {
  color: string
  focusedElementId?: number | null | undefined
}

interface ArrowsContextType {
  arrows: Arrow[]
  setArrows: Dispatch<SetStateAction<Arrow[]>>
  nodes: MutableRefObject<Node[]>
  moveArrow: (parentId: number, arrowId: number, x: number, y: number) => void
  stopArrow: (arrowId: number) => void
  editConfiguration: EditConfiguration
  setEditConfiguration: Dispatch<SetStateAction<EditConfiguration>>
  rectangles: Rectangle[]
  setRectangles: Dispatch<SetStateAction<Rectangle[]>>
  deleteElement: (elementId: number | null) => void
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
  setRectangles: () => {},
  deleteElement: () => {}
})

interface ArrowsProviderProps {
  children: ReactNode
}

export const ArrowsProvider = ({ children }: ArrowsProviderProps): JSX.Element => {
  const [arrows, setArrows] = useState<Arrow[]>([])
  const [rectangles, setRectangles] = useState([
    { id: 1, x: 50, y: 50, color: 'bg-red-500', dragging: false }
  ])
  const [editConfiguration, setEditConfiguration] = useState({
    color: 'bg-red-500'
  })
  const nodes = useRef<Node[]>([])

  function moveArrow (parentId: number, arrowId: number, x: number, y: number): void {
    nodes.current.filter(n => n.parentId !== parentId).some(({ parentId, ref }) => {
      if (!ref) return null
      const startBoundX = ref?.getBoundingClientRect().x
      const endBoundX = ref?.getBoundingClientRect().x + ref?.getBoundingClientRect().width
      const startBoundY = ref?.getBoundingClientRect().y
      const endBoundY = ref?.getBoundingClientRect().y + ref?.getBoundingClientRect().height

      if (x > startBoundX && x < endBoundX && y < endBoundY && y > startBoundY) {
        setArrows(arrows.map((a) => a.id === arrowId
          ? {
              ...a,
              endX: endBoundX - ref?.getBoundingClientRect().width / 2,
              endY: endBoundY - ref?.getBoundingClientRect().height,
              endParentId: parentId
            }
          : a))
        return true
      } else {
        setArrows(arrows.map((a) => a.id === arrowId
          ? {
              ...a,
              endX: x,
              endY: y,
              endParentId: null
            }
          : a))
      }

      return false
    })
  }

  function stopArrow (arrowId: number): void {
    setArrows((prevState) => prevState.map((a) => a.id === arrowId
      ? {
          ...a,
          endX: a.endX,
          endY: a.endY,
          dragging: false
        }
      : a))
  }

  function deleteElement (elementId: number | null): void {
    if (!elementId) return
    setRectangles([...rectangles.filter((r) => r.id !== elementId)])
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
          setRectangles,
          deleteElement
        }}>
            { children }
        </ArrowsContext.Provider>
  )
}

export default ArrowsProvider
