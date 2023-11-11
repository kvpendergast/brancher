import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import { ArrowsContext } from '../providers/ArrowsProvider';

export default function ConnectorLine ({ id, startX, startY, endX, endY }) {
    const [isDragging, setIsDragging] = useState(false)

    const { arrows, setArrows } = useContext(ArrowsContext)

    // Function to handle the click event
    const onMouseDown = () => {
        setIsDragging(true)
    };

    const onMouseMove = (event) => {
        if (isDragging) {
            setArrows(arrows.map((a) => a.id === id ?
            { 
                ...a, endX: event.clientX, endY: event.clientY 
            }
            : 
            a))
        }
    }

    const onMouseUp = (event) => {
        setIsDragging(false)
        setArrows(arrows.map((a) => a.id === id ?
            { 
                ...a, endX: event.clientX, endY: event.clientY 
            }
            : 
            a))
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseup', onMouseUp)
        }

    }, [isDragging])

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
            <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke="black"
                strokeWidth="2"
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
    );
}