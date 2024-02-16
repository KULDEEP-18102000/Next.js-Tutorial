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
exports.id = "pages/api/markDone";
exports.ids = ["pages/api/markDone"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/markDone.js":
/*!*******************************!*\
  !*** ./pages/api/markDone.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    try {\n        if (req.method == \"POST\") {\n            const data = req.body;\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`);\n            const db = client.db();\n            const todosCollection = db.collection(\"todos\");\n            const result = await todosCollection.updateOne({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(req.body.id)\n            }, {\n                $set: {\n                    markAsDone: true\n                }\n            });\n            // const result=await todosCollection.insertOne(data)\n            console.log(result);\n            client.close();\n            res.status(201).json({\n                message: \"Todo Successfully mark as done\"\n            });\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(error);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFya0RvbmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDM0IsSUFBSTtRQUNBLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxJQUFFLE1BQU0sRUFBQztZQUNsQixNQUFNQyxJQUFJLEdBQUNILEdBQUcsQ0FBQ0ksSUFBSTtZQUVuQixNQUFNQyxNQUFNLEdBQUcsTUFBTVIsd0RBQW1CLENBQUMsQ0FBQywrR0FBK0csQ0FBQyxDQUFDO1lBQzNKLE1BQU1VLEVBQUUsR0FBQ0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7WUFFcEIsTUFBTUMsZUFBZSxHQUFFRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFFN0MsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLGVBQWUsQ0FBQ0csU0FBUyxDQUFDO2dCQUFDQyxHQUFHLEVBQUUsSUFBSWQsNkNBQVEsQ0FBQ0UsR0FBRyxDQUFDSSxJQUFJLENBQUNTLEVBQUUsQ0FBQzthQUFDLEVBQUU7Z0JBQUVDLElBQUksRUFBRTtvQkFBQ0MsVUFBVSxFQUFDLElBQUk7aUJBQUM7YUFBRSxDQUFDO1lBRTdHLHFEQUFxRDtZQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLE1BQU0sQ0FBQztZQUVuQkwsTUFBTSxDQUFDYSxLQUFLLEVBQUU7WUFFZGpCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFDQyxPQUFPLEVBQUMsZ0NBQWdDO2FBQUMsQ0FBQztRQUNwRSxDQUFDO0lBQ0wsRUFBRSxPQUFPQyxLQUFLLEVBQUU7UUFDWk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEtBQUssQ0FBQztRQUNsQnJCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRSxLQUFLLENBQUM7SUFDL0IsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZXZCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL21hcmtEb25lLmpzPzM5YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYocmVxLm1ldGhvZD09J1BPU1QnKXtcclxuICAgICAgICAgICAgY29uc3QgZGF0YT1yZXEuYm9keVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChgbW9uZ29kYitzcnY6Ly9qYWRvbmt1bGRlZXBzaW5naDI6a3VsZGVlcG1haWxib3hjbGllbnRAY2x1c3RlcjAuZnNjNWJkYy5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YClcclxuICAgICAgICAgICAgY29uc3QgZGI9Y2xpZW50LmRiKClcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0b2Rvc0NvbGxlY3Rpb249IGRiLmNvbGxlY3Rpb24oJ3RvZG9zJylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRvZG9zQ29sbGVjdGlvbi51cGRhdGVPbmUoe19pZDogbmV3IE9iamVjdElkKHJlcS5ib2R5LmlkKX0sIHsgJHNldDoge21hcmtBc0RvbmU6dHJ1ZX0gfSlcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBjb25zdCByZXN1bHQ9YXdhaXQgdG9kb3NDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICBcclxuICAgICAgICAgICAgY2xpZW50LmNsb3NlKClcclxuICAgIFxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTpcIlRvZG8gU3VjY2Vzc2Z1bGx5IG1hcmsgYXMgZG9uZVwifSlcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiT2JqZWN0SWQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJ0b2Rvc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwidXBkYXRlT25lIiwiX2lkIiwiaWQiLCIkc2V0IiwibWFya0FzRG9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/markDone.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/markDone.js"));
module.exports = __webpack_exports__;

})();