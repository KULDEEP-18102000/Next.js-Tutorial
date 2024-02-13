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
exports.id = "pages/api/get-meetups";
exports.ids = ["pages/api/get-meetups"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/get-meetups.js":
/*!**********************************!*\
  !*** ./pages/api/get-meetups.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    try {\n        if (req.method == \"GET\") {\n            const url1 = \"mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority\";\n            const url2 = \"mongodb://0.0.0.0:27017/mailBox_backend_db\";\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url1);\n            const db = client.db();\n            const meetupsCollection = db.collection(\"meetups\");\n            const result = await meetupsCollection.find({}).toArray();\n            // console.log(result)\n            client.close();\n            res.status(201).json(result);\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LW1lZXR1cHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLE9BQU8sR0FBQyxPQUFNQyxHQUFHLEVBQUNDLEdBQUcsR0FBRztJQUMxQixJQUFJO1FBQ0EsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLElBQUUsS0FBSyxFQUFDO1lBQ2pCLE1BQU1DLElBQUksR0FBQyxpSEFBaUg7WUFDNUgsTUFBTUMsSUFBSSxHQUFDLDRDQUE0QztZQUN2RCxNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQUNLLElBQUksQ0FBQztZQUM5QyxNQUFNSSxFQUFFLEdBQUNGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1lBRXBCLE1BQU1DLGlCQUFpQixHQUFFRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7WUFFakQsTUFBTUMsTUFBTSxHQUFDLE1BQU1GLGlCQUFpQixDQUFDRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUNDLE9BQU8sRUFBRTtZQUN2RCxzQkFBc0I7WUFFdEJQLE1BQU0sQ0FBQ1EsS0FBSyxFQUFFO1lBRWRaLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLE1BQU0sQ0FBQztRQUNoQyxDQUFDO0lBQ0wsRUFBRSxPQUFPTSxLQUFLLEVBQUU7UUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztRQUNsQmYsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0lBQy9CLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVqQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9nZXQtbWVldHVwcy5qcz84ZmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXI9YXN5bmMocmVxLHJlcyk9PntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYocmVxLm1ldGhvZD09J0dFVCcpe1xyXG4gICAgICAgICAgICBjb25zdCB1cmwxPSdtb25nb2RiK3NydjovL2phZG9ua3VsZGVlcHNpbmdoMjprdWxkZWVwbWFpbGJveGNsaWVudEBjbHVzdGVyMC5mc2M1YmRjLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcbiAgICAgICAgICAgIGNvbnN0IHVybDI9XCJtb25nb2RiOi8vMC4wLjAuMDoyNzAxNy9tYWlsQm94X2JhY2tlbmRfZGJcIlxyXG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVybDEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRiPWNsaWVudC5kYigpXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb249IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9KS50b0FycmF5KClcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpXHJcbiAgICBcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXJsMSIsInVybDIiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJmaW5kIiwidG9BcnJheSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-meetups.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-meetups.js"));
module.exports = __webpack_exports__;

})();