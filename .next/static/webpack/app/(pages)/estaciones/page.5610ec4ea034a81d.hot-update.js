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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/context/usercontext */ \"(app-pages-browser)/./src/app/context/usercontext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/graficabarras */ \"(app-pages-browser)/./src/app/components/graficabarras.tsx\");\n/* harmony import */ var _app_components_fecha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/fecha */ \"(app-pages-browser)/./src/app/components/fecha.tsx\");\n/* harmony import */ var _app_components_maxima__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/maxima */ \"(app-pages-browser)/./src/app/components/maxima.tsx\");\n/* harmony import */ var _app_components_historica__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/historica */ \"(app-pages-browser)/./src/app/components/historica.tsx\");\n// Asegúrate de ajustar la ruta al importar useUsers para que apunte a la ubicación correcta de tu UserContext\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ComponenteConGrafica = ()=>{\n    _s();\n    const { users } = (0,_app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__.useUsers)();\n    const datosTransformados = (0,_app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__.sumarPrecipitaciones)(users);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_fecha__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                datos: datosTransformados\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"h-px my-4 bg-gray-200 border-0 dark:bg-gray-700\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-col ml-40 mt-2 mb\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_maxima__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    users: users\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_historica__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                users: users\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"h-px my-4 bg-gray-200 border-0 dark:bg-gray-700\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ComponenteConGrafica, \"97iXZvGHoLkkkWrhgNQ2V+FSiws=\", false, function() {\n    return [\n        _app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__.useUsers\n    ];\n});\n_c = ComponenteConGrafica;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponenteConGrafica); /*\r\n\r\nexport default function UserComponent() {\r\n  const { users } = useUsers(); // Usamos el hook para acceder a los datos de los usuarios\r\n\r\n  // Renderiza una lista de usuarios mostrando detalles específicos de cada uno\r\n  return (\r\n    <div>\r\n      <h2>Lista de Usuarios</h2>\r\n      <ul>\r\n        {users.map((user) => (\r\n          <li key={user.CODIGO}>\r\n            <h3>\r\n              {user.ESTACION} - {user.DPTO}\r\n            </h3>\r\n            <p>\r\n              <strong>Código:</strong> {user.CODIGO}\r\n            </p>\r\n            <p>\r\n              <strong>Ubicación:</strong> {user.LAT}, {user.LON} (Lat, Lon)\r\n            </p>\r\n            <p>\r\n              <strong>Elevación:</strong> {user.ELEV} metros\r\n            </p>\r\n            <p>\r\n              <strong>Área Hidrográfica:</strong> {user.AREA_HIDROGRAFICA}\r\n            </p>\r\n            <p>\r\n              <strong>Zona Hidrográfica:</strong> {user.ZONA_HIDROGRAFICA}\r\n            </p>\r\n            <p>\r\n              <strong>Subzona Hidrográfica:</strong> {user.SUBZONA_HIDROGRAFICA}\r\n            </p>\r\n            <p>\r\n              <strong>Precipitación Máxima Histórica:</strong> {user.MAX_HIST}{\" \"}\r\n              mm\r\n            </p>\r\n            {/* Aquí podrías agregar más campos según sea necesario }\r\n          </li>\r\n        ))}\r\n      </ul>\r\n    </div>\r\n  );\r\n}\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ComponenteConGrafica\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKHBhZ2VzKS9lc3RhY2lvbmVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhHQUE4Rzs7O0FBR3pEO0FBQzNCO0FBR2M7QUFDZ0I7QUFDVTtBQUNBO0FBRWxFLE1BQU1PLHVCQUFpQzs7SUFDckMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Isa0VBQVFBO0lBQzFCLE1BQU1TLHFCQUFxQk4sbUZBQW9CQSxDQUFDSztJQUVoRCxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDTiw2REFBa0JBOzs7OzswQkFDbkIsOERBQUNGLHFFQUFvQkE7Z0JBQUNTLE9BQU9GOzs7Ozs7MEJBQzdCLDhEQUFDRztnQkFBR0MsV0FBVTs7Ozs7OzBCQUNkLDhEQUFDSDtnQkFBSUcsV0FBVTswQkFDYiw0RUFBQ1IsOERBQTJCQTtvQkFBQ0csT0FBT0E7Ozs7Ozs7Ozs7OzBCQUV0Qyw4REFBQ0YsaUVBQXdCQTtnQkFBQ0UsT0FBT0E7Ozs7OzswQkFDakMsOERBQUNJO2dCQUFHQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHcEI7R0FoQk1OOztRQUNjUCw4REFBUUE7OztLQUR0Qk87QUFrQk4sK0RBQWVBLG9CQUFvQkEsRUFBQyxDQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKHBhZ2VzKS9lc3RhY2lvbmVzL3BhZ2UudHN4PzA2NjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXNlZ8O6cmF0ZSBkZSBhanVzdGFyIGxhIHJ1dGEgYWwgaW1wb3J0YXIgdXNlVXNlcnMgcGFyYSBxdWUgYXB1bnRlIGEgbGEgdWJpY2FjacOzbiBjb3JyZWN0YSBkZSB0dSBVc2VyQ29udGV4dFxyXG5cInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVVzZXJzIH0gZnJvbSBcIkAvYXBwL2NvbnRleHQvdXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JhZmljYVByZWNpcGl0YWNpb24sIHtcclxuICBzdW1hclByZWNpcGl0YWNpb25lcyxcclxufSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9ncmFmaWNhYmFycmFzXCI7XHJcbmltcG9ydCBDb21wb25lbnRlQ29uRmVjaGEgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvZmVjaGFcIjtcclxuaW1wb3J0IEVzdGFjaW9uTWF4aW1hUHJlY2lwaXRhY2lvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9tYXhpbWFcIjtcclxuaW1wb3J0IEVzdGFjaW9uZXNTdXBlcmFuTWF4SGlzdCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9oaXN0b3JpY2FcIjtcclxuXHJcbmNvbnN0IENvbXBvbmVudGVDb25HcmFmaWNhOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IHVzZXJzIH0gPSB1c2VVc2VycygpO1xyXG4gIGNvbnN0IGRhdG9zVHJhbnNmb3JtYWRvcyA9IHN1bWFyUHJlY2lwaXRhY2lvbmVzKHVzZXJzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDb21wb25lbnRlQ29uRmVjaGEgLz5cclxuICAgICAgPEdyYWZpY2FQcmVjaXBpdGFjaW9uIGRhdG9zPXtkYXRvc1RyYW5zZm9ybWFkb3N9IC8+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJoLXB4IG15LTQgYmctZ3JheS0yMDAgYm9yZGVyLTAgZGFyazpiZy1ncmF5LTcwMFwiPjwvaHI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgbWwtNDAgbXQtMiBtYlwiPlxyXG4gICAgICAgIDxFc3RhY2lvbk1heGltYVByZWNpcGl0YWNpb24gdXNlcnM9e3VzZXJzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEVzdGFjaW9uZXNTdXBlcmFuTWF4SGlzdCB1c2Vycz17dXNlcnN9IC8+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJoLXB4IG15LTQgYmctZ3JheS0yMDAgYm9yZGVyLTAgZGFyazpiZy1ncmF5LTcwMFwiPjwvaHI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50ZUNvbkdyYWZpY2E7XHJcblxyXG4vKlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckNvbXBvbmVudCgpIHtcclxuICBjb25zdCB7IHVzZXJzIH0gPSB1c2VVc2VycygpOyAvLyBVc2Ftb3MgZWwgaG9vayBwYXJhIGFjY2VkZXIgYSBsb3MgZGF0b3MgZGUgbG9zIHVzdWFyaW9zXHJcblxyXG4gIC8vIFJlbmRlcml6YSB1bmEgbGlzdGEgZGUgdXN1YXJpb3MgbW9zdHJhbmRvIGRldGFsbGVzIGVzcGVjw61maWNvcyBkZSBjYWRhIHVub1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+TGlzdGEgZGUgVXN1YXJpb3M8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17dXNlci5DT0RJR099PlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAge3VzZXIuRVNUQUNJT059IC0ge3VzZXIuRFBUT31cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Dw7NkaWdvOjwvc3Ryb25nPiB7dXNlci5DT0RJR099XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5VYmljYWNpw7NuOjwvc3Ryb25nPiB7dXNlci5MQVR9LCB7dXNlci5MT059IChMYXQsIExvbilcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkVsZXZhY2nDs246PC9zdHJvbmc+IHt1c2VyLkVMRVZ9IG1ldHJvc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+w4FyZWEgSGlkcm9ncsOhZmljYTo8L3N0cm9uZz4ge3VzZXIuQVJFQV9ISURST0dSQUZJQ0F9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5ab25hIEhpZHJvZ3LDoWZpY2E6PC9zdHJvbmc+IHt1c2VyLlpPTkFfSElEUk9HUkFGSUNBfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+U3Viem9uYSBIaWRyb2dyw6FmaWNhOjwvc3Ryb25nPiB7dXNlci5TVUJaT05BX0hJRFJPR1JBRklDQX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlByZWNpcGl0YWNpw7NuIE3DoXhpbWEgSGlzdMOzcmljYTo8L3N0cm9uZz4ge3VzZXIuTUFYX0hJU1R9e1wiIFwifVxyXG4gICAgICAgICAgICAgIG1tXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgey8qIEFxdcOtIHBvZHLDrWFzIGFncmVnYXIgbcOhcyBjYW1wb3Mgc2Vnw7puIHNlYSBuZWNlc2FyaW8gfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJ1c2VVc2VycyIsIlJlYWN0IiwiR3JhZmljYVByZWNpcGl0YWNpb24iLCJzdW1hclByZWNpcGl0YWNpb25lcyIsIkNvbXBvbmVudGVDb25GZWNoYSIsIkVzdGFjaW9uTWF4aW1hUHJlY2lwaXRhY2lvbiIsIkVzdGFjaW9uZXNTdXBlcmFuTWF4SGlzdCIsIkNvbXBvbmVudGVDb25HcmFmaWNhIiwidXNlcnMiLCJkYXRvc1RyYW5zZm9ybWFkb3MiLCJkaXYiLCJkYXRvcyIsImhyIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(pages)/estaciones/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/historica.tsx":
/*!******************************************!*\
  !*** ./src/app/components/historica.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contarEstacionesSuperanMaxHist: function() { return /* binding */ contarEstacionesSuperanMaxHist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction contarEstacionesSuperanMaxHist(users) {\n    let contador = 0;\n    users.forEach((user)=>{\n        let superaMaxHist = user.precipitacion.some((precipitacion)=>{\n            const [dia, valor] = Object.entries(precipitacion)[0];\n            return valor > user.MAX_HIST;\n        });\n        if (superaMaxHist) {\n            contador++;\n        }\n    });\n    return contador;\n}\nconst EstacionesSuperanMaxHist = (param)=>{\n    let { users } = param;\n    const estacionesQueSuperan = contarEstacionesSuperanMaxHist(users);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center max-w-sm p-4 bg-white border border-cyan-200 rounded-lg shadow dark:bg-yellow-300 dark:border-gray-700\",\n        children: estacionesQueSuperan > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-gray-500 dark:text-gray-400\",\n            children: [\n                \"Un total de \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: estacionesQueSuperan\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\historica.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 23\n                }, undefined),\n                \" estaciones han superado su valor m\\xe1ximo hist\\xf3rico de precipitaci\\xf3n.\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\historica.tsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No se encontraron estaciones que hayan superado su m\\xe1ximo hist\\xf3rico de precipitaci\\xf3n.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\historica.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\historica.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EstacionesSuperanMaxHist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EstacionesSuperanMaxHist);\nvar _c;\n$RefreshReg$(_c, \"EstacionesSuperanMaxHist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpY2EudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLFNBQVNBLCtCQUErQkMsS0FBYTtJQUMxRCxJQUFJQyxXQUFXO0lBRWZELE1BQU1FLE9BQU8sQ0FBQyxDQUFDQztRQUNiLElBQUlDLGdCQUFnQkQsS0FBS0UsYUFBYSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0Q7WUFDM0MsTUFBTSxDQUFDRSxLQUFLQyxNQUFNLEdBQUdDLE9BQU9DLE9BQU8sQ0FBQ0wsY0FBYyxDQUFDLEVBQUU7WUFDckQsT0FBT0csUUFBUUwsS0FBS1EsUUFBUTtRQUM5QjtRQUVBLElBQUlQLGVBQWU7WUFDakJIO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFNQSxNQUFNVywyQkFBb0U7UUFBQyxFQUN6RVosS0FBSyxFQUNOO0lBQ0MsTUFBTWEsdUJBQXVCZCwrQkFBK0JDO0lBRTVELHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVO2tCQUNaRix1QkFBdUIsa0JBQ3RCLDhEQUFDRztZQUFFRCxXQUFVOztnQkFBbUM7OEJBQ2xDLDhEQUFDRTs4QkFBUUo7Ozs7OztnQkFBOEI7Ozs7OztzQ0FJckQsOERBQUNHO3NCQUFFOzs7Ozs7Ozs7OztBQU9YO0tBcEJNSjtBQXNCTiwrREFBZUEsd0JBQXdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpY2EudHN4P2JhNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8obW9kZWwpL2NvbmV4aW9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGFyRXN0YWNpb25lc1N1cGVyYW5NYXhIaXN0KHVzZXJzOiBVc2VyW10pOiBudW1iZXIge1xyXG4gIGxldCBjb250YWRvciA9IDA7XHJcblxyXG4gIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHtcclxuICAgIGxldCBzdXBlcmFNYXhIaXN0ID0gdXNlci5wcmVjaXBpdGFjaW9uLnNvbWUoKHByZWNpcGl0YWNpb24pID0+IHtcclxuICAgICAgY29uc3QgW2RpYSwgdmFsb3JdID0gT2JqZWN0LmVudHJpZXMocHJlY2lwaXRhY2lvbilbMF07XHJcbiAgICAgIHJldHVybiB2YWxvciA+IHVzZXIuTUFYX0hJU1Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3VwZXJhTWF4SGlzdCkge1xyXG4gICAgICBjb250YWRvcisrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29udGFkb3I7XHJcbn1cclxuXHJcbmludGVyZmFjZSBFc3RhY2lvbmVzU3VwZXJhbk1heEhpc3RQcm9wcyB7XHJcbiAgdXNlcnM6IFVzZXJbXTtcclxufVxyXG5cclxuY29uc3QgRXN0YWNpb25lc1N1cGVyYW5NYXhIaXN0OiBSZWFjdC5GQzxFc3RhY2lvbmVzU3VwZXJhbk1heEhpc3RQcm9wcz4gPSAoe1xyXG4gIHVzZXJzLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZXN0YWNpb25lc1F1ZVN1cGVyYW4gPSBjb250YXJFc3RhY2lvbmVzU3VwZXJhbk1heEhpc3QodXNlcnMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtYXgtdy1zbSBwLTQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1jeWFuLTIwMCByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLXllbGxvdy0zMDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAge2VzdGFjaW9uZXNRdWVTdXBlcmFuID4gMCA/IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgVW4gdG90YWwgZGUgPHN0cm9uZz57ZXN0YWNpb25lc1F1ZVN1cGVyYW59PC9zdHJvbmc+IGVzdGFjaW9uZXMgaGFuXHJcbiAgICAgICAgICBzdXBlcmFkbyBzdSB2YWxvciBtw6F4aW1vIGhpc3TDs3JpY28gZGUgcHJlY2lwaXRhY2nDs24uXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgTm8gc2UgZW5jb250cmFyb24gZXN0YWNpb25lcyBxdWUgaGF5YW4gc3VwZXJhZG8gc3UgbcOheGltbyBoaXN0w7NyaWNvIGRlXHJcbiAgICAgICAgICBwcmVjaXBpdGFjacOzbi5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXN0YWNpb25lc1N1cGVyYW5NYXhIaXN0O1xyXG4iXSwibmFtZXMiOlsiY29udGFyRXN0YWNpb25lc1N1cGVyYW5NYXhIaXN0IiwidXNlcnMiLCJjb250YWRvciIsImZvckVhY2giLCJ1c2VyIiwic3VwZXJhTWF4SGlzdCIsInByZWNpcGl0YWNpb24iLCJzb21lIiwiZGlhIiwidmFsb3IiLCJPYmplY3QiLCJlbnRyaWVzIiwiTUFYX0hJU1QiLCJFc3RhY2lvbmVzU3VwZXJhbk1heEhpc3QiLCJlc3RhY2lvbmVzUXVlU3VwZXJhbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/historica.tsx\n"));

/***/ })

});