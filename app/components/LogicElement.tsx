import React, { useEffect, useState } from 'react';
import ConnectorLine from './ConnectorLine';

const LogicElement = React.forwardRef(({ x, y, onDrag, children }, ref) => {
    const [showConnectors, setShowConnectors] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [arrowStart, setArrowStart] = useState(null);
    const [arrowEnd, setArrowEnd] = useState(null);

    console.log('arrow start ', arrowStart)
    console.log('arrow end ', arrowEnd)
    console.log('is dragging ', isDragging)

    function handleOnMouseEnter() {
        setShowConnectors(true);
    }

    function handleOnMouseLeave() {
        setShowConnectors(false);
    }

    const handleMouseDownOnCircle = (event) => {
        // Prevent the onDrag for the LogicElement from firing
        event.stopPropagation();
        setArrowStart({ x: event.clientX, y: event.clientY });
        setIsDragging(true);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            setArrowEnd({ x: event.clientX, y: event.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Here you can finalize the arrow's position or clear it if needed
        // For example, if you want to remove the arrow after the drag:
        // setArrowStart(null);
        // setArrowEnd(null);
    };

    // Listeners for the document to track mouse move and up events
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            style={{
                top: `${y}px`,
                left: `${x}px`,
                cursor: 'grab',
            }}
            className='absolute'
        >
            <div
                ref={ref}
                className='w-[200px] h-[200px] bg-red-400 relative'
                onMouseEnter={handleOnMouseEnter}
                // onMouseLeave={handleOnMouseLeave}
                onMouseDown={onDrag}
                >
                {children}
                {showConnectors && (
                    <div
                        className='absolute w-8 h-8 rounded-full bg-black -right-10 top-1/2 transform -translate-y-1/2'
                        onMouseDown={handleMouseDownOnCircle}
                    />
                )}
                {isDragging && arrowStart && arrowEnd && (
                    <ConnectorLine
                        startX={arrowStart.x}
                        startY={arrowStart.y}
                        endX={arrowEnd.x}
                        endY={arrowEnd.y}
                        parentX={x}
                        parentY={y}
                    />
                )}
            </div>
        </div>
    );
});

export default LogicElement;
