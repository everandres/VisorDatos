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
exports.id = "app/api/precipitacion/route";
exports.ids = ["app/api/precipitacion/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprecipitacion%2Froute&page=%2Fapi%2Fprecipitacion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprecipitacion%2Froute.ts&appDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprecipitacion%2Froute&page=%2Fapi%2Fprecipitacion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprecipitacion%2Froute.ts&appDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_easalazarm_Desktop_VisorDatos_src_app_api_precipitacion_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/precipitacion/route.ts */ \"(rsc)/./src/app/api/precipitacion/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/precipitacion/route\",\n        pathname: \"/api/precipitacion\",\n        filename: \"route\",\n        bundlePath: \"app/api/precipitacion/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\easalazarm\\\\Desktop\\\\VisorDatos\\\\src\\\\app\\\\api\\\\precipitacion\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_easalazarm_Desktop_VisorDatos_src_app_api_precipitacion_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/precipitacion/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcmVjaXBpdGFjaW9uJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcmVjaXBpdGFjaW9uJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJlY2lwaXRhY2lvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlYXNhbGF6YXJtJTVDRGVza3RvcCU1Q1Zpc29yRGF0b3MlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2Vhc2FsYXphcm0lNUNEZXNrdG9wJTVDVmlzb3JEYXRvcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNrQztBQUMvRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1kYXRvcy8/MjlhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxlYXNhbGF6YXJtXFxcXERlc2t0b3BcXFxcVmlzb3JEYXRvc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcmVjaXBpdGFjaW9uXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcmVjaXBpdGFjaW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJlY2lwaXRhY2lvblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJlY2lwaXRhY2lvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGVhc2FsYXphcm1cXFxcRGVza3RvcFxcXFxWaXNvckRhdG9zXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHByZWNpcGl0YWNpb25cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcHJlY2lwaXRhY2lvbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprecipitacion%2Froute&page=%2Fapi%2Fprecipitacion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprecipitacion%2Froute.ts&appDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/(model)/mongodb.ts":
/*!************************************!*\
  !*** ./src/app/(model)/mongodb.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)(); // Esto carga las variables de entorno desde '.env'\n\nconst uri = process.env.MONGODB_URI || \"mongodb+srv://everandres:MmQHUK199Hz3sKRg@ospa.jtty6om.mongodb.net\";\nif (!uri) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env\");\n}\nconst options = {};\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(uri, options);\n// Define una función asincrónica para intentar conectar con reintentos\nconst connectWithRetry = async (client, maxAttempts = 3)=>{\n    let attempt = 1; // Intento actual\n    while(attempt <= maxAttempts){\n        try {\n            console.log(`Intentando conectar, intento ${attempt}...`);\n            const clientConnection = await client.connect();\n            console.log(\"Conexi\\xf3n exitosa a la base de datos.\"); // Mensaje de conexión exitosa\n            return clientConnection;\n        } catch (error) {\n            console.error(`Error al conectar a MongoDB en el intento ${attempt}`, error);\n            if (attempt === maxAttempts) {\n                throw new Error(\"Maximo de intentos de conexi\\xf3n alcanzado. No se pudo conectar a MongoDB.\");\n            }\n            // Incrementa el tiempo de espera para el próximo intento\n            const backoffTime = Math.pow(2, attempt) * 100; // Exponencial backoff\n            console.log(`Esperando ${backoffTime}ms antes del próximo intento...`);\n            await new Promise((resolve)=>setTimeout(resolve, backoffTime));\n            attempt++;\n        }\n    }\n    throw new Error(\"No se pudo conectar a MongoDB despu\\xe9s de varios intentos.\");\n};\n// Uso de la función de conexión con reintentos\nlet clientPromise = connectWithRetry(client);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwLyhtb2RlbCkvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNoQ0EsOENBQU1BLElBQUksbURBQW1EO0FBRXZCO0FBRXRDLE1BQU1FLE1BQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO0FBQy9DLElBQUksQ0FBQ0gsS0FBSztJQUNSLE1BQU0sSUFBSUksTUFDUjtBQUVKO0FBRUEsTUFBTUMsVUFBVSxDQUFDO0FBQ2pCLE1BQU1DLFNBQXNCLElBQUlQLGdEQUFXQSxDQUFDQyxLQUFLSztBQUVqRCx1RUFBdUU7QUFDdkUsTUFBTUUsbUJBQW1CLE9BQ3ZCRCxRQUNBRSxjQUFzQixDQUFDO0lBRXZCLElBQUlDLFVBQWtCLEdBQUcsaUJBQWlCO0lBQzFDLE1BQU9BLFdBQVdELFlBQWE7UUFDN0IsSUFBSTtZQUNGRSxRQUFRQyxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsRUFBRUYsUUFBUSxHQUFHLENBQUM7WUFDeEQsTUFBTUcsbUJBQWdDLE1BQU1OLE9BQU9PLE9BQU87WUFDMURILFFBQVFDLEdBQUcsQ0FBQyw0Q0FBeUMsOEJBQThCO1lBQ25GLE9BQU9DO1FBQ1QsRUFBRSxPQUFPRSxPQUFPO1lBQ2RKLFFBQVFJLEtBQUssQ0FDWCxDQUFDLDBDQUEwQyxFQUFFTCxRQUFRLENBQUMsRUFDdERLO1lBRUYsSUFBSUwsWUFBWUQsYUFBYTtnQkFDM0IsTUFBTSxJQUFJSixNQUNSO1lBRUo7WUFDQSx5REFBeUQ7WUFDekQsTUFBTVcsY0FBc0JDLEtBQUtDLEdBQUcsQ0FBQyxHQUFHUixXQUFXLEtBQUssc0JBQXNCO1lBQzlFQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUVJLFlBQVksK0JBQStCLENBQUM7WUFDckUsTUFBTSxJQUFJRyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVNKO1lBQ25ETjtRQUNGO0lBQ0Y7SUFDQSxNQUFNLElBQUlMLE1BQU07QUFDbEI7QUFFQSwrQ0FBK0M7QUFDL0MsSUFBSWlCLGdCQUFzQ2QsaUJBQWlCRDtBQUUzRCxpRUFBZWUsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1kYXRvcy8uL3NyYy9hcHAvKG1vZGVsKS9tb25nb2RiLnRzPzE3OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xyXG5jb25maWcoKTsgLy8gRXN0byBjYXJnYSBsYXMgdmFyaWFibGVzIGRlIGVudG9ybm8gZGVzZGUgJy5lbnYnXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCB1cmk6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8IFwibW9uZ29kYitzcnY6Ly9ldmVyYW5kcmVzOk1tUUhVSzE5OUh6M3NLUmdAb3NwYS5qdHR5Nm9tLm1vbmdvZGIubmV0XCI7XHJcbmlmICghdXJpKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudlwiXHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5jb25zdCBjbGllbnQ6IE1vbmdvQ2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcblxyXG4vLyBEZWZpbmUgdW5hIGZ1bmNpw7NuIGFzaW5jcsOzbmljYSBwYXJhIGludGVudGFyIGNvbmVjdGFyIGNvbiByZWludGVudG9zXHJcbmNvbnN0IGNvbm5lY3RXaXRoUmV0cnkgPSBhc3luYyAoXHJcbiAgY2xpZW50OiBNb25nb0NsaWVudCxcclxuICBtYXhBdHRlbXB0czogbnVtYmVyID0gM1xyXG4pOiBQcm9taXNlPE1vbmdvQ2xpZW50PiA9PiB7XHJcbiAgbGV0IGF0dGVtcHQ6IG51bWJlciA9IDE7IC8vIEludGVudG8gYWN0dWFsXHJcbiAgd2hpbGUgKGF0dGVtcHQgPD0gbWF4QXR0ZW1wdHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBJbnRlbnRhbmRvIGNvbmVjdGFyLCBpbnRlbnRvICR7YXR0ZW1wdH0uLi5gKTtcclxuICAgICAgY29uc3QgY2xpZW50Q29ubmVjdGlvbjogTW9uZ29DbGllbnQgPSBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbmV4acOzbiBleGl0b3NhIGEgbGEgYmFzZSBkZSBkYXRvcy5cIik7IC8vIE1lbnNhamUgZGUgY29uZXhpw7NuIGV4aXRvc2FcclxuICAgICAgcmV0dXJuIGNsaWVudENvbm5lY3Rpb247XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBFcnJvciBhbCBjb25lY3RhciBhIE1vbmdvREIgZW4gZWwgaW50ZW50byAke2F0dGVtcHR9YCxcclxuICAgICAgICBlcnJvclxyXG4gICAgICApO1xyXG4gICAgICBpZiAoYXR0ZW1wdCA9PT0gbWF4QXR0ZW1wdHMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBcIk1heGltbyBkZSBpbnRlbnRvcyBkZSBjb25leGnDs24gYWxjYW56YWRvLiBObyBzZSBwdWRvIGNvbmVjdGFyIGEgTW9uZ29EQi5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gSW5jcmVtZW50YSBlbCB0aWVtcG8gZGUgZXNwZXJhIHBhcmEgZWwgcHLDs3hpbW8gaW50ZW50b1xyXG4gICAgICBjb25zdCBiYWNrb2ZmVGltZTogbnVtYmVyID0gTWF0aC5wb3coMiwgYXR0ZW1wdCkgKiAxMDA7IC8vIEV4cG9uZW5jaWFsIGJhY2tvZmZcclxuICAgICAgY29uc29sZS5sb2coYEVzcGVyYW5kbyAke2JhY2tvZmZUaW1lfW1zIGFudGVzIGRlbCBwcsOzeGltbyBpbnRlbnRvLi4uYCk7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGJhY2tvZmZUaW1lKSk7XHJcbiAgICAgIGF0dGVtcHQrKztcclxuICAgIH1cclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgcHVkbyBjb25lY3RhciBhIE1vbmdvREIgZGVzcHXDqXMgZGUgdmFyaW9zIGludGVudG9zLlwiKTtcclxufTtcclxuXHJcbi8vIFVzbyBkZSBsYSBmdW5jacOzbiBkZSBjb25leGnDs24gY29uIHJlaW50ZW50b3NcclxubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+ID0gY29ubmVjdFdpdGhSZXRyeShjbGllbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcclxuIl0sIm5hbWVzIjpbImNvbmZpZyIsIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJvcHRpb25zIiwiY2xpZW50IiwiY29ubmVjdFdpdGhSZXRyeSIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRDb25uZWN0aW9uIiwiY29ubmVjdCIsImVycm9yIiwiYmFja29mZlRpbWUiLCJNYXRoIiwicG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY2xpZW50UHJvbWlzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/(model)/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/precipitacion/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/precipitacion/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_model_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/(model)/mongodb */ \"(rsc)/./src/app/(model)/mongodb.ts\");\n/*import conexion from \"@/app/(model)/conexion\";\r\nimport { NextResponse, NextRequest } from \"next/server\";\r\n\r\nexport const GET = async () => {\r\n  const { rows } = await conexion.query(\"SELECT * FROM public.precipitacion\");\r\n  return NextResponse.json(rows, { status: 200 });\r\n};\r\n*/ \n\nconst dynamic = \"force-dynamic\";\nasync function GET(req) {\n    try {\n        const client = await _app_model_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"visor\");\n        const users = await db.collection(\"precs\").find().toArray();\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(users), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (e) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Error al conectar a la base de datos ${e}\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcmVjaXBpdGFjaW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BLEdBRXdEO0FBQ047QUFJM0MsTUFBTUUsVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUMsSUFBSUMsR0FBZ0I7SUFDeEMsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTUosMERBQWFBO1FBQ2xDLE1BQU1LLEtBQVNELE9BQU9DLEVBQUUsQ0FBQztRQUV6QixNQUFNQyxRQUFTLE1BQU1ELEdBQ2xCRSxVQUFVLENBQUMsU0FDWEMsSUFBSSxHQUNKQyxPQUFPO1FBRVYsT0FBTyxJQUFJVixxREFBWUEsQ0FBQ1csS0FBS0MsU0FBUyxDQUFDTCxRQUFRO1lBQzdDTSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7SUFDRixFQUFFLE9BQU9DLEdBQUc7UUFDVixPQUFPLElBQUlmLHFEQUFZQSxDQUNyQlcsS0FBS0MsU0FBUyxDQUFDO1lBQUVJLFNBQVM7UUFBNEMsSUFDdEU7WUFDRUgsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGO0lBRUo7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1kYXRvcy8uL3NyYy9hcHAvYXBpL3ByZWNpcGl0YWNpb24vcm91dGUudHM/ZjRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBjb25leGlvbiBmcm9tIFwiQC9hcHAvKG1vZGVsKS9jb25leGlvblwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UsIE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgY29uZXhpb24ucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHB1YmxpYy5wcmVjaXBpdGFjaW9uXCIpO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyb3dzLCB7IHN0YXR1czogMjAwIH0pO1xyXG59O1xyXG4qL1xyXG5cclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9hcHAvKG1vZGVsKS9tb25nb2RiXCI7XHJcbmltcG9ydCB7IERiIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL2FwcC8obW9kZWwpL2NvbmV4aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHluYW1pYyA9ICdmb3JjZS1keW5hbWljJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgY29uc3QgZGI6IERiID0gY2xpZW50LmRiKFwidmlzb3JcIik7XHJcblxyXG4gICAgY29uc3QgdXNlcnMgPSAoYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oXCJwcmVjc1wiKVxyXG4gICAgICAuZmluZCgpXHJcbiAgICAgIC50b0FycmF5KCkpIGFzIHVua25vd24gYXMgVXNlcltdO1xyXG5cclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHVzZXJzKSwge1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJFcnJvciBhbCBjb25lY3RhciBhIGxhIGJhc2UgZGUgZGF0b3MgJHtlfVwiIH0pLFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNsaWVudFByb21pc2UiLCJkeW5hbWljIiwiR0VUIiwicmVxIiwiY2xpZW50IiwiZGIiLCJ1c2VycyIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJoZWFkZXJzIiwiZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/precipitacion/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprecipitacion%2Froute&page=%2Fapi%2Fprecipitacion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprecipitacion%2Froute.ts&appDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceasalazarm%5CDesktop%5CVisorDatos&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();