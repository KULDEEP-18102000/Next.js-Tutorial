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
exports.id = "pages/api/getCompletedTodos";
exports.ids = ["pages/api/getCompletedTodos"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/getCompletedTodos.js":
/*!****************************************!*\
  !*** ./pages/api/getCompletedTodos.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    try {\n        if (req.method == \"GET\") {\n            const url1 = \"mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority\";\n            const url2 = \"mongodb://0.0.0.0:27017/mailBox_backend_db\";\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url1);\n            const db = client.db();\n            const todosCollection = db.collection(\"todos\");\n            const result = await todosCollection.find({\n                markAsDone: true\n            }).toArray();\n            // console.log(result)\n            client.close();\n            res.status(201).json(result);\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(error);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29tcGxldGVkVG9kb3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDM0IsSUFBSTtRQUNBLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxJQUFFLEtBQUssRUFBQztZQUNqQixNQUFNQyxJQUFJLEdBQUMsaUhBQWlIO1lBQzVILE1BQU1DLElBQUksR0FBQyw0Q0FBNEM7WUFDdkQsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUFDSyxJQUFJLENBQUM7WUFDOUMsTUFBTUksRUFBRSxHQUFDRixNQUFNLENBQUNFLEVBQUUsRUFBRTtZQUVwQixNQUFNQyxlQUFlLEdBQUVELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUU3QyxNQUFNQyxNQUFNLEdBQUMsTUFBTUYsZUFBZSxDQUFDRyxJQUFJLENBQUM7Z0JBQUNDLFVBQVUsRUFBQyxJQUFJO2FBQUMsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7WUFDcEUsc0JBQXNCO1lBRXRCUixNQUFNLENBQUNTLEtBQUssRUFBRTtZQUVkYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTixNQUFNLENBQUM7UUFDaEMsQ0FBQztJQUNMLEVBQUUsT0FBT08sS0FBSyxFQUFFO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7UUFDbEJoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZWxCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2dldENvbXBsZXRlZFRvZG9zLmpzPzVkNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYocmVxLm1ldGhvZD09J0dFVCcpe1xyXG4gICAgICAgICAgICBjb25zdCB1cmwxPSdtb25nb2RiK3NydjovL2phZG9ua3VsZGVlcHNpbmdoMjprdWxkZWVwbWFpbGJveGNsaWVudEBjbHVzdGVyMC5mc2M1YmRjLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcbiAgICAgICAgICAgIGNvbnN0IHVybDI9XCJtb25nb2RiOi8vMC4wLjAuMDoyNzAxNy9tYWlsQm94X2JhY2tlbmRfZGJcIlxyXG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVybDEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRiPWNsaWVudC5kYigpXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgdG9kb3NDb2xsZWN0aW9uPSBkYi5jb2xsZWN0aW9uKCd0b2RvcycpXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHRvZG9zQ29sbGVjdGlvbi5maW5kKHttYXJrQXNEb25lOnRydWV9KS50b0FycmF5KClcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpXHJcbiAgICBcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXJsMSIsInVybDIiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJ0b2Rvc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiZmluZCIsIm1hcmtBc0RvbmUiLCJ0b0FycmF5IiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCompletedTodos.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getCompletedTodos.js"));
module.exports = __webpack_exports__;

})();