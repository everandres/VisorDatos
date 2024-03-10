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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sumarPrecipitaciones: function() { return /* binding */ sumarPrecipitaciones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction sumarPrecipitaciones(users) {\n    const sumasPorDia = {};\n    users.forEach((user)=>{\n        user.precipitacion.forEach((precipitacion)=>{\n            const [dia, valor] = Object.entries(precipitacion)[0];\n            sumasPorDia[dia] = (sumasPorDia[dia] || 0) + valor;\n        });\n    });\n    return Object.entries(sumasPorDia).map((param)=>{\n        let [dia, suma] = param;\n        return {\n            dia,\n            suma\n        };\n    });\n}\nconst GraficaPrecipitacion = (param)=>{\n    let { datos } = param;\n    const opciones = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Precipitaci\\xf3n por D\\xeda\"\n            }\n        },\n        scales: {\n            y: {\n                title: {\n                    display: true,\n                    text: \"Precipitaci\\xf3n (mm)\"\n                }\n            },\n            x: {\n                title: {\n                    display: true,\n                    text: \"Fecha\"\n                }\n            }\n        }\n    };\n    const data = {\n        labels: datos.map((d)=>d.dia),\n        datasets: [\n            {\n                label: \"Precipitaci\\xf3n total acumulada (mm)\",\n                data: datos.map((d)=>d.suma),\n                backgroundColor: \"rgba(53, 162, 235, 0.5)\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n        options: opciones,\n        data: data\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n        lineNumber: 89,\n        columnNumber: 10\n    }, undefined);\n};\n_c = GraficaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GraficaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"GraficaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ1k7QUFTcEI7QUFFbEJHLDJDQUFPQSxDQUFDTyxRQUFRLENBQ2ROLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBUUQsU0FBU0UscUJBQXFCQyxLQUFhO0lBQ2hELE1BQU1DLGNBQXlDLENBQUM7SUFFaERELE1BQU1FLE9BQU8sQ0FBQyxDQUFDQztRQUNiQSxLQUFLQyxhQUFhLENBQUNGLE9BQU8sQ0FBQyxDQUFDRTtZQUMxQixNQUFNLENBQUNDLEtBQUtDLE1BQU0sR0FBR0MsT0FBT0MsT0FBTyxDQUFDSixjQUFjLENBQUMsRUFBRTtZQUNyREgsV0FBVyxDQUFDSSxJQUFJLEdBQUcsQ0FBQ0osV0FBVyxDQUFDSSxJQUFJLElBQUksS0FBS0M7UUFDL0M7SUFDRjtJQUVBLE9BQU9DLE9BQU9DLE9BQU8sQ0FBQ1AsYUFBYVEsR0FBRyxDQUFDO1lBQUMsQ0FBQ0osS0FBS0ssS0FBSztlQUFNO1lBQ3ZETDtZQUNBSztRQUNGOztBQUNGO0FBTUEsTUFBTUMsdUJBQTREO1FBQUMsRUFDakVDLEtBQUssRUFDTjtJQUNDLE1BQU1DLFdBQVc7UUFDZkMsWUFBWTtRQUNaQyxTQUFTO1lBQ1BDLFFBQVE7Z0JBQ05DLFVBQVU7WUFDWjtZQUNBQyxPQUFPO2dCQUNMQyxTQUFTO2dCQUNUQyxNQUFNO1lBQ1I7UUFDRjtRQUNBQyxRQUFRO1lBQ05DLEdBQUc7Z0JBQ0RKLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLE1BQU07Z0JBQ1I7WUFDRjtZQUNBRyxHQUFHO2dCQUNETCxPQUFPO29CQUNMQyxTQUFTO29CQUNUQyxNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsTUFBTUksT0FBTztRQUNYQyxRQUFRYixNQUFNSCxHQUFHLENBQUMsQ0FBQ2lCLElBQU1BLEVBQUVyQixHQUFHO1FBQzlCc0IsVUFBVTtZQUNSO2dCQUNFQyxPQUFPO2dCQUNQSixNQUFNWixNQUFNSCxHQUFHLENBQUMsQ0FBQ2lCLElBQU1BLEVBQUVoQixJQUFJO2dCQUM3Qm1CLGlCQUFpQjtZQUNuQjtTQUNEO0lBQ0g7SUFFQSxxQkFBTyw4REFBQ3hDLGdEQUFHQTtRQUFDeUMsU0FBU2pCO1FBQVVXLE1BQU1BOzs7Ozs7QUFDdkM7S0ExQ01iO0FBNENOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2dyYWZpY2FiYXJyYXMudHN4P2I0ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8obW9kZWwpL2NvbmV4aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBCYXJFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kLFxyXG59IGZyb20gXCJjaGFydC5qc1wiO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICBDYXRlZ29yeVNjYWxlLFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIEJhckVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmRcclxuKTtcclxuXHJcbmludGVyZmFjZSBTdW1hUG9yRGlhIHtcclxuICBkaWE6IHN0cmluZztcclxuICBzdW1hOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1hclByZWNpcGl0YWNpb25lcyh1c2VyczogVXNlcltdKTogU3VtYVBvckRpYVtdIHtcclxuICBjb25zdCBzdW1hc1BvckRpYTogeyBbZGlhOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XHJcbiAgICB1c2VyLnByZWNpcGl0YWNpb24uZm9yRWFjaCgocHJlY2lwaXRhY2lvbikgPT4ge1xyXG4gICAgICBjb25zdCBbZGlhLCB2YWxvcl0gPSBPYmplY3QuZW50cmllcyhwcmVjaXBpdGFjaW9uKVswXTtcclxuICAgICAgc3VtYXNQb3JEaWFbZGlhXSA9IChzdW1hc1BvckRpYVtkaWFdIHx8IDApICsgdmFsb3I7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHN1bWFzUG9yRGlhKS5tYXAoKFtkaWEsIHN1bWFdKSA9PiAoe1xyXG4gICAgZGlhLFxyXG4gICAgc3VtYSxcclxuICB9KSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBHcmFmaWNhUHJlY2lwaXRhY2lvblByb3BzIHtcclxuICBkYXRvczogU3VtYVBvckRpYVtdO1xyXG59XHJcblxyXG5jb25zdCBHcmFmaWNhUHJlY2lwaXRhY2lvbjogUmVhY3QuRkM8R3JhZmljYVByZWNpcGl0YWNpb25Qcm9wcz4gPSAoe1xyXG4gIGRhdG9zLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgb3BjaW9uZXMgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBsZWdlbmQ6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIiBhcyBjb25zdCxcclxuICAgICAgfSxcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIHRleHQ6IFwiUHJlY2lwaXRhY2nDs24gcG9yIETDrWFcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeToge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJQcmVjaXBpdGFjacOzbiAobW0pXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeDoge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJGZWNoYVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IGRhdG9zLm1hcCgoZCkgPT4gZC5kaWEpLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIlByZWNpcGl0YWNpw7NuIHRvdGFsIGFjdW11bGFkYSAobW0pXCIsXHJcbiAgICAgICAgZGF0YTogZGF0b3MubWFwKChkKSA9PiBkLnN1bWEpLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMC41KVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gPEJhciBvcHRpb25zPXtvcGNpb25lc30gZGF0YT17ZGF0YX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFmaWNhUHJlY2lwaXRhY2lvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFyIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsInJlZ2lzdGVyIiwic3VtYXJQcmVjaXBpdGFjaW9uZXMiLCJ1c2VycyIsInN1bWFzUG9yRGlhIiwiZm9yRWFjaCIsInVzZXIiLCJwcmVjaXBpdGFjaW9uIiwiZGlhIiwidmFsb3IiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwic3VtYSIsIkdyYWZpY2FQcmVjaXBpdGFjaW9uIiwiZGF0b3MiLCJvcGNpb25lcyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0Iiwic2NhbGVzIiwieSIsIngiLCJkYXRhIiwibGFiZWxzIiwiZCIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/graficabarras.tsx\n"));

/***/ })

});