import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import LogicElement from '../components/LogicElement';
import Toolbar from '../components/Toolbar';
import { ArrowsContext } from '../providers/ArrowsProvider';
import ConnectorLine from '../components/ConnectorLine';

const BranchPage = () => {
  const { arrows, setArrows, rectangles, setRectangles, editConfiguration } = useContext(ArrowsContext)

  type RefsType = {
    [key in number]: HTMLElement | null;
  };

  const refs = useRef<RefsType>({})

  interface DragStartType {
    id: number | null,
    x: number, 
    y: number
  }
  
  const [dragStart, setDragStart] = useState<DragStartType>({ id: null, x: 0, y: 0 });

  function createLogicStep() {
    let id = 0
    if (rectangles[rectangles.length - 1]) {
      id = rectangles[rectangles.length - 1].id + 1
    }
    setRectangles([...rectangles, {
      id,
      color: editConfiguration.color,
      x: 50,
      y: 50,
      dragging: false
    }])
  }

  const onDragStart = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    setDragStart({
      id,
      x: e.clientX,
      y: e.clientY,
    });
    setRectangles(rects =>
      rects.map(rect =>
        rect.id === id ? { ...rect, dragging: true } : rect
      ),
    );
  };

  function handleArrowsUpdate(parentId: number, diffX: number, diffY: number) {
    setArrows(arrows.map((a) => (a.parentId === parentId) ? {
      ...a, startX: a.startX + diffX, startY: a.startY + diffY
    } : a))
    setArrows(arrows.map((a) => {
      if (a.parentId === parentId) {
        return {
          ...a, 
          startX: a.startX + diffX,
          startY: a.startY + diffY
        }
      } else if (a.endParentId === parentId) {
        return {
          ...a,
          endX: a.endX + diffX,
          endY: a.endY + diffY
        }
      } else {
        return a
      }
    }))
  }

  const onDrag = (e: MouseEvent) => {
    if (dragStart.id !== null) {
      const diffX = e.clientX - dragStart.x;
      const diffY = e.clientY - dragStart.y;
      
      setRectangles(rects =>
        rects.map(rect =>
          rect.id === dragStart.id
            ? { ...rect, x: rect.x + diffX, y: rect.y + diffY }
            : rect
        ),
      );

      handleArrowsUpdate (dragStart.id, diffX, diffY)

      setDragStart({
        ...dragStart,
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const onDragEnd = () => {
    setRectangles(rects =>
      rects.map(rect =>
        rect.dragging ? { ...rect, dragging: false } : rect
      ),
    );
    setDragStart({ id: null, x: 0, y: 0 });
  };

  useEffect(() => {
    if (dragStart.id !== null) {
      document.addEventListener('mousemove', onDrag);
      document.addEventListener('mouseup', onDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', onDragEnd);
    };
  }, [dragStart, rectangles]);

  return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          border: '1px solid black',
          overflow: 'hidden', // Prevents scrollbars from appearing during drag
        }}
      >
        {rectangles.map((rectangle) => 
          <LogicElement
            id={rectangle.id}
            color={rectangle.color}
            key={rectangle.id}
            ref={(el) => {
              if (el && !refs.current[rectangle.id]) {
                refs.current[rectangle.id] = el;
                return refs.current[rectangle.id]
              }
            }}
            x={rectangle.x}
            y={rectangle.y}
            onDrag={onDragStart}
          >
            {/* You can add a button or any content here */}
          </LogicElement>
        )}
        <Toolbar createLogicStep={createLogicStep} />
        {arrows.map((a) => <ConnectorLine
          id={a.id}
          key={a.id}
          startX={a.startX}
          startY={a.startY}
          endX={a.endX}
          endY={a.endY}
        />)}
      </div>
  );
};

export default BranchPage;
