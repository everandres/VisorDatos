"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/precipitacion/[id]/route";
exports.ids = ["app/api/precipitacion/[id]/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute&page=%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute&page=%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_easalazarm_Desktop_VisorDatos_src_app_api_precipitacion_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/precipitacion/[id]/route.ts */ \"(rsc)/./src/app/api/precipitacion/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/precipitacion/[id]/route\",\n        pathname: \"/api/precipitacion/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/precipitacion/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\api\\\\precipitacion\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_easalazarm_Desktop_VisorDatos_src_app_api_precipitacion_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/precipitacion/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcmVjaXBpdGFjaW9uJTJGJTVCaWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByZWNpcGl0YWNpb24lMkYlNUJpZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByZWNpcGl0YWNpb24lMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlYXNhbGF6YXJtJTVDRGVza3RvcCU1Q1Zpc29yRGF0b3MlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2Vhc2FsYXphcm0lNUNEZXNrdG9wJTVDVmlzb3JEYXRvcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN3QztBQUNySDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1kYXRvcy8/NWRiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxlYXNhbGF6YXJtXFxcXERlc2t0b3BcXFxcVmlzb3JEYXRvc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcmVjaXBpdGFjaW9uXFxcXFtpZF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ByZWNpcGl0YWNpb24vW2lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ByZWNpcGl0YWNpb24vW2lkXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJlY2lwaXRhY2lvbi9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZWFzYWxhemFybVxcXFxEZXNrdG9wXFxcXFZpc29yRGF0b3NcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJlY2lwaXRhY2lvblxcXFxbaWRdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3ByZWNpcGl0YWNpb24vW2lkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute&page=%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/(model)/mongodb.ts":
/*!************************************!*\
  !*** ./src/app/(model)/mongodb.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)(); // Esto carga las variables de entorno desde '.env'\n\nconst uri = process.env.MONGODB_URI || \"tu_uri_de_conexion_a_mongodb\";\nif (!uri) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env\");\n}\nconst options = {};\nlet client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(uri, options);\nlet clientPromise;\n// Asumiendo un enfoque simplificado para manejo en ambos entornos\nclientPromise = client.connect();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwLyhtb2RlbCkvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNoQ0EsOENBQU1BLElBQUksbURBQW1EO0FBRXZCO0FBRXRDLE1BQU1FLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO0FBQ3ZDLElBQUksQ0FBQ0gsS0FBSztJQUNSLE1BQU0sSUFBSUksTUFDUjtBQUVKO0FBRUEsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDLFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNDLEtBQUtLO0FBQ2xDLElBQUlFO0FBRUosa0VBQWtFO0FBQ2xFQSxnQkFBZ0JELE9BQU9FLE9BQU87QUFFOUIsaUVBQWVELGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZGF0b3MvLi9zcmMvYXBwLyhtb2RlbCkvbW9uZ29kYi50cz8xNzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcclxuY29uZmlnKCk7IC8vIEVzdG8gY2FyZ2EgbGFzIHZhcmlhYmxlcyBkZSBlbnRvcm5vIGRlc2RlICcuZW52J1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgXCJ0dV91cmlfZGVfY29uZXhpb25fYV9tb25nb2RiXCI7XHJcbmlmICghdXJpKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudlwiXHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5cclxubGV0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD47XHJcblxyXG4vLyBBc3VtaWVuZG8gdW4gZW5mb3F1ZSBzaW1wbGlmaWNhZG8gcGFyYSBtYW5lam8gZW4gYW1ib3MgZW50b3Jub3NcclxuY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xyXG4iXSwibmFtZXMiOlsiY29uZmlnIiwiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/(model)/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/precipitacion/[id]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/precipitacion/[id]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_model_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/(model)/mongodb */ \"(rsc)/./src/app/(model)/mongodb.ts\");\n\n\nasync function GET(req, { params }) {\n    const codigo = params?.id; // Asume que la ruta es algo como /api/estacion/:codigo\n    try {\n        const client = await _app_model_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"visor\");\n        const estacion = await db.collection(\"precs\").findOne({\n            CODIGO: parseInt(codigo, 10)\n        });\n        if (!estacion) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Estaci\\xf3n no encontrada\"\n            }), {\n                status: 404,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(estacion), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Error al conectar a la base de datos\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcmVjaXBpdGFjaW9uL1tpZF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ047QUFFM0MsZUFBZUUsSUFDcEJDLEdBQWdCLEVBQ2hCLEVBQUVDLE1BQU0sRUFBOEI7SUFFdEMsTUFBTUMsU0FBU0QsUUFBUUUsSUFBSSx1REFBdUQ7SUFDbEYsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTU4sMERBQWFBO1FBQ2xDLE1BQU1PLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztRQUNyQixNQUFNQyxXQUFXLE1BQU1ELEdBQ3BCRSxVQUFVLENBQUMsU0FDWEMsT0FBTyxDQUFDO1lBQUVDLFFBQVFDLFNBQVNSLFFBQVE7UUFBSTtRQUUxQyxJQUFJLENBQUNJLFVBQVU7WUFDYixPQUFPLElBQUlULHFEQUFZQSxDQUNyQmMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQXlCLElBQ25EO2dCQUNFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtRQUVKO1FBRUEsT0FBTyxJQUFJbEIscURBQVlBLENBQUNjLEtBQUtDLFNBQVMsQ0FBQ04sV0FBVztZQUNoRFEsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTyxJQUFJbkIscURBQVlBLENBQ3JCYyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztRQUF1QyxJQUNqRTtZQUNFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7SUFFSjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWRhdG9zLy4vc3JjL2FwcC9hcGkvcHJlY2lwaXRhY2lvbi9baWRdL3JvdXRlLnRzP2VhNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9hcHAvKG1vZGVsKS9tb25nb2RiXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKFxyXG4gIHJlcTogTmV4dFJlcXVlc3QsXHJcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH1cclxuKSB7XHJcbiAgY29uc3QgY29kaWdvID0gcGFyYW1zPy5pZDsgLy8gQXN1bWUgcXVlIGxhIHJ1dGEgZXMgYWxnbyBjb21vIC9hcGkvZXN0YWNpb24vOmNvZGlnb1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJ2aXNvclwiKTtcclxuICAgIGNvbnN0IGVzdGFjaW9uID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oXCJwcmVjc1wiKVxyXG4gICAgICAuZmluZE9uZSh7IENPRElHTzogcGFyc2VJbnQoY29kaWdvLCAxMCkgfSk7XHJcblxyXG4gICAgaWYgKCFlc3RhY2lvbikge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiRXN0YWNpw7NuIG5vIGVuY29udHJhZGFcIiB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdGF0dXM6IDQwNCxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeShlc3RhY2lvbiksIHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkVycm9yIGFsIGNvbmVjdGFyIGEgbGEgYmFzZSBkZSBkYXRvc1wiIH0pLFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNsaWVudFByb21pc2UiLCJHRVQiLCJyZXEiLCJwYXJhbXMiLCJjb2RpZ28iLCJpZCIsImNsaWVudCIsImRiIiwiZXN0YWNpb24iLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsIkNPRElHTyIsInBhcnNlSW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJoZWFkZXJzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/precipitacion/[id]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute&page=%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprecipitacion%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();