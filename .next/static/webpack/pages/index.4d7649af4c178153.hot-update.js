"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\nvar _this = undefined;\n\n\n\nvar dummy_meetups = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"some address 5,12345 some city\",\n        description: \"This is a first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"some address 10,12345 some city\",\n        description: \"This is a second meetup\"\n    },\n    {\n        id: \"m3\",\n        title: \"A Third Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"some address 15,12345 some city\",\n        description: \"This is a Third meetup\"\n    }\n];\nvar HomePage = function(props) {\n    // console.log(props)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to HomePage\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5RDtBQUNUO0FBRWhELElBQU1FLGFBQWEsR0FBQztJQUNoQjtRQUNJQyxFQUFFLEVBQUMsSUFBSTtRQUNQQyxLQUFLLEVBQUMsZ0JBQWdCO1FBQ3RCQyxLQUFLLEVBQUMsd0hBQXdIO1FBQzlIQyxPQUFPLEVBQUMsZ0NBQWdDO1FBQ3hDQyxXQUFXLEVBQUMsd0JBQXdCO0tBQ3ZDO0lBQ0Q7UUFDSUosRUFBRSxFQUFDLElBQUk7UUFDUEMsS0FBSyxFQUFDLGlCQUFpQjtRQUN2QkMsS0FBSyxFQUFDLHdIQUF3SDtRQUM5SEMsT0FBTyxFQUFDLGlDQUFpQztRQUN6Q0MsV0FBVyxFQUFDLHlCQUF5QjtLQUN4QztJQUNEO1FBQ0lKLEVBQUUsRUFBQyxJQUFJO1FBQ1BDLEtBQUssRUFBQyxnQkFBZ0I7UUFDdEJDLEtBQUssRUFBQyx3SEFBd0g7UUFDOUhDLE9BQU8sRUFBQyxpQ0FBaUM7UUFDekNDLFdBQVcsRUFBQyx3QkFBd0I7S0FDdkM7Q0FDSjtBQUVELElBQU1DLFFBQVEsR0FBQyxTQUFDQyxLQUFLLEVBQUc7SUFFcEIscUJBQXFCO0lBQ3JCLHFCQUNJOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyxxQkFBbUI7Ozs7O3FCQUFLOzBCQUM1Qiw4REFBQ1Ysc0VBQVU7Z0JBQUNXLE9BQU8sRUFBRUYsS0FBSyxDQUFDRSxPQUFPOzs7OztxQkFBRzs7b0JBQ2xDLENBQ047QUFDTCxDQUFDO0FBVEtILEtBQUFBLFFBQVE7O0FBdUNkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCJcclxuXHJcbmNvbnN0IGR1bW15X21lZXR1cHM9W1xyXG4gICAge1xyXG4gICAgICAgIGlkOidtMScsXHJcbiAgICAgICAgdGl0bGU6J0EgRmlyc3QgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTonaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyMDBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICAgICAgYWRkcmVzczonc29tZSBhZGRyZXNzIDUsMTIzNDUgc29tZSBjaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J20yJyxcclxuICAgICAgICB0aXRsZTonQSBTZWNvbmQgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTonaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyMDBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICAgICAgYWRkcmVzczonc29tZSBhZGRyZXNzIDEwLDEyMzQ1IHNvbWUgY2l0eScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgaXMgYSBzZWNvbmQgbWVldHVwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDonbTMnLFxyXG4gICAgICAgIHRpdGxlOidBIFRoaXJkIE1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjAwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6J3NvbWUgYWRkcmVzcyAxNSwxMjM0NSBzb21lIGNpdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIGlzIGEgVGhpcmQgbWVldHVwJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBIb21lUGFnZT0ocHJvcHMpPT57XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8aDE+V2VsY29tZSB0byBIb21lUGFnZTwvaDE+XHJcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xyXG5cclxuLy8gICAgIGNvbnN0IHJlcT1jb250ZXh0LnJlcVxyXG4vLyAgICAgY29uc3QgcmVzPWNvbnRleHQucmVzXHJcblxyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHByb3BzOntcclxuLy8gICAgICAgICAgICAgbWVldHVwczpkdW1teV9tZWV0dXBzXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIGNvbnN0IHJlc3BvbnNlPWF3YWl0IGZldGNoKCcvYXBpL2dldC1tZWV0dXBzJyx7XHJcbiAgICAgICAgbWV0aG9kOidHRVQnLGJvZHk6SlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXR1cERhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6ZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZToxXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbIk1lZXR1cExpc3QiLCJMYXlvdXQiLCJkdW1teV9tZWV0dXBzIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsImgxIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});