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

/***/ "(app-pages-browser)/./src/app/components/tablaprecipitacion.tsx":
/*!***************************************************!*\
  !*** ./src/app/components/tablaprecipitacion.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _funciones_ultimodia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funciones/ultimodia */ \"(app-pages-browser)/./src/app/funciones/ultimodia.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst TablaPrecipitaciones = (param)=>{\n    let { users } = param;\n    _s();\n    // Estado para manejar el valor de filtro ingresado por el usuario\n    const [valorFiltro, setValorFiltro] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(35);\n    const filtrarYProcesarDatos = (valor)=>{\n        return users.reduce((acum, user)=>{\n            const ultimaPrecipitacion = (0,_funciones_ultimodia__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user.precipitacion);\n            if (ultimaPrecipitacion && ultimaPrecipitacion.valor && ultimaPrecipitacion.valor > valor) {\n                const { DPTO, MUNICIPIO } = user;\n                if (!acum[DPTO]) {\n                    acum[DPTO] = {};\n                }\n                if (!acum[DPTO][MUNICIPIO]) {\n                    acum[DPTO][MUNICIPIO] = [];\n                }\n                acum[DPTO][MUNICIPIO].push(ultimaPrecipitacion.valor);\n            }\n            return acum;\n        }, {});\n    };\n    const datosFiltrados = filtrarYProcesarDatos(valorFiltro);\n    const datosParaMostrar = Object.entries(datosFiltrados).map((param)=>{\n        let [departamento, municipios] = param;\n        const municipiosYValores = Object.entries(municipios).map((param)=>{\n            let [municipio, valores] = param;\n            return \"\".concat(municipio, \" (\").concat(valores.join(\", \"), \")\");\n        }).join(\", \");\n        return {\n            departamento,\n            municipiosYValores\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"filtroValor\",\n                className: \"w-15\",\n                children: [\n                    \"Valor de precipitaci\\xf3n para filtrar (mm):\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-15 \",\n                        type: \"number\",\n                        id: \"filtroValor\",\n                        value: valorFiltro,\n                        onChange: (e)=>setValorFiltro(Number(e.target.value)),\n                        style: {\n                            marginLeft: \"10px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"DEPARTAMENTO\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"MUNICIPIO\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: datosParaMostrar.map((dato, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: dato.departamento\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: dato.municipiosYValores\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\tablaprecipitacion.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TablaPrecipitaciones, \"eWaSDEFATSVUDQRydjxrIzsYbbA=\");\n_c = TablaPrecipitaciones;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TablaPrecipitaciones);\nvar _c;\n$RefreshReg$(_c, \"TablaPrecipitaciones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy90YWJsYXByZWNpcGl0YWNpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFNkI7QUFNckUsTUFBTUcsdUJBQTREO1FBQUMsRUFDakVDLEtBQUssRUFDTjs7SUFDQyxrRUFBa0U7SUFDbEUsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1NLHdCQUF3QixDQUFDQztRQUM3QixPQUFPSixNQUFNSyxNQUFNLENBQUMsQ0FBQ0MsTUFBTUM7WUFDekIsTUFBTUMsc0JBQXNCVixnRUFBK0JBLENBQ3pEUyxLQUFLRSxhQUFhO1lBRXBCLElBQ0VELHVCQUNBQSxvQkFBb0JKLEtBQUssSUFDekJJLG9CQUFvQkosS0FBSyxHQUFHQSxPQUM1QjtnQkFDQSxNQUFNLEVBQUVNLElBQUksRUFBRUMsU0FBUyxFQUFFLEdBQUdKO2dCQUM1QixJQUFJLENBQUNELElBQUksQ0FBQ0ksS0FBSyxFQUFFO29CQUNmSixJQUFJLENBQUNJLEtBQUssR0FBRyxDQUFDO2dCQUNoQjtnQkFDQSxJQUFJLENBQUNKLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxVQUFVLEVBQUU7b0JBQzFCTCxJQUFJLENBQUNJLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEVBQUU7Z0JBQzVCO2dCQUNBTCxJQUFJLENBQUNJLEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxJQUFJLENBQUNKLG9CQUFvQkosS0FBSztZQUN0RDtZQUNBLE9BQU9FO1FBQ1QsR0FBRyxDQUFDO0lBQ047SUFFQSxNQUFNTyxpQkFBaUJWLHNCQUFzQkY7SUFFN0MsTUFBTWEsbUJBQW1CQyxPQUFPQyxPQUFPLENBQUNILGdCQUFnQkksR0FBRyxDQUN6RDtZQUFDLENBQUNDLGNBQWNDLFdBQVc7UUFDekIsTUFBTUMscUJBQXFCTCxPQUFPQyxPQUFPLENBQUNHLFlBQ3ZDRixHQUFHLENBQUM7Z0JBQUMsQ0FBQ0ksV0FBV0MsUUFBUTtZQUN4QixPQUFPLEdBQWlCQSxPQUFkRCxXQUFVLE1BQXVCLE9BQW5CQyxRQUFRQyxJQUFJLENBQUMsT0FBTTtRQUM3QyxHQUNDQSxJQUFJLENBQUM7UUFDUixPQUFPO1lBQ0xMO1lBQ0FFO1FBQ0Y7SUFDRjtJQUdGLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDO2dCQUFNQyxTQUFRO2dCQUFjQyxXQUFVOztvQkFBTztrQ0FFNUMsOERBQUNDO3dCQUNDRCxXQUFVO3dCQUNWRSxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIQyxPQUFPOUI7d0JBQ1ArQixVQUFVLENBQUNDLElBQU0vQixlQUFlZ0MsT0FBT0QsRUFBRUUsTUFBTSxDQUFDSixLQUFLO3dCQUNyREssT0FBTzs0QkFBRUMsWUFBWTt3QkFBTzs7Ozs7Ozs7Ozs7OzBCQUdoQyw4REFBQ0M7Z0JBQU1YLFdBQVU7O2tDQUNmLDhEQUFDWTtrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNFNUIsaUJBQWlCRyxHQUFHLENBQUMsQ0FBQzBCLE1BQU1DLHNCQUMzQiw4REFBQ0o7O2tEQUNDLDhEQUFDSztrREFBSUYsS0FBS3pCLFlBQVk7Ozs7OztrREFDdEIsOERBQUMyQjtrREFBSUYsS0FBS3ZCLGtCQUFrQjs7Ozs7OzsrQkFGckJ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNyQjtHQTVFTTdDO0tBQUFBO0FBOEVOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3RhYmxhcHJlY2lwaXRhY2lvbi50c3g/MTUzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8obW9kZWwpL2NvbmV4aW9uXCI7XHJcbmltcG9ydCBvYnRlbmVyVWx0aW1vVmFsb3JQcmVjaXBpdGFjaW9uIGZyb20gXCIuLi9mdW5jaW9uZXMvdWx0aW1vZGlhXCI7XHJcblxyXG5pbnRlcmZhY2UgVGFibGFQcmVjaXBpdGFjaW9uZXNQcm9wcyB7XHJcbiAgdXNlcnM6IFVzZXJbXTtcclxufVxyXG5cclxuY29uc3QgVGFibGFQcmVjaXBpdGFjaW9uZXM6IFJlYWN0LkZDPFRhYmxhUHJlY2lwaXRhY2lvbmVzUHJvcHM+ID0gKHtcclxuICB1c2VycyxcclxufSkgPT4ge1xyXG4gIC8vIEVzdGFkbyBwYXJhIG1hbmVqYXIgZWwgdmFsb3IgZGUgZmlsdHJvIGluZ3Jlc2FkbyBwb3IgZWwgdXN1YXJpb1xyXG4gIGNvbnN0IFt2YWxvckZpbHRybywgc2V0VmFsb3JGaWx0cm9dID0gdXNlU3RhdGUoMzUpO1xyXG5cclxuICBjb25zdCBmaWx0cmFyWVByb2Nlc2FyRGF0b3MgPSAodmFsb3I6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIHVzZXJzLnJlZHVjZSgoYWN1bSwgdXNlcikgPT4ge1xyXG4gICAgICBjb25zdCB1bHRpbWFQcmVjaXBpdGFjaW9uID0gb2J0ZW5lclVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbihcclxuICAgICAgICB1c2VyLnByZWNpcGl0YWNpb25cclxuICAgICAgKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHVsdGltYVByZWNpcGl0YWNpb24gJiZcclxuICAgICAgICB1bHRpbWFQcmVjaXBpdGFjaW9uLnZhbG9yICYmXHJcbiAgICAgICAgdWx0aW1hUHJlY2lwaXRhY2lvbi52YWxvciA+IHZhbG9yXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IHsgRFBUTywgTVVOSUNJUElPIH0gPSB1c2VyO1xyXG4gICAgICAgIGlmICghYWN1bVtEUFRPXSkge1xyXG4gICAgICAgICAgYWN1bVtEUFRPXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFjdW1bRFBUT11bTVVOSUNJUElPXSkge1xyXG4gICAgICAgICAgYWN1bVtEUFRPXVtNVU5JQ0lQSU9dID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjdW1bRFBUT11bTVVOSUNJUElPXS5wdXNoKHVsdGltYVByZWNpcGl0YWNpb24udmFsb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhY3VtO1xyXG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgbnVtYmVyW10+Pik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0b3NGaWx0cmFkb3MgPSBmaWx0cmFyWVByb2Nlc2FyRGF0b3ModmFsb3JGaWx0cm8pO1xyXG5cclxuICBjb25zdCBkYXRvc1BhcmFNb3N0cmFyID0gT2JqZWN0LmVudHJpZXMoZGF0b3NGaWx0cmFkb3MpLm1hcChcclxuICAgIChbZGVwYXJ0YW1lbnRvLCBtdW5pY2lwaW9zXSkgPT4ge1xyXG4gICAgICBjb25zdCBtdW5pY2lwaW9zWVZhbG9yZXMgPSBPYmplY3QuZW50cmllcyhtdW5pY2lwaW9zKVxyXG4gICAgICAgIC5tYXAoKFttdW5pY2lwaW8sIHZhbG9yZXNdKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gYCR7bXVuaWNpcGlvfSAoJHt2YWxvcmVzLmpvaW4oXCIsIFwiKX0pYDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiLCBcIik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGVwYXJ0YW1lbnRvLFxyXG4gICAgICAgIG11bmljaXBpb3NZVmFsb3JlcyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWx0cm9WYWxvclwiIGNsYXNzTmFtZT1cInctMTVcIj5cclxuICAgICAgICBWYWxvciBkZSBwcmVjaXBpdGFjacOzbiBwYXJhIGZpbHRyYXIgKG1tKTpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTUgXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgaWQ9XCJmaWx0cm9WYWxvclwiXHJcbiAgICAgICAgICB2YWx1ZT17dmFsb3JGaWx0cm99XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbG9yRmlsdHJvKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYXV0b1wiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkRFUEFSVEFNRU5UTzwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5NVU5JQ0lQSU88L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtkYXRvc1BhcmFNb3N0cmFyLm1hcCgoZGF0bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDx0ZD57ZGF0by5kZXBhcnRhbWVudG99PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2RhdG8ubXVuaWNpcGlvc1lWYWxvcmVzfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxhUHJlY2lwaXRhY2lvbmVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9idGVuZXJVbHRpbW9WYWxvclByZWNpcGl0YWNpb24iLCJUYWJsYVByZWNpcGl0YWNpb25lcyIsInVzZXJzIiwidmFsb3JGaWx0cm8iLCJzZXRWYWxvckZpbHRybyIsImZpbHRyYXJZUHJvY2VzYXJEYXRvcyIsInZhbG9yIiwicmVkdWNlIiwiYWN1bSIsInVzZXIiLCJ1bHRpbWFQcmVjaXBpdGFjaW9uIiwicHJlY2lwaXRhY2lvbiIsIkRQVE8iLCJNVU5JQ0lQSU8iLCJwdXNoIiwiZGF0b3NGaWx0cmFkb3MiLCJkYXRvc1BhcmFNb3N0cmFyIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImRlcGFydGFtZW50byIsIm11bmljaXBpb3MiLCJtdW5pY2lwaW9zWVZhbG9yZXMiLCJtdW5pY2lwaW8iLCJ2YWxvcmVzIiwiam9pbiIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwiZGF0byIsImluZGV4IiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/tablaprecipitacion.tsx\n"));

/***/ })

});