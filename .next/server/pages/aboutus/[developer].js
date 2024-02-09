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
exports.id = "pages/aboutus/[developer]";
exports.ids = ["pages/aboutus/[developer]"];
exports.modules = {

/***/ "./pages/aboutus/[developer].js":
/*!**************************************!*\
  !*** ./pages/aboutus/[developer].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst developer_arr = [\n    {\n        id: 1,\n        name: \"Yash\",\n        role: \"Senior Developer\"\n    },\n    {\n        id: 2,\n        name: \"Vaibhav\",\n        role: \"Backend Developer\"\n    },\n    {\n        id: 3,\n        name: \"Suresh\",\n        role: \"Frontend Developer\"\n    }\n];\nconst DeveloperPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { developer  } = router.query;\n    console.log(developer);\n    const developer_information = developer_arr.find((d)=>{\n        return d.id == developer;\n    });\n    console.log(developer_information);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            developer_information !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    developer_information?.name,\n                    \" \",\n                    developer_information?.role\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\007 01-starting-project (1)\\\\01-starting-project\\\\pages\\\\aboutus\\\\[developer].js\",\n                lineNumber: 21,\n                columnNumber: 47\n            }, undefined),\n            developer_information == undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"User Not Found\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\007 01-starting-project (1)\\\\01-starting-project\\\\pages\\\\aboutus\\\\[developer].js\",\n                lineNumber: 22,\n                columnNumber: 46\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeveloperPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dHVzL1tkZXZlbG9wZXJdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFFeEMsTUFBTUMsYUFBYSxHQUFDO0lBQ2hCO1FBQUVDLEVBQUUsRUFBRyxDQUFDO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLElBQUksRUFBRSxrQkFBa0I7S0FBQztJQUNyRDtRQUFFRixFQUFFLEVBQUcsQ0FBQztRQUFFQyxJQUFJLEVBQUUsU0FBUztRQUFFQyxJQUFJLEVBQUUsbUJBQW1CO0tBQUM7SUFDckQ7UUFBRUYsRUFBRSxFQUFHLENBQUM7UUFBRUMsSUFBSSxFQUFFLFFBQVE7UUFBRUMsSUFBSSxFQUFFLG9CQUFvQjtLQUFDO0NBQ3BEO0FBR0QsTUFBTUMsYUFBYSxHQUFDLElBQUk7SUFFcEIsTUFBTUMsTUFBTSxHQUFDTixzREFBUyxFQUFFO0lBQ3hCLE1BQU0sRUFBQ08sU0FBUyxHQUFDLEdBQUNELE1BQU0sQ0FBQ0UsS0FBSztJQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQztJQUV0QixNQUFNSSxxQkFBcUIsR0FBQ1YsYUFBYSxDQUFDVyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxHQUFHO1FBQUMsT0FBT0EsQ0FBQyxDQUFDWCxFQUFFLElBQUVLLFNBQVM7SUFBQSxDQUFDLENBQUM7SUFDN0VFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxxQkFBcUIsQ0FBQztJQUVsQyxxQkFDSTs7WUFDQ0EscUJBQXFCLEtBQUdHLFNBQVMsa0JBQUksOERBQUNDLElBQUU7O29CQUFFSixxQkFBcUIsRUFBRVIsSUFBSTtvQkFBQyxHQUFDO29CQUFDUSxxQkFBcUIsRUFBRVAsSUFBSTs7Ozs7O3lCQUFNO1lBQ3pHTyxxQkFBcUIsSUFBRUcsU0FBUyxrQkFBSSw4REFBQ0MsSUFBRTswQkFBQyxnQkFBYzs7Ozs7eUJBQUs7O29CQUN6RCxDQUNOO0FBQ0wsQ0FBQztBQUVELGlFQUFlVixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2Fib3V0dXMvW2RldmVsb3Blcl0uanM/MTA1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBkZXZlbG9wZXJfYXJyPVtcclxuICAgIHsgaWQgOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJ30sXHJcbnsgaWQgOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3Blcid9LFxyXG57IGlkIDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInfVxyXG5dXHJcblxyXG5cclxuY29uc3QgRGV2ZWxvcGVyUGFnZT0oKT0+e1xyXG5cclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge2RldmVsb3Blcn09cm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zb2xlLmxvZyhkZXZlbG9wZXIpXHJcblxyXG4gICAgY29uc3QgZGV2ZWxvcGVyX2luZm9ybWF0aW9uPWRldmVsb3Blcl9hcnIuZmluZCgoZCk9PntyZXR1cm4gZC5pZD09ZGV2ZWxvcGVyfSlcclxuICAgIGNvbnNvbGUubG9nKGRldmVsb3Blcl9pbmZvcm1hdGlvbilcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7ZGV2ZWxvcGVyX2luZm9ybWF0aW9uIT09dW5kZWZpbmVkICYmIDxoMT57ZGV2ZWxvcGVyX2luZm9ybWF0aW9uPy5uYW1lfSB7ZGV2ZWxvcGVyX2luZm9ybWF0aW9uPy5yb2xlfTwvaDE+fVxyXG4gICAgICAgIHtkZXZlbG9wZXJfaW5mb3JtYXRpb249PXVuZGVmaW5lZCAmJiA8aDE+VXNlciBOb3QgRm91bmQ8L2gxPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV2ZWxvcGVyUGFnZSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJkZXZlbG9wZXJfYXJyIiwiaWQiLCJuYW1lIiwicm9sZSIsIkRldmVsb3BlclBhZ2UiLCJyb3V0ZXIiLCJkZXZlbG9wZXIiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkZXZlbG9wZXJfaW5mb3JtYXRpb24iLCJmaW5kIiwiZCIsInVuZGVmaW5lZCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/aboutus/[developer].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/aboutus/[developer].js"));
module.exports = __webpack_exports__;

})();