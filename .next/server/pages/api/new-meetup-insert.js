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
exports.id = "pages/api/new-meetup-insert";
exports.ids = ["pages/api/new-meetup-insert"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup-insert.js":
/*!****************************************!*\
  !*** ./pages/api/new-meetup-insert.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method == \"POST\") {\n        try {\n            const data = req.body;\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`);\n            const db = client.db();\n            const meetupsCollection = db.collection(\"meetups\");\n            const result = await meetupsCollection.insertOne(data);\n            console.log(result);\n            client.close();\n            res.status(201).json({\n                message: \"Meetup Successfully Inserted\"\n            });\n        } catch (error) {\n            console.log(error);\n            res.status(500).json(error);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC1pbnNlcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDM0IsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLElBQUUsTUFBTSxFQUFDO1FBQ2xCLElBQUk7WUFDQSxNQUFNQyxJQUFJLEdBQUNILEdBQUcsQ0FBQ0ksSUFBSTtZQUVuQixNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQUMsQ0FBQywrR0FBK0csQ0FBQyxDQUFDO1lBQzNKLE1BQU1TLEVBQUUsR0FBQ0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7WUFFcEIsTUFBTUMsaUJBQWlCLEdBQUVELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUVqRCxNQUFNQyxNQUFNLEdBQUMsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDO1lBQ3BEUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDO1lBRW5CTCxNQUFNLENBQUNTLEtBQUssRUFBRTtZQUVkYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFDQyxPQUFPLEVBQUMsOEJBQThCO2FBQUMsQ0FBQztRQUNsRSxFQUFFLE9BQU9DLEtBQUssRUFBRTtZQUNaTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssS0FBSyxDQUFDO1lBQ2xCakIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0UsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFFTCxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlbkIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC1pbnNlcnQuanM/NjI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uLCBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xyXG4gICAgaWYocmVxLm1ldGhvZD09J1BPU1QnKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhPXJlcS5ib2R5XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGBtb25nb2RiK3NydjovL2phZG9ua3VsZGVlcHNpbmdoMjprdWxkZWVwbWFpbGJveGNsaWVudEBjbHVzdGVyMC5mc2M1YmRjLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgKVxyXG4gICAgICAgICAgICBjb25zdCBkYj1jbGllbnQuZGIoKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ9YXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgIFxyXG4gICAgICAgICAgICBjbGllbnQuY2xvc2UoKVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOlwiTWVldHVwIFN1Y2Nlc3NmdWxseSBJbnNlcnRlZFwifSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiQ29sbGVjdGlvbiIsIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup-insert.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup-insert.js"));
module.exports = __webpack_exports__;

})();