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

/***/ "(app-pages-browser)/./src/app/components/maxima.tsx":
/*!***************************************!*\
  !*** ./src/app/components/maxima.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encontrarMaximaPrecipitacion: function() { return /* binding */ encontrarMaximaPrecipitacion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction encontrarMaximaPrecipitacion(users) {\n    let maximaPrecipitacion = 0;\n    let nombreEstacion = \"\";\n    let departamentoEstacion = \"\";\n    let municipioEstacion = \"\";\n    let diaMaximaPrecipitacion = \"\";\n    users.forEach((user)=>{\n        user.precipitacion.forEach((precipitacion)=>{\n            const [dia, valor] = Object.entries(precipitacion)[0];\n            if (valor !== null && valor > maximaPrecipitacion) {\n                maximaPrecipitacion = valor;\n                nombreEstacion = user.ESTACION;\n                departamentoEstacion = user.DPTO;\n                municipioEstacion = user.MUNICIPIO;\n                diaMaximaPrecipitacion = dia;\n            // Asumiendo que 'user' tiene una propiedad 'nombre'\n            }\n        });\n    });\n    return {\n        nombreEstacion,\n        maximaPrecipitacion,\n        departamentoEstacion,\n        municipioEstacion,\n        diaMaximaPrecipitacion\n    };\n}\nconst EstacionMaximaPrecipitacion = (param)=>{\n    let { users } = param;\n    const { nombreEstacion, maximaPrecipitacion, departamentoEstacion, municipioEstacion, diaMaximaPrecipitacion } = encontrarMaximaPrecipitacion(users);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-sm p-4 bg-orange-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n        children: nombreEstacion ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"La estaci\\xf3n con la mayor \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"precipitaci\\xf3n\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 36\n                }, undefined),\n                \" registrada al momento es \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: nombreEstacion\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 22\n                }, undefined),\n                \", del municipio de\",\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: [\n                        municipioEstacion,\n                        \"(\",\n                        departamentoEstacion,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, undefined),\n                \" \",\n                \"con un total de \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: [\n                        maximaPrecipitacion,\n                        \" mm\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 27\n                }, undefined),\n                \" registrado el d\\xeda \",\n                diaMaximaPrecipitacion,\n                \" del presente mes.\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n            lineNumber: 57,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No se encontraron datos de precipitaci\\xf3n.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n            lineNumber: 68,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EstacionMaximaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EstacionMaximaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"EstacionMaximaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXhpbWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLFNBQVNBLDZCQUE2QkMsS0FBYTtJQU94RCxJQUFJQyxzQkFBc0I7SUFDMUIsSUFBSUMsaUJBQWlCO0lBQ3JCLElBQUlDLHVCQUF1QjtJQUMzQixJQUFJQyxvQkFBb0I7SUFDeEIsSUFBSUMseUJBQXlCO0lBRTdCTCxNQUFNTSxPQUFPLENBQUMsQ0FBQ0M7UUFDYkEsS0FBS0MsYUFBYSxDQUFDRixPQUFPLENBQUMsQ0FBQ0U7WUFDMUIsTUFBTSxDQUFDQyxLQUFLQyxNQUFNLEdBQUdDLE9BQU9DLE9BQU8sQ0FBQ0osY0FBYyxDQUFDLEVBQUU7WUFDckQsSUFBSUUsVUFBVSxRQUFRQSxRQUFRVCxxQkFBcUI7Z0JBQ2pEQSxzQkFBc0JTO2dCQUN0QlIsaUJBQWlCSyxLQUFLTSxRQUFRO2dCQUM5QlYsdUJBQXVCSSxLQUFLTyxJQUFJO2dCQUNoQ1Ysb0JBQW9CRyxLQUFLUSxTQUFTO2dCQUNsQ1YseUJBQXlCSTtZQUN6QixvREFBb0Q7WUFDdEQ7UUFDRjtJQUNGO0lBRUEsT0FBTztRQUNMUDtRQUNBRDtRQUNBRTtRQUNBQztRQUNBQztJQUNGO0FBQ0Y7QUFNQSxNQUFNVyw4QkFFRjtRQUFDLEVBQUVoQixLQUFLLEVBQUU7SUFDWixNQUFNLEVBQ0pFLGNBQWMsRUFDZEQsbUJBQW1CLEVBQ25CRSxvQkFBb0IsRUFDcEJDLGlCQUFpQixFQUNqQkMsc0JBQXNCLEVBQ3ZCLEdBQUdOLDZCQUE2QkM7SUFFakMscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFVO2tCQUNaaEIsK0JBQ0MsOERBQUNpQjs7Z0JBQUU7OEJBQ3dCLDhEQUFDQzs4QkFBTzs7Ozs7O2dCQUFzQjs4QkFDNUMsOERBQUNBOzhCQUFRbEI7Ozs7OztnQkFBd0I7Z0JBQW1COzhCQUMvRCw4REFBQ2tCOzt3QkFDRWhCO3dCQUFrQjt3QkFBRUQ7d0JBQ25COzs7Ozs7O2dCQUNNO2dCQUFJOzhCQUNFLDhEQUFDaUI7O3dCQUFRbkI7d0JBQW9COzs7Ozs7O2dCQUFZO2dCQUNqREk7Z0JBQXVCOzs7Ozs7c0NBR2pDLDhEQUFDYztzQkFBRTs7Ozs7Ozs7Ozs7QUFJWDtLQTdCTUg7QUErQk4sK0RBQWVBLDJCQUEyQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbWF4aW1hLnRzeD9kZWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vKG1vZGVsKS9jb25leGlvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29udHJhck1heGltYVByZWNpcGl0YWNpb24odXNlcnM6IFVzZXJbXSk6IHtcclxuICBub21icmVFc3RhY2lvbjogc3RyaW5nO1xyXG4gIG1heGltYVByZWNpcGl0YWNpb246IG51bWJlcjtcclxuICBkZXBhcnRhbWVudG9Fc3RhY2lvbjogc3RyaW5nO1xyXG4gIG11bmljaXBpb0VzdGFjaW9uOiBzdHJpbmc7XHJcbiAgZGlhTWF4aW1hUHJlY2lwaXRhY2lvbjogc3RyaW5nO1xyXG59IHtcclxuICBsZXQgbWF4aW1hUHJlY2lwaXRhY2lvbiA9IDA7XHJcbiAgbGV0IG5vbWJyZUVzdGFjaW9uID0gXCJcIjtcclxuICBsZXQgZGVwYXJ0YW1lbnRvRXN0YWNpb24gPSBcIlwiO1xyXG4gIGxldCBtdW5pY2lwaW9Fc3RhY2lvbiA9IFwiXCI7XHJcbiAgbGV0IGRpYU1heGltYVByZWNpcGl0YWNpb24gPSBcIlwiO1xyXG5cclxuICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XHJcbiAgICB1c2VyLnByZWNpcGl0YWNpb24uZm9yRWFjaCgocHJlY2lwaXRhY2lvbikgPT4ge1xyXG4gICAgICBjb25zdCBbZGlhLCB2YWxvcl0gPSBPYmplY3QuZW50cmllcyhwcmVjaXBpdGFjaW9uKVswXTtcclxuICAgICAgaWYgKHZhbG9yICE9PSBudWxsICYmIHZhbG9yID4gbWF4aW1hUHJlY2lwaXRhY2lvbikge1xyXG4gICAgICAgIG1heGltYVByZWNpcGl0YWNpb24gPSB2YWxvcjtcclxuICAgICAgICBub21icmVFc3RhY2lvbiA9IHVzZXIuRVNUQUNJT047XHJcbiAgICAgICAgZGVwYXJ0YW1lbnRvRXN0YWNpb24gPSB1c2VyLkRQVE87XHJcbiAgICAgICAgbXVuaWNpcGlvRXN0YWNpb24gPSB1c2VyLk1VTklDSVBJTztcclxuICAgICAgICBkaWFNYXhpbWFQcmVjaXBpdGFjaW9uID0gZGlhO1xyXG4gICAgICAgIC8vIEFzdW1pZW5kbyBxdWUgJ3VzZXInIHRpZW5lIHVuYSBwcm9waWVkYWQgJ25vbWJyZSdcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBub21icmVFc3RhY2lvbixcclxuICAgIG1heGltYVByZWNpcGl0YWNpb24sXHJcbiAgICBkZXBhcnRhbWVudG9Fc3RhY2lvbixcclxuICAgIG11bmljaXBpb0VzdGFjaW9uLFxyXG4gICAgZGlhTWF4aW1hUHJlY2lwaXRhY2lvbixcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRXN0YWNpb25NYXhpbWFQcmVjaXBpdGFjaW9uUHJvcHMge1xyXG4gIHVzZXJzOiBVc2VyW107XHJcbn1cclxuXHJcbmNvbnN0IEVzdGFjaW9uTWF4aW1hUHJlY2lwaXRhY2lvbjogUmVhY3QuRkM8XHJcbiAgRXN0YWNpb25NYXhpbWFQcmVjaXBpdGFjaW9uUHJvcHNcclxuPiA9ICh7IHVzZXJzIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBub21icmVFc3RhY2lvbixcclxuICAgIG1heGltYVByZWNpcGl0YWNpb24sXHJcbiAgICBkZXBhcnRhbWVudG9Fc3RhY2lvbixcclxuICAgIG11bmljaXBpb0VzdGFjaW9uLFxyXG4gICAgZGlhTWF4aW1hUHJlY2lwaXRhY2lvbixcclxuICB9ID0gZW5jb250cmFyTWF4aW1hUHJlY2lwaXRhY2lvbih1c2Vycyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNtIHAtNCBiZy1vcmFuZ2UtMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgICB7bm9tYnJlRXN0YWNpb24gPyAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBMYSBlc3RhY2nDs24gY29uIGxhIG1heW9yIDxzdHJvbmc+cHJlY2lwaXRhY2nDs248L3N0cm9uZz4gcmVnaXN0cmFkYSBhbFxyXG4gICAgICAgICAgbW9tZW50byBlcyA8c3Ryb25nPntub21icmVFc3RhY2lvbn08L3N0cm9uZz4sIGRlbCBtdW5pY2lwaW8gZGV7XCIgXCJ9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7bXVuaWNpcGlvRXN0YWNpb259KHtkZXBhcnRhbWVudG9Fc3RhY2lvbn1cclxuICAgICAgICAgICAge30pXHJcbiAgICAgICAgICA8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICBjb24gdW4gdG90YWwgZGUgPHN0cm9uZz57bWF4aW1hUHJlY2lwaXRhY2lvbn0gbW08L3N0cm9uZz4gcmVnaXN0cmFkb1xyXG4gICAgICAgICAgZWwgZMOtYSB7ZGlhTWF4aW1hUHJlY2lwaXRhY2lvbn0gZGVsIHByZXNlbnRlIG1lcy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+Tm8gc2UgZW5jb250cmFyb24gZGF0b3MgZGUgcHJlY2lwaXRhY2nDs24uPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVzdGFjaW9uTWF4aW1hUHJlY2lwaXRhY2lvbjtcclxuIl0sIm5hbWVzIjpbImVuY29udHJhck1heGltYVByZWNpcGl0YWNpb24iLCJ1c2VycyIsIm1heGltYVByZWNpcGl0YWNpb24iLCJub21icmVFc3RhY2lvbiIsImRlcGFydGFtZW50b0VzdGFjaW9uIiwibXVuaWNpcGlvRXN0YWNpb24iLCJkaWFNYXhpbWFQcmVjaXBpdGFjaW9uIiwiZm9yRWFjaCIsInVzZXIiLCJwcmVjaXBpdGFjaW9uIiwiZGlhIiwidmFsb3IiLCJPYmplY3QiLCJlbnRyaWVzIiwiRVNUQUNJT04iLCJEUFRPIiwiTVVOSUNJUElPIiwiRXN0YWNpb25NYXhpbWFQcmVjaXBpdGFjaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/maxima.tsx\n"));

/***/ })

});