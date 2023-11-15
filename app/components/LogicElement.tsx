import React, { ReactNode, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { Arrow, ArrowsContext } from '../providers/ArrowsProvider';

interface LogicElementProps {
    id: number;
    x: number;
    y: number;
    onDrag: (id: number, e: React.MouseEvent<HTMLDivElement>) => void;
    children: ReactNode;
}

const LogicElement = forwardRef<HTMLDivElement, LogicElementProps>(({ id, color, x, y, onDrag, children }, ref) => {
    const [isDragging, setIsDragging] = useState(false);

    const { arrows, setArrows, nodes, moveArrow, stopArrow } = useContext(ArrowsContext)

    const handleMouseDownOnCircle = (event: React.MouseEvent<HTMLDivElement>) => {
        // Prevent the onDrag for the LogicElement from firing
        event.stopPropagation();

        setArrows([...arrows, { 
            id: arrows.length + 1,
            parentId: id,
            startX: event.clientX,
            endX: event.clientX,
            endY: event.clientY,
            startY: event.clientY,
            dragging: true
        }]);
        setIsDragging(true);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging) {
            const draggingArrow: Arrow | undefined = arrows.find((a) => a.dragging)
            if (!draggingArrow) return
            moveArrow(id, draggingArrow.id, event.clientX, event.clientY)
        }
    };

    const handleMouseUp = (event: MouseEvent) => {
        setIsDragging(false);
        const draggingArrow: Arrow | undefined = arrows.find((a) => a.dragging)
        if (!draggingArrow) return
        stopArrow(draggingArrow.id, event.clientX, event.clientY)
    };

    function handleOnDrag (e: React.MouseEvent<HTMLDivElement>) {
        onDrag(id, e)
    }

    // Listeners for the document to track mouse move and up events
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            console.log('removing in LogicElement')
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
                className={`w-[200px] h-[200px] ${color} relative`}
                onMouseDown={handleOnDrag}
            >
                {children}
                <div
                    id='right'
                    ref={(el) => {
                        if (el && !nodes.current.find((n) => n.parentId === id && n.location === 'right')) {
                            nodes.current.push({
                                parentId: id, 
                                location: 'right',
                                ref: el
                            })
                        }
                    }}
                    className='absolute w-4 h-4 rounded-full bg-black -right-2 top-1/2 transform -translate-y-1/2'
                    onMouseDown={handleMouseDownOnCircle}
                />
                <div
                    id='bottom'
                    ref={(el) => {
                        if (el && !nodes.current.find((n) => n.parentId === id && n.location === 'bottom')) {
                            nodes.current.push({
                                parentId: id, 
                                location: 'bottom',
                                ref: el
                            })
                        }
                    }}
                    className='absolute w-4 h-4 rounded-full bg-black right-1/2 -bottom-2 transform translate-x-1/2'
                    onMouseDown={handleMouseDownOnCircle}
                />
                <div
                    id='top'
                    ref={(el) => {
                        if (el && !nodes.current.find((n) => n.parentId === id && n.location === 'top')) {
                            nodes.current.push({
                                parentId: id, 
                                location: 'top',
                                ref: el
                            })
                        }
                    }}
                    className='absolute w-4 h-4 rounded-full bg-black right-1/2 -top-2 transform translate-x-1/2'
                    onMouseDown={handleMouseDownOnCircle}
                />
                <div
                    id='left'
                    ref={(el) => {
                        if (el && !nodes.current.find((n) => n.parentId === id && n.location === 'left')) {
                            nodes.current.push({
                                parentId: id, 
                                location: 'left',
                                ref: el
                            })
                        }
                    }}
                    className='absolute w-4 h-4 rounded-full bg-black top-1/2 -left-2 transform -translate-y-1/2'
                    onMouseDown={handleMouseDownOnCircle}
                />
            </div>
        </div>
    );
});

export default LogicElement;
