import React, { useState, useEffect, useRef } from 'react';
import LogicElement from '../components/LogicElement';
import Toolbar from '../components/Toolbar';

const BranchPage = () => {
  const [rectangles, setRectangles] = useState([
    { id: 1, x: 50, y: 50 },
    { id: 2, x: 300, y: 150 },
  ]);

  const refs = useRef({})
  
  const [dragStart, setDragStart] = useState({ id: null, x: 0, y: 0 });

  function createLogicStep() {
    console.log("wut ")
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
      x: e.clientX - rect.x,
      y: e.clientY - rect.y,
    });
    setRectangles(rects =>
      rects.map(rect =>
        rect.id === id ? { ...rect, dragging: true } : rect
      ),
    );
  };

  const onDrag = (e) => {
    if (dragStart.id !== null) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setRectangles(rects =>
        rects.map(rect =>
          rect.id === dragStart.id
            ? { ...rect, x: newX, y: newY }
            : rect
        ),
      );
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

  useEffect(() => {
    Object.keys(refs.current).forEach(key => {
      if (refs.current[key]) {
        const dimensions = refs.current[key].getBoundingClientRect();
        console.log(`Dimensions for rectangle ${key}:`, dimensions);
      }
    });
  }, [rectangles])

  const getCenter = (rect) => ({
    x: rect.x,
    y: rect.y,
  });

  // Calculate line coordinates based on rectangles' centers
  const lineCoords = {
    x1: getCenter(rectangles[0]).x,
    y1: getCenter(rectangles[0]).y,
    x2: getCenter(rectangles[1]).x,
    y2: getCenter(rectangles[1]).y,
  };

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
      <svg style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <line
          x1={lineCoords.x1}
          y1={lineCoords.y1}
          x2={lineCoords.x2}
          y2={lineCoords.y2}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      {rectangles.map((rectangle) => <LogicElement
          key={rectangle.id}
          ref={(el) => {
            console.log('bruh')
            if (el && !refs.current[rectangle.id]) {
              console.log('yo what we settin')
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
    </div>
  );
};

export default BranchPage;
