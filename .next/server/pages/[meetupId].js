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
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"MeetupItem_item__pvgsv\",\n\t\"image\": \"MeetupItem_image__0jYm_\",\n\t\"content\": \"MeetupItem_content__fvTRB\",\n\t\"actions\": \"MeetupItem_actions__IeeH4\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBJdGVtLm1vZHVsZS5jc3M/ZTVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwiTWVldHVwSXRlbV9pdGVtX19wdmdzdlwiLFxuXHRcImltYWdlXCI6IFwiTWVldHVwSXRlbV9pbWFnZV9fMGpZbV9cIixcblx0XCJjb250ZW50XCI6IFwiTWVldHVwSXRlbV9jb250ZW50X19mdlRSQlwiLFxuXHRcImFjdGlvbnNcIjogXCJNZWV0dXBJdGVtX2FjdGlvbnNfX0llZUg0XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.module.css\n");

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__73YTa\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcz81NjMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzczWVRhXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.module.css\n");

/***/ }),

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupItem.module.css */ \"./components/meetups/MeetupItem.module.css\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst dummy_meetups = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"some address 5,12345 some city\",\n        description: \"This is a first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"some address 10,12345 some city\",\n        description: \"This is a second meetup\"\n    }\n];\nfunction MeetupDetails(props) {\n    const meetup = dummy_meetups.find((meetup)=>{\n        return meetup.id == props.id;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: meetup.image,\n                        alt: meetup.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: meetup.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                            children: meetup.address\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNnQjtBQUU5QyxNQUFNRSxhQUFhLEdBQUM7SUFDaEI7UUFDSUMsRUFBRSxFQUFDLElBQUk7UUFDUEMsS0FBSyxFQUFDLGdCQUFnQjtRQUN0QkMsS0FBSyxFQUFDLHdIQUF3SDtRQUM5SEMsT0FBTyxFQUFDLGdDQUFnQztRQUN4Q0MsV0FBVyxFQUFDLHdCQUF3QjtLQUN2QztJQUNEO1FBQ0lKLEVBQUUsRUFBQyxJQUFJO1FBQ1BDLEtBQUssRUFBQyxpQkFBaUI7UUFDdkJDLEtBQUssRUFBQyx3SEFBd0g7UUFDOUhDLE9BQU8sRUFBQyxpQ0FBaUM7UUFDekNDLFdBQVcsRUFBQyx5QkFBeUI7S0FDeEM7Q0FDSjtBQUVELFNBQVNDLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFO0lBRTFCLE1BQU1DLE1BQU0sR0FBQ1IsYUFBYSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0QsTUFBTSxHQUFHO1FBQUMsT0FBT0EsTUFBTSxDQUFDUCxFQUFFLElBQUVNLEtBQUssQ0FBQ04sRUFBRTtJQUFBLENBQUMsQ0FBQztJQUV6RSxxQkFDRSw4REFBQ1MsSUFBRTtRQUFDQyxTQUFTLEVBQUVaLG9FQUFZO2tCQUN6Qiw0RUFBQ0QsZ0RBQUk7OzhCQUNILDhEQUFDZSxLQUFHO29CQUFDRixTQUFTLEVBQUVaLHFFQUFhOzhCQUMzQiw0RUFBQ2UsS0FBRzt3QkFBQ0MsR0FBRyxFQUFFUCxNQUFNLENBQUNMLEtBQUs7d0JBQUVhLEdBQUcsRUFBRVIsTUFBTSxDQUFDTixLQUFLOzs7Ozs0QkFBSTs7Ozs7d0JBQ3pDOzhCQUNOLDhEQUFDVyxLQUFHO29CQUFDRixTQUFTLEVBQUVaLHVFQUFlOztzQ0FDN0IsOERBQUNtQixJQUFFO3NDQUFFVixNQUFNLENBQUNOLEtBQUs7Ozs7O2dDQUFNO3NDQUN2Qiw4REFBQ0UsU0FBTztzQ0FBRUksTUFBTSxDQUFDSixPQUFPOzs7OztnQ0FBVzs7Ozs7O3dCQUMvQjs7Ozs7O2dCQUNEOzs7OztZQUNKLENBQ0w7QUFDSixDQUFDO0FBRUQsaUVBQWVFLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5qcz9mMWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBkdW1teV9tZWV0dXBzPVtcclxuICAgIHtcclxuICAgICAgICBpZDonbTEnLFxyXG4gICAgICAgIHRpdGxlOidBIEZpcnN0IE1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjAwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6J3NvbWUgYWRkcmVzcyA1LDEyMzQ1IHNvbWUgY2l0eScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidtMicsXHJcbiAgICAgICAgdGl0bGU6J0EgU2Vjb25kIE1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjAwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6J3NvbWUgYWRkcmVzcyAxMCwxMjM0NSBzb21lIGNpdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCdcclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cD1kdW1teV9tZWV0dXBzLmZpbmQoKG1lZXR1cCk9PntyZXR1cm4gbWVldHVwLmlkPT1wcm9wcy5pZH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bWVldHVwLmltYWdlfSBhbHQ9e21lZXR1cC50aXRsZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxoMz57bWVldHVwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8YWRkcmVzcz57bWVldHVwLmFkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7Il0sIm5hbWVzIjpbIkNhcmQiLCJjbGFzc2VzIiwiZHVtbXlfbWVldHVwcyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsIm1lZXR1cCIsImZpbmQiLCJsaSIsImNsYXNzTmFtZSIsIml0ZW0iLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJjb250ZW50IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetails.js\n");

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Card(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\ui\\\\Card.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF3QztBQUV4QyxTQUFTQyxJQUFJLENBQUNDLEtBQUssRUFBRTtJQUNuQixxQkFBTyw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVKLDhEQUFZO2tCQUFHRSxLQUFLLENBQUNJLFFBQVE7Ozs7O1lBQU8sQ0FBQztBQUM5RCxDQUFDO0FBRUQsaUVBQWVMLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3VpL0NhcmQuanM/ZDBkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsIkNhcmQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.js\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst MeetupDetailsPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { meetupId  } = router.query;\n    console.log(meetupId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            id: meetupId\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kulde\\\\Downloads\\\\013 06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetupId]\\\\index.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetailsPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQW1FO0FBQzNCO0FBRXhDLE1BQU1FLGlCQUFpQixHQUFDLElBQUk7SUFDeEIsTUFBTUMsTUFBTSxHQUFDRixzREFBUyxFQUFFO0lBQ3hCLE1BQU0sRUFBQ0csUUFBUSxHQUFDLEdBQUNELE1BQU0sQ0FBQ0UsS0FBSztJQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQztJQUVyQixxQkFDSTtrQkFDQSw0RUFBQ0oseUVBQWE7WUFBQ1EsRUFBRSxFQUFFSixRQUFROzs7OztxQkFBRztxQkFDM0IsQ0FDTjtBQUNMLENBQUM7QUFFRCxpRUFBZUYsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanM/OGZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwRGV0YWlscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWxzUGFnZT0oKT0+e1xyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7bWVldHVwSWR9PXJvdXRlci5xdWVyeVxyXG4gICAgY29uc29sZS5sb2cobWVldHVwSWQpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1lZXR1cERldGFpbHMgaWQ9e21lZXR1cElkfS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHNQYWdlIl0sIm5hbWVzIjpbIk1lZXR1cERldGFpbHMiLCJ1c2VSb3V0ZXIiLCJNZWV0dXBEZXRhaWxzUGFnZSIsInJvdXRlciIsIm1lZXR1cElkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId]/index.js"));
module.exports = __webpack_exports__;

})();