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
exports.id = "pages/api/deleteTodo";
exports.ids = ["pages/api/deleteTodo"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/deleteTodo.js":
/*!*********************************!*\
  !*** ./pages/api/deleteTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    try {\n        if (req.method == \"DELETE\") {\n            const url1 = \"mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority\";\n            const url2 = \"mongodb://0.0.0.0:27017/mailBox_backend_db\";\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url1);\n            const db = client.db();\n            const todosCollection = db.collection(\"todos\");\n            const result = await todosCollection.findOneAndDelete({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(req.body.id)\n            });\n            // console.log(result)\n            client.close();\n            res.status(201).json(result);\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(error);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlVG9kby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUMzQixJQUFJO1FBQ0EsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLElBQUUsUUFBUSxFQUFDO1lBQ3BCLE1BQU1DLElBQUksR0FBQyxpSEFBaUg7WUFDNUgsTUFBTUMsSUFBSSxHQUFDLDRDQUE0QztZQUN2RCxNQUFNQyxNQUFNLEdBQUcsTUFBTVIsd0RBQW1CLENBQUNNLElBQUksQ0FBQztZQUM5QyxNQUFNSSxFQUFFLEdBQUNGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1lBRXBCLE1BQU1DLGVBQWUsR0FBRUQsRUFBRSxDQUFDRSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBRTdDLE1BQU1DLE1BQU0sR0FBQyxNQUFNRixlQUFlLENBQUNHLGdCQUFnQixDQUFDO2dCQUFDQyxHQUFHLEVBQUMsSUFBSWQsNkNBQVEsQ0FBQ0UsR0FBRyxDQUFDYSxJQUFJLENBQUNDLEVBQUUsQ0FBQzthQUFDLENBQUM7WUFDcEYsc0JBQXNCO1lBRXRCVCxNQUFNLENBQUNVLEtBQUssRUFBRTtZQUVkZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDUCxNQUFNLENBQUM7UUFDaEMsQ0FBQztJQUNMLEVBQUUsT0FBT1EsS0FBSyxFQUFFO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7UUFDbEJqQixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZW5CLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2RlbGV0ZVRvZG8uanM/MTJiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCxPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZihyZXEubWV0aG9kPT0nREVMRVRFJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybDE9J21vbmdvZGIrc3J2Oi8vamFkb25rdWxkZWVwc2luZ2gyOmt1bGRlZXBtYWlsYm94Y2xpZW50QGNsdXN0ZXIwLmZzYzViZGMubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcclxuICAgICAgICAgICAgY29uc3QgdXJsMj1cIm1vbmdvZGI6Ly8wLjAuMC4wOjI3MDE3L21haWxCb3hfYmFja2VuZF9kYlwiXHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJsMSlcclxuICAgICAgICAgICAgY29uc3QgZGI9Y2xpZW50LmRiKClcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0b2Rvc0NvbGxlY3Rpb249IGRiLmNvbGxlY3Rpb24oJ3RvZG9zJylcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ9YXdhaXQgdG9kb3NDb2xsZWN0aW9uLmZpbmRPbmVBbmREZWxldGUoe19pZDpuZXcgT2JqZWN0SWQocmVxLmJvZHkuaWQpfSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpXHJcbiAgICBcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJPYmplY3RJZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1cmwxIiwidXJsMiIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsInRvZG9zQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJmaW5kT25lQW5kRGVsZXRlIiwiX2lkIiwiYm9keSIsImlkIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/deleteTodo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deleteTodo.js"));
module.exports = __webpack_exports__;

})();