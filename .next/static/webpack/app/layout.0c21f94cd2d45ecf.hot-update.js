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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ Navbar auto */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Navbar = function(props) {\n    _s();\n    var links = [\n        {\n            path: \"/\",\n            name: \"Home\",\n            pos: 0\n        },\n        {\n            path: \"/about\",\n            name: \"Resume\",\n            pos: 1\n        },\n        {\n            path: \"/projects\",\n            name: \"Projects\",\n            pos: 2\n        },\n        {\n            path: \"/contact\",\n            name: \"Contact Me\",\n            pos: 3\n        }\n    ];\n    var url = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    var position = links.findIndex(function(link) {\n        return link.path === url;\n    });\n    /*\r\n    //from a solution for the indicator involving flex and order\r\n    const setIndicator = ():Array<string> => { \r\n        let arr = ['0','1','2','3'];\r\n        return position !== 0 ? arr.splice(position, 1).concat(arr) : arr;\r\n    } */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-dark navbar-expand-lg border-bottom topNav\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse justify-content-center w-100 mt-3 mt-lg-auto\",\n                    id: \"navbarNav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav navbarNav justify-content-start justify-content-lg-around align-items-start align-items-lg-center\",\n                        children: links.map(function(link, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item navItem d-flex justify-content-center align-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"navInd fa-solid fa-terminal \" + (position === index ? \"\" : \"hide\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"nav-link text-white navLink text-start\",\n                                        \"aria-current\": \"page\",\n                                        href: link.path,\n                                        children: link.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler hamb\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarNav\",\n                    \"aria-controls\": \"navbarNav\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fa-solid fa-chevron-down\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\projects\\\\Portfolio\\\\app\\\\components\\\\Header\\\\navbar.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"i4naPshgwwOA9JCmejVHxCgyEsM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDOUI7QUFDaUI7QUFFdkMsSUFBTUcsU0FBUyxTQUFDQzs7SUFDbkIsSUFBTUMsUUFBUTtRQUNWO1lBQ0lDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxLQUFLO1FBQ1Q7UUFDQTtZQUNJRixNQUFNO1lBQ05DLE1BQU07WUFDTkMsS0FBSztRQUNUO1FBQ0E7WUFDSUYsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLEtBQUs7UUFDVDtRQUNBO1lBQ0lGLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxLQUFLO1FBQ1Q7S0FDSDtJQUNELElBQUlDLE1BQU1QLDREQUFXQTtJQUNyQixJQUFJUSxXQUFtQkwsTUFBTU0sU0FBUyxDQUFDLFNBQUNDO2VBQVNBLEtBQUtOLElBQUksS0FBS0c7O0lBRS9EOzs7OztNQUtFLEdBRUYscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBd0VFLElBQUc7OEJBSXRGLDRFQUFDQzt3QkFBR0gsV0FBVTtrQ0FDVFQsTUFBTWEsR0FBRyxDQUFDLFNBQUNOLE1BQU1POzRCQUNkLHFCQUNBLDhEQUFDQztnQ0FBR04sV0FBVTs7a0RBQ1YsOERBQUNPO3dDQUFFUCxXQUFXLGlDQUFrQ0osQ0FBQUEsYUFBYVMsUUFBUSxLQUFLLE1BQUs7Ozs7OztrREFDL0UsOERBQUNsQixrREFBSUE7d0NBQUNhLFdBQVU7d0NBQXlDUSxnQkFBYTt3Q0FBT0MsTUFBTVgsS0FBS04sSUFBSTtrREFDM0ZNLEtBQUtMLElBQUk7Ozs7Ozs7K0JBSHlFWTs7Ozs7d0JBTTNGOzs7Ozs7Ozs7Ozs4QkFHUiw4REFBQ0s7b0JBQU9WLFdBQVU7b0JBQXNCVyxNQUFLO29CQUFTQyxrQkFBZTtvQkFBV0Msa0JBQWU7b0JBQWFDLGlCQUFjO29CQUFZQyxpQkFBYztvQkFBUUMsY0FBVzs4QkFFbkssNEVBQUNUO3dCQUFFUCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pDLEVBQUM7R0EzRFlYOztRQXVCQ0Qsd0RBQVdBOzs7S0F2QlpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9uYXZiYXIudHN4PzFiMjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKHByb3BzOmFueSk6SlNYLkVsZW1lbnQgPT57XHJcbiAgICBjb25zdCBsaW5rcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgcG9zOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6IFwiL2Fib3V0XCIsIFxyXG4gICAgICAgICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICAgICAgICBwb3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogXCIvcHJvamVjdHNcIixcclxuICAgICAgICAgICAgbmFtZTogXCJQcm9qZWN0c1wiLFxyXG4gICAgICAgICAgICBwb3M6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogXCIvY29udGFjdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkNvbnRhY3QgTWVcIixcclxuICAgICAgICAgICAgcG9zOiAzXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIGxldCB1cmwgPSB1c2VQYXRobmFtZSgpO1xyXG4gICAgbGV0IHBvc2l0aW9uOiBudW1iZXIgPSBsaW5rcy5maW5kSW5kZXgoKGxpbmspID0+IGxpbmsucGF0aCA9PT0gdXJsKTtcclxuICAgIFxyXG4gICAgLypcclxuICAgIC8vZnJvbSBhIHNvbHV0aW9uIGZvciB0aGUgaW5kaWNhdG9yIGludm9sdmluZyBmbGV4IGFuZCBvcmRlclxyXG4gICAgY29uc3Qgc2V0SW5kaWNhdG9yID0gKCk6QXJyYXk8c3RyaW5nPiA9PiB7IFxyXG4gICAgICAgIGxldCBhcnIgPSBbJzAnLCcxJywnMicsJzMnXTtcclxuICAgICAgICByZXR1cm4gcG9zaXRpb24gIT09IDAgPyBhcnIuc3BsaWNlKHBvc2l0aW9uLCAxKS5jb25jYXQoYXJyKSA6IGFycjtcclxuICAgIH0gKi9cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhcmsgbmF2YmFyLWV4cGFuZC1sZyBib3JkZXItYm90dG9tIHRvcE5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWNlbnRlciB3LTEwMCBtdC0zIG10LWxnLWF1dG9cIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxmaWd1cmUgY2xhc3NOYW1lPXtcImluZGljYXRvclRyYWNrIGQtbm9uZSBkLWxnLWZsZXhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGkgY2xhc3NOYW1lPXtcImZhLXNvbGlkIGZhLWJvb2ttYXJrIHBhZ2VJbmRpY2F0b3IgXCIgKyBcIm1vdmVcIiArIHBvc2l0aW9ufT48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbmF2YmFyTmF2IGp1c3RpZnktY29udGVudC1zdGFydCBqdXN0aWZ5LWNvbnRlbnQtbGctYXJvdW5kIGFsaWduLWl0ZW1zLXN0YXJ0IGFsaWduLWl0ZW1zLWxnLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCk6SlNYLkVsZW1lbnQgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2SXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1wibmF2SW5kIGZhLXNvbGlkIGZhLXRlcm1pbmFsIFwiICsgKHBvc2l0aW9uID09PSBpbmRleCA/IFwiXCIgOiBcImhpZGVcIil9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LXdoaXRlIG5hdkxpbmsgdGV4dC1zdGFydFwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPXtsaW5rLnBhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBoYW1iXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJOYXZiYXIiLCJwcm9wcyIsImxpbmtzIiwicGF0aCIsIm5hbWUiLCJwb3MiLCJ1cmwiLCJwb3NpdGlvbiIsImZpbmRJbmRleCIsImxpbmsiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJpZCIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsImkiLCJhcmlhLWN1cnJlbnQiLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Header/navbar.tsx\n"));

/***/ })

});