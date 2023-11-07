import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-QXMFETM4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/draw.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/draw.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/draw.tsx"
  );
  import.meta.hot.lastModified = "1699324554445.028";
}
var DraggableRectangle = () => {
  _s();
  const [rectangles, setRectangles] = (0, import_react.useState)([{
    id: 1,
    x: 50,
    y: 50,
    width: 200,
    height: 100,
    dragging: false
  }, {
    id: 2,
    x: 300,
    y: 150,
    width: 200,
    height: 100,
    dragging: false
  }]);
  const [dragStart, setDragStart] = (0, import_react.useState)({
    id: null,
    x: 0,
    y: 0
  });
  const onDragStart = (id, e) => {
    const rect = rectangles.find((r) => r.id === id);
    setDragStart({
      id,
      x: e.clientX - rect.x,
      y: e.clientY - rect.y
    });
    setRectangles((rects) => rects.map((rect2) => rect2.id === id ? {
      ...rect2,
      dragging: true
    } : rect2));
  };
  const onDrag = (e) => {
    if (dragStart.id !== null) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setRectangles((rects) => rects.map((rect) => rect.id === dragStart.id ? {
        ...rect,
        x: newX,
        y: newY
      } : rect));
    }
  };
  const onDragEnd = () => {
    setRectangles((rects) => rects.map((rect) => rect.dragging ? {
      ...rect,
      dragging: false
    } : rect));
    setDragStart({
      id: null,
      x: 0,
      y: 0
    });
  };
  (0, import_react.useEffect)(() => {
    if (dragStart.id !== null) {
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", onDragEnd);
    }
    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", onDragEnd);
    };
  }, [dragStart, rectangles]);
  const getCenter = (rect) => ({
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2
  });
  const lineCoords = {
    x1: getCenter(rectangles[0]).x,
    y1: getCenter(rectangles[0]).y,
    x2: getCenter(rectangles[1]).x,
    y2: getCenter(rectangles[1]).y
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    width: "100%",
    height: "500px",
    position: "relative",
    border: "1px solid black",
    overflow: "hidden"
    // Prevents scrollbars from appearing during drag
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { style: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: lineCoords.x1, y1: lineCoords.y1, x2: lineCoords.x2, y2: lineCoords.y2, stroke: "black", strokeWidth: "2" }, void 0, false, {
      fileName: "app/routes/draw.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/draw.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    rectangles.map((rectangle) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      width: `${rectangle.width}px`,
      height: `${rectangle.height}px`,
      position: "absolute",
      top: `${rectangle.y}px`,
      left: `${rectangle.x}px`,
      backgroundColor: rectangle.dragging ? "#FFAAAA" : "#FF0000",
      cursor: "grab"
    }, onMouseDown: (e) => onDragStart(rectangle.id, e) }, rectangle.id, false, {
      fileName: "app/routes/draw.tsx",
      lineNumber: 118,
      columnNumber: 36
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/draw.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
};
_s(DraggableRectangle, "EF7PDTYg0ZKevsB1DiZiNuoHfag=");
_c = DraggableRectangle;
var draw_default = DraggableRectangle;
var _c;
$RefreshReg$(_c, "DraggableRectangle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  draw_default as default
};
//# sourceMappingURL=/build/routes/draw-OJ7MVQEW.js.map
