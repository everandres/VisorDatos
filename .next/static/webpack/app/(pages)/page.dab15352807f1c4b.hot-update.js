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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LeyendaPrecipitacion = ()=>{\n    // Elemento individual para cada item de la leyenda\n    const ItemLeyenda = (param)=>{\n        let { color, texto } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center mb-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"inline-block h-4 w-4 rounded-full mr-2 \".concat(color)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                }, undefined),\n                texto\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col ml-5 mb-10 bg-slate-100 bg-opacity-70\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"#808080\",\n                texto: \"Sin informaci\\xf3n de precipitaci\\xf3n\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"bg-blue-200\",\n                texto: \"0.0 mm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"bg-green-300\",\n                texto: \"de 0.1 a 20.0 mm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"bg-yellow-300\",\n                texto: \"> 20 mm y <50 mm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"bg-red-500\",\n                texto: \"> 50 mm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLeyenda, {\n                color: \"bg-purple-600\",\n                texto: \"Se super\\xf3 el registro hist\\xf3rico\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\leyenda.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LeyendaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeyendaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"LeyendaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9sZXllbmRhLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQixNQUFNQyx1QkFBaUM7SUFDckMsbURBQW1EO0lBQ25ELE1BQU1DLGNBQWM7WUFBQyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBb0M7NkJBQ3JFLDhEQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0NELFdBQVcsMENBQWdELE9BQU5IOzs7Ozs7Z0JBRXREQzs7Ozs7Ozs7SUFJTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNKO2dCQUFZQyxPQUFNO2dCQUFVQyxPQUFNOzs7Ozs7MEJBQ25DLDhEQUFDRjtnQkFBWUMsT0FBTTtnQkFBY0MsT0FBTTs7Ozs7OzBCQUN2Qyw4REFBQ0Y7Z0JBQVlDLE9BQU07Z0JBQWVDLE9BQU07Ozs7OzswQkFDeEMsOERBQUNGO2dCQUFZQyxPQUFNO2dCQUFnQkMsT0FBTTs7Ozs7OzBCQUN6Qyw4REFBQ0Y7Z0JBQVlDLE9BQU07Z0JBQWFDLE9BQU07Ozs7OzswQkFDdEMsOERBQUNGO2dCQUNDQyxPQUFNO2dCQUNOQyxPQUFNOzs7Ozs7Ozs7Ozs7QUFJZDtLQXhCTUg7QUEwQk4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbGV5ZW5kYS50c3g/NTI1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMZXllbmRhUHJlY2lwaXRhY2lvbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgLy8gRWxlbWVudG8gaW5kaXZpZHVhbCBwYXJhIGNhZGEgaXRlbSBkZSBsYSBsZXllbmRhXHJcbiAgY29uc3QgSXRlbUxleWVuZGEgPSAoeyBjb2xvciwgdGV4dG8gfTogeyBjb2xvcjogc3RyaW5nOyB0ZXh0bzogc3RyaW5nIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayBoLTQgdy00IHJvdW5kZWQtZnVsbCBtci0yICR7Y29sb3J9YH1cclxuICAgICAgPjwvc3Bhbj5cclxuICAgICAge3RleHRvfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtbC01IG1iLTEwIGJnLXNsYXRlLTEwMCBiZy1vcGFjaXR5LTcwXCI+XHJcbiAgICAgIDxJdGVtTGV5ZW5kYSBjb2xvcj1cIiM4MDgwODBcIiB0ZXh0bz1cIlNpbiBpbmZvcm1hY2nDs24gZGUgcHJlY2lwaXRhY2nDs25cIiAvPlxyXG4gICAgICA8SXRlbUxleWVuZGEgY29sb3I9XCJiZy1ibHVlLTIwMFwiIHRleHRvPVwiMC4wIG1tXCIgLz5cclxuICAgICAgPEl0ZW1MZXllbmRhIGNvbG9yPVwiYmctZ3JlZW4tMzAwXCIgdGV4dG89XCJkZSAwLjEgYSAyMC4wIG1tXCIgLz5cclxuICAgICAgPEl0ZW1MZXllbmRhIGNvbG9yPVwiYmcteWVsbG93LTMwMFwiIHRleHRvPVwiPiAyMCBtbSB5IDw1MCBtbVwiIC8+XHJcbiAgICAgIDxJdGVtTGV5ZW5kYSBjb2xvcj1cImJnLXJlZC01MDBcIiB0ZXh0bz1cIj4gNTAgbW1cIiAvPlxyXG4gICAgICA8SXRlbUxleWVuZGFcclxuICAgICAgICBjb2xvcj1cImJnLXB1cnBsZS02MDBcIlxyXG4gICAgICAgIHRleHRvPVwiU2Ugc3VwZXLDsyBlbCByZWdpc3RybyBoaXN0w7NyaWNvXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXllbmRhUHJlY2lwaXRhY2lvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGV5ZW5kYVByZWNpcGl0YWNpb24iLCJJdGVtTGV5ZW5kYSIsImNvbG9yIiwidGV4dG8iLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/leyenda.tsx\n"));

/***/ })

});