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

/***/ "(app-pages-browser)/./src/app/components/graficabarras.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/graficabarras.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sumarPrecipitaciones: function() { return /* binding */ sumarPrecipitaciones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction sumarPrecipitaciones(users) {\n    const resultadosPorDia = {};\n    users.forEach((user)=>{\n        user.precipitacion.forEach((precipitacion)=>{\n            const [dia, valor] = Object.entries(precipitacion)[0];\n            if (valor !== null) {\n                // Asegura que solo cuente estaciones con datos no nulos\n                if (!resultadosPorDia[dia]) {\n                    resultadosPorDia[dia] = {\n                        suma: 0,\n                        estaciones: 0\n                    };\n                }\n                resultadosPorDia[dia].suma += valor;\n                resultadosPorDia[dia].estaciones += 1; // Contador de estaciones\n            }\n        });\n    });\n    return Object.entries(resultadosPorDia).map((param)=>{\n        let [dia, { suma, estaciones }] = param;\n        return {\n            dia,\n            suma,\n            estaciones\n        };\n    });\n}\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.defaults.font.family = \"Arial Narrow\";\nconst GraficaPrecipitacion = (param)=>{\n    let { datos } = param;\n    const opciones = {\n        responsive: true,\n        maintainAspectRatio: false,\n        animations: {\n            y: {\n                easing: \"easeInOutElastic\",\n                from: 0\n            }\n        },\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            tooltip: {\n                bodyFont: {\n                    family: \"Arial Narrow\",\n                    size: 18\n                }\n            },\n            title: {\n                display: true,\n                text: \"Precipitaci\\xf3n Total Acumulada Diaria\",\n                font: {\n                    size: 24\n                }\n            }\n        },\n        scales: {\n            y: {\n                grid: {\n                    display: false\n                },\n                title: {\n                    display: true,\n                    text: \"Precipitaci\\xf3n (mm)\",\n                    color: \"gray\",\n                    font: {\n                        size: 20\n                    }\n                }\n            },\n            x: {\n                grid: {\n                    display: false\n                },\n                title: {\n                    display: true,\n                    text: \"D\\xeda\",\n                    color: \"gray\",\n                    font: {\n                        size: 20\n                    }\n                }\n            }\n        }\n    };\n    const data = {\n        labels: datos.map((d)=>d.dia),\n        datasets: [\n            {\n                label: \"Precipitaci\\xf3n total acumulada (mm)\",\n                data: datos.map((d)=>d.suma),\n                backgroundColor: \"rgba(53, 162, 235, 0.5)\",\n                hoverOffset: 4,\n                hoverBackgroundColor: \"#3678A4\"\n            },\n            {\n                label: \"N\\xfamero de estaciones que reportaron dato\",\n                data: datos.map((d)=>d.estaciones),\n                backgroundColor: \"#6AE1AE\",\n                hoverOffset: 4,\n                hoverBackgroundColor: \"#70F570\"\n            }\n        ]\n    };\n    // Resto del componente sin cambios...\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[90%] h-[40vh] mt-10 mx-auto flex justify-bottom items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n            options: opciones,\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n            lineNumber: 147,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n        lineNumber: 146,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GraficaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GraficaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"GraficaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ1k7QUFVcEI7QUFFbEJHLDJDQUFPQSxDQUFDTyxRQUFRLENBQ2ROLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBVUQsU0FBU0UscUJBQXFCQyxLQUFhO0lBQ2hELE1BQU1DLG1CQUVGLENBQUM7SUFFTEQsTUFBTUUsT0FBTyxDQUFDLENBQUNDO1FBQ2JBLEtBQUtDLGFBQWEsQ0FBQ0YsT0FBTyxDQUFDLENBQUNFO1lBQzFCLE1BQU0sQ0FBQ0MsS0FBS0MsTUFBTSxHQUFHQyxPQUFPQyxPQUFPLENBQUNKLGNBQWMsQ0FBQyxFQUFFO1lBQ3JELElBQUlFLFVBQVUsTUFBTTtnQkFDbEIsd0RBQXdEO2dCQUN4RCxJQUFJLENBQUNMLGdCQUFnQixDQUFDSSxJQUFJLEVBQUU7b0JBQzFCSixnQkFBZ0IsQ0FBQ0ksSUFBSSxHQUFHO3dCQUFFSSxNQUFNO3dCQUFHQyxZQUFZO29CQUFFO2dCQUNuRDtnQkFDQVQsZ0JBQWdCLENBQUNJLElBQUksQ0FBQ0ksSUFBSSxJQUFJSDtnQkFDOUJMLGdCQUFnQixDQUFDSSxJQUFJLENBQUNLLFVBQVUsSUFBSSxHQUFHLHlCQUF5QjtZQUNsRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSCxPQUFPQyxPQUFPLENBQUNQLGtCQUFrQlUsR0FBRyxDQUN6QztZQUFDLENBQUNOLEtBQUssRUFBRUksSUFBSSxFQUFFQyxVQUFVLEVBQUUsQ0FBQztlQUFNO1lBQ2hDTDtZQUNBSTtZQUNBQztRQUNGOztBQUVKO0FBS0FuQiwyQ0FBT0EsQ0FBQ3FCLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEdBQUc7QUFFL0IsTUFBTUMsdUJBQTREO1FBQUMsRUFDakVDLEtBQUssRUFDTjtJQUNDLE1BQU1DLFdBQWdDO1FBQ3BDQyxZQUFZO1FBQ1pDLHFCQUFxQjtRQUNyQkMsWUFBWTtZQUNWQyxHQUFHO2dCQUNEQyxRQUFRO2dCQUNSQyxNQUFNO1lBQ1I7UUFDRjtRQUNBQyxTQUFTO1lBQ1BDLFFBQVE7Z0JBQ05DLFVBQVU7WUFDWjtZQUNBQyxTQUFTO2dCQUNQQyxVQUFVO29CQUNSZCxRQUFRO29CQUNSZSxNQUFNO2dCQUNSO1lBQ0Y7WUFDQUMsT0FBTztnQkFDTEMsU0FBUztnQkFDVEMsTUFBTTtnQkFDTm5CLE1BQU07b0JBQ0pnQixNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtRQUNBSSxRQUFRO1lBQ05aLEdBQUc7Z0JBQ0RhLE1BQU07b0JBQ0pILFNBQVM7Z0JBQ1g7Z0JBQ0FELE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLE1BQU07b0JBQ05HLE9BQU87b0JBQ1B0QixNQUFNO3dCQUNKZ0IsTUFBTTtvQkFDUjtnQkFDRjtZQUNGO1lBQ0FPLEdBQUc7Z0JBQ0RGLE1BQU07b0JBQ0pILFNBQVM7Z0JBQ1g7Z0JBQ0FELE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLE1BQU07b0JBQ05HLE9BQU87b0JBQ1B0QixNQUFNO3dCQUNKZ0IsTUFBTTtvQkFDUjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE1BQU1RLE9BQU87UUFDWEMsUUFBUXRCLE1BQU1MLEdBQUcsQ0FBQyxDQUFDNEIsSUFBTUEsRUFBRWxDLEdBQUc7UUFDOUJtQyxVQUFVO1lBQ1I7Z0JBQ0VDLE9BQU87Z0JBQ1BKLE1BQU1yQixNQUFNTCxHQUFHLENBQUMsQ0FBQzRCLElBQU1BLEVBQUU5QixJQUFJO2dCQUM3QmlDLGlCQUFpQjtnQkFDakJDLGFBQWE7Z0JBQ2JDLHNCQUFzQjtZQUN4QjtZQUNBO2dCQUNFSCxPQUFPO2dCQUNQSixNQUFNckIsTUFBTUwsR0FBRyxDQUFDLENBQUM0QixJQUFNQSxFQUFFN0IsVUFBVTtnQkFDbkNnQyxpQkFBaUI7Z0JBQ2pCQyxhQUFhO2dCQUNiQyxzQkFBc0I7WUFDeEI7U0FDRDtJQUNIO0lBRUEsc0NBQXNDO0lBQ3RDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDekQsZ0RBQUdBO1lBQUMwRCxTQUFTOUI7WUFBVW9CLE1BQU1BOzs7Ozs7Ozs7OztBQUdwQztLQXRGTXRCO0FBdUZOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2dyYWZpY2FiYXJyYXMudHN4P2I0ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8obW9kZWwpL2NvbmV4aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQmFyRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZCxcclxufSBmcm9tIFwiY2hhcnQuanNcIjtcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBCYXJFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kXHJcbik7XHJcbmltcG9ydCB7IENoYXJ0T3B0aW9ucyB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5cclxuaW50ZXJmYWNlIFN1bWFQb3JEaWEge1xyXG4gIGRpYTogc3RyaW5nO1xyXG4gIHN1bWE6IG51bWJlcjtcclxuICBlc3RhY2lvbmVzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1hclByZWNpcGl0YWNpb25lcyh1c2VyczogVXNlcltdKTogU3VtYVBvckRpYVtdIHtcclxuICBjb25zdCByZXN1bHRhZG9zUG9yRGlhOiB7XHJcbiAgICBbZGlhOiBzdHJpbmddOiB7IHN1bWE6IG51bWJlcjsgZXN0YWNpb25lczogbnVtYmVyIH07XHJcbiAgfSA9IHt9O1xyXG5cclxuICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XHJcbiAgICB1c2VyLnByZWNpcGl0YWNpb24uZm9yRWFjaCgocHJlY2lwaXRhY2lvbikgPT4ge1xyXG4gICAgICBjb25zdCBbZGlhLCB2YWxvcl0gPSBPYmplY3QuZW50cmllcyhwcmVjaXBpdGFjaW9uKVswXTtcclxuICAgICAgaWYgKHZhbG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gQXNlZ3VyYSBxdWUgc29sbyBjdWVudGUgZXN0YWNpb25lcyBjb24gZGF0b3Mgbm8gbnVsb3NcclxuICAgICAgICBpZiAoIXJlc3VsdGFkb3NQb3JEaWFbZGlhXSkge1xyXG4gICAgICAgICAgcmVzdWx0YWRvc1BvckRpYVtkaWFdID0geyBzdW1hOiAwLCBlc3RhY2lvbmVzOiAwIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdGFkb3NQb3JEaWFbZGlhXS5zdW1hICs9IHZhbG9yO1xyXG4gICAgICAgIHJlc3VsdGFkb3NQb3JEaWFbZGlhXS5lc3RhY2lvbmVzICs9IDE7IC8vIENvbnRhZG9yIGRlIGVzdGFjaW9uZXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuZW50cmllcyhyZXN1bHRhZG9zUG9yRGlhKS5tYXAoXHJcbiAgICAoW2RpYSwgeyBzdW1hLCBlc3RhY2lvbmVzIH1dKSA9PiAoe1xyXG4gICAgICBkaWEsXHJcbiAgICAgIHN1bWEsXHJcbiAgICAgIGVzdGFjaW9uZXMsIC8vIEluY2x1eWUgZWwgY29udGVvIGVuIGVsIHJlc3VsdGFkb1xyXG4gICAgfSlcclxuICApO1xyXG59XHJcbmludGVyZmFjZSBHcmFmaWNhUHJlY2lwaXRhY2lvblByb3BzIHtcclxuICBkYXRvczogU3VtYVBvckRpYVtdO1xyXG59XHJcblxyXG5DaGFydEpTLmRlZmF1bHRzLmZvbnQuZmFtaWx5ID0gXCJBcmlhbCBOYXJyb3dcIjtcclxuXHJcbmNvbnN0IEdyYWZpY2FQcmVjaXBpdGFjaW9uOiBSZWFjdC5GQzxHcmFmaWNhUHJlY2lwaXRhY2lvblByb3BzPiA9ICh7XHJcbiAgZGF0b3MsXHJcbn0pID0+IHtcclxuICBjb25zdCBvcGNpb25lczogQ2hhcnRPcHRpb25zPFwiYmFyXCI+ID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgYW5pbWF0aW9uczoge1xyXG4gICAgICB5OiB7XHJcbiAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dEVsYXN0aWNcIixcclxuICAgICAgICBmcm9tOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBib2R5Rm9udDoge1xyXG4gICAgICAgICAgZmFtaWx5OiBcIkFyaWFsIE5hcnJvd1wiLFxyXG4gICAgICAgICAgc2l6ZTogMTgsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIHRleHQ6IFwiUHJlY2lwaXRhY2nDs24gVG90YWwgQWN1bXVsYWRhIERpYXJpYVwiLFxyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIHNpemU6IDI0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHk6IHtcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJQcmVjaXBpdGFjacOzbiAobW0pXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCJncmF5XCIsXHJcbiAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgIHNpemU6IDIwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB4OiB7XHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHRleHQ6IFwiRMOtYVwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiZ3JheVwiLFxyXG4gICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiAyMCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogZGF0b3MubWFwKChkKSA9PiBkLmRpYSksXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiUHJlY2lwaXRhY2nDs24gdG90YWwgYWN1bXVsYWRhIChtbSlcIixcclxuICAgICAgICBkYXRhOiBkYXRvcy5tYXAoKGQpID0+IGQuc3VtYSksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTMsIDE2MiwgMjM1LCAwLjUpXCIsXHJcbiAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXHJcbiAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzM2NzhBNFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiTsO6bWVybyBkZSBlc3RhY2lvbmVzIHF1ZSByZXBvcnRhcm9uIGRhdG9cIixcclxuICAgICAgICBkYXRhOiBkYXRvcy5tYXAoKGQpID0+IGQuZXN0YWNpb25lcyksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2QUUxQUVcIiwgLy8gVW4gY29sb3IgZGlmZXJlbnRlIHBhcmEgZGlmZXJlbmNpYXJcclxuICAgICAgICBob3Zlck9mZnNldDogNCxcclxuICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogXCIjNzBGNTcwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIC8vIFJlc3RvIGRlbCBjb21wb25lbnRlIHNpbiBjYW1iaW9zLi4uXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXSBoLVs0MHZoXSBtdC0xMCBteC1hdXRvIGZsZXgganVzdGlmeS1ib3R0b20gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxCYXIgb3B0aW9ucz17b3BjaW9uZXN9IGRhdGE9e2RhdGF9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHcmFmaWNhUHJlY2lwaXRhY2lvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFyIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsInJlZ2lzdGVyIiwic3VtYXJQcmVjaXBpdGFjaW9uZXMiLCJ1c2VycyIsInJlc3VsdGFkb3NQb3JEaWEiLCJmb3JFYWNoIiwidXNlciIsInByZWNpcGl0YWNpb24iLCJkaWEiLCJ2YWxvciIsIk9iamVjdCIsImVudHJpZXMiLCJzdW1hIiwiZXN0YWNpb25lcyIsIm1hcCIsImRlZmF1bHRzIiwiZm9udCIsImZhbWlseSIsIkdyYWZpY2FQcmVjaXBpdGFjaW9uIiwiZGF0b3MiLCJvcGNpb25lcyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiYW5pbWF0aW9ucyIsInkiLCJlYXNpbmciLCJmcm9tIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidG9vbHRpcCIsImJvZHlGb250Iiwic2l6ZSIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJzY2FsZXMiLCJncmlkIiwiY29sb3IiLCJ4IiwiZGF0YSIsImxhYmVscyIsImQiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJPZmZzZXQiLCJob3ZlckJhY2tncm91bmRDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/graficabarras.tsx\n"));

/***/ })

});