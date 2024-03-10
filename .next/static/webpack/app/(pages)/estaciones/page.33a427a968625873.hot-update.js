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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sumarPrecipitaciones: function() { return /* binding */ sumarPrecipitaciones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction sumarPrecipitaciones(users) {\n    const sumasPorDia = {};\n    users.forEach((user)=>{\n        user.precipitacion.forEach((precipitacion)=>{\n            const [dia, valor] = Object.entries(precipitacion)[0];\n            sumasPorDia[dia] = (sumasPorDia[dia] || 0) + valor;\n        });\n    });\n    return Object.entries(sumasPorDia).map((param)=>{\n        let [dia, suma] = param;\n        return {\n            dia,\n            suma\n        };\n    });\n}\nconst GraficaPrecipitacion = (param)=>{\n    let { datos } = param;\n    const opciones = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: true,\n                text: \"Precipitaci\\xf3n por D\\xeda\"\n            }\n        },\n        scales: {\n            y: {\n                title: {\n                    display: true,\n                    text: \"Precipitaci\\xf3n (mm)\"\n                }\n            },\n            x: {\n                title: {\n                    display: true,\n                    text: \"Fecha\"\n                }\n            }\n        }\n    };\n    const data = {\n        labels: datos.map((d)=>d.dia),\n        datasets: [\n            {\n                label: \"Precipitaci\\xf3n total acumulada (mm)\",\n                data: datos.map((d)=>d.suma),\n                backgroundColor: \"rgba(53, 162, 235, 0.5)\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-center size- \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n            options: opciones,\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\graficabarras.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GraficaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GraficaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"GraficaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ1k7QUFTcEI7QUFFbEJHLDJDQUFPQSxDQUFDTyxRQUFRLENBQ2ROLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBU0QsU0FBU0UscUJBQXFCQyxLQUFhO0lBQ2hELE1BQU1DLGNBQXlDLENBQUM7SUFFaERELE1BQU1FLE9BQU8sQ0FBQyxDQUFDQztRQUNiQSxLQUFLQyxhQUFhLENBQUNGLE9BQU8sQ0FBQyxDQUFDRTtZQUMxQixNQUFNLENBQUNDLEtBQUtDLE1BQU0sR0FBR0MsT0FBT0MsT0FBTyxDQUFDSixjQUFjLENBQUMsRUFBRTtZQUNyREgsV0FBVyxDQUFDSSxJQUFJLEdBQUcsQ0FBQ0osV0FBVyxDQUFDSSxJQUFJLElBQUksS0FBS0M7UUFDL0M7SUFDRjtJQUVBLE9BQU9DLE9BQU9DLE9BQU8sQ0FBQ1AsYUFBYVEsR0FBRyxDQUFDO1lBQUMsQ0FBQ0osS0FBS0ssS0FBSztlQUFNO1lBQ3ZETDtZQUNBSztRQUNGOztBQUNGO0FBTUEsTUFBTUMsdUJBQTREO1FBQUMsRUFDakVDLEtBQUssRUFDTjtJQUNDLE1BQU1DLFdBQWdDO1FBQ3BDQyxZQUFZO1FBQ1pDLFNBQVM7WUFDUEMsUUFBUTtnQkFDTkMsVUFBVTtZQUNaO1lBQ0FDLE9BQU87Z0JBQ0xDLFNBQVM7Z0JBQ1RDLE1BQU07WUFDUjtRQUNGO1FBQ0FDLFFBQVE7WUFDTkMsR0FBRztnQkFDREosT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsTUFBTTtnQkFDUjtZQUNGO1lBQ0FHLEdBQUc7Z0JBQ0RMLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLE1BQU07Z0JBQ1I7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxNQUFNSSxPQUFPO1FBQ1hDLFFBQVFiLE1BQU1ILEdBQUcsQ0FBQyxDQUFDaUIsSUFBTUEsRUFBRXJCLEdBQUc7UUFDOUJzQixVQUFVO1lBQ1I7Z0JBQ0VDLE9BQU87Z0JBQ1BKLE1BQU1aLE1BQU1ILEdBQUcsQ0FBQyxDQUFDaUIsSUFBTUEsRUFBRWhCLElBQUk7Z0JBQzdCbUIsaUJBQWlCO1lBQ25CO1NBQ0Q7SUFDSDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDMUMsZ0RBQUdBO1lBQUMyQyxTQUFTbkI7WUFBVVcsTUFBTUE7Ozs7Ozs7Ozs7O0FBR3BDO0tBOUNNYjtBQWdETiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzLnRzeD9iNGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vKG1vZGVsKS9jb25leGlvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQmFyRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZCxcclxufSBmcm9tIFwiY2hhcnQuanNcIjtcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBCYXJFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kXHJcbik7XHJcbmltcG9ydCB7IENoYXJ0T3B0aW9ucyB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5cclxuaW50ZXJmYWNlIFN1bWFQb3JEaWEge1xyXG4gIGRpYTogc3RyaW5nO1xyXG4gIHN1bWE6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bWFyUHJlY2lwaXRhY2lvbmVzKHVzZXJzOiBVc2VyW10pOiBTdW1hUG9yRGlhW10ge1xyXG4gIGNvbnN0IHN1bWFzUG9yRGlhOiB7IFtkaWE6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcblxyXG4gIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHtcclxuICAgIHVzZXIucHJlY2lwaXRhY2lvbi5mb3JFYWNoKChwcmVjaXBpdGFjaW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtkaWEsIHZhbG9yXSA9IE9iamVjdC5lbnRyaWVzKHByZWNpcGl0YWNpb24pWzBdO1xyXG4gICAgICBzdW1hc1BvckRpYVtkaWFdID0gKHN1bWFzUG9yRGlhW2RpYV0gfHwgMCkgKyB2YWxvcjtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoc3VtYXNQb3JEaWEpLm1hcCgoW2RpYSwgc3VtYV0pID0+ICh7XHJcbiAgICBkaWEsXHJcbiAgICBzdW1hLFxyXG4gIH0pKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEdyYWZpY2FQcmVjaXBpdGFjaW9uUHJvcHMge1xyXG4gIGRhdG9zOiBTdW1hUG9yRGlhW107XHJcbn1cclxuXHJcbmNvbnN0IEdyYWZpY2FQcmVjaXBpdGFjaW9uOiBSZWFjdC5GQzxHcmFmaWNhUHJlY2lwaXRhY2lvblByb3BzPiA9ICh7XHJcbiAgZGF0b3MsXHJcbn0pID0+IHtcclxuICBjb25zdCBvcGNpb25lczogQ2hhcnRPcHRpb25zPFwiYmFyXCI+ID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICB0ZXh0OiBcIlByZWNpcGl0YWNpw7NuIHBvciBEw61hXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHk6IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHRleHQ6IFwiUHJlY2lwaXRhY2nDs24gKG1tKVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHg6IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHRleHQ6IFwiRmVjaGFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBkYXRvcy5tYXAoKGQpID0+IGQuZGlhKSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJQcmVjaXBpdGFjacOzbiB0b3RhbCBhY3VtdWxhZGEgKG1tKVwiLFxyXG4gICAgICAgIGRhdGE6IGRhdG9zLm1hcCgoZCkgPT4gZC5zdW1hKSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1MywgMTYyLCAyMzUsIDAuNSlcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgc2l6ZS0gXCI+XHJcbiAgICAgIDxCYXIgb3B0aW9ucz17b3BjaW9uZXN9IGRhdGE9e2RhdGF9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhZmljYVByZWNpcGl0YWNpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJhciIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJyZWdpc3RlciIsInN1bWFyUHJlY2lwaXRhY2lvbmVzIiwidXNlcnMiLCJzdW1hc1BvckRpYSIsImZvckVhY2giLCJ1c2VyIiwicHJlY2lwaXRhY2lvbiIsImRpYSIsInZhbG9yIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInN1bWEiLCJHcmFmaWNhUHJlY2lwaXRhY2lvbiIsImRhdG9zIiwib3BjaW9uZXMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInNjYWxlcyIsInkiLCJ4IiwiZGF0YSIsImxhYmVscyIsImQiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/graficabarras.tsx\n"));

/***/ })

});