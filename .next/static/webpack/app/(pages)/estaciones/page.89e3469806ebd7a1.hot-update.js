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

/***/ "(app-pages-browser)/./src/app/components/fecha.tsx":
/*!**************************************!*\
  !*** ./src/app/components/fecha.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ComponenteConFecha = ()=>{\n    _s();\n    const [fechaHora, setFechaHora] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Actualizamos la fecha y hora solo en el lado del cliente\n        const now = new Date();\n        setFechaHora(now.toLocaleString(\"es-ES\", {\n            hour12: true\n        }));\n        // Opcional: actualizar la hora cada minuto si es necesario\n        const intervalId = setInterval(()=>{\n            const newNow = new Date();\n            setFechaHora(newNow.toLocaleString(\"es-ES\", {\n                hour12: true\n            }));\n        }, 60000); // Actualiza cada minuto\n        // Limpiamos el intervalo cuando el componente se desmonta\n        return ()=>clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-2xl text-gray-500\",\n            children: fechaHora\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\fecha.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\components\\\\fecha.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ComponenteConFecha, \"x9/NrSu10WmEwllWfvL2GnzDeYE=\");\n_c = ComponenteConFecha;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponenteConFecha); //text-2xl text-gray-400 mt-8 items-center flex justify-center\nvar _c;\n$RefreshReg$(_c, \"ComponenteConFecha\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9mZWNoYS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ21EO0FBRW5ELE1BQU1HLHFCQUErQjs7SUFDbkMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLDJEQUEyRDtRQUMzRCxNQUFNSyxNQUFNLElBQUlDO1FBQ2hCRixhQUFhQyxJQUFJRSxjQUFjLENBQUMsU0FBUztZQUFFQyxRQUFRO1FBQUs7UUFFeEQsMkRBQTJEO1FBQzNELE1BQU1DLGFBQWFDLFlBQVk7WUFDN0IsTUFBTUMsU0FBUyxJQUFJTDtZQUNuQkYsYUFBYU8sT0FBT0osY0FBYyxDQUFDLFNBQVM7Z0JBQUVDLFFBQVE7WUFBSztRQUM3RCxHQUFHLFFBQVEsd0JBQXdCO1FBRW5DLDBEQUEwRDtRQUMxRCxPQUFPLElBQU1JLGNBQWNIO0lBQzdCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSTtrQkFDQyw0RUFBQ0M7WUFBRUMsV0FBVTtzQkFBMEJaOzs7Ozs7Ozs7OztBQUk3QztHQXhCTUQ7S0FBQUE7QUEwQk4sK0RBQWVBLGtCQUFrQkEsRUFBQyxDQUVsQyw4REFBOEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2ZlY2hhLnRzeD8wNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29tcG9uZW50ZUNvbkZlY2hhOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbZmVjaGFIb3JhLCBzZXRGZWNoYUhvcmFdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBBY3R1YWxpemFtb3MgbGEgZmVjaGEgeSBob3JhIHNvbG8gZW4gZWwgbGFkbyBkZWwgY2xpZW50ZVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIHNldEZlY2hhSG9yYShub3cudG9Mb2NhbGVTdHJpbmcoXCJlcy1FU1wiLCB7IGhvdXIxMjogdHJ1ZSB9KSk7XHJcblxyXG4gICAgLy8gT3BjaW9uYWw6IGFjdHVhbGl6YXIgbGEgaG9yYSBjYWRhIG1pbnV0byBzaSBlcyBuZWNlc2FyaW9cclxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld05vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHNldEZlY2hhSG9yYShuZXdOb3cudG9Mb2NhbGVTdHJpbmcoXCJlcy1FU1wiLCB7IGhvdXIxMjogdHJ1ZSB9KSk7XHJcbiAgICB9LCA2MDAwMCk7IC8vIEFjdHVhbGl6YSBjYWRhIG1pbnV0b1xyXG5cclxuICAgIC8vIExpbXBpYW1vcyBlbCBpbnRlcnZhbG8gY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgZGVzbW9udGFcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS01MDBcIj57ZmVjaGFIb3JhfTwvcD5cclxuICAgICAgey8qIC4uLiByZXN0byBkZSB0dSBjb21wb25lbnRlICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudGVDb25GZWNoYTtcclxuXHJcbi8vdGV4dC0yeGwgdGV4dC1ncmF5LTQwMCBtdC04IGl0ZW1zLWNlbnRlciBmbGV4IGp1c3RpZnktY2VudGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tcG9uZW50ZUNvbkZlY2hhIiwiZmVjaGFIb3JhIiwic2V0RmVjaGFIb3JhIiwibm93IiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiaG91cjEyIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwibmV3Tm93IiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInAiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/fecha.tsx\n"));

/***/ })

});