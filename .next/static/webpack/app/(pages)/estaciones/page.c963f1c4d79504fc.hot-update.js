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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/context/usercontext */ \"(app-pages-browser)/./src/app/context/usercontext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/graficabarras */ \"(app-pages-browser)/./src/app/components/graficabarras.tsx\");\n// Asegúrate de ajustar la ruta al importar useUsers para que apunte a la ubicación correcta de tu UserContext\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ComponenteConGrafica = ()=>{\n    _s();\n    const { users } = (0,_app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__.useUsers)();\n    const datosTransformados = (0,_app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__.sumarPrecipitaciones)(users);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_graficabarras__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            datos: datosTransformados\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\(pages)\\\\estaciones\\\\page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ComponenteConGrafica, \"97iXZvGHoLkkkWrhgNQ2V+FSiws=\", false, function() {\n    return [\n        _app_context_usercontext__WEBPACK_IMPORTED_MODULE_1__.useUsers\n    ];\n});\n_c = ComponenteConGrafica;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponenteConGrafica); /*\r\n\r\nexport default function UserComponent() {\r\n  const { users } = useUsers(); // Usamos el hook para acceder a los datos de los usuarios\r\n\r\n  // Renderiza una lista de usuarios mostrando detalles específicos de cada uno\r\n  return (\r\n    <div>\r\n      <h2>Lista de Usuarios</h2>\r\n      <ul>\r\n        {users.map((user) => (\r\n          <li key={user.CODIGO}>\r\n            <h3>\r\n              {user.ESTACION} - {user.DPTO}\r\n            </h3>\r\n            <p>\r\n              <strong>Código:</strong> {user.CODIGO}\r\n            </p>\r\n            <p>\r\n              <strong>Ubicación:</strong> {user.LAT}, {user.LON} (Lat, Lon)\r\n            </p>\r\n            <p>\r\n              <strong>Elevación:</strong> {user.ELEV} metros\r\n            </p>\r\n            <p>\r\n              <strong>Área Hidrográfica:</strong> {user.AREA_HIDROGRAFICA}\r\n            </p>\r\n            <p>\r\n              <strong>Zona Hidrográfica:</strong> {user.ZONA_HIDROGRAFICA}\r\n            </p>\r\n            <p>\r\n              <strong>Subzona Hidrográfica:</strong> {user.SUBZONA_HIDROGRAFICA}\r\n            </p>\r\n            <p>\r\n              <strong>Precipitación Máxima Histórica:</strong> {user.MAX_HIST}{\" \"}\r\n              mm\r\n            </p>\r\n            {/* Aquí podrías agregar más campos según sea necesario }\r\n          </li>\r\n        ))}\r\n      </ul>\r\n    </div>\r\n  );\r\n}\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ComponenteConGrafica\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKHBhZ2VzKS9lc3RhY2lvbmVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhHQUE4Rzs7O0FBR3pEO0FBQzNCO0FBR2M7QUFFeEMsTUFBTUksdUJBQWlDOztJQUNyQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHTCxrRUFBUUE7SUFDMUIsTUFBTU0scUJBQXFCSCxtRkFBb0JBLENBQUNFO0lBRWhELHFCQUNFLDhEQUFDRTtrQkFDQyw0RUFBQ0wscUVBQW9CQTtZQUFDTSxPQUFPRjs7Ozs7Ozs7Ozs7QUFHbkM7R0FUTUY7O1FBQ2NKLDhEQUFRQTs7O0tBRHRCSTtBQVdOLCtEQUFlQSxvQkFBb0JBLEVBQUMsQ0FFcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhwYWdlcykvZXN0YWNpb25lcy9wYWdlLnRzeD8wNjYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFzZWfDunJhdGUgZGUgYWp1c3RhciBsYSBydXRhIGFsIGltcG9ydGFyIHVzZVVzZXJzIHBhcmEgcXVlIGFwdW50ZSBhIGxhIHViaWNhY2nDs24gY29ycmVjdGEgZGUgdHUgVXNlckNvbnRleHRcclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VVc2VycyB9IGZyb20gXCJAL2FwcC9jb250ZXh0L3VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdyYWZpY2FQcmVjaXBpdGFjaW9uLCB7XHJcbiAgc3VtYXJQcmVjaXBpdGFjaW9uZXMsXHJcbn0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvZ3JhZmljYWJhcnJhc1wiO1xyXG5cclxuY29uc3QgQ29tcG9uZW50ZUNvbkdyYWZpY2E6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlcnMgfSA9IHVzZVVzZXJzKCk7XHJcbiAgY29uc3QgZGF0b3NUcmFuc2Zvcm1hZG9zID0gc3VtYXJQcmVjaXBpdGFjaW9uZXModXNlcnMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdyYWZpY2FQcmVjaXBpdGFjaW9uIGRhdG9zPXtkYXRvc1RyYW5zZm9ybWFkb3N9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50ZUNvbkdyYWZpY2E7XHJcblxyXG4vKlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckNvbXBvbmVudCgpIHtcclxuICBjb25zdCB7IHVzZXJzIH0gPSB1c2VVc2VycygpOyAvLyBVc2Ftb3MgZWwgaG9vayBwYXJhIGFjY2VkZXIgYSBsb3MgZGF0b3MgZGUgbG9zIHVzdWFyaW9zXHJcblxyXG4gIC8vIFJlbmRlcml6YSB1bmEgbGlzdGEgZGUgdXN1YXJpb3MgbW9zdHJhbmRvIGRldGFsbGVzIGVzcGVjw61maWNvcyBkZSBjYWRhIHVub1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+TGlzdGEgZGUgVXN1YXJpb3M8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17dXNlci5DT0RJR099PlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAge3VzZXIuRVNUQUNJT059IC0ge3VzZXIuRFBUT31cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Dw7NkaWdvOjwvc3Ryb25nPiB7dXNlci5DT0RJR099XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5VYmljYWNpw7NuOjwvc3Ryb25nPiB7dXNlci5MQVR9LCB7dXNlci5MT059IChMYXQsIExvbilcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkVsZXZhY2nDs246PC9zdHJvbmc+IHt1c2VyLkVMRVZ9IG1ldHJvc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+w4FyZWEgSGlkcm9ncsOhZmljYTo8L3N0cm9uZz4ge3VzZXIuQVJFQV9ISURST0dSQUZJQ0F9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5ab25hIEhpZHJvZ3LDoWZpY2E6PC9zdHJvbmc+IHt1c2VyLlpPTkFfSElEUk9HUkFGSUNBfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+U3Viem9uYSBIaWRyb2dyw6FmaWNhOjwvc3Ryb25nPiB7dXNlci5TVUJaT05BX0hJRFJPR1JBRklDQX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlByZWNpcGl0YWNpw7NuIE3DoXhpbWEgSGlzdMOzcmljYTo8L3N0cm9uZz4ge3VzZXIuTUFYX0hJU1R9e1wiIFwifVxyXG4gICAgICAgICAgICAgIG1tXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgey8qIEFxdcOtIHBvZHLDrWFzIGFncmVnYXIgbcOhcyBjYW1wb3Mgc2Vnw7puIHNlYSBuZWNlc2FyaW8gfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJ1c2VVc2VycyIsIlJlYWN0IiwiR3JhZmljYVByZWNpcGl0YWNpb24iLCJzdW1hclByZWNpcGl0YWNpb25lcyIsIkNvbXBvbmVudGVDb25HcmFmaWNhIiwidXNlcnMiLCJkYXRvc1RyYW5zZm9ybWFkb3MiLCJkaXYiLCJkYXRvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(pages)/estaciones/page.tsx\n"));

/***/ })

});