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

/***/ "(app-pages-browser)/./src/app/components/mapaestaciones.tsx":
/*!***********************************************!*\
  !*** ./src/app/components/mapaestaciones.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/CircleMarker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Tooltip.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/styles.css */ \"(app-pages-browser)/./src/app/css/styles.css\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet-cluster */ \"(app-pages-browser)/./node_modules/react-leaflet-cluster/lib/index.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n // Asegúrate de tener la importación correcta\nconst EstacionesMapa = (param)=>{\n    let { users } = param;\n    const defaultPosition = [\n        4.60971,\n        -74.08175\n    ]; // Ejemplo: Bogotá, Colombia. Ajusta según tus necesidades.\n    const obtenerUltimoValorPrecipitacion = (precipitaciones)=>{\n        if (precipitaciones.length === 0) return null;\n        const ultimaPrecipitacion = precipitaciones[precipitaciones.length - 1];\n        const dia = Object.keys(ultimaPrecipitacion)[0];\n        const valor = ultimaPrecipitacion[dia] !== undefined ? ultimaPrecipitacion[dia] : null;\n        return {\n            dia,\n            valor\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n        center: defaultPosition,\n        zoom: 8,\n        style: {\n            height: \"100%\",\n            width: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\",\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: users.map((user, index)=>{\n                    const ultimaPrecipitacion = obtenerUltimoValorPrecipitacion(user.precipitacion);\n                    let fillColor = \"#1779ba\"; // Azul por defecto para valores de 0 a 25\n                    if (ultimaPrecipitacion === null) {\n                        fillColor = \"#808080\"; // Gris si no hay datos de precipitación\n                    } else {\n                        // Verifica que 'valor' no sea 'undefined' antes de comparar\n                        const valor = ultimaPrecipitacion.valor !== undefined ? ultimaPrecipitacion.valor : null;\n                        // Determina el color basado en el rango de valor, considerando también si MAX_HIST es nulo\n                        if (valor !== null) {\n                            const superaMaxHist = user.MAX_HIST === null || valor > user.MAX_HIST;\n                            if (valor > 50 && !superaMaxHist) {\n                                fillColor = \"#ff0000\"; // Rojo si es mayor a 50 y no supera MAX_HIST o si MAX_HIST es nulo\n                            } else if (valor > 25) {\n                                fillColor = \"#008000\"; // Verde si es de 25 a 50\n                            } else if (valor <= 25) {\n                                fillColor = \"#1779ba\"; // Azul por defecto para valores de 0 a 25\n                            }\n                            // Aplica color morado si el valor supera MAX_HIST y MAX_HIST no es nulo\n                            if (superaMaxHist && user.MAX_HIST !== null) {\n                                fillColor = \"#800080\"; // Morado si supera el MAX_HIST y MAX_HIST no es nulo\n                            }\n                        } else {\n                            fillColor = \"#808080\"; // Gris si el último valor es nulo\n                        }\n                    }\n                    var _user_ELEV, _user_MAX_HIST, _ultimaPrecipitacion_valor, _ultimaPrecipitacion_dia;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.CircleMarker, {\n                        center: [\n                            user.LAT,\n                            user.LON\n                        ],\n                        radius: 10,\n                        fillOpacity: 0.5,\n                        fillColor: fillColor,\n                        color: fillColor,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {\n                            className: \"tooltipCustom\",\n                            direction: \"top\",\n                            offset: [\n                                0,\n                                -10\n                            ],\n                            opacity: 1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Estaci\\xf3n: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 17\n                                }, undefined),\n                                user.ESTACION,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 17\n                                }, undefined),\n                                \"Departamento: \",\n                                user.DPTO,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 17\n                                }, undefined),\n                                \"Municipio: \",\n                                user.MUNICIPIO,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 17\n                                }, undefined),\n                                \"Elevaci\\xf3n: \",\n                                (_user_ELEV = user.ELEV) !== null && _user_ELEV !== void 0 ? _user_ELEV : \"Sin informaci\\xf3n\",\n                                \" m\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 62\n                                }, undefined),\n                                \"Max Hist: \",\n                                (_user_MAX_HIST = user.MAX_HIST) !== null && _user_MAX_HIST !== void 0 ? _user_MAX_HIST : \"Sin informaci\\xf3n\",\n                                \" mm\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 17\n                                }, undefined),\n                                \"\\xdaltima Precipitaci\\xf3n:\",\n                                \" \",\n                                (_ultimaPrecipitacion_valor = ultimaPrecipitacion === null || ultimaPrecipitacion === void 0 ? void 0 : ultimaPrecipitacion.valor) !== null && _ultimaPrecipitacion_valor !== void 0 ? _ultimaPrecipitacion_valor : \"Sin informaci\\xf3n\",\n                                \" mm\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 17\n                                }, undefined),\n                                \"D\\xeda del mes: \",\n                                (_ultimaPrecipitacion_dia = ultimaPrecipitacion === null || ultimaPrecipitacion === void 0 ? void 0 : ultimaPrecipitacion.dia) !== null && _ultimaPrecipitacion_dia !== void 0 ? _ultimaPrecipitacion_dia : \"Sin informaci\\xf3n\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\mapaestaciones.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EstacionesMapa;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EstacionesMapa);\nvar _c;\n$RefreshReg$(_c, \"EstacionesMapa\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXBhZXN0YWNpb25lcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNxRDtBQUU3QztBQUNQO0FBSTRCLENBQUMsNkNBQTZDO0FBZ0JyRyxNQUFNTSxpQkFBZ0Q7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDOUQsTUFBTUMsa0JBQW9DO1FBQUM7UUFBUyxDQUFDO0tBQVMsRUFBRSwyREFBMkQ7SUFFM0gsTUFBTUMsa0NBQWtDLENBQ3RDQztRQUVBLElBQUlBLGdCQUFnQkMsTUFBTSxLQUFLLEdBQUcsT0FBTztRQUN6QyxNQUFNQyxzQkFBc0JGLGVBQWUsQ0FBQ0EsZ0JBQWdCQyxNQUFNLEdBQUcsRUFBRTtRQUN2RSxNQUFNRSxNQUFNQyxPQUFPQyxJQUFJLENBQUNILG9CQUFvQixDQUFDLEVBQUU7UUFDL0MsTUFBTUksUUFDSkosbUJBQW1CLENBQUNDLElBQUksS0FBS0ksWUFBWUwsbUJBQW1CLENBQUNDLElBQUksR0FBRztRQUN0RSxPQUFPO1lBQUVBO1lBQUtHO1FBQU07SUFDdEI7SUFFQSxxQkFDRSw4REFBQ2YsdURBQVlBO1FBQ1hpQixRQUFRVjtRQUNSVyxNQUFNO1FBQ05DLE9BQU87WUFBRUMsUUFBUTtZQUFRQyxPQUFPO1FBQU87OzBCQUV2Qyw4REFBQ3BCLG9EQUFTQTtnQkFDUnFCLEtBQUk7Z0JBQ0pDLGFBQVk7Ozs7OzswQkFFZCw4REFBQ25CLDhEQUFrQkE7MEJBQ2hCRSxNQUFNa0IsR0FBRyxDQUFDLENBQUNDLE1BQW9CQztvQkFDOUIsTUFBTWYsc0JBQXNCSCxnQ0FDMUJpQixLQUFLRSxhQUFhO29CQUVwQixJQUFJQyxZQUFZLFdBQVcsMENBQTBDO29CQUVyRSxJQUFJakIsd0JBQXdCLE1BQU07d0JBQ2hDaUIsWUFBWSxXQUFXLHdDQUF3QztvQkFDakUsT0FBTzt3QkFDTCw0REFBNEQ7d0JBQzVELE1BQU1iLFFBQ0pKLG9CQUFvQkksS0FBSyxLQUFLQyxZQUMxQkwsb0JBQW9CSSxLQUFLLEdBQ3pCO3dCQUNOLDJGQUEyRjt3QkFDM0YsSUFBSUEsVUFBVSxNQUFNOzRCQUNsQixNQUFNYyxnQkFDSkosS0FBS0ssUUFBUSxLQUFLLFFBQVFmLFFBQVFVLEtBQUtLLFFBQVE7NEJBRWpELElBQUlmLFFBQVEsTUFBTSxDQUFDYyxlQUFlO2dDQUNoQ0QsWUFBWSxXQUFXLG1FQUFtRTs0QkFDNUYsT0FBTyxJQUFJYixRQUFRLElBQUk7Z0NBQ3JCYSxZQUFZLFdBQVcseUJBQXlCOzRCQUNsRCxPQUFPLElBQUliLFNBQVMsSUFBSTtnQ0FDdEJhLFlBQVksV0FBVywwQ0FBMEM7NEJBQ25FOzRCQUVBLHdFQUF3RTs0QkFDeEUsSUFBSUMsaUJBQWlCSixLQUFLSyxRQUFRLEtBQUssTUFBTTtnQ0FDM0NGLFlBQVksV0FBVyxxREFBcUQ7NEJBQzlFO3dCQUNGLE9BQU87NEJBQ0xBLFlBQVksV0FBVyxrQ0FBa0M7d0JBQzNEO29CQUNGO3dCQXdCa0JILFlBQ0RBLGdCQUdWZCw0QkFFYUE7b0JBNUJwQixxQkFDRSw4REFBQ1QsdURBQVlBO3dCQUVYZSxRQUFROzRCQUFDUSxLQUFLTSxHQUFHOzRCQUFFTixLQUFLTyxHQUFHO3lCQUFDO3dCQUM1QkMsUUFBUTt3QkFDUkMsYUFBYTt3QkFDYk4sV0FBV0E7d0JBQ1hPLE9BQU9QO2tDQUVQLDRFQUFDekIsa0RBQU9BOzRCQUNOaUMsV0FBVTs0QkFDVkMsV0FBVTs0QkFDVkMsUUFBUTtnQ0FBQztnQ0FBRyxDQUFDOzZCQUFHOzRCQUNoQkMsU0FBUzs7OENBRVQsOERBQUNDOzhDQUFPOzs7Ozs7Z0NBQ1BmLEtBQUtnQixRQUFROzhDQUNkLDhEQUFDQzs7Ozs7Z0NBQUs7Z0NBQ1NqQixLQUFLa0IsSUFBSTs4Q0FDeEIsOERBQUNEOzs7OztnQ0FBSztnQ0FDTWpCLEtBQUttQixTQUFTOzhDQUMxQiw4REFBQ0Y7Ozs7O2dDQUFLO2dDQUNNakIsQ0FBQUEsYUFBQUEsS0FBS29CLElBQUksY0FBVHBCLHdCQUFBQSxhQUFhO2dDQUFrQjs4Q0FBRSw4REFBQ2lCOzs7OztnQ0FBSztnQ0FDeENqQixDQUFBQSxpQkFBQUEsS0FBS0ssUUFBUSxjQUFiTCw0QkFBQUEsaUJBQWlCO2dDQUFrQjs4Q0FDOUMsOERBQUNpQjs7Ozs7Z0NBQUs7Z0NBQ2dCO2dDQUNyQi9CLENBQUFBLDZCQUFBQSxnQ0FBQUEsMENBQUFBLG9CQUFxQkksS0FBSyxjQUExQkosd0NBQUFBLDZCQUE4QjtnQ0FBa0I7OENBQ2pELDhEQUFDK0I7Ozs7O2dDQUFLO2dDQUNRL0IsQ0FBQUEsMkJBQUFBLGdDQUFBQSwwQ0FBQUEsb0JBQXFCQyxHQUFHLGNBQXhCRCxzQ0FBQUEsMkJBQTRCOzs7Ozs7O3VCQTFCdkNlOzs7OztnQkE4Qlg7Ozs7Ozs7Ozs7OztBQUlSO0tBakdNckI7QUFtR04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL21hcGFlc3RhY2lvbmVzLnRzeD85YjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIENpcmNsZU1hcmtlciwgVG9vbHRpcCB9IGZyb20gXCJyZWFjdC1sZWFmbGV0XCI7XHJcbmltcG9ydCBMIGZyb20gXCJsZWFmbGV0XCI7XHJcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGVzLmNzc1wiO1xyXG4vLyBBc2Vnw7pyYXRlIGRlIHRlbmVyIGxhIGltcG9ydGFjacOzbiBjb3JyZWN0YVxyXG4vLyBBc2Vnw7pyYXRlIGRlIGltcG9ydGFyIGxhIGludGVyZmF6IFVzZXIgZGVzZGUgc3UgdWJpY2FjacOzblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLyhtb2RlbCkvY29uZXhpb25cIjtcclxuaW1wb3J0IE1hcmtlckNsdXN0ZXJHcm91cCBmcm9tIFwicmVhY3QtbGVhZmxldC1jbHVzdGVyXCI7IC8vIEFzZWfDunJhdGUgZGUgdGVuZXIgbGEgaW1wb3J0YWNpw7NuIGNvcnJlY3RhXHJcblxyXG5pbnRlcmZhY2UgRXN0YWNpb25lc01hcGFQcm9wcyB7XHJcbiAgdXNlcnM6IFVzZXJbXTtcclxufVxyXG5cclxuLy8gQXNlZ3Vyw6FuZG9zZSBkZSBxdWUgbGEgZXN0cnVjdHVyYSBkZSBwcmVjaXBpdGFjaW9uZXMgc2UgYWRoaWVyZSBhIGxhIGludGVyZmF6IGVzcGVyYWRhXHJcbmludGVyZmFjZSBQcmVjaXBpdGFjaW9uIHtcclxuICBba2V5OiBzdHJpbmddOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIEFqdXN0YW5kbyBsYSBpbnRlcmZheiBkZSBVc2VyIHBhcmEgcmVmbGVqYXIgbGEgcHJvcGllZGFkIGRlIHByZWNpcGl0YWNpb25lcyBjb3JyZWN0YW1lbnRlXHJcbmludGVyZmFjZSBVc2VyQWRqdXN0ZWQgZXh0ZW5kcyBPbWl0PFVzZXIsIFwicHJlY2lwaXRhY2lvblwiPiB7XHJcbiAgcHJlY2lwaXRhY2lvbjogUHJlY2lwaXRhY2lvbltdO1xyXG59XHJcblxyXG5jb25zdCBFc3RhY2lvbmVzTWFwYTogUmVhY3QuRkM8RXN0YWNpb25lc01hcGFQcm9wcz4gPSAoeyB1c2VycyB9KSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdFBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdID0gWzQuNjA5NzEsIC03NC4wODE3NV07IC8vIEVqZW1wbG86IEJvZ290w6EsIENvbG9tYmlhLiBBanVzdGEgc2Vnw7puIHR1cyBuZWNlc2lkYWRlcy5cclxuXHJcbiAgY29uc3Qgb2J0ZW5lclVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbiA9IChcclxuICAgIHByZWNpcGl0YWNpb25lczogUHJlY2lwaXRhY2lvbltdXHJcbiAgKTogeyBkaWE6IHN0cmluZzsgdmFsb3I6IG51bWJlciB8IG51bGwgfSB8IG51bGwgPT4ge1xyXG4gICAgaWYgKHByZWNpcGl0YWNpb25lcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgdWx0aW1hUHJlY2lwaXRhY2lvbiA9IHByZWNpcGl0YWNpb25lc1twcmVjaXBpdGFjaW9uZXMubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCBkaWEgPSBPYmplY3Qua2V5cyh1bHRpbWFQcmVjaXBpdGFjaW9uKVswXTtcclxuICAgIGNvbnN0IHZhbG9yID1cclxuICAgICAgdWx0aW1hUHJlY2lwaXRhY2lvbltkaWFdICE9PSB1bmRlZmluZWQgPyB1bHRpbWFQcmVjaXBpdGFjaW9uW2RpYV0gOiBudWxsO1xyXG4gICAgcmV0dXJuIHsgZGlhLCB2YWxvciB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFwQ29udGFpbmVyXHJcbiAgICAgIGNlbnRlcj17ZGVmYXVsdFBvc2l0aW9ufVxyXG4gICAgICB6b29tPXs4fVxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgID5cclxuICAgICAgPFRpbGVMYXllclxyXG4gICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcclxuICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXHJcbiAgICAgIC8+XHJcbiAgICAgIDxNYXJrZXJDbHVzdGVyR3JvdXA+XHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcjogVXNlckFkanVzdGVkLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1bHRpbWFQcmVjaXBpdGFjaW9uID0gb2J0ZW5lclVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbihcclxuICAgICAgICAgICAgdXNlci5wcmVjaXBpdGFjaW9uXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbGV0IGZpbGxDb2xvciA9IFwiIzE3NzliYVwiOyAvLyBBenVsIHBvciBkZWZlY3RvIHBhcmEgdmFsb3JlcyBkZSAwIGEgMjVcclxuXHJcbiAgICAgICAgICBpZiAodWx0aW1hUHJlY2lwaXRhY2lvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmaWxsQ29sb3IgPSBcIiM4MDgwODBcIjsgLy8gR3JpcyBzaSBubyBoYXkgZGF0b3MgZGUgcHJlY2lwaXRhY2nDs25cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWNhIHF1ZSAndmFsb3InIG5vIHNlYSAndW5kZWZpbmVkJyBhbnRlcyBkZSBjb21wYXJhclxyXG4gICAgICAgICAgICBjb25zdCB2YWxvciA9XHJcbiAgICAgICAgICAgICAgdWx0aW1hUHJlY2lwaXRhY2lvbi52YWxvciAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHVsdGltYVByZWNpcGl0YWNpb24udmFsb3JcclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5hIGVsIGNvbG9yIGJhc2FkbyBlbiBlbCByYW5nbyBkZSB2YWxvciwgY29uc2lkZXJhbmRvIHRhbWJpw6luIHNpIE1BWF9ISVNUIGVzIG51bG9cclxuICAgICAgICAgICAgaWYgKHZhbG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJhTWF4SGlzdCA9XHJcbiAgICAgICAgICAgICAgICB1c2VyLk1BWF9ISVNUID09PSBudWxsIHx8IHZhbG9yID4gdXNlci5NQVhfSElTVDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHZhbG9yID4gNTAgJiYgIXN1cGVyYU1heEhpc3QpIHtcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IFwiI2ZmMDAwMFwiOyAvLyBSb2pvIHNpIGVzIG1heW9yIGEgNTAgeSBubyBzdXBlcmEgTUFYX0hJU1QgbyBzaSBNQVhfSElTVCBlcyBudWxvXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxvciA+IDI1KSB7XHJcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBcIiMwMDgwMDBcIjsgLy8gVmVyZGUgc2kgZXMgZGUgMjUgYSA1MFxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsb3IgPD0gMjUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IFwiIzE3NzliYVwiOyAvLyBBenVsIHBvciBkZWZlY3RvIHBhcmEgdmFsb3JlcyBkZSAwIGEgMjVcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIEFwbGljYSBjb2xvciBtb3JhZG8gc2kgZWwgdmFsb3Igc3VwZXJhIE1BWF9ISVNUIHkgTUFYX0hJU1Qgbm8gZXMgbnVsb1xyXG4gICAgICAgICAgICAgIGlmIChzdXBlcmFNYXhIaXN0ICYmIHVzZXIuTUFYX0hJU1QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IFwiIzgwMDA4MFwiOyAvLyBNb3JhZG8gc2kgc3VwZXJhIGVsIE1BWF9ISVNUIHkgTUFYX0hJU1Qgbm8gZXMgbnVsb1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBcIiM4MDgwODBcIjsgLy8gR3JpcyBzaSBlbCDDumx0aW1vIHZhbG9yIGVzIG51bG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDaXJjbGVNYXJrZXJcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNlbnRlcj17W3VzZXIuTEFULCB1c2VyLkxPTl19XHJcbiAgICAgICAgICAgICAgcmFkaXVzPXsxMH1cclxuICAgICAgICAgICAgICBmaWxsT3BhY2l0eT17MC41fVxyXG4gICAgICAgICAgICAgIGZpbGxDb2xvcj17ZmlsbENvbG9yfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtmaWxsQ29sb3J9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9vbHRpcEN1c3RvbVwiXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXtbMCwgLTEwXX1cclxuICAgICAgICAgICAgICAgIG9wYWNpdHk9ezF9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Fc3RhY2nDs246IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAge3VzZXIuRVNUQUNJT059XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIERlcGFydGFtZW50bzoge3VzZXIuRFBUT31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgTXVuaWNpcGlvOiB7dXNlci5NVU5JQ0lQSU99XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIEVsZXZhY2nDs246IHt1c2VyLkVMRVYgPz8gXCJTaW4gaW5mb3JtYWNpw7NuXCJ9IG08YnIgLz5cclxuICAgICAgICAgICAgICAgIE1heCBIaXN0OiB7dXNlci5NQVhfSElTVCA/PyBcIlNpbiBpbmZvcm1hY2nDs25cIn0gbW1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgw5psdGltYSBQcmVjaXBpdGFjacOzbjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7dWx0aW1hUHJlY2lwaXRhY2lvbj8udmFsb3IgPz8gXCJTaW4gaW5mb3JtYWNpw7NuXCJ9IG1tXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIETDrWEgZGVsIG1lczoge3VsdGltYVByZWNpcGl0YWNpb24/LmRpYSA/PyBcIlNpbiBpbmZvcm1hY2nDs25cIn1cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvQ2lyY2xlTWFya2VyPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9NYXJrZXJDbHVzdGVyR3JvdXA+XHJcbiAgICA8L01hcENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXN0YWNpb25lc01hcGE7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIkNpcmNsZU1hcmtlciIsIlRvb2x0aXAiLCJNYXJrZXJDbHVzdGVyR3JvdXAiLCJFc3RhY2lvbmVzTWFwYSIsInVzZXJzIiwiZGVmYXVsdFBvc2l0aW9uIiwib2J0ZW5lclVsdGltb1ZhbG9yUHJlY2lwaXRhY2lvbiIsInByZWNpcGl0YWNpb25lcyIsImxlbmd0aCIsInVsdGltYVByZWNpcGl0YWNpb24iLCJkaWEiLCJPYmplY3QiLCJrZXlzIiwidmFsb3IiLCJ1bmRlZmluZWQiLCJjZW50ZXIiLCJ6b29tIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInVybCIsImF0dHJpYnV0aW9uIiwibWFwIiwidXNlciIsImluZGV4IiwicHJlY2lwaXRhY2lvbiIsImZpbGxDb2xvciIsInN1cGVyYU1heEhpc3QiLCJNQVhfSElTVCIsIkxBVCIsIkxPTiIsInJhZGl1cyIsImZpbGxPcGFjaXR5IiwiY29sb3IiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJvZmZzZXQiLCJvcGFjaXR5Iiwic3Ryb25nIiwiRVNUQUNJT04iLCJiciIsIkRQVE8iLCJNVU5JQ0lQSU8iLCJFTEVWIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/mapaestaciones.tsx\n"));

/***/ })

});