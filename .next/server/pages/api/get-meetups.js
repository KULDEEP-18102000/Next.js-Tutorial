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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    try {\n        if (req.method == \"GET\") {\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`);\n            const db = client.db();\n            const meetupsCollection = db.collection(\"meetups\");\n            const result = await meetupsCollection.find({}).toArray();\n            console.log(result);\n            client.close();\n            res.status(201).json(result);\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LW1lZXR1cHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLE9BQU8sR0FBQyxPQUFNQyxHQUFHLEVBQUNDLEdBQUcsR0FBRztJQUMxQixJQUFJO1FBQ0EsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLElBQUUsS0FBSyxFQUFDO1lBQ2pCLE1BQU1DLE1BQU0sR0FBRyxNQUFNTCx3REFBbUIsQ0FBQyxDQUFDLCtHQUErRyxDQUFDLENBQUM7WUFDM0osTUFBTU8sRUFBRSxHQUFDRixNQUFNLENBQUNFLEVBQUUsRUFBRTtZQUVwQixNQUFNQyxpQkFBaUIsR0FBRUQsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1lBRWpELE1BQU1DLE1BQU0sR0FBQyxNQUFNRixpQkFBaUIsQ0FBQ0csSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7WUFDdkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixNQUFNLENBQUM7WUFFbkJMLE1BQU0sQ0FBQ1UsS0FBSyxFQUFFO1lBRWRaLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNQLE1BQU0sQ0FBQztRQUNoQyxDQUFDO0lBQ0wsRUFBRSxPQUFPUSxLQUFLLEVBQUU7UUFDWkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLEtBQUssQ0FBQztRQUNsQmYsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0lBQy9CLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVqQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9nZXQtbWVldHVwcy5qcz84ZmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXI9YXN5bmMocmVxLHJlcyk9PntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYocmVxLm1ldGhvZD09J0dFVCcpe1xyXG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGBtb25nb2RiK3NydjovL2phZG9ua3VsZGVlcHNpbmdoMjprdWxkZWVwbWFpbGJveGNsaWVudEBjbHVzdGVyMC5mc2M1YmRjLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgKVxyXG4gICAgICAgICAgICBjb25zdCBkYj1jbGllbnQuZGIoKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ9YXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSkudG9BcnJheSgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgIFxyXG4gICAgICAgICAgICBjbGllbnQuY2xvc2UoKVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImZpbmQiLCJ0b0FycmF5IiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-meetups.js\n");

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