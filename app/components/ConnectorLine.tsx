import React from 'react'

export default function ConnectorLine ({ startX, startY, endX, endY, parentX, parentY }) {
    return (
        <svg
            className='absolute top-0 left-0 w-full h-full'
            style={{ pointerEvents: 'none' }}
        >
            <line
                x1={startX - parentX}
                y1={startY - parentY}
                x2={endX - parentX}
                y2={endY - parentY}
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
            />
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
        </svg>
    )
}