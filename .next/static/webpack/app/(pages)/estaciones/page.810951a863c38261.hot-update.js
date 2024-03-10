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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sumarPrecipitaciones: function() { return /* binding */ sumarPrecipitaciones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction sumarPrecipitaciones(users) {\n    const sumasPorDia = {};\n    users.forEach((user)=>{\n        user.precipitacion.forEach((precipitacion)=>{\n            const [dia, valor] = Object.entries(precipitacion)[0];\n            sumasPorDia[dia] = (sumasPorDia[dia] || 0) + valor;\n        });\n    });\n    return Object.entries(sumasPorDia).map((param)=>{\n        let [dia, suma] = param;\n        return {\n            dia,\n            suma\n        };\n    });\n}\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.defaults.font.family = \"Arial Narrow\";\nconst GraficaPrecipitacion = (param)=>{\n    let { datos } = param;\n    const opciones = {\n        responsive: true,\n        animations: {\n            y: {\n                easing: \"easeInOutElastic\",\n                from: 0\n            }\n        },\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            tooltip: {\n                bodyFont: {\n                    family: \"Arial Narrow\",\n                    size: 18\n                }\n            },\n            title: {\n                display: true,\n                text: \"Precipitaci\\xf3n Total Acumulada Diaria (mm)\",\n                font: {\n                    size: 20\n                }\n            }\n        },\n        scales: {\n            y: {\n                title: {\n                    display: true,\n                    text: \"Precipitaci\\xf3n (mm)\"\n                }\n            },\n            x: {\n                title: {\n                    display: true,\n                    text: \"Dia\",\n                    font: {\n                        size: 12\n                    }\n                }\n            }\n        }\n    };\n    const data = {\n        labels: datos.map((d)=>d.dia),\n        datasets: [\n            {\n                label: \"Precipitaci\\xf3n total acumulada (mm)\",\n                data: datos.map((d)=>d.suma),\n                backgroundColor: \"rgba(53, 162, 235, 0.5)\",\n                borderColor: \"rgb(53, 162, 235)\",\n                borderWidth: 1,\n                borderRadius: 5,\n                hoverOffset: 4\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[25vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n            options: opciones,\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GraficaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GraficaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"GraficaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ1k7QUFTcEI7QUFFbEJHLDJDQUFPQSxDQUFDTyxRQUFRLENBQ2ROLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBU0QsU0FBU0UscUJBQXFCQyxLQUFhO0lBQ2hELE1BQU1DLGNBQXlDLENBQUM7SUFFaERELE1BQU1FLE9BQU8sQ0FBQyxDQUFDQztRQUNiQSxLQUFLQyxhQUFhLENBQUNGLE9BQU8sQ0FBQyxDQUFDRTtZQUMxQixNQUFNLENBQUNDLEtBQUtDLE1BQU0sR0FBR0MsT0FBT0MsT0FBTyxDQUFDSixjQUFjLENBQUMsRUFBRTtZQUNyREgsV0FBVyxDQUFDSSxJQUFJLEdBQUcsQ0FBQ0osV0FBVyxDQUFDSSxJQUFJLElBQUksS0FBS0M7UUFDL0M7SUFDRjtJQUVBLE9BQU9DLE9BQU9DLE9BQU8sQ0FBQ1AsYUFBYVEsR0FBRyxDQUFDO1lBQUMsQ0FBQ0osS0FBS0ssS0FBSztlQUFNO1lBQ3ZETDtZQUNBSztRQUNGOztBQUNGO0FBTUFuQiwyQ0FBT0EsQ0FBQ29CLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEdBQUc7QUFFL0IsTUFBTUMsdUJBQTREO1FBQUMsRUFDakVDLEtBQUssRUFDTjtJQUNDLE1BQU1DLFdBQWdDO1FBQ3BDQyxZQUFZO1FBQ1pDLFlBQVk7WUFDVkMsR0FBRztnQkFDREMsUUFBUTtnQkFDUkMsTUFBTTtZQUNSO1FBQ0Y7UUFDQUMsU0FBUztZQUNQQyxRQUFRO2dCQUNOQyxVQUFVO1lBQ1o7WUFDQUMsU0FBUztnQkFDUEMsVUFBVTtvQkFDUmIsUUFBUTtvQkFDUmMsTUFBTTtnQkFDUjtZQUNGO1lBQ0FDLE9BQU87Z0JBQ0xDLFNBQVM7Z0JBQ1RDLE1BQU07Z0JBQ05sQixNQUFNO29CQUNKZSxNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtRQUNBSSxRQUFRO1lBQ05aLEdBQUc7Z0JBQ0RTLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLE1BQU07Z0JBQ1I7WUFDRjtZQUNBRSxHQUFHO2dCQUNESixPQUFPO29CQUNMQyxTQUFTO29CQUNUQyxNQUFNO29CQUNObEIsTUFBTTt3QkFDSmUsTUFBTTtvQkFDUjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE1BQU1NLE9BQU87UUFDWEMsUUFBUW5CLE1BQU1OLEdBQUcsQ0FBQyxDQUFDMEIsSUFBTUEsRUFBRTlCLEdBQUc7UUFDOUIrQixVQUFVO1lBQ1I7Z0JBQ0VDLE9BQU87Z0JBQ1BKLE1BQU1sQixNQUFNTixHQUFHLENBQUMsQ0FBQzBCLElBQU1BLEVBQUV6QixJQUFJO2dCQUM3QjRCLGlCQUFpQjtnQkFDakJDLGFBQWE7Z0JBQ2JDLGFBQWE7Z0JBQ2JDLGNBQWM7Z0JBQ2RDLGFBQWE7WUFDZjtTQUNEO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ3ZELGdEQUFHQTtZQUFDd0QsU0FBUzdCO1lBQVVpQixNQUFNQTs7Ozs7Ozs7Ozs7QUFHcEM7S0FwRU1uQjtBQXNFTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzLnRzeD9iNGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vKG1vZGVsKS9jb25leGlvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQmFyRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZCxcclxufSBmcm9tIFwiY2hhcnQuanNcIjtcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBCYXJFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kXHJcbik7XHJcbmltcG9ydCB7IENoYXJ0T3B0aW9ucyB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5cclxuaW50ZXJmYWNlIFN1bWFQb3JEaWEge1xyXG4gIGRpYTogc3RyaW5nO1xyXG4gIHN1bWE6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bWFyUHJlY2lwaXRhY2lvbmVzKHVzZXJzOiBVc2VyW10pOiBTdW1hUG9yRGlhW10ge1xyXG4gIGNvbnN0IHN1bWFzUG9yRGlhOiB7IFtkaWE6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcblxyXG4gIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHtcclxuICAgIHVzZXIucHJlY2lwaXRhY2lvbi5mb3JFYWNoKChwcmVjaXBpdGFjaW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtkaWEsIHZhbG9yXSA9IE9iamVjdC5lbnRyaWVzKHByZWNpcGl0YWNpb24pWzBdO1xyXG4gICAgICBzdW1hc1BvckRpYVtkaWFdID0gKHN1bWFzUG9yRGlhW2RpYV0gfHwgMCkgKyB2YWxvcjtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoc3VtYXNQb3JEaWEpLm1hcCgoW2RpYSwgc3VtYV0pID0+ICh7XHJcbiAgICBkaWEsXHJcbiAgICBzdW1hLFxyXG4gIH0pKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEdyYWZpY2FQcmVjaXBpdGFjaW9uUHJvcHMge1xyXG4gIGRhdG9zOiBTdW1hUG9yRGlhW107XHJcbn1cclxuXHJcbkNoYXJ0SlMuZGVmYXVsdHMuZm9udC5mYW1pbHkgPSBcIkFyaWFsIE5hcnJvd1wiO1xyXG5cclxuY29uc3QgR3JhZmljYVByZWNpcGl0YWNpb246IFJlYWN0LkZDPEdyYWZpY2FQcmVjaXBpdGFjaW9uUHJvcHM+ID0gKHtcclxuICBkYXRvcyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IG9wY2lvbmVzOiBDaGFydE9wdGlvbnM8XCJiYXJcIj4gPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgYW5pbWF0aW9uczoge1xyXG4gICAgICB5OiB7XHJcbiAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dEVsYXN0aWNcIixcclxuICAgICAgICBmcm9tOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBib2R5Rm9udDoge1xyXG4gICAgICAgICAgZmFtaWx5OiBcIkFyaWFsIE5hcnJvd1wiLFxyXG4gICAgICAgICAgc2l6ZTogMTgsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIHRleHQ6IFwiUHJlY2lwaXRhY2nDs24gVG90YWwgQWN1bXVsYWRhIERpYXJpYSAobW0pXCIsXHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgc2l6ZTogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeToge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJQcmVjaXBpdGFjacOzbiAobW0pXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeDoge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJEaWFcIixcclxuICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IGRhdG9zLm1hcCgoZCkgPT4gZC5kaWEpLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIlByZWNpcGl0YWNpw7NuIHRvdGFsIGFjdW11bGFkYSAobW0pXCIsXHJcbiAgICAgICAgZGF0YTogZGF0b3MubWFwKChkKSA9PiBkLnN1bWEpLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMC41KVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYig1MywgMTYyLCAyMzUpXCIsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMjV2aF1cIj5cclxuICAgICAgPEJhciBvcHRpb25zPXtvcGNpb25lc30gZGF0YT17ZGF0YX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFmaWNhUHJlY2lwaXRhY2lvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFyIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsInJlZ2lzdGVyIiwic3VtYXJQcmVjaXBpdGFjaW9uZXMiLCJ1c2VycyIsInN1bWFzUG9yRGlhIiwiZm9yRWFjaCIsInVzZXIiLCJwcmVjaXBpdGFjaW9uIiwiZGlhIiwidmFsb3IiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwic3VtYSIsImRlZmF1bHRzIiwiZm9udCIsImZhbWlseSIsIkdyYWZpY2FQcmVjaXBpdGFjaW9uIiwiZGF0b3MiLCJvcGNpb25lcyIsInJlc3BvbnNpdmUiLCJhbmltYXRpb25zIiwieSIsImVhc2luZyIsImZyb20iLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJ0b29sdGlwIiwiYm9keUZvbnQiLCJzaXplIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInNjYWxlcyIsIngiLCJkYXRhIiwibGFiZWxzIiwiZCIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyUmFkaXVzIiwiaG92ZXJPZmZzZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/graficabarras.tsx\n"));

/***/ })

});