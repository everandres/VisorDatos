"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/estaciones/page",{

/***/ "(app-pages-browser)/./src/app/(pages)/estaciones/page.tsx":
/*!*********************************************!*\
  !*** ./src/app/(pages)/estaciones/page.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/context/usercontext */ \"(app-pages-browser)/./src/app/context/usercontext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/graficabarras */ \"(app-pages-browser)/./src/app/components/graficabarras.tsx\");\n/* harmony import */ var _app_components_fecha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/fecha */ \"(app-pages-browser)/./src/app/components/fecha.tsx\");\n/* harmony import */ var _app_components_maxima__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/maxima */ \"(app-pages-browser)/./src/app/components/maxima.tsx\");\n/* harmony import */ var _app_components_historica__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/historica */ \"(app-pages-browser)/./src/app/components/historica.tsx\");\n/* harmony import */ var _app_components_tablaprecipitacion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/components/tablaprecipitacion */ \"(app-pages-browser)/./src/app/components/tablaprecipitacion.tsx\");\n/* harmony import */ var _app_components_precipitacionhistorica__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/components/precipitacionhistorica */ \"(app-pages-browser)/./src/app/components/precipitacionhistorica.tsx\");\n// Asegúrate de ajustar la ruta al importar useUsers para que apunte a la ubicación correcta de tu UserContext\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ComponenteConGrafica = ()=>{\n    _s();\n    const { users } = (0,_app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__.useUsers)();\n    const datosTransformados = (0,_app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__.sumarPrecipitaciones)(users);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_fecha__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                datos: datosTransformados\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"h-px my-4 bg-gray-200 border-0 dark:bg-gray-700\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center gap-20 mt-2 mb\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_maxima__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        users: users\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_historica__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        users: users\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"h-px my-4 bg-gray-200 border-0 dark:bg-gray-700\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between align-items: center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/5 mx-auto ml-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_tablaprecipitacion__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            users: users\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_precipitacionhistorica__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        users: users\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ComponenteConGrafica, \"97iXZvGHoLkkkWrhgNQ2V+FSiws=\", false, function() {\n    return [\n        _app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__.useUsers\n    ];\n});\n_c = ComponenteConGrafica;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponenteConGrafica);\nvar _c;\n$RefreshReg$(_c, \"ComponenteConGrafica\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKHBhZ2VzKS9lc3RhY2lvbmVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsOEdBQThHOzs7QUFHekQ7QUFDM0I7QUFHYztBQUNnQjtBQUNVO0FBQ0E7QUFDSztBQUNRO0FBRS9FLE1BQU1TLHVCQUFpQzs7SUFDckMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Ysa0VBQVFBO0lBQzFCLE1BQU1XLHFCQUFxQlIsbUZBQW9CQSxDQUFDTztJQUVoRCxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDUiw2REFBa0JBOzs7OzswQkFDbkIsOERBQUNGLHFFQUFvQkE7Z0JBQUNXLE9BQU9GOzs7Ozs7MEJBQzdCLDhEQUFDRztnQkFBR0MsV0FBVTs7Ozs7OzBCQUNkLDhEQUFDSDtnQkFBSUcsV0FBVTs7a0NBQ2IsOERBQUNWLDhEQUEyQkE7d0JBQUNLLE9BQU9BOzs7Ozs7a0NBQ3BDLDhEQUFDSixpRUFBd0JBO3dCQUFDSSxPQUFPQTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ0k7Z0JBQUdDLFdBQVU7Ozs7OzswQkFDZCw4REFBQ0g7Z0JBQUlHLFdBQVU7O2tDQUNiLDhEQUFDSDt3QkFBSUcsV0FBVTtrQ0FDYiw0RUFBQ1IsMEVBQW9CQTs0QkFBQ0csT0FBT0E7Ozs7Ozs7Ozs7O2tDQUUvQiw4REFBQ0YsOEVBQXdCQTt3QkFBQ0UsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QztHQXRCTUQ7O1FBQ2NULDhEQUFRQTs7O0tBRHRCUztBQXdCTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKHBhZ2VzKS9lc3RhY2lvbmVzL3BhZ2UudHN4PzA2NjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXNlZ8O6cmF0ZSBkZSBhanVzdGFyIGxhIHJ1dGEgYWwgaW1wb3J0YXIgdXNlVXNlcnMgcGFyYSBxdWUgYXB1bnRlIGEgbGEgdWJpY2FjacOzbiBjb3JyZWN0YSBkZSB0dSBVc2VyQ29udGV4dFxyXG5cInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVVzZXJzIH0gZnJvbSBcIkAvYXBwL2NvbnRleHQvdXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JhZmljYVByZWNpcGl0YWNpb24sIHtcclxuICBzdW1hclByZWNpcGl0YWNpb25lcyxcclxufSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzXCI7XHJcbmltcG9ydCBDb21wb25lbnRlQ29uRmVjaGEgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvZmVjaGFcIjtcclxuaW1wb3J0IEVzdGFjaW9uTWF4aW1hUHJlY2lwaXRhY2lvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9tYXhpbWFcIjtcclxuaW1wb3J0IEVzdGFjaW9uZXNTdXBlcmFuTWF4SGlzdCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9oaXN0b3JpY2FcIjtcclxuaW1wb3J0IFRhYmxhUHJlY2lwaXRhY2lvbmVzIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3RhYmxhcHJlY2lwaXRhY2lvblwiO1xyXG5pbXBvcnQgRXN0YWNpb25lc1N1cGVyYW5NYXhQcmVjIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3ByZWNpcGl0YWNpb25oaXN0b3JpY2FcIjtcclxuXHJcbmNvbnN0IENvbXBvbmVudGVDb25HcmFmaWNhOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IHVzZXJzIH0gPSB1c2VVc2VycygpO1xyXG4gIGNvbnN0IGRhdG9zVHJhbnNmb3JtYWRvcyA9IHN1bWFyUHJlY2lwaXRhY2lvbmVzKHVzZXJzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDb21wb25lbnRlQ29uRmVjaGEgLz5cclxuICAgICAgPEdyYWZpY2FQcmVjaXBpdGFjaW9uIGRhdG9zPXtkYXRvc1RyYW5zZm9ybWFkb3N9IC8+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJoLXB4IG15LTQgYmctZ3JheS0yMDAgYm9yZGVyLTAgZGFyazpiZy1ncmF5LTcwMFwiPjwvaHI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMjAgbXQtMiBtYlwiPlxyXG4gICAgICAgIDxFc3RhY2lvbk1heGltYVByZWNpcGl0YWNpb24gdXNlcnM9e3VzZXJzfSAvPlxyXG4gICAgICAgIDxFc3RhY2lvbmVzU3VwZXJhbk1heEhpc3QgdXNlcnM9e3VzZXJzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cImgtcHggbXktNCBiZy1ncmF5LTIwMCBib3JkZXItMCBkYXJrOmJnLWdyYXktNzAwXCI+PC9ocj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1pdGVtczogY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNSBteC1hdXRvIG1sLTFcIj5cclxuICAgICAgICAgIDxUYWJsYVByZWNpcGl0YWNpb25lcyB1c2Vycz17dXNlcnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEVzdGFjaW9uZXNTdXBlcmFuTWF4UHJlYyB1c2Vycz17dXNlcnN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudGVDb25HcmFmaWNhO1xyXG4iXSwibmFtZXMiOlsidXNlVXNlcnMiLCJSZWFjdCIsIkdyYWZpY2FQcmVjaXBpdGFjaW9uIiwic3VtYXJQcmVjaXBpdGFjaW9uZXMiLCJDb21wb25lbnRlQ29uRmVjaGEiLCJFc3RhY2lvbk1heGltYVByZWNpcGl0YWNpb24iLCJFc3RhY2lvbmVzU3VwZXJhbk1heEhpc3QiLCJUYWJsYVByZWNpcGl0YWNpb25lcyIsIkVzdGFjaW9uZXNTdXBlcmFuTWF4UHJlYyIsIkNvbXBvbmVudGVDb25HcmFmaWNhIiwidXNlcnMiLCJkYXRvc1RyYW5zZm9ybWFkb3MiLCJkaXYiLCJkYXRvcyIsImhyIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(pages)/estaciones/page.tsx\n"));

/***/ })

});