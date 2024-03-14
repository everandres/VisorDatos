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

/***/ "(app-pages-browser)/./src/app/components/precipitacionhistorica.tsx":
/*!*******************************************************!*\
  !*** ./src/app/components/precipitacionhistorica.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _funciones_ultimodia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funciones/ultimodia */ \"(app-pages-browser)/./src/app/funciones/ultimodia.ts\");\n\n\n\nconst EstacionesSuperanMaxPrec = (param)=>{\n    let { users } = param;\n    const estacionesQueSuperan = users.filter((user)=>{\n        const ultimoValorPrecipitacion = (0,_funciones_ultimodia__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user.precipitacion);\n        return ultimoValorPrecipitacion !== null && ultimoValorPrecipitacion.valor !== null && user.MAX_HIST !== null && user.MAX_HIST !== undefined && // Se añade una comprobación adicional por si acaso\n        ultimoValorPrecipitacion.valor > user.MAX_HIST;\n    }).map((user)=>{\n        const ultimoValorPrecipitacion = (0,_funciones_ultimodia__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user.precipitacion);\n        var _ultimoValorPrecipitacion_valor, _ultimoValorPrecipitacion_valor1;\n        return {\n            DEPARTAMENTO: user.DPTO,\n            MUNICIPIO: user.MUNICIPIO,\n            ESTACION: user.ESTACION,\n            ULTIMO_VALOR: (_ultimoValorPrecipitacion_valor = ultimoValorPrecipitacion === null || ultimoValorPrecipitacion === void 0 ? void 0 : ultimoValorPrecipitacion.valor) !== null && _ultimoValorPrecipitacion_valor !== void 0 ? _ultimoValorPrecipitacion_valor : \"N/A\",\n            MAX_HIST: user.MAX_HIST,\n            DIFERENCIA: ((_ultimoValorPrecipitacion_valor1 = ultimoValorPrecipitacion === null || ultimoValorPrecipitacion === void 0 ? void 0 : ultimoValorPrecipitacion.valor) !== null && _ultimoValorPrecipitacion_valor1 !== void 0 ? _ultimoValorPrecipitacion_valor1 : 0) - user.MAX_HIST\n        };\n    });\n    if (estacionesQueSuperan.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center mr-10 md:mr-10 mt-2 md:mt-10 items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2 md:p-4 bg-white border border-cyan-200 rounded-lg shadow dark:bg-yellow-300 dark:border-gray-700\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-500 dark:text-gray-400\",\n                children: \"El d\\xeda de hoy no se superaron registros hist\\xf3ricos.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \" text-sm text-left text-gray-500 dark:text-gray-400 mt-20 mr-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                    className: \"caption-top mt-2 text-slate-500 mb-4 \",\n                    children: \"Valores de precipitaci\\xf3n que superaron el m\\xe1ximo histórico el d\\xeda de hoy\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"DEPARTAMENTO\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"MUNICIPIO\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"ESTACI\\xd3N\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"\\xdaLTIMO VALOR (mm)\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"MAX_HIST (mm)\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"DIFERENCIA (mm)\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: estacionesQueSuperan.map((estacion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"bg-white border-b dark:bg-gray-800 dark:border-gray-700\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.DEPARTAMENTO\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.MUNICIPIO\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.ESTACION\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.ULTIMO_VALOR\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.MAX_HIST\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.DIFERENCIA\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EstacionesSuperanMaxPrec;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EstacionesSuperanMaxPrec);\nvar _c;\n$RefreshReg$(_c, \"EstacionesSuperanMaxPrec\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmVjaXBpdGFjaW9uaGlzdG9yaWNhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMkM7QUFNckUsTUFBTUUsMkJBQWdFO1FBQUMsRUFDckVDLEtBQUssRUFDTjtJQUNDLE1BQU1DLHVCQUF1QkQsTUFDMUJFLE1BQU0sQ0FBQyxDQUFDQztRQUNQLE1BQU1DLDJCQUEyQk4sZ0VBQStCQSxDQUM5REssS0FBS0UsYUFBYTtRQUVwQixPQUNFRCw2QkFBNkIsUUFDN0JBLHlCQUF5QkUsS0FBSyxLQUFLLFFBQ25DSCxLQUFLSSxRQUFRLEtBQUssUUFDbEJKLEtBQUtJLFFBQVEsS0FBS0MsYUFBYSxtREFBbUQ7UUFDbEZKLHlCQUF5QkUsS0FBSyxHQUFHSCxLQUFLSSxRQUFRO0lBRWxELEdBQ0NFLEdBQUcsQ0FBQyxDQUFDTjtRQUNKLE1BQU1DLDJCQUEyQk4sZ0VBQStCQSxDQUM5REssS0FBS0UsYUFBYTtZQU1KRCxpQ0FHREE7UUFQZixPQUFPO1lBQ0xNLGNBQWNQLEtBQUtRLElBQUk7WUFDdkJDLFdBQVdULEtBQUtTLFNBQVM7WUFDekJDLFVBQVVWLEtBQUtVLFFBQVE7WUFDdkJDLGNBQWNWLENBQUFBLGtDQUFBQSxxQ0FBQUEsK0NBQUFBLHlCQUEwQkUsS0FBSyxjQUEvQkYsNkNBQUFBLGtDQUFtQztZQUVqREcsVUFBVUosS0FBS0ksUUFBUTtZQUN2QlEsWUFBWSxDQUFDWCxDQUFBQSxtQ0FBQUEscUNBQUFBLCtDQUFBQSx5QkFBMEJFLEtBQUssY0FBL0JGLDhDQUFBQSxtQ0FBbUMsS0FBS0QsS0FBS0ksUUFBUTtRQUNwRTtJQUNGO0lBRUYsSUFBSU4scUJBQXFCZSxNQUFNLEtBQUssR0FBRztRQUNyQyxxQkFDRSw4REFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQW1DOzs7Ozs7Ozs7OztJQUt0RDtJQUVBLHFCQUNFLDhEQUFDRDtrQkFDQyw0RUFBQ0c7WUFBTUYsV0FBVTs7OEJBQ2YsOERBQUNHO29CQUFRSCxXQUFVOzhCQUF3Qzs7Ozs7OzhCQUkzRCw4REFBQ0k7b0JBQU1KLFdBQVU7OEJBQ2YsNEVBQUNLOzswQ0FDQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1QLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNNO2dDQUFHQyxPQUFNO2dDQUFNUCxXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDTTtnQ0FBR0MsT0FBTTtnQ0FBTVAsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ007Z0NBQUdDLE9BQU07Z0NBQU1QLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNNO2dDQUFHQyxPQUFNO2dDQUFNUCxXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDTTtnQ0FBR0MsT0FBTTtnQ0FBTVAsV0FBVTswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSzFDLDhEQUFDUTs4QkFDRXpCLHFCQUFxQlEsR0FBRyxDQUFDLENBQUNrQixVQUFVQyxzQkFDbkMsOERBQUNMOzRCQUVDTCxXQUFVOzs4Q0FFViw4REFBQ1c7b0NBQUdYLFdBQVU7OENBQWFTLFNBQVNqQixZQUFZOzs7Ozs7OENBQ2hELDhEQUFDbUI7b0NBQUdYLFdBQVU7OENBQWFTLFNBQVNmLFNBQVM7Ozs7Ozs4Q0FDN0MsOERBQUNpQjtvQ0FBR1gsV0FBVTs4Q0FBYVMsU0FBU2QsUUFBUTs7Ozs7OzhDQUM1Qyw4REFBQ2dCO29DQUFHWCxXQUFVOzhDQUFhUyxTQUFTYixZQUFZOzs7Ozs7OENBQ2hELDhEQUFDZTtvQ0FBR1gsV0FBVTs4Q0FBYVMsU0FBU3BCLFFBQVE7Ozs7Ozs4Q0FDNUMsOERBQUNzQjtvQ0FBR1gsV0FBVTs4Q0FBYVMsU0FBU1osVUFBVTs7Ozs7OzsyQkFSekNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbkI7S0F4Rk03QjtBQTBGTiwrREFBZUEsd0JBQXdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmVjaXBpdGFjaW9uaGlzdG9yaWNhLnRzeD85YTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8obW9kZWwpL2NvbmV4aW9uXCI7IC8vIEFqdXN0YSBsYSBydXRhIHNlZ8O6biBsYSB1YmljYWNpw7NuIGRlIHR1IG1vZGVsb1xyXG5pbXBvcnQgb2J0ZW5lclVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbiBmcm9tIFwiLi4vZnVuY2lvbmVzL3VsdGltb2RpYVwiO1xyXG5cclxuaW50ZXJmYWNlIEVzdGFjaW9uZXNTdXBlcmFuTWF4UHJvcHMge1xyXG4gIHVzZXJzOiBVc2VyW107XHJcbn1cclxuXHJcbmNvbnN0IEVzdGFjaW9uZXNTdXBlcmFuTWF4UHJlYzogUmVhY3QuRkM8RXN0YWNpb25lc1N1cGVyYW5NYXhQcm9wcz4gPSAoe1xyXG4gIHVzZXJzLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZXN0YWNpb25lc1F1ZVN1cGVyYW4gPSB1c2Vyc1xyXG4gICAgLmZpbHRlcigodXNlcikgPT4ge1xyXG4gICAgICBjb25zdCB1bHRpbW9WYWxvclByZWNpcGl0YWNpb24gPSBvYnRlbmVyVWx0aW1vVmFsb3JQcmVjaXBpdGFjaW9uKFxyXG4gICAgICAgIHVzZXIucHJlY2lwaXRhY2lvblxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbiAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbi52YWxvciAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHVzZXIuTUFYX0hJU1QgIT09IG51bGwgJiZcclxuICAgICAgICB1c2VyLk1BWF9ISVNUICE9PSB1bmRlZmluZWQgJiYgLy8gU2UgYcOxYWRlIHVuYSBjb21wcm9iYWNpw7NuIGFkaWNpb25hbCBwb3Igc2kgYWNhc29cclxuICAgICAgICB1bHRpbW9WYWxvclByZWNpcGl0YWNpb24udmFsb3IgPiB1c2VyLk1BWF9ISVNUXHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICBjb25zdCB1bHRpbW9WYWxvclByZWNpcGl0YWNpb24gPSBvYnRlbmVyVWx0aW1vVmFsb3JQcmVjaXBpdGFjaW9uKFxyXG4gICAgICAgIHVzZXIucHJlY2lwaXRhY2lvblxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIERFUEFSVEFNRU5UTzogdXNlci5EUFRPLFxyXG4gICAgICAgIE1VTklDSVBJTzogdXNlci5NVU5JQ0lQSU8sXHJcbiAgICAgICAgRVNUQUNJT046IHVzZXIuRVNUQUNJT04sXHJcbiAgICAgICAgVUxUSU1PX1ZBTE9SOiB1bHRpbW9WYWxvclByZWNpcGl0YWNpb24/LnZhbG9yID8/IFwiTi9BXCIsXHJcblxyXG4gICAgICAgIE1BWF9ISVNUOiB1c2VyLk1BWF9ISVNULFxyXG4gICAgICAgIERJRkVSRU5DSUE6ICh1bHRpbW9WYWxvclByZWNpcGl0YWNpb24/LnZhbG9yID8/IDApIC0gdXNlci5NQVhfSElTVCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICBpZiAoZXN0YWNpb25lc1F1ZVN1cGVyYW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXItMTAgbWQ6bXItMTAgbXQtMiBtZDptdC0xMCBpdGVtcy1jZW50ZXIgbWF4LXcteHMgc206bWF4LXctc20gbWQ6bWF4LXctbWQgbGc6bWF4LXctbGcgeGw6bWF4LXcteGwgcC0yIG1kOnAtNCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWN5YW4tMjAwIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmcteWVsbG93LTMwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICBFbCBkw61hIGRlIGhveSBubyBzZSBzdXBlcmFyb24gcmVnaXN0cm9zIGhpc3TDs3JpY29zLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCIgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgbXQtMjAgbXItM1wiPlxyXG4gICAgICAgIDxjYXB0aW9uIGNsYXNzTmFtZT1cImNhcHRpb24tdG9wIG10LTIgdGV4dC1zbGF0ZS01MDAgbWItNCBcIj5cclxuICAgICAgICAgIFZhbG9yZXMgZGUgcHJlY2lwaXRhY2nDs24gcXVlIHN1cGVyYXJvbiBlbCBtw6F4aW1vIGhpc3RvzIFyaWNvIGVsIGTDrWEgZGVcclxuICAgICAgICAgIGhveVxyXG4gICAgICAgIDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB5LTMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgIERFUEFSVEFNRU5UT1xyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweS0zIHB4LTZcIj5cclxuICAgICAgICAgICAgICBNVU5JQ0lQSU9cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHktMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgRVNUQUNJw5NOXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB5LTMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgIMOaTFRJTU8gVkFMT1IgKG1tKVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweS0zIHB4LTZcIj5cclxuICAgICAgICAgICAgICBNQVhfSElTVCAobW0pXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB5LTMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgIERJRkVSRU5DSUEgKG1tKVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtlc3RhY2lvbmVzUXVlU3VwZXJhbi5tYXAoKGVzdGFjaW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1iIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTQgcHgtNlwiPntlc3RhY2lvbi5ERVBBUlRBTUVOVE99PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNCBweC02XCI+e2VzdGFjaW9uLk1VTklDSVBJT308L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS00IHB4LTZcIj57ZXN0YWNpb24uRVNUQUNJT059PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNCBweC02XCI+e2VzdGFjaW9uLlVMVElNT19WQUxPUn08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS00IHB4LTZcIj57ZXN0YWNpb24uTUFYX0hJU1R9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNCBweC02XCI+e2VzdGFjaW9uLkRJRkVSRU5DSUF9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXN0YWNpb25lc1N1cGVyYW5NYXhQcmVjO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJvYnRlbmVyVWx0aW1vVmFsb3JQcmVjaXBpdGFjaW9uIiwiRXN0YWNpb25lc1N1cGVyYW5NYXhQcmVjIiwidXNlcnMiLCJlc3RhY2lvbmVzUXVlU3VwZXJhbiIsImZpbHRlciIsInVzZXIiLCJ1bHRpbW9WYWxvclByZWNpcGl0YWNpb24iLCJwcmVjaXBpdGFjaW9uIiwidmFsb3IiLCJNQVhfSElTVCIsInVuZGVmaW5lZCIsIm1hcCIsIkRFUEFSVEFNRU5UTyIsIkRQVE8iLCJNVU5JQ0lQSU8iLCJFU1RBQ0lPTiIsIlVMVElNT19WQUxPUiIsIkRJRkVSRU5DSUEiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidGFibGUiLCJjYXB0aW9uIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsImVzdGFjaW9uIiwiaW5kZXgiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/precipitacionhistorica.tsx\n"));

/***/ })

});