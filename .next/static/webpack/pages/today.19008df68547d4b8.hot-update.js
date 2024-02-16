"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/today",{

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar TodoList = function(props) {\n    console.log(props);\n    //Editing the todo status\n    var markAsDoneHandler = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(id) {\n            var response, data;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(id);\n                        return [\n                            4,\n                            fetch(\"/api/markDone\", {\n                                method: \"POST\",\n                                body: JSON.stringify({\n                                    id: id\n                                }),\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        props.removeTodo(id);\n                        console.log(data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function markAsDoneHandler(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var deleteTodoHandler = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(id) {\n            var response, data;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(id);\n                        return [\n                            4,\n                            fetch(\"/api/deleteTodo\", {\n                                method: \"DELETE\",\n                                body: JSON.stringify({\n                                    id: id\n                                }),\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        props.removeTodo(id);\n                        console.log(data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function deleteTodoHandler(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: props.todos.map(function(todo) {\n                var ref;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    children: (todo === null || todo === void 0 ? void 0 : todo.markAsDone) == false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        id: \"html\",\n                                        name: \"fav_language\",\n                                        onChange: function() {\n                                            markAsDoneHandler(todo._id);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 53\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    children: todo === null || todo === void 0 ? void 0 : todo.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdDelete, {\n                                        style: {\n                                            cursor: \"pointer\"\n                                        },\n                                        onClick: function() {\n                                            deleteTodoHandler(todo._id);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, _this)\n                }, todo === null || todo === void 0 ? void 0 : (ref = todo._id) === null || ref === void 0 ? void 0 : ref.toString(), false, {\n                    fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\todo-app\\\\todo-app\\\\components\\\\TodoList.js\",\n            lineNumber: 42,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false);\n};\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhDQUNKLDRFQUFDSCxvREFBUTt3Q0FBQ2dDLEtBQUssRUFBRTs0Q0FBQ0MsTUFBTSxFQUFDLFNBQVM7eUNBQUM7d0NBQUVDLE9BQU8sRUFBRSxXQUFJOzRDQUFDZCxpQkFBaUIsQ0FBQ0csSUFBSSxDQUFDTyxHQUFHLENBQUM7d0NBQUEsQ0FBQzs7Ozs7NkNBQUc7Ozs7O3lDQUM1RTs7Ozs7O2lDQUNBOzs7Ozs2QkFJRTttQkFoQktQLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsQ0FBQUEsR0FBUyxHQUFUQSxJQUFJLENBQUVPLEdBQUcsY0FBVFAsR0FBUyxjQUFUQSxLQUFBQSxDQUFTLEdBQVRBLEdBQVMsQ0FBRVksUUFBUSxFQUFFOzs7O3lCQWlCekI7YUFDcEIsQ0FBQzs7Ozs7aUJBQ0U7cUJBQ0wsQ0FDTjtBQUNMLENBQUM7QUEzREsvQixLQUFBQSxRQUFRO0FBNkRkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QuanM/OTA2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlzdEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXAnO1xyXG5pbXBvcnQgeyBNZERlbGV0ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5cclxuY29uc3QgVG9kb0xpc3Q9KHByb3BzKT0+e1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG5cclxuICAgIC8vRWRpdGluZyB0aGUgdG9kbyBzdGF0dXNcclxuICAgIGNvbnN0IG1hcmtBc0RvbmVIYW5kbGVyPWFzeW5jKGlkKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlPWF3YWl0IGZldGNoKCcvYXBpL21hcmtEb25lJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe2lkOmlkfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgcHJvcHMucmVtb3ZlVG9kbyhpZClcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRvZG9IYW5kbGVyPWFzeW5jKGlkKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlPWF3YWl0IGZldGNoKCcvYXBpL2RlbGV0ZVRvZG8nLHtcclxuICAgICAgICAgICAgbWV0aG9kOidERUxFVEUnLFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtpZDppZH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIHByb3BzLnJlbW92ZVRvZG8oaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAge3Byb3BzLnRvZG9zLm1hcCgodG9kbyk9PihcclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBrZXk9e3RvZG8/Ll9pZD8udG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZG8/Lm1hcmtBc0RvbmU9PWZhbHNlICYmIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImh0bWxcIiBuYW1lPVwiZmF2X2xhbmd1YWdlXCIgb25DaGFuZ2U9eygpPT57bWFya0FzRG9uZUhhbmRsZXIodG9kby5faWQpfX0+PC9pbnB1dD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9kbz8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWREZWxldGUgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gb25DbGljaz17KCk9PntkZWxldGVUb2RvSGFuZGxlcih0b2RvLl9pZCl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0Il0sIm5hbWVzIjpbIkxpc3RHcm91cCIsIk1kRGVsZXRlIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiVG9kb0xpc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtYXJrQXNEb25lSGFuZGxlciIsImlkIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwicmVtb3ZlVG9kbyIsImRlbGV0ZVRvZG9IYW5kbGVyIiwidG9kb3MiLCJtYXAiLCJ0b2RvIiwiSXRlbSIsIm1hcmtBc0RvbmUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJfaWQiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwiY3Vyc29yIiwib25DbGljayIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.js\n"));

/***/ })

});