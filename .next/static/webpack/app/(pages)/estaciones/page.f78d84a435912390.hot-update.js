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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sumarPrecipitaciones: function() { return /* binding */ sumarPrecipitaciones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction sumarPrecipitaciones(users) {\n    const sumasPorDia = {};\n    users.forEach((user)=>{\n        user.precipitacion.forEach((precipitacion)=>{\n            const [dia, valor] = Object.entries(precipitacion)[0];\n            sumasPorDia[dia] = (sumasPorDia[dia] || 0) + valor;\n        });\n    });\n    return Object.entries(sumasPorDia).map((param)=>{\n        let [dia, suma] = param;\n        return {\n            dia,\n            suma\n        };\n    });\n}\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.defaults.font.family = \"Arial Narrow\";\nconst GraficaPrecipitacion = (param)=>{\n    let { datos } = param;\n    const opciones = {\n        responsive: true,\n        animations: {\n            y: {\n                easing: \"easeInOutElastic\",\n                from: 0\n            }\n        },\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Precipitaci\\xf3n Total Acumulada Diaria (mm)\",\n                font: {\n                    size: 20\n                }\n            }\n        },\n        scales: {\n            y: {\n                title: {\n                    display: true,\n                    text: \"Precipitaci\\xf3n (mm)\"\n                }\n            },\n            x: {\n                title: {\n                    display: true,\n                    text: \"Dia\",\n                    font: {\n                        size: 12\n                    }\n                }\n            }\n        }\n    };\n    const data = {\n        labels: datos.map((d)=>d.dia),\n        datasets: [\n            {\n                label: \"Precipitaci\\xf3n total acumulada (mm)\",\n                data: datos.map((d)=>d.suma),\n                backgroundColor: \"rgba(53, 162, 235, 0.5)\",\n                borderColor: \"rgb(53, 162, 235)\",\n                borderWidth: 1,\n                borderRadius: 5,\n                hoverOffset: 4\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n            options: opciones,\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GraficaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GraficaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"GraficaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ1k7QUFTcEI7QUFFbEJHLDJDQUFPQSxDQUFDTyxRQUFRLENBQ2ROLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBU0QsU0FBU0UscUJBQXFCQyxLQUFhO0lBQ2hELE1BQU1DLGNBQXlDLENBQUM7SUFFaERELE1BQU1FLE9BQU8sQ0FBQyxDQUFDQztRQUNiQSxLQUFLQyxhQUFhLENBQUNGLE9BQU8sQ0FBQyxDQUFDRTtZQUMxQixNQUFNLENBQUNDLEtBQUtDLE1BQU0sR0FBR0MsT0FBT0MsT0FBTyxDQUFDSixjQUFjLENBQUMsRUFBRTtZQUNyREgsV0FBVyxDQUFDSSxJQUFJLEdBQUcsQ0FBQ0osV0FBVyxDQUFDSSxJQUFJLElBQUksS0FBS0M7UUFDL0M7SUFDRjtJQUVBLE9BQU9DLE9BQU9DLE9BQU8sQ0FBQ1AsYUFBYVEsR0FBRyxDQUFDO1lBQUMsQ0FBQ0osS0FBS0ssS0FBSztlQUFNO1lBQ3ZETDtZQUNBSztRQUNGOztBQUNGO0FBTUFuQiwyQ0FBT0EsQ0FBQ29CLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEdBQUc7QUFFL0IsTUFBTUMsdUJBQTREO1FBQUMsRUFDakVDLEtBQUssRUFDTjtJQUNDLE1BQU1DLFdBQWdDO1FBQ3BDQyxZQUFZO1FBQ1pDLFlBQVk7WUFDVkMsR0FBRztnQkFDREMsUUFBUTtnQkFDUkMsTUFBTTtZQUNSO1FBQ0Y7UUFDQUMsU0FBUztZQUNQQyxRQUFRO2dCQUNOQyxVQUFVO1lBQ1o7WUFDQUMsT0FBTztnQkFDTEMsU0FBUztnQkFDVEMsTUFBTTtnQkFDTmYsTUFBTTtvQkFDSmdCLE1BQU07Z0JBQ1I7WUFDRjtRQUNGO1FBQ0FDLFFBQVE7WUFDTlYsR0FBRztnQkFDRE0sT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsTUFBTTtnQkFDUjtZQUNGO1lBQ0FHLEdBQUc7Z0JBQ0RMLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLE1BQU07b0JBQ05mLE1BQU07d0JBQ0pnQixNQUFNO29CQUNSO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsTUFBTUcsT0FBTztRQUNYQyxRQUFRakIsTUFBTU4sR0FBRyxDQUFDLENBQUN3QixJQUFNQSxFQUFFNUIsR0FBRztRQUM5QjZCLFVBQVU7WUFDUjtnQkFDRUMsT0FBTztnQkFDUEosTUFBTWhCLE1BQU1OLEdBQUcsQ0FBQyxDQUFDd0IsSUFBTUEsRUFBRXZCLElBQUk7Z0JBQzdCMEIsaUJBQWlCO2dCQUNqQkMsYUFBYTtnQkFDYkMsYUFBYTtnQkFDYkMsY0FBYztnQkFDZEMsYUFBYTtZQUNmO1NBQ0Q7SUFDSDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDckQsZ0RBQUdBO1lBQUNzRCxTQUFTM0I7WUFBVWUsTUFBTUE7Ozs7Ozs7Ozs7O0FBR3BDO0tBOURNakI7QUFnRU4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvZ3JhZmljYWJhcnJhcy50c3g/YjRlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLyhtb2RlbCkvY29uZXhpb25cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICBDYXRlZ29yeVNjYWxlLFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIEJhckVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmQsXHJcbn0gZnJvbSBcImNoYXJ0LmpzXCI7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQmFyRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZFxyXG4pO1xyXG5pbXBvcnQgeyBDaGFydE9wdGlvbnMgfSBmcm9tIFwiY2hhcnQuanNcIjtcclxuXHJcbmludGVyZmFjZSBTdW1hUG9yRGlhIHtcclxuICBkaWE6IHN0cmluZztcclxuICBzdW1hOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1hclByZWNpcGl0YWNpb25lcyh1c2VyczogVXNlcltdKTogU3VtYVBvckRpYVtdIHtcclxuICBjb25zdCBzdW1hc1BvckRpYTogeyBbZGlhOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XHJcbiAgICB1c2VyLnByZWNpcGl0YWNpb24uZm9yRWFjaCgocHJlY2lwaXRhY2lvbikgPT4ge1xyXG4gICAgICBjb25zdCBbZGlhLCB2YWxvcl0gPSBPYmplY3QuZW50cmllcyhwcmVjaXBpdGFjaW9uKVswXTtcclxuICAgICAgc3VtYXNQb3JEaWFbZGlhXSA9IChzdW1hc1BvckRpYVtkaWFdIHx8IDApICsgdmFsb3I7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHN1bWFzUG9yRGlhKS5tYXAoKFtkaWEsIHN1bWFdKSA9PiAoe1xyXG4gICAgZGlhLFxyXG4gICAgc3VtYSxcclxuICB9KSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBHcmFmaWNhUHJlY2lwaXRhY2lvblByb3BzIHtcclxuICBkYXRvczogU3VtYVBvckRpYVtdO1xyXG59XHJcblxyXG5DaGFydEpTLmRlZmF1bHRzLmZvbnQuZmFtaWx5ID0gXCJBcmlhbCBOYXJyb3dcIjtcclxuXHJcbmNvbnN0IEdyYWZpY2FQcmVjaXBpdGFjaW9uOiBSZWFjdC5GQzxHcmFmaWNhUHJlY2lwaXRhY2lvblByb3BzPiA9ICh7XHJcbiAgZGF0b3MsXHJcbn0pID0+IHtcclxuICBjb25zdCBvcGNpb25lczogQ2hhcnRPcHRpb25zPFwiYmFyXCI+ID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgeToge1xyXG4gICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRFbGFzdGljXCIsXHJcbiAgICAgICAgZnJvbTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgdGV4dDogXCJQcmVjaXBpdGFjacOzbiBUb3RhbCBBY3VtdWxhZGEgRGlhcmlhIChtbSlcIixcclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICBzaXplOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB5OiB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICB0ZXh0OiBcIlByZWNpcGl0YWNpw7NuIChtbSlcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB4OiB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICB0ZXh0OiBcIkRpYVwiLFxyXG4gICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogZGF0b3MubWFwKChkKSA9PiBkLmRpYSksXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiUHJlY2lwaXRhY2nDs24gdG90YWwgYWN1bXVsYWRhIChtbSlcIixcclxuICAgICAgICBkYXRhOiBkYXRvcy5tYXAoKGQpID0+IGQuc3VtYSksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTMsIDE2MiwgMjM1LCAwLjUpXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDUzLCAxNjIsIDIzNSlcIixcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxCYXIgb3B0aW9ucz17b3BjaW9uZXN9IGRhdGE9e2RhdGF9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhZmljYVByZWNpcGl0YWNpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJhciIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJyZWdpc3RlciIsInN1bWFyUHJlY2lwaXRhY2lvbmVzIiwidXNlcnMiLCJzdW1hc1BvckRpYSIsImZvckVhY2giLCJ1c2VyIiwicHJlY2lwaXRhY2lvbiIsImRpYSIsInZhbG9yIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInN1bWEiLCJkZWZhdWx0cyIsImZvbnQiLCJmYW1pbHkiLCJHcmFmaWNhUHJlY2lwaXRhY2lvbiIsImRhdG9zIiwib3BjaW9uZXMiLCJyZXNwb25zaXZlIiwiYW5pbWF0aW9ucyIsInkiLCJlYXNpbmciLCJmcm9tIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInNpemUiLCJzY2FsZXMiLCJ4IiwiZGF0YSIsImxhYmVscyIsImQiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsImhvdmVyT2Zmc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/graficabarras.tsx\n"));

/***/ })

});