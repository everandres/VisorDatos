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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _funciones_ultimodia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funciones/ultimodia */ \"(app-pages-browser)/./src/app/funciones/ultimodia.ts\");\n\n\n\nconst EstacionesSuperanMaxPrec = (param)=>{\n    let { users } = param;\n    const estacionesQueSuperan = users.filter((user)=>{\n        const ultimoValorPrecipitacion = (0,_funciones_ultimodia__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user.precipitacion);\n        return ultimoValorPrecipitacion !== null && ultimoValorPrecipitacion.valor !== null && user.MAX_HIST !== null && user.MAX_HIST !== undefined && // Se añade una comprobación adicional por si acaso\n        ultimoValorPrecipitacion.valor > user.MAX_HIST;\n    }).map((user)=>{\n        const ultimoValorPrecipitacion = (0,_funciones_ultimodia__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user.precipitacion);\n        var _ultimoValorPrecipitacion_valor, _ultimoValorPrecipitacion_valor1;\n        return {\n            DEPARTAMENTO: user.DPTO,\n            MUNICIPIO: user.MUNICIPIO,\n            ESTACION: user.ESTACION,\n            ULTIMO_VALOR: (_ultimoValorPrecipitacion_valor = ultimoValorPrecipitacion === null || ultimoValorPrecipitacion === void 0 ? void 0 : ultimoValorPrecipitacion.valor) !== null && _ultimoValorPrecipitacion_valor !== void 0 ? _ultimoValorPrecipitacion_valor : \"N/A\",\n            MAX_HIST: user.MAX_HIST,\n            DIFERENCIA: ((_ultimoValorPrecipitacion_valor1 = ultimoValorPrecipitacion === null || ultimoValorPrecipitacion === void 0 ? void 0 : ultimoValorPrecipitacion.valor) !== null && _ultimoValorPrecipitacion_valor1 !== void 0 ? _ultimoValorPrecipitacion_valor1 : 0) - user.MAX_HIST\n        };\n    });\n    if (estacionesQueSuperan.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center md:mr- md:mt-40  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2 md:p-4 bg-white border border-cyan-200 rounded-lg shadow dark:bg-yellow-300 dark:border-gray-700\",\n            style: {\n                maxHeight: \"100px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-500 dark:text-gray-400\",\n                children: \"El d\\xeda de hoy no se superaron registros hist\\xf3ricos.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \" text-sm text-left text-gray-500 dark:text-gray-400 mt-20 mr-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                    className: \"caption-top mt-2 text-slate-500 mb-4 \",\n                    children: \"Valores de precipitaci\\xf3n que superaron el m\\xe1ximo histórico el d\\xeda de hoy\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"DEPARTAMENTO\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"MUNICIPIO\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"ESTACI\\xd3N\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"\\xdaLTIMO VALOR (mm)\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"MAX_HIST (mm)\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"py-3 px-6\",\n                                children: \"DIFERENCIA (mm)\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: estacionesQueSuperan.map((estacion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"bg-white border-b dark:bg-gray-800 dark:border-gray-700\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.DEPARTAMENTO\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.MUNICIPIO\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.ESTACION\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.ULTIMO_VALOR\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.MAX_HIST\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"py-4 px-6\",\n                                    children: estacion.DIFERENCIA\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\precipitacionhistorica.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EstacionesSuperanMaxPrec;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EstacionesSuperanMaxPrec);\nvar _c;\n$RefreshReg$(_c, \"EstacionesSuperanMaxPrec\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmVjaXBpdGFjaW9uaGlzdG9yaWNhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMkM7QUFNckUsTUFBTUUsMkJBQWdFO1FBQUMsRUFDckVDLEtBQUssRUFDTjtJQUNDLE1BQU1DLHVCQUF1QkQsTUFDMUJFLE1BQU0sQ0FBQyxDQUFDQztRQUNQLE1BQU1DLDJCQUEyQk4sZ0VBQStCQSxDQUM5REssS0FBS0UsYUFBYTtRQUVwQixPQUNFRCw2QkFBNkIsUUFDN0JBLHlCQUF5QkUsS0FBSyxLQUFLLFFBQ25DSCxLQUFLSSxRQUFRLEtBQUssUUFDbEJKLEtBQUtJLFFBQVEsS0FBS0MsYUFBYSxtREFBbUQ7UUFDbEZKLHlCQUF5QkUsS0FBSyxHQUFHSCxLQUFLSSxRQUFRO0lBRWxELEdBQ0NFLEdBQUcsQ0FBQyxDQUFDTjtRQUNKLE1BQU1DLDJCQUEyQk4sZ0VBQStCQSxDQUM5REssS0FBS0UsYUFBYTtZQU1KRCxpQ0FHREE7UUFQZixPQUFPO1lBQ0xNLGNBQWNQLEtBQUtRLElBQUk7WUFDdkJDLFdBQVdULEtBQUtTLFNBQVM7WUFDekJDLFVBQVVWLEtBQUtVLFFBQVE7WUFDdkJDLGNBQWNWLENBQUFBLGtDQUFBQSxxQ0FBQUEsK0NBQUFBLHlCQUEwQkUsS0FBSyxjQUEvQkYsNkNBQUFBLGtDQUFtQztZQUVqREcsVUFBVUosS0FBS0ksUUFBUTtZQUN2QlEsWUFBWSxDQUFDWCxDQUFBQSxtQ0FBQUEscUNBQUFBLCtDQUFBQSx5QkFBMEJFLEtBQUssY0FBL0JGLDhDQUFBQSxtQ0FBbUMsS0FBS0QsS0FBS0ksUUFBUTtRQUNwRTtJQUNGO0lBRUYsSUFBSU4scUJBQXFCZSxNQUFNLEtBQUssR0FBRztRQUNyQyxxQkFDRSw4REFBQ0M7WUFDQ0MsV0FBVTtZQUNWQyxPQUFPO2dCQUFFQyxXQUFXO1lBQVE7c0JBRTVCLDRFQUFDQztnQkFBRUgsV0FBVTswQkFBbUM7Ozs7Ozs7Ozs7O0lBS3REO0lBRUEscUJBQ0UsOERBQUNEO2tCQUNDLDRFQUFDSztZQUFNSixXQUFVOzs4QkFDZiw4REFBQ0s7b0JBQVFMLFdBQVU7OEJBQXdDOzs7Ozs7OEJBSTNELDhEQUFDTTtvQkFBTU4sV0FBVTs4QkFDZiw0RUFBQ087OzBDQUNDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTVQsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ1E7Z0NBQUdDLE9BQU07Z0NBQU1ULFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNRO2dDQUFHQyxPQUFNO2dDQUFNVCxXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDUTtnQ0FBR0MsT0FBTTtnQ0FBTVQsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ1E7Z0NBQUdDLE9BQU07Z0NBQU1ULFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNRO2dDQUFHQyxPQUFNO2dDQUFNVCxXQUFVOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLMUMsOERBQUNVOzhCQUNFM0IscUJBQXFCUSxHQUFHLENBQUMsQ0FBQ29CLFVBQVVDLHNCQUNuQyw4REFBQ0w7NEJBRUNQLFdBQVU7OzhDQUVWLDhEQUFDYTtvQ0FBR2IsV0FBVTs4Q0FBYVcsU0FBU25CLFlBQVk7Ozs7Ozs4Q0FDaEQsOERBQUNxQjtvQ0FBR2IsV0FBVTs4Q0FBYVcsU0FBU2pCLFNBQVM7Ozs7Ozs4Q0FDN0MsOERBQUNtQjtvQ0FBR2IsV0FBVTs4Q0FBYVcsU0FBU2hCLFFBQVE7Ozs7Ozs4Q0FDNUMsOERBQUNrQjtvQ0FBR2IsV0FBVTs4Q0FBYVcsU0FBU2YsWUFBWTs7Ozs7OzhDQUNoRCw4REFBQ2lCO29DQUFHYixXQUFVOzhDQUFhVyxTQUFTdEIsUUFBUTs7Ozs7OzhDQUM1Qyw4REFBQ3dCO29DQUFHYixXQUFVOzhDQUFhVyxTQUFTZCxVQUFVOzs7Ozs7OzJCQVJ6Q2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVuQjtLQTNGTS9CO0FBNkZOLCtEQUFlQSx3QkFBd0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3ByZWNpcGl0YWNpb25oaXN0b3JpY2EudHN4PzlhMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLyhtb2RlbCkvY29uZXhpb25cIjsgLy8gQWp1c3RhIGxhIHJ1dGEgc2Vnw7puIGxhIHViaWNhY2nDs24gZGUgdHUgbW9kZWxvXHJcbmltcG9ydCBvYnRlbmVyVWx0aW1vVmFsb3JQcmVjaXBpdGFjaW9uIGZyb20gXCIuLi9mdW5jaW9uZXMvdWx0aW1vZGlhXCI7XHJcblxyXG5pbnRlcmZhY2UgRXN0YWNpb25lc1N1cGVyYW5NYXhQcm9wcyB7XHJcbiAgdXNlcnM6IFVzZXJbXTtcclxufVxyXG5cclxuY29uc3QgRXN0YWNpb25lc1N1cGVyYW5NYXhQcmVjOiBSZWFjdC5GQzxFc3RhY2lvbmVzU3VwZXJhbk1heFByb3BzPiA9ICh7XHJcbiAgdXNlcnMsXHJcbn0pID0+IHtcclxuICBjb25zdCBlc3RhY2lvbmVzUXVlU3VwZXJhbiA9IHVzZXJzXHJcbiAgICAuZmlsdGVyKCh1c2VyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbiA9IG9idGVuZXJVbHRpbW9WYWxvclByZWNpcGl0YWNpb24oXHJcbiAgICAgICAgdXNlci5wcmVjaXBpdGFjaW9uXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgdWx0aW1vVmFsb3JQcmVjaXBpdGFjaW9uICE9PSBudWxsICYmXHJcbiAgICAgICAgdWx0aW1vVmFsb3JQcmVjaXBpdGFjaW9uLnZhbG9yICE9PSBudWxsICYmXHJcbiAgICAgICAgdXNlci5NQVhfSElTVCAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHVzZXIuTUFYX0hJU1QgIT09IHVuZGVmaW5lZCAmJiAvLyBTZSBhw7FhZGUgdW5hIGNvbXByb2JhY2nDs24gYWRpY2lvbmFsIHBvciBzaSBhY2Fzb1xyXG4gICAgICAgIHVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbi52YWxvciA+IHVzZXIuTUFYX0hJU1RcclxuICAgICAgKTtcclxuICAgIH0pXHJcbiAgICAubWFwKCh1c2VyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbiA9IG9idGVuZXJVbHRpbW9WYWxvclByZWNpcGl0YWNpb24oXHJcbiAgICAgICAgdXNlci5wcmVjaXBpdGFjaW9uXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgREVQQVJUQU1FTlRPOiB1c2VyLkRQVE8sXHJcbiAgICAgICAgTVVOSUNJUElPOiB1c2VyLk1VTklDSVBJTyxcclxuICAgICAgICBFU1RBQ0lPTjogdXNlci5FU1RBQ0lPTixcclxuICAgICAgICBVTFRJTU9fVkFMT1I6IHVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbj8udmFsb3IgPz8gXCJOL0FcIixcclxuXHJcbiAgICAgICAgTUFYX0hJU1Q6IHVzZXIuTUFYX0hJU1QsXHJcbiAgICAgICAgRElGRVJFTkNJQTogKHVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbj8udmFsb3IgPz8gMCkgLSB1c2VyLk1BWF9ISVNULFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gIGlmIChlc3RhY2lvbmVzUXVlU3VwZXJhbi5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtZDptci0gbWQ6bXQtNDAgIG1heC13LXhzIHNtOm1heC13LXNtIG1kOm1heC13LW1kIGxnOm1heC13LWxnIHhsOm1heC13LXhsIHAtMiBtZDpwLTQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1jeWFuLTIwMCByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLXllbGxvdy0zMDAgZGFyazpib3JkZXItZ3JheS03MDBcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogXCIxMDBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgRWwgZMOtYSBkZSBob3kgbm8gc2Ugc3VwZXJhcm9uIHJlZ2lzdHJvcyBoaXN0w7NyaWNvcy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIG10LTIwIG1yLTNcIj5cclxuICAgICAgICA8Y2FwdGlvbiBjbGFzc05hbWU9XCJjYXB0aW9uLXRvcCBtdC0yIHRleHQtc2xhdGUtNTAwIG1iLTQgXCI+XHJcbiAgICAgICAgICBWYWxvcmVzIGRlIHByZWNpcGl0YWNpw7NuIHF1ZSBzdXBlcmFyb24gZWwgbcOheGltbyBoaXN0b8yBcmljbyBlbCBkw61hIGRlXHJcbiAgICAgICAgICBob3lcclxuICAgICAgICA8L2NhcHRpb24+XHJcbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweS0zIHB4LTZcIj5cclxuICAgICAgICAgICAgICBERVBBUlRBTUVOVE9cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHktMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgTVVOSUNJUElPXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB5LTMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgIEVTVEFDScOTTlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweS0zIHB4LTZcIj5cclxuICAgICAgICAgICAgICDDmkxUSU1PIFZBTE9SIChtbSlcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHktMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgTUFYX0hJU1QgKG1tKVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweS0zIHB4LTZcIj5cclxuICAgICAgICAgICAgICBESUZFUkVOQ0lBIChtbSlcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7ZXN0YWNpb25lc1F1ZVN1cGVyYW4ubWFwKChlc3RhY2lvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS00IHB4LTZcIj57ZXN0YWNpb24uREVQQVJUQU1FTlRPfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTQgcHgtNlwiPntlc3RhY2lvbi5NVU5JQ0lQSU99PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNCBweC02XCI+e2VzdGFjaW9uLkVTVEFDSU9OfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTQgcHgtNlwiPntlc3RhY2lvbi5VTFRJTU9fVkFMT1J9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNCBweC02XCI+e2VzdGFjaW9uLk1BWF9ISVNUfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTQgcHgtNlwiPntlc3RhY2lvbi5ESUZFUkVOQ0lBfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVzdGFjaW9uZXNTdXBlcmFuTWF4UHJlYztcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwib2J0ZW5lclVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbiIsIkVzdGFjaW9uZXNTdXBlcmFuTWF4UHJlYyIsInVzZXJzIiwiZXN0YWNpb25lc1F1ZVN1cGVyYW4iLCJmaWx0ZXIiLCJ1c2VyIiwidWx0aW1vVmFsb3JQcmVjaXBpdGFjaW9uIiwicHJlY2lwaXRhY2lvbiIsInZhbG9yIiwiTUFYX0hJU1QiLCJ1bmRlZmluZWQiLCJtYXAiLCJERVBBUlRBTUVOVE8iLCJEUFRPIiwiTVVOSUNJUElPIiwiRVNUQUNJT04iLCJVTFRJTU9fVkFMT1IiLCJESUZFUkVOQ0lBIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJwIiwidGFibGUiLCJjYXB0aW9uIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsImVzdGFjaW9uIiwiaW5kZXgiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/precipitacionhistorica.tsx\n"));

/***/ })

});