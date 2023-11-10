import {
  ArrowsProvider,
  draw_default
} from "/build/_shared/chunk-5KN45BGA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-QXMFETM4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1699582721153.4988";
}
function HomePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowsProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(draw_default, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = HomePage;
var _c;
$RefreshReg$(_c, "HomePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  HomePage as default
};
//# sourceMappingURL=/build/routes/_index-YPJTI2GR.js.map
