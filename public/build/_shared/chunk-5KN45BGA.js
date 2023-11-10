import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-QXMFETM4.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/draw.tsx
var import_react3 = __toESM(require_react(), 1);

// app/components/LogicElement.tsx
var import_react2 = __toESM(require_react(), 1);

// app/providers/ArrowsProvider.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/providers/ArrowsProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/providers/ArrowsProvider.tsx"
  );
  import.meta.hot.lastModified = "1699582295153.4924";
}
var ArrowsContext = (0, import_react.createContext)();
var ArrowsProvider = ({
  children
}) => {
  _s();
  const [arrows, setArrows] = (0, import_react.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowsContext.Provider, { value: {
    arrows,
    setArrows
  }, children }, void 0, false, {
    fileName: "app/providers/ArrowsProvider.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(ArrowsProvider, "+F5MWakBHQ7ZDUj3DMjgRGi/m64=");
_c = ArrowsProvider;
var _c;
$RefreshReg$(_c, "ArrowsProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LogicElement.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LogicElement.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LogicElement.tsx"
  );
  import.meta.hot.lastModified = "1699583942724.5195";
}
var LogicElement = _s2(import_react2.default.forwardRef(_c2 = _s2(({
  x,
  y,
  onDrag,
  children
}, ref) => {
  _s2();
  const [showConnectors, setShowConnectors] = (0, import_react2.useState)(false);
  const [isDragging, setIsDragging] = (0, import_react2.useState)(false);
  const {
    arrows,
    setArrows
  } = (0, import_react2.useContext)(ArrowsContext);
  function handleOnMouseEnter() {
    setShowConnectors(true);
  }
  function handleOnMouseLeave() {
    setShowConnectors(false);
  }
  const handleMouseDownOnCircle = (event) => {
    event.stopPropagation();
    setArrows([{
      ...arrows[0],
      startX: event.clientX,
      startY: event.clientY
    }]);
    setIsDragging(true);
  };
  const handleMouseMove = (event) => {
    if (isDragging) {
      setArrows([{
        ...arrows[0],
        endX: event.clientX,
        endY: event.clientY
      }]);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    setArrows([]);
  };
  (0, import_react2.useEffect)(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    top: `${y}px`,
    left: `${x}px`,
    cursor: "grab"
  }, className: "absolute", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      ref,
      className: "w-[200px] h-[200px] bg-red-400 relative",
      onMouseEnter: handleOnMouseEnter,
      onMouseDown: onDrag,
      children: [
        children,
        showConnectors && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute w-8 h-8 rounded-full bg-black -right-10 top-1/2 transform -translate-y-1/2", onMouseDown: handleMouseDownOnCircle }, void 0, false, {
          fileName: "app/components/LogicElement.tsx",
          lineNumber: 91,
          columnNumber: 36
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/LogicElement.tsx",
      lineNumber: 87,
      columnNumber: 13
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/LogicElement.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}, "Zx/vKOczJlMMiB7uOnPnolqjK3g=")), "Zx/vKOczJlMMiB7uOnPnolqjK3g=");
_c22 = LogicElement;
var LogicElement_default = LogicElement;
var _c2;
var _c22;
$RefreshReg$(_c2, "LogicElement$React.forwardRef");
$RefreshReg$(_c22, "LogicElement");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Button.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Button.tsx"
  );
  import.meta.hot.lastModified = "1699494438076.4297";
}
function Button({
  onClick,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick, className: "hover:font-bold", children }, void 0, false, {
    fileName: "app/components/Button.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c3 = Button;
var _c3;
$RefreshReg$(_c3, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Toolbar.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Toolbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Toolbar.tsx"
  );
  import.meta.hot.lastModified = "1699495153818.2683";
}
function Toolbar({
  createLogicStep,
  createActionStep
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-x-4 rounded-full fixed bottom-16 left-1/2 w-max border border-black py-2 px-4 transform -translate-x-1/2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: createLogicStep, children: "Logic Step" }, void 0, false, {
      fileName: "app/components/Toolbar.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: createActionStep, children: "Action" }, void 0, false, {
      fileName: "app/components/Toolbar.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Toolbar.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c4 = Toolbar;
var _c4;
$RefreshReg$(_c4, "Toolbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConnectorLine.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ConnectorLine.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConnectorLine.tsx"
  );
  import.meta.hot.lastModified = "1699499042551.861";
}
function ConnectorLine({
  startX,
  startY,
  endX,
  endY,
  parentX,
  parentY
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { className: "absolute top-0 left-0 w-full h-full", style: {
    pointerEvents: "none"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("line", { x1: startX - parentX, y1: startY - parentY, x2: endX - parentX, y2: endY - parentY, stroke: "black", strokeWidth: "2", markerEnd: "url(#arrowhead)" }, void 0, false, {
      fileName: "app/components/ConnectorLine.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("marker", { id: "arrowhead", markerWidth: "10", markerHeight: "7", refX: "0", refY: "3.5", orient: "auto", markerUnits: "strokeWidth", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("polygon", { points: "0 0, 10 3.5, 0 7" }, void 0, false, {
      fileName: "app/components/ConnectorLine.tsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/ConnectorLine.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConnectorLine.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConnectorLine.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c5 = ConnectorLine;
var _c5;
$RefreshReg$(_c5, "ConnectorLine");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/draw.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/draw.tsx"
  );
  import.meta.hot.lastModified = "1699584101457.9446";
}
var BranchPage = () => {
  _s3();
  const [rectangles, setRectangles] = (0, import_react3.useState)([{
    id: 1,
    x: 50,
    y: 50
  }]);
  const {
    arrows,
    setArrows
  } = (0, import_react3.useContext)(ArrowsContext);
  const refs = (0, import_react3.useRef)({});
  const [dragStart, setDragStart] = (0, import_react3.useState)({
    id: null,
    x: 0,
    y: 0
  });
  function createLogicStep() {
    setRectangles([...rectangles, {
      id: rectangles.length + 1,
      x: 50,
      y: 50
    }]);
  }
  function createActionStep() {
    console.log("creating...");
  }
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
  (0, import_react3.useEffect)(() => {
    if (dragStart.id !== null) {
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", onDragEnd);
    }
    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", onDragEnd);
    };
  }, [dragStart, rectangles]);
  (0, import_react3.useEffect)(() => {
    Object.keys(refs.current).forEach((key) => {
      if (refs.current[key]) {
        const dimensions = refs.current[key].getBoundingClientRect();
        console.log(`Dimensions for rectangle ${key}:`, dimensions);
      }
    });
  }, [rectangles]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
    width: "100%",
    height: "100%",
    position: "relative",
    border: "1px solid black",
    overflow: "hidden"
    // Prevents scrollbars from appearing during drag
  }, children: [
    rectangles.map((rectangle) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LogicElement_default, { ref: (el) => {
      console.log("bruh");
      if (el && !refs.current[rectangle.id]) {
        console.log("yo what we settin");
        refs.current[rectangle.id] = el;
      }
    }, x: rectangle.x, y: rectangle.y, onDrag: (e) => onDragStart(rectangle.id, e) }, rectangle.id, false, {
      fileName: "app/routes/draw.tsx",
      lineNumber: 113,
      columnNumber: 38
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Toolbar, { createLogicStep, createActionStep }, void 0, false, {
      fileName: "app/routes/draw.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this),
    arrows[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ConnectorLine, { startX: arrows[0].startX, startY: arrows[0].startY, endX: arrows[0].endX, endY: arrows[0].endY, parentX: rectangles[0].x, parentY: rectangles[0].y }, void 0, false, {
      fileName: "app/routes/draw.tsx",
      lineNumber: 123,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/draw.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
};
_s3(BranchPage, "6kNxdsgxK1NF+k5cznKfwufbE+8=");
_c6 = BranchPage;
var draw_default = BranchPage;
var _c6;
$RefreshReg$(_c6, "BranchPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ArrowsProvider,
  draw_default
};
//# sourceMappingURL=/build/_shared/chunk-5KN45BGA.js.map
