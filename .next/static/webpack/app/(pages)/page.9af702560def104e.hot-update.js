"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/page",{

/***/ "(app-pages-browser)/./src/app/components/leyenda.tsx":
/*!****************************************!*\
  !*** ./src/app/components/leyenda.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LeyendaPrecipitacion = ()=>{\n    // Ajusta ItemLeyenda para manejar colores hexadecimales y clases de Tailwind\n    const ItemLeyenda = (param)=>{\n        let { color, texto } = param;\n        // Verifica si el color es un valor hexadecimal\n        const isHexColor = /^#([0-9A-F]{3,4}){1,2}$/i.test(color);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-center mb-2 text-sm px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"inline-block h-4 w-4 rounded-full mr-2 \".concat(!isHexColor ? color : \"\"),\n                    style: isHexColor ? {\n                        backgroundColor: color\n                    } : {}\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined),\n                texto\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col ml-5 mb-10 bg-slate-100 bg-opacity-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"#808080\",\n                texto: \"Sin informaci\\xf3n de precipitaci\\xf3n\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"#F55B5B\",\n                texto: \"0.0 mm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"#59B6F3\",\n                texto: \"de 0.1 a 20.0 mm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"#146AA2\",\n                texto: \"> 20 mm y <50 mm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"blue\",\n                texto: \"> 50 mm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"#800080\",\n                texto: \"Super\\xf3 el registro hist\\xf3rico\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LeyendaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeyendaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"LeyendaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9sZXllbmRhLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQixNQUFNQyx1QkFBaUM7SUFDckMsNkVBQTZFO0lBQzdFLE1BQU1DLGNBQWM7WUFBQyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBb0M7UUFDckUsK0NBQStDO1FBQy9DLE1BQU1DLGFBQWEsMkJBQTJCQyxJQUFJLENBQUNIO1FBRW5ELHFCQUNFLDhEQUFDSTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0NELFdBQVcsMENBRVYsT0FEQyxDQUFDSCxhQUFhRixRQUFRO29CQUV4Qk8sT0FBT0wsYUFBYTt3QkFBRU0saUJBQWlCUjtvQkFBTSxJQUFJLENBQUM7Ozs7OztnQkFFbkRDOzs7Ozs7O0lBR1A7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNOO2dCQUFZQyxPQUFNO2dCQUFVQyxPQUFNOzs7Ozs7MEJBQ25DLDhEQUFDRjtnQkFBWUMsT0FBTTtnQkFBVUMsT0FBTTs7Ozs7OzBCQUNuQyw4REFBQ0Y7Z0JBQVlDLE9BQU07Z0JBQVVDLE9BQU07Ozs7OzswQkFDbkMsOERBQUNGO2dCQUFZQyxPQUFNO2dCQUFVQyxPQUFNOzs7Ozs7MEJBQ25DLDhEQUFDRjtnQkFBWUMsT0FBTTtnQkFBT0MsT0FBTTs7Ozs7OzBCQUNoQyw4REFBQ0Y7Z0JBQVlDLE9BQU07Z0JBQVVDLE9BQU07Ozs7Ozs7Ozs7OztBQUd6QztLQTdCTUg7QUErQk4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbGV5ZW5kYS50c3g/NTI1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMZXllbmRhUHJlY2lwaXRhY2lvbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgLy8gQWp1c3RhIEl0ZW1MZXllbmRhIHBhcmEgbWFuZWphciBjb2xvcmVzIGhleGFkZWNpbWFsZXMgeSBjbGFzZXMgZGUgVGFpbHdpbmRcclxuICBjb25zdCBJdGVtTGV5ZW5kYSA9ICh7IGNvbG9yLCB0ZXh0byB9OiB7IGNvbG9yOiBzdHJpbmc7IHRleHRvOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgLy8gVmVyaWZpY2Egc2kgZWwgY29sb3IgZXMgdW4gdmFsb3IgaGV4YWRlY2ltYWxcclxuICAgIGNvbnN0IGlzSGV4Q29sb3IgPSAvXiMoWzAtOUEtRl17Myw0fSl7MSwyfSQvaS50ZXN0KGNvbG9yKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi0yIHRleHQtc20gcHgtNFwiPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgaC00IHctNCByb3VuZGVkLWZ1bGwgbXItMiAke1xyXG4gICAgICAgICAgICAhaXNIZXhDb2xvciA/IGNvbG9yIDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICBzdHlsZT17aXNIZXhDb2xvciA/IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9IDoge319XHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICB7dGV4dG99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1sLTUgbWItMTAgYmctc2xhdGUtMTAwIGJnLW9wYWNpdHktNDBcIj5cclxuICAgICAgPEl0ZW1MZXllbmRhIGNvbG9yPVwiIzgwODA4MFwiIHRleHRvPVwiU2luIGluZm9ybWFjacOzbiBkZSBwcmVjaXBpdGFjacOzblwiIC8+XHJcbiAgICAgIDxJdGVtTGV5ZW5kYSBjb2xvcj1cIiNGNTVCNUJcIiB0ZXh0bz1cIjAuMCBtbVwiIC8+XHJcbiAgICAgIDxJdGVtTGV5ZW5kYSBjb2xvcj1cIiM1OUI2RjNcIiB0ZXh0bz1cImRlIDAuMSBhIDIwLjAgbW1cIiAvPlxyXG4gICAgICA8SXRlbUxleWVuZGEgY29sb3I9XCIjMTQ2QUEyXCIgdGV4dG89XCI+IDIwIG1tIHkgPDUwIG1tXCIgLz5cclxuICAgICAgPEl0ZW1MZXllbmRhIGNvbG9yPVwiYmx1ZVwiIHRleHRvPVwiPiA1MCBtbVwiIC8+XHJcbiAgICAgIDxJdGVtTGV5ZW5kYSBjb2xvcj1cIiM4MDAwODBcIiB0ZXh0bz1cIlN1cGVyw7MgZWwgcmVnaXN0cm8gaGlzdMOzcmljb1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGV5ZW5kYVByZWNpcGl0YWNpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxleWVuZGFQcmVjaXBpdGFjaW9uIiwiSXRlbUxleWVuZGEiLCJjb2xvciIsInRleHRvIiwiaXNIZXhDb2xvciIsInRlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/leyenda.tsx\n"));

/***/ })

});