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
var app_default = "/build/_assets/app-L346MXYA.css";

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
    /* @__PURE__ */ jsxDEV2("body", { children: [
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
import { useState, useEffect } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var DraggableRectangle = () => {
  let [rectangles, setRectangles] = useState([
    { id: 1, x: 50, y: 50, width: 200, height: 100, dragging: !1 },
    { id: 2, x: 300, y: 150, width: 200, height: 100, dragging: !1 }
  ]), [dragStart, setDragStart] = useState({ id: null, x: 0, y: 0 }), onDragStart = (id, e) => {
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
  useEffect(() => (dragStart.id !== null && (document.addEventListener("mousemove", onDrag), document.addEventListener("mouseup", onDragEnd)), () => {
    document.removeEventListener("mousemove", onDrag), document.removeEventListener("mouseup", onDragEnd);
  }), [dragStart, rectangles]);
  let getCenter = (rect) => ({
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2
  }), lineCoords = {
    x1: getCenter(rectangles[0]).x,
    y1: getCenter(rectangles[0]).y,
    x2: getCenter(rectangles[1]).x,
    y2: getCenter(rectangles[1]).y
  };
  return /* @__PURE__ */ jsxDEV3(
    "div",
    {
      style: {
        width: "100%",
        height: "500px",
        position: "relative",
        border: "1px solid black",
        overflow: "hidden"
        // Prevents scrollbars from appearing during drag
      },
      children: [
        /* @__PURE__ */ jsxDEV3("svg", { style: { width: "100%", height: "100%", position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: /* @__PURE__ */ jsxDEV3(
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
            lineNumber: 84,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/draw.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, this),
        rectangles.map((rectangle) => /* @__PURE__ */ jsxDEV3(
          "div",
          {
            style: {
              width: `${rectangle.width}px`,
              height: `${rectangle.height}px`,
              position: "absolute",
              top: `${rectangle.y}px`,
              left: `${rectangle.x}px`,
              backgroundColor: rectangle.dragging ? "#FFAAAA" : "#FF0000",
              cursor: "grab"
            },
            onMouseDown: (e) => onDragStart(rectangle.id, e)
          },
          rectangle.id,
          !1,
          {
            fileName: "app/routes/draw.tsx",
            lineNumber: 94,
            columnNumber: 9
          },
          this
        ))
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/draw.tsx",
      lineNumber: 74,
      columnNumber: 5
    },
    this
  );
}, draw_default = DraggableRectangle;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-2VP76P7W.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-KQLYCBRS.js", "/build/_shared/chunk-QXMFETM4.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DXKUVLO4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/draw": { id: "routes/draw", parentId: "root", path: "draw", index: void 0, caseSensitive: void 0, module: "/build/routes/draw-OJ7MVQEW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "207c4626", hmr: { runtime: "/build/_shared/chunk-QXMFETM4.js", timestamp: 1699324554932 }, url: "/build/manifest-207C4626.js" };

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
