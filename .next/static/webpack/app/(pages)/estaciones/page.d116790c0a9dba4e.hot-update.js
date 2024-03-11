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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encontrarMaximaPrecipitacion: function() { return /* binding */ encontrarMaximaPrecipitacion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction encontrarMaximaPrecipitacion(users) {\n    let maximaPrecipitacion = 0;\n    let nombreEstacion = \"\";\n    users.forEach((user)=>{\n        user.precipitacion.forEach((precipitacion)=>{\n            const [dia, valor] = Object.entries(precipitacion)[0];\n            if (valor !== null && valor > maximaPrecipitacion) {\n                maximaPrecipitacion = valor;\n                nombreEstacion = user.ESTACION; // Asumiendo que 'user' tiene una propiedad 'nombre'\n            }\n        });\n    });\n    return {\n        nombreEstacion,\n        maximaPrecipitacion\n    };\n}\nconst EstacionMaximaPrecipitacion = (param)=>{\n    let { users } = param;\n    const { nombreEstacion, maximaPrecipitacion } = encontrarMaximaPrecipitacion(users);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n        children: nombreEstacion ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"La estaci\\xf3n con la mayor precipitaci\\xf3n es\",\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: nombreEstacion\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined),\n                \", con un total de\",\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: [\n                        maximaPrecipitacion,\n                        \" mm\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined),\n                \".\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No se encontraron datos de precipitaci\\xf3n.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\maxima.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EstacionMaximaPrecipitacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EstacionMaximaPrecipitacion);\nvar _c;\n$RefreshReg$(_c, \"EstacionMaximaPrecipitacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXhpbWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLFNBQVNBLDZCQUE2QkMsS0FBYTtJQUl4RCxJQUFJQyxzQkFBc0I7SUFDMUIsSUFBSUMsaUJBQWlCO0lBRXJCRixNQUFNRyxPQUFPLENBQUMsQ0FBQ0M7UUFDYkEsS0FBS0MsYUFBYSxDQUFDRixPQUFPLENBQUMsQ0FBQ0U7WUFDMUIsTUFBTSxDQUFDQyxLQUFLQyxNQUFNLEdBQUdDLE9BQU9DLE9BQU8sQ0FBQ0osY0FBYyxDQUFDLEVBQUU7WUFDckQsSUFBSUUsVUFBVSxRQUFRQSxRQUFRTixxQkFBcUI7Z0JBQ2pEQSxzQkFBc0JNO2dCQUN0QkwsaUJBQWlCRSxLQUFLTSxRQUFRLEVBQUUsb0RBQW9EO1lBQ3RGO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFBRVI7UUFBZ0JEO0lBQW9CO0FBQy9DO0FBTUEsTUFBTVUsOEJBRUY7UUFBQyxFQUFFWCxLQUFLLEVBQUU7SUFDWixNQUFNLEVBQUVFLGNBQWMsRUFBRUQsbUJBQW1CLEVBQUUsR0FDM0NGLDZCQUE2QkM7SUFFL0IscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ1pYLCtCQUNDLDhEQUFDWTs7Z0JBQUU7Z0JBQ3lDOzhCQUMxQyw4REFBQ0M7OEJBQVFiOzs7Ozs7Z0JBQXdCO2dCQUFrQjs4QkFDbkQsOERBQUNhOzt3QkFBUWQ7d0JBQW9COzs7Ozs7O2dCQUFZOzs7Ozs7c0NBRzNDLDhEQUFDYTtzQkFBRTs7Ozs7Ozs7Ozs7QUFJWDtLQW5CTUg7QUFxQk4sK0RBQWVBLDJCQUEyQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbWF4aW1hLnRzeD9kZWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vKG1vZGVsKS9jb25leGlvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29udHJhck1heGltYVByZWNpcGl0YWNpb24odXNlcnM6IFVzZXJbXSk6IHtcclxuICBub21icmVFc3RhY2lvbjogc3RyaW5nO1xyXG4gIG1heGltYVByZWNpcGl0YWNpb246IG51bWJlcjtcclxufSB7XHJcbiAgbGV0IG1heGltYVByZWNpcGl0YWNpb24gPSAwO1xyXG4gIGxldCBub21icmVFc3RhY2lvbiA9IFwiXCI7XHJcblxyXG4gIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHtcclxuICAgIHVzZXIucHJlY2lwaXRhY2lvbi5mb3JFYWNoKChwcmVjaXBpdGFjaW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtkaWEsIHZhbG9yXSA9IE9iamVjdC5lbnRyaWVzKHByZWNpcGl0YWNpb24pWzBdO1xyXG4gICAgICBpZiAodmFsb3IgIT09IG51bGwgJiYgdmFsb3IgPiBtYXhpbWFQcmVjaXBpdGFjaW9uKSB7XHJcbiAgICAgICAgbWF4aW1hUHJlY2lwaXRhY2lvbiA9IHZhbG9yO1xyXG4gICAgICAgIG5vbWJyZUVzdGFjaW9uID0gdXNlci5FU1RBQ0lPTjsgLy8gQXN1bWllbmRvIHF1ZSAndXNlcicgdGllbmUgdW5hIHByb3BpZWRhZCAnbm9tYnJlJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgbm9tYnJlRXN0YWNpb24sIG1heGltYVByZWNpcGl0YWNpb24gfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEVzdGFjaW9uTWF4aW1hUHJlY2lwaXRhY2lvblByb3BzIHtcclxuICB1c2VyczogVXNlcltdO1xyXG59XHJcblxyXG5jb25zdCBFc3RhY2lvbk1heGltYVByZWNpcGl0YWNpb246IFJlYWN0LkZDPFxyXG4gIEVzdGFjaW9uTWF4aW1hUHJlY2lwaXRhY2lvblByb3BzXHJcbj4gPSAoeyB1c2VycyB9KSA9PiB7XHJcbiAgY29uc3QgeyBub21icmVFc3RhY2lvbiwgbWF4aW1hUHJlY2lwaXRhY2lvbiB9ID1cclxuICAgIGVuY29udHJhck1heGltYVByZWNpcGl0YWNpb24odXNlcnMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zbSBwLTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICAgIHtub21icmVFc3RhY2lvbiA/IChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIExhIGVzdGFjacOzbiBjb24gbGEgbWF5b3IgcHJlY2lwaXRhY2nDs24gZXN7XCIgXCJ9XHJcbiAgICAgICAgICA8c3Ryb25nPntub21icmVFc3RhY2lvbn08L3N0cm9uZz4sIGNvbiB1biB0b3RhbCBkZXtcIiBcIn1cclxuICAgICAgICAgIDxzdHJvbmc+e21heGltYVByZWNpcGl0YWNpb259IG1tPC9zdHJvbmc+LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5ObyBzZSBlbmNvbnRyYXJvbiBkYXRvcyBkZSBwcmVjaXBpdGFjacOzbi48L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXN0YWNpb25NYXhpbWFQcmVjaXBpdGFjaW9uO1xyXG4iXSwibmFtZXMiOlsiZW5jb250cmFyTWF4aW1hUHJlY2lwaXRhY2lvbiIsInVzZXJzIiwibWF4aW1hUHJlY2lwaXRhY2lvbiIsIm5vbWJyZUVzdGFjaW9uIiwiZm9yRWFjaCIsInVzZXIiLCJwcmVjaXBpdGFjaW9uIiwiZGlhIiwidmFsb3IiLCJPYmplY3QiLCJlbnRyaWVzIiwiRVNUQUNJT04iLCJFc3RhY2lvbk1heGltYVByZWNpcGl0YWNpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/maxima.tsx\n"));

/***/ })

});