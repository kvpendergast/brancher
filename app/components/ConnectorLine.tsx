import React, { useContext, useEffect, useState } from 'react'
import { ArrowsContext } from '../providers/ArrowsProvider'

interface ConnectorLineType {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
}

export default function ConnectorLine ({ id, startX, startY, endX, endY }: ConnectorLineType): JSX.Element {
  const [isDragging, setIsDragging] = useState(false)

  const { arrows, moveArrow, stopArrow } = useContext(ArrowsContext)

  // Function to handle the click event
  const onMouseDown = (): void => {
    setIsDragging(true)
  }

  const onMouseMove = (event: MouseEvent): void => {
    if (isDragging) {
      const draggingArrow = arrows.find((a) => a.id === id)
      if (!draggingArrow) return
      moveArrow(draggingArrow?.parentId, draggingArrow.id, event.clientX, event.clientY)
    }
  }

  const onMouseUp = (event: MouseEvent): void => {
    setIsDragging(false)
    const draggingArrow = arrows.find((a) => a.id === id)
    if (!draggingArrow) return
    stopArrow(draggingArrow.id)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [isDragging])

  const isEndBelowStart = endY > startY
  const isEndXBeforeStartX = endX < startX

  // Define the path 'd' attribute
  let d = `M${startX} ${startY} L${endX - 5} ${startY}` // Move to start point

  if (isEndXBeforeStartX) {
    d = `M${startX} ${startY} L${endX + 5} ${startY}`
  }

  if (isEndBelowStart) {
    d += `S${endX} ${startY} ${endX} ${startY + 5} L${endX} ${endY}`
  } else {
    d += `S${endX} ${startY} ${endX} ${startY - 5} L${endX} ${endY}`
  }

  return (
        <svg className='absolute top-0 left-0 w-full h-full' style={{ pointerEvents: 'none' }}>
            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="0"
                    refY="3.5"
                    orient="auto"
                    markerUnits="strokeWidth"
                >
                    <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
            </defs>
            <path
                d={d}
                stroke="black"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
            />
            {/* Transparent circle to capture click events */}
            <circle
                cx={endX + 5}
                cy={endY + 5}
                r={15}
                fill="transparent"
                onMouseDown={onMouseDown}
                style={{ cursor: 'pointer', pointerEvents: 'all' }} // Changes the cursor to indicate it's clickable
            />
        </svg>
  )
}
