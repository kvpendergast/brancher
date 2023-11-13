import React, { ReactNode, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { Arrow, ArrowsContext } from '../providers/ArrowsProvider';

interface LogicElementProps {
    id: number;
    x: number;
    y: number;
    onDrag: (id: number, e: React.MouseEvent<HTMLDivElement>) => void;
    children: ReactNode;
}

enum NodeRefKeys {
    Left = 'left',
    Right = 'right',
    Bottom = 'bottom',
    Top = 'top'
}
  
// Define the type for the refs object
type NodeRefs = {
    [key in NodeRefKeys]?: HTMLElement | null;
};

const LogicElement = forwardRef<HTMLDivElement, LogicElementProps>(({ id, x, y, onDrag, children }, ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const nodeRefs = useRef<NodeRefs>({})

    const { arrows, setArrows } = useContext(ArrowsContext)

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
            setArrows([...arrows.filter((a) => !a.dragging), {
                ...draggingArrow,
                endX: event.clientX,
                endY: event.clientY
            }]);
        }
    };

    const handleMouseUp = (event: MouseEvent) => {
        setIsDragging(false);
        const draggingArrow: Arrow | undefined = arrows.find((a) => a.dragging)
        if (!draggingArrow) return
        setArrows([...arrows.filter((a) => !a.dragging), {
            ...draggingArrow,
            endX: event.clientX,
            endY: event.clientY,
            dragging: false
        }])
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
                onMouseDown={handleOnDrag}
            >
                {children}
                <div
                    id='right'
                    ref={(el) => {
                        if (el && !nodeRefs.current['right']) {
                            nodeRefs.current['right'] = el;
                        }
                    }}
                    className='absolute w-2 h-2 rounded-full bg-black -right-1 top-1/2 transform -translate-y-1/2 hover:w-4 hover:h-4 hover:-right-2'
                    onMouseDown={handleMouseDownOnCircle}
                />
                <div
                    id='bottom'
                    ref={(el) => {
                        if (el && !nodeRefs.current['bottom']) {
                            nodeRefs.current['bottom'] = el;
                        }
                    }}
                    className='absolute w-2 h-2 rounded-full bg-black right-1/2 -bottom-1 transform translate-x-1/2 hover:w-4 hover:h-4 hover:-bottom-2'
                    onMouseDown={handleMouseDownOnCircle}
                />
                <div
                    id='top'
                    ref={(el) => {
                        if (el && !nodeRefs.current['top']) {
                            nodeRefs.current['top'] = el;
                        }
                    }}
                    className='absolute w-2 h-2 rounded-full bg-black right-1/2 -top-1 transform translate-x-1/2 hover:w-4 hover:h-4 hover:-top-2'
                    onMouseDown={handleMouseDownOnCircle}
                />
                <div
                    id='left'
                    ref={(el) => {
                        if (el && !nodeRefs.current['left']) {
                            nodeRefs.current['left'] = el;
                        }
                    }}
                    className='absolute w-2 h-2 rounded-full bg-black top-1/2 -left-1 transform -translate-y-1/2 hover:w-4 hover:h-4 hover:-left-2'
                    onMouseDown={handleMouseDownOnCircle}
                />
            </div>
        </div>
    );
});

export default LogicElement;
