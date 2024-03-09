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
exports.id = "app/api/saludo/route";
exports.ids = ["app/api/saludo/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsaludo%2Froute&page=%2Fapi%2Fsaludo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsaludo%2Froute.ts&appDir=C%3A%5CUsers%5CEver%20Salazar%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEver%20Salazar%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsaludo%2Froute&page=%2Fapi%2Fsaludo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsaludo%2Froute.ts&appDir=C%3A%5CUsers%5CEver%20Salazar%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEver%20Salazar%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ever_Salazar_Desktop_VisorDatos_src_app_api_saludo_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/saludo/route.ts */ \"(rsc)/./src/app/api/saludo/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/saludo/route\",\n        pathname: \"/api/saludo\",\n        filename: \"route\",\n        bundlePath: \"app/api/saludo/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ever Salazar\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\api\\\\saludo\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Ever_Salazar_Desktop_VisorDatos_src_app_api_saludo_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/saludo/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzYWx1ZG8lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNhbHVkbyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNhbHVkbyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFdmVyJTIwU2FsYXphciU1Q0Rlc2t0b3AlNUNWaXNvckRhdG9zJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFdmVyJTIwU2FsYXphciU1Q0Rlc2t0b3AlNUNWaXNvckRhdG9zJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWRhdG9zLz8yZTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEV2ZXIgU2FsYXphclxcXFxEZXNrdG9wXFxcXFZpc29yRGF0b3NcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2FsdWRvXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zYWx1ZG8vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zYWx1ZG9cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NhbHVkby9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEV2ZXIgU2FsYXphclxcXFxEZXNrdG9wXFxcXFZpc29yRGF0b3NcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2FsdWRvXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NhbHVkby9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsaludo%2Froute&page=%2Fapi%2Fsaludo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsaludo%2Froute.ts&appDir=C%3A%5CUsers%5CEver%20Salazar%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEver%20Salazar%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/(model)/mongodb.ts":
/*!************************************!*\
  !*** ./src/app/(model)/mongodb.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)(); // Esto carga las variables de entorno desde '.env'\n\nconst uri = process.env.MONGODB_URI || \"tu_uri_de_conexion_a_mongodb\";\nif (!uri) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env\");\n}\nconst options = {};\nlet client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(uri, options);\nlet clientPromise;\n// Asumiendo un enfoque simplificado para manejo en ambos entornos\nclientPromise = client.connect();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwLyhtb2RlbCkvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNoQ0EsOENBQU1BLElBQUksbURBQW1EO0FBRXZCO0FBRXRDLE1BQU1FLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO0FBQ3ZDLElBQUksQ0FBQ0gsS0FBSztJQUNSLE1BQU0sSUFBSUksTUFDUjtBQUVKO0FBRUEsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDLFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNDLEtBQUtLO0FBQ2xDLElBQUlFO0FBRUosa0VBQWtFO0FBQ2xFQSxnQkFBZ0JELE9BQU9FLE9BQU87QUFFOUIsaUVBQWVELGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZGF0b3MvLi9zcmMvYXBwLyhtb2RlbCkvbW9uZ29kYi50cz8xNzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcclxuY29uZmlnKCk7IC8vIEVzdG8gY2FyZ2EgbGFzIHZhcmlhYmxlcyBkZSBlbnRvcm5vIGRlc2RlICcuZW52J1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgXCJ0dV91cmlfZGVfY29uZXhpb25fYV9tb25nb2RiXCI7XHJcbmlmICghdXJpKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudlwiXHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5cclxubGV0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD47XHJcblxyXG4vLyBBc3VtaWVuZG8gdW4gZW5mb3F1ZSBzaW1wbGlmaWNhZG8gcGFyYSBtYW5lam8gZW4gYW1ib3MgZW50b3Jub3NcclxuY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xyXG4iXSwibmFtZXMiOlsiY29uZmlnIiwiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/(model)/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/saludo/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/saludo/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_model_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/(model)/mongodb */ \"(rsc)/./src/app/(model)/mongodb.ts\");\n/*import conexion from \"@/app/(model)/conexion\";\r\nimport { NextResponse, NextRequest } from \"next/server\";\r\n\r\nexport const GET = async () => {\r\n  const { rows } = await conexion.query(\"SELECT * FROM public.precipitacion\");\r\n  return NextResponse.json(rows, { status: 200 });\r\n};\r\n*/ \n\nasync function GET(req) {\n    try {\n        const client = await _app_model_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"visor\");\n        const users = await db.collection(\"precs\").find().toArray();\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(users), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (e) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Error al conectar a la base de datos\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zYWx1ZG8vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7QUFPQSxHQUV3RDtBQUNOO0FBSTNDLGVBQWVFLElBQUlDLEdBQWdCO0lBQ3hDLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1ILDBEQUFhQTtRQUNsQyxNQUFNSSxLQUFTRCxPQUFPQyxFQUFFLENBQUM7UUFFekIsTUFBTUMsUUFBUyxNQUFNRCxHQUNsQkUsVUFBVSxDQUFDLFNBQ1hDLElBQUksR0FDSkMsT0FBTztRQUVWLE9BQU8sSUFBSVQscURBQVlBLENBQUNVLEtBQUtDLFNBQVMsQ0FBQ0wsUUFBUTtZQUM3Q00sUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGO0lBQ0YsRUFBRSxPQUFPQyxHQUFHO1FBQ1YsT0FBTyxJQUFJZCxxREFBWUEsQ0FDckJVLEtBQUtDLFNBQVMsQ0FBQztZQUFFSSxTQUFTO1FBQXVDLElBQ2pFO1lBQ0VILFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtJQUVKO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZGF0b3MvLi9zcmMvYXBwL2FwaS9zYWx1ZG8vcm91dGUudHM/ZWZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBjb25leGlvbiBmcm9tIFwiQC9hcHAvKG1vZGVsKS9jb25leGlvblwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UsIE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgY29uZXhpb24ucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHB1YmxpYy5wcmVjaXBpdGFjaW9uXCIpO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyb3dzLCB7IHN0YXR1czogMjAwIH0pO1xyXG59O1xyXG4qL1xyXG5cclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9hcHAvKG1vZGVsKS9tb25nb2RiXCI7XHJcbmltcG9ydCB7IERiIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL2FwcC8obW9kZWwpL2NvbmV4aW9uXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgIGNvbnN0IGRiOiBEYiA9IGNsaWVudC5kYihcInZpc29yXCIpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJzID0gKGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKFwicHJlY3NcIilcclxuICAgICAgLmZpbmQoKVxyXG4gICAgICAudG9BcnJheSgpKSBhcyB1bmtub3duIGFzIFVzZXJbXTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeSh1c2VycyksIHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiRXJyb3IgYWwgY29uZWN0YXIgYSBsYSBiYXNlIGRlIGRhdG9zXCIgfSksXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY2xpZW50UHJvbWlzZSIsIkdFVCIsInJlcSIsImNsaWVudCIsImRiIiwidXNlcnMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiaGVhZGVycyIsImUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/saludo/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsaludo%2Froute&page=%2Fapi%2Fsaludo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsaludo%2Froute.ts&appDir=C%3A%5CUsers%5CEver%20Salazar%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEver%20Salazar%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();