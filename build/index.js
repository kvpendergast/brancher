var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// styles/app.css
var app_default = "/build/_assets/app-VR2G7VHX.css";

// app/root.tsx
import {
  Links,
  Meta,
  Outlet,
  LiveReload,
  Scripts
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: app_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 21,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "h-screen w-full", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/draw.tsx
var draw_exports = {};
__export(draw_exports, {
  default: () => draw_default
});
import { useState as useState2, useEffect as useEffect2, useRef } from "react";

// app/components/LogicElement.tsx
import React, { useEffect, useState } from "react";

// app/components/ConnectorLine.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function ConnectorLine({ startX, startY, endX, endY, parentX, parentY }) {
  return /* @__PURE__ */ jsxDEV3(
    "svg",
    {
      className: "absolute top-0 left-0 w-full h-full",
      style: { pointerEvents: "none" },
      children: [
        /* @__PURE__ */ jsxDEV3(
          "line",
          {
            x1: startX - parentX,
            y1: startY - parentY,
            x2: endX - parentX,
            y2: endY - parentY,
            stroke: "black",
            strokeWidth: "2",
            markerEnd: "url(#arrowhead)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ConnectorLine.tsx",
            lineNumber: 9,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3("defs", { children: /* @__PURE__ */ jsxDEV3(
          "marker",
          {
            id: "arrowhead",
            markerWidth: "10",
            markerHeight: "7",
            refX: "0",
            refY: "3.5",
            orient: "auto",
            markerUnits: "strokeWidth",
            children: /* @__PURE__ */ jsxDEV3("polygon", { points: "0 0, 10 3.5, 0 7" }, void 0, !1, {
              fileName: "app/components/ConnectorLine.tsx",
              lineNumber: 28,
              columnNumber: 21
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/ConnectorLine.tsx",
            lineNumber: 19,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ConnectorLine.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ConnectorLine.tsx",
      lineNumber: 5,
      columnNumber: 9
    },
    this
  );
}

// app/components/LogicElement.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var LogicElement = React.forwardRef(({ x, y, onDrag, children }, ref) => {
  let [showConnectors, setShowConnectors] = useState(!1), [isDragging, setIsDragging] = useState(!1), [arrowStart, setArrowStart] = useState(null), [arrowEnd, setArrowEnd] = useState(null);
  console.log("arrow start ", arrowStart), console.log("arrow end ", arrowEnd), console.log("is dragging ", isDragging);
  function handleOnMouseEnter() {
    setShowConnectors(!0);
  }
  function handleOnMouseLeave() {
    setShowConnectors(!1);
  }
  let handleMouseDownOnCircle = (event) => {
    event.stopPropagation(), setArrowStart({ x: event.clientX, y: event.clientY }), setIsDragging(!0);
  }, handleMouseMove = (event) => {
    isDragging && setArrowEnd({ x: event.clientX, y: event.clientY });
  }, handleMouseUp = () => {
    setIsDragging(!1);
  };
  return useEffect(() => (isDragging && (document.addEventListener("mousemove", handleMouseMove), document.addEventListener("mouseup", handleMouseUp)), () => {
    document.removeEventListener("mousemove", handleMouseMove), document.removeEventListener("mouseup", handleMouseUp);
  }), [isDragging]), /* @__PURE__ */ jsxDEV4(
    "div",
    {
      style: {
        top: `${y}px`,
        left: `${x}px`,
        cursor: "grab"
      },
      className: "absolute",
      children: /* @__PURE__ */ jsxDEV4(
        "div",
        {
          ref,
          className: "w-[200px] h-[200px] bg-red-400 relative",
          onMouseEnter: handleOnMouseEnter,
          onMouseDown: onDrag,
          children: [
            children,
            showConnectors && /* @__PURE__ */ jsxDEV4(
              "div",
              {
                className: "absolute w-8 h-8 rounded-full bg-black -right-10 top-1/2 transform -translate-y-1/2",
                onMouseDown: handleMouseDownOnCircle
              },
              void 0,
              !1,
              {
                fileName: "app/components/LogicElement.tsx",
                lineNumber: 74,
                columnNumber: 21
              },
              this
            ),
            isDragging && arrowStart && arrowEnd && /* @__PURE__ */ jsxDEV4(
              ConnectorLine,
              {
                startX: arrowStart.x,
                startY: arrowStart.y,
                endX: arrowEnd.x,
                endY: arrowEnd.y,
                parentX: x,
                parentY: y
              },
              void 0,
              !1,
              {
                fileName: "app/components/LogicElement.tsx",
                lineNumber: 80,
                columnNumber: 21
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/LogicElement.tsx",
          lineNumber: 65,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/LogicElement.tsx",
      lineNumber: 57,
      columnNumber: 9
    },
    this
  );
}), LogicElement_default = LogicElement;

// app/components/Button.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Button({ onClick, children }) {
  return /* @__PURE__ */ jsxDEV5("button", { onClick, className: "hover:font-bold", children }, void 0, !1, {
    fileName: "app/components/Button.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/Toolbar.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Toolbar({ createLogicStep, createActionStep }) {
  return /* @__PURE__ */ jsxDEV6("div", { className: "space-x-4 rounded-full fixed bottom-16 left-1/2 w-max border border-black py-2 px-4 transform -translate-x-1/2", children: [
    /* @__PURE__ */ jsxDEV6(Button, { onClick: createLogicStep, children: "Logic Step" }, void 0, !1, {
      fileName: "app/components/Toolbar.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6(Button, { onClick: createActionStep, children: "Action" }, void 0, !1, {
      fileName: "app/components/Toolbar.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Toolbar.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/draw.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var BranchPage = () => {
  let [rectangles, setRectangles] = useState2([
    { id: 1, x: 50, y: 50 },
    { id: 2, x: 300, y: 150 }
  ]), refs = useRef({}), [dragStart, setDragStart] = useState2({ id: null, x: 0, y: 0 });
  function createLogicStep() {
    console.log("wut "), setRectangles([...rectangles, {
      id: rectangles.length + 1,
      x: 50,
      y: 50
    }]);
  }
  function createActionStep() {
    console.log("creating...");
  }
  let onDragStart = (id, e) => {
    let rect = rectangles.find((r) => r.id === id);
    setDragStart({
      id,
      x: e.clientX - rect.x,
      y: e.clientY - rect.y
    }), setRectangles(
      (rects) => rects.map(
        (rect2) => rect2.id === id ? { ...rect2, dragging: !0 } : rect2
      )
    );
  }, onDrag = (e) => {
    if (dragStart.id !== null) {
      let newX = e.clientX - dragStart.x, newY = e.clientY - dragStart.y;
      setRectangles(
        (rects) => rects.map(
          (rect) => rect.id === dragStart.id ? { ...rect, x: newX, y: newY } : rect
        )
      );
    }
  }, onDragEnd = () => {
    setRectangles(
      (rects) => rects.map(
        (rect) => rect.dragging ? { ...rect, dragging: !1 } : rect
      )
    ), setDragStart({ id: null, x: 0, y: 0 });
  };
  useEffect2(() => (dragStart.id !== null && (document.addEventListener("mousemove", onDrag), document.addEventListener("mouseup", onDragEnd)), () => {
    document.removeEventListener("mousemove", onDrag), document.removeEventListener("mouseup", onDragEnd);
  }), [dragStart, rectangles]), useEffect2(() => {
    Object.keys(refs.current).forEach((key) => {
      if (refs.current[key]) {
        let dimensions = refs.current[key].getBoundingClientRect();
        console.log(`Dimensions for rectangle ${key}:`, dimensions);
      }
    });
  }, [rectangles]);
  let getCenter = (rect) => ({
    x: rect.x,
    y: rect.y
  }), lineCoords = {
    x1: getCenter(rectangles[0]).x,
    y1: getCenter(rectangles[0]).y,
    x2: getCenter(rectangles[1]).x,
    y2: getCenter(rectangles[1]).y
  };
  return /* @__PURE__ */ jsxDEV7(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        position: "relative",
        border: "1px solid black",
        overflow: "hidden"
        // Prevents scrollbars from appearing during drag
      },
      children: [
        /* @__PURE__ */ jsxDEV7("svg", { style: { width: "100%", height: "100%", position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: /* @__PURE__ */ jsxDEV7(
          "line",
          {
            x1: lineCoords.x1,
            y1: lineCoords.y1,
            x2: lineCoords.x2,
            y2: lineCoords.y2,
            stroke: "black",
            strokeWidth: "2"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/draw.tsx",
            lineNumber: 110,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/draw.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        rectangles.map(
          (rectangle) => /* @__PURE__ */ jsxDEV7(
            LogicElement_default,
            {
              ref: (el) => {
                console.log("bruh"), el && !refs.current[rectangle.id] && (console.log("yo what we settin"), refs.current[rectangle.id] = el);
              },
              x: rectangle.x,
              y: rectangle.y,
              onDrag: (e) => onDragStart(rectangle.id, e)
            },
            rectangle.id,
            !1,
            {
              fileName: "app/routes/draw.tsx",
              lineNumber: 119,
              columnNumber: 38
            },
            this
          )
        ),
        /* @__PURE__ */ jsxDEV7(Toolbar, { createLogicStep, createActionStep }, void 0, !1, {
          fileName: "app/routes/draw.tsx",
          lineNumber: 135,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/draw.tsx",
      lineNumber: 100,
      columnNumber: 5
    },
    this
  );
}, draw_default = BranchPage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-2VP76P7W.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-KQLYCBRS.js", "/build/_shared/chunk-QXMFETM4.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GMB6MHWL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/draw": { id: "routes/draw", parentId: "root", path: "draw", index: void 0, caseSensitive: void 0, module: "/build/routes/draw-TFJCOSC6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "308d51bb", hmr: { runtime: "/build/_shared/chunk-QXMFETM4.js", timestamp: 1699499104387 }, url: "/build/manifest-308D51BB.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/draw": {
    id: "routes/draw",
    parentId: "root",
    path: "draw",
    index: void 0,
    caseSensitive: void 0,
    module: draw_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
