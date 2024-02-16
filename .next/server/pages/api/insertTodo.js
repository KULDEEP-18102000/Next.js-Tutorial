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
exports.id = "pages/api/insertTodo";
exports.ids = ["pages/api/insertTodo"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/insertTodo.js":
/*!*********************************!*\
  !*** ./pages/api/insertTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    try {\n        if (req.method == \"POST\") {\n            const data = req.body;\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`);\n            const db = client.db();\n            const todosCollection = db.collection(\"todos\");\n            const result = await todosCollection.insertOne(data);\n            console.log(result);\n            client.close();\n            res.status(201).json({\n                message: \"Todo Successfully Inserted\"\n            });\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(error);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW5zZXJ0VG9kby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUMzQixJQUFJO1FBQ0EsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLElBQUUsTUFBTSxFQUFDO1lBQ2xCLE1BQU1DLElBQUksR0FBQ0gsR0FBRyxDQUFDSSxJQUFJO1lBRW5CLE1BQU1DLE1BQU0sR0FBRyxNQUFNUCx3REFBbUIsQ0FBQyxDQUFDLCtHQUErRyxDQUFDLENBQUM7WUFDM0osTUFBTVMsRUFBRSxHQUFDRixNQUFNLENBQUNFLEVBQUUsRUFBRTtZQUVwQixNQUFNQyxlQUFlLEdBQUVELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUU3QyxNQUFNQyxNQUFNLEdBQUMsTUFBTUYsZUFBZSxDQUFDRyxTQUFTLENBQUNSLElBQUksQ0FBQztZQUNsRFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQztZQUVuQkwsTUFBTSxDQUFDUyxLQUFLLEVBQUU7WUFFZGIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0MsT0FBTyxFQUFDLDRCQUE0QjthQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNMLEVBQUUsT0FBT0MsS0FBSyxFQUFFO1FBQ1pOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxLQUFLLENBQUM7UUFDbEJqQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRSxLQUFLLENBQUM7SUFDL0IsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZW5CLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2luc2VydFRvZG8uanM/YjAzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZihyZXEubWV0aG9kPT0nUE9TVCcpe1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhPXJlcS5ib2R5XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGBtb25nb2RiK3NydjovL2phZG9ua3VsZGVlcHNpbmdoMjprdWxkZWVwbWFpbGJveGNsaWVudEBjbHVzdGVyMC5mc2M1YmRjLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgKVxyXG4gICAgICAgICAgICBjb25zdCBkYj1jbGllbnQuZGIoKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zQ29sbGVjdGlvbj0gZGIuY29sbGVjdGlvbigndG9kb3MnKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCB0b2Rvc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgIFxyXG4gICAgICAgICAgICBjbGllbnQuY2xvc2UoKVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOlwiVG9kbyBTdWNjZXNzZnVsbHkgSW5zZXJ0ZWRcIn0pXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsInRvZG9zQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/insertTodo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/insertTodo.js"));
module.exports = __webpack_exports__;

})();