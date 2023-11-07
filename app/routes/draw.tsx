import React, { useState, useEffect } from 'react';

const DraggableRectangle = () => {
  const [rectangles, setRectangles] = useState([
    { id: 1, x: 50, y: 50, width: 200, height: 100, dragging: false },
    { id: 2, x: 300, y: 150, width: 200, height: 100, dragging: false },
  ]);
  
  const [dragStart, setDragStart] = useState({ id: null, x: 0, y: 0 });

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

  const getCenter = (rect) => ({
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
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
        height: '500px',
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
      {rectangles.map((rectangle) => (
        <div
          key={rectangle.id}
          style={{
            width: `${rectangle.width}px`,
            height: `${rectangle.height}px`,
            position: 'absolute',
            top: `${rectangle.y}px`,
            left: `${rectangle.x}px`,
            backgroundColor: rectangle.dragging ? '#FFAAAA' : '#FF0000',
            cursor: 'grab',
          }}
          onMouseDown={(e) => onDragStart(rectangle.id, e)}
        >
          {/* You can add a button or any content here */}
        </div>
      ))}
    </div>
  );
};

export default DraggableRectangle;
