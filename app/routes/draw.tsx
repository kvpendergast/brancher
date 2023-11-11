import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import LogicElement from '../components/LogicElement';
import Toolbar from '../components/Toolbar';
import { ArrowsContext } from '../providers/ArrowsProvider';
import ConnectorLine from '../components/ConnectorLine';

const BranchPage = () => {
  const [rectangles, setRectangles] = useState([
    { id: 1, x: 50, y: 50 },
  ]);

  const { arrows, setArrows } = useContext(ArrowsContext)

  const refs = useRef({})
  
  const [dragStart, setDragStart] = useState({ id: null, x: 0, y: 0 });

  function createLogicStep() {
    setRectangles([...rectangles, {
      id: rectangles.length + 1,
      x: 50,
      y: 50
    }])
  }

  function createActionStep() {
    console.log('creating...')
  }

  const onDragStart = (id, e) => {
    const rect = rectangles.find(r => r.id === id);
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

  function handleArrowsUpdate(parentId, diffX, diffY) {
    setArrows(arrows.map((a) => a.parentId === parentId ? {
      ...a, startX: a.startX + diffX, startY: a.startY + diffY
    } : a))
  }

  const onDrag = (e) => {
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
            key={rectangle.id}
            ref={(el) => {
              if (el && !refs.current[rectangle.id]) {
                refs.current[rectangle.id] = el;
              }
            }}
            x={rectangle.x}
            y={rectangle.y}
            onDrag={(e) => onDragStart(rectangle.id, e)}
          >
            {/* You can add a button or any content here */}
          </LogicElement>
        )}
        <Toolbar createLogicStep={createLogicStep} createActionStep={createActionStep} />
        {arrows.map((a) => <ConnectorLine
          key={a.id}
          startNode={a.startNode}
          startX={a.startX}
          startY={a.startY}
          endX={a.endX}
          endY={a.endY}
        />)}
      </div>
  );
};

export default BranchPage;
