"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/components/Header/navbar.tsx":
/*!******************************************!*\
  !*** ./app/components/Header/navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ Navbar auto */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Navbar = function(props) {\n    _s();\n    var links = [\n        {\n            path: \"/\",\n            name: \"Home\",\n            pos: 0\n        },\n        {\n            path: \"/about\",\n            name: \"Resume\",\n            pos: 1\n        },\n        {\n            path: \"/projects\",\n            name: \"Projects\",\n            pos: 2\n        },\n        {\n            path: \"/contact\",\n            name: \"Contact Me\",\n            pos: 3\n        }\n    ];\n    var url = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    var position = links.findIndex(function(link) {\n        return link.path === url;\n    });\n    /*\r\n    //from a solution for the indicator involving flex and order\r\n    const setIndicator = ():Array<string> => { \r\n        let arr = ['0','1','2','3'];\r\n        return position !== 0 ? arr.splice(position, 1).concat(arr) : arr;\r\n    } */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-dark navbar-expand-lg border-bottom topNav\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarNav\",\n                    \"aria-controls\": \"navbarNav\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"navbar-toggler-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse justify-content-center w-100 mt-3 mt-lg-auto\",\n                    id: \"navbarNav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                            className: \"indicatorTrack d-none d-lg-flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-solid fa-bookmark pageIndicator \" + \"move\" + position\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 30\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"navbar-nav navbarNav justify-content-center\",\n                            children: links.map(function(link, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item navItem px-5 d-flex justify-content-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"nav-link text-white navLink\",\n                                        \"aria-current\": \"page\",\n                                        href: link.path,\n                                        children: link.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"i4naPshgwwOA9JCmejVHxCgyEsM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDOUI7QUFDaUI7QUFFdkMsSUFBTUcsU0FBUyxTQUFDQzs7SUFDbkIsSUFBTUMsUUFBUTtRQUNWO1lBQ0lDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxLQUFLO1FBQ1Q7UUFDQTtZQUNJRixNQUFNO1lBQ05DLE1BQU07WUFDTkMsS0FBSztRQUNUO1FBQ0E7WUFDSUYsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLEtBQUs7UUFDVDtRQUNBO1lBQ0lGLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxLQUFLO1FBQ1Q7S0FDSDtJQUNELElBQUlDLE1BQU1QLDREQUFXQTtJQUNyQixJQUFJUSxXQUFtQkwsTUFBTU0sU0FBUyxDQUFDLFNBQUNDO2VBQVNBLEtBQUtOLElBQUksS0FBS0c7O0lBRS9EOzs7OztNQUtFLEdBRUYscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNYLDhEQUFDRTtvQkFBT0YsV0FBVTtvQkFBaUJHLE1BQUs7b0JBQVNDLGtCQUFlO29CQUFXQyxrQkFBZTtvQkFBYUMsaUJBQWM7b0JBQVlDLGlCQUFjO29CQUFRQyxjQUFXOzhCQUM5Siw0RUFBQ0M7d0JBQUtULFdBQVU7Ozs7Ozs7Ozs7OzhCQUVwQiw4REFBQ0M7b0JBQUlELFdBQVU7b0JBQXdFVSxJQUFHOztzQ0FDdEYsOERBQUNDOzRCQUFPWCxXQUFXO3NDQUNmLDRFQUFDQzswQ0FBSSw0RUFBQ1c7b0NBQUVaLFdBQVcsd0NBQXdDLFNBQVNKOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUV4RSw4REFBQ2lCOzRCQUFHYixXQUFVO3NDQUNUVCxNQUFNdUIsR0FBRyxDQUFDLFNBQUNoQixNQUFNaUI7Z0NBQ2QscUJBQ0EsOERBQUNDO29DQUFHaEIsV0FBVTs4Q0FDViw0RUFBQ2Isa0RBQUlBO3dDQUFDYSxXQUFVO3dDQUE4QmlCLGdCQUFhO3dDQUFPQyxNQUFNcEIsS0FBS04sSUFBSTtrREFDaEZNLEtBQUtMLElBQUk7Ozs7OzttQ0FGMkRzQjs7Ozs7NEJBSzdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QixFQUFDO0dBekRZMUI7O1FBdUJDRCx3REFBV0E7OztLQXZCWkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL25hdmJhci50c3g/MWIyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZiYXIgPSAocHJvcHM6YW55KTpKU1guRWxlbWVudCA9PntcclxuICAgIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICBwb3M6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogXCIvYWJvdXRcIiwgXHJcbiAgICAgICAgICAgIG5hbWU6IFwiUmVzdW1lXCIsXHJcbiAgICAgICAgICAgIHBvczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiBcIi9wcm9qZWN0c1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlByb2plY3RzXCIsXHJcbiAgICAgICAgICAgIHBvczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiBcIi9jb250YWN0XCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ29udGFjdCBNZVwiLFxyXG4gICAgICAgICAgICBwb3M6IDNcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgbGV0IHVybCA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IGxpbmtzLmZpbmRJbmRleCgobGluaykgPT4gbGluay5wYXRoID09PSB1cmwpO1xyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgLy9mcm9tIGEgc29sdXRpb24gZm9yIHRoZSBpbmRpY2F0b3IgaW52b2x2aW5nIGZsZXggYW5kIG9yZGVyXHJcbiAgICBjb25zdCBzZXRJbmRpY2F0b3IgPSAoKTpBcnJheTxzdHJpbmc+ID0+IHsgXHJcbiAgICAgICAgbGV0IGFyciA9IFsnMCcsJzEnLCcyJywnMyddO1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbiAhPT0gMCA/IGFyci5zcGxpY2UocG9zaXRpb24sIDEpLmNvbmNhdChhcnIpIDogYXJyO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBuYXZiYXItZXhwYW5kLWxnIGJvcmRlci1ib3R0b20gdG9wTmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWNlbnRlciB3LTEwMCBtdC0zIG10LWxnLWF1dG9cIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtcImluZGljYXRvclRyYWNrIGQtbm9uZSBkLWxnLWZsZXhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGkgY2xhc3NOYW1lPXtcImZhLXNvbGlkIGZhLWJvb2ttYXJrIHBhZ2VJbmRpY2F0b3IgXCIgKyBcIm1vdmVcIiArIHBvc2l0aW9ufT48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbmF2YmFyTmF2IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpOkpTWC5FbGVtZW50ID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdkl0ZW0gcHgtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtd2hpdGUgbmF2TGlua1wiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPXtsaW5rLnBhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIk5hdmJhciIsInByb3BzIiwibGlua3MiLCJwYXRoIiwibmFtZSIsInBvcyIsInVybCIsInBvc2l0aW9uIiwiZmluZEluZGV4IiwibGluayIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwic3BhbiIsImlkIiwiZmlndXJlIiwiaSIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsImFyaWEtY3VycmVudCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Header/navbar.tsx\n"));

/***/ })

});