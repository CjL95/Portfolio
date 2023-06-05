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
exports.id = "pages/api/SendContact";
exports.ids = ["pages/api/SendContact"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/SendContact.tsx":
/*!***********************************!*\
  !*** ./pages/api/SendContact.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SendContact)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function SendContact(req, res = null) {\n    /*emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID as string, process.env.REACT_APP_EMAIL_TEMPLATE_ID as string, e.currentTarget, process.env.REACT_APP_EMAIL_USER_ID)\r\n        .then(async(result) => { //Create a new contact in the database\r\n            await prisma.contact.create({\r\n                data: {\r\n                    name: name,\r\n                    org: org,\r\n                    email: email,\r\n                    title: title,\r\n                    phone: phone,\r\n                    message: msg\r\n                }\r\n            });\r\n            alert(\"Message sent successfully!\");\r\n        }, (error)=>{\r\n            console.log(error.text)\r\n        });*/ console.log(req.body);\n    //const { name, org, email, title, phone, msg } = req.body;\n    try {\n        const contact = await prisma.contact.create({\n            data: {\n                name: req.body.name,\n                org: req.body.org,\n                email: req.body.email,\n                title: req.body.title,\n                phone: req.body.phone,\n                message: req.body.msg\n            }\n        });\n        console.log(\"success\");\n        res.status(200).json({\n            contact\n        });\n    } catch (error) {\n        res.status(400).json({\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvU2VuZENvbnRhY3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUVoQixlQUFlRSxZQUFZQyxHQUFRLEVBQUVDLE1BQVcsSUFBSTtJQUMvRDs7Ozs7Ozs7Ozs7Ozs7O1dBZU8sR0FDUEMsUUFBUUMsSUFBSUgsSUFBSUk7SUFDaEIsMkRBQTJEO0lBQzNELElBQUk7UUFDQSxNQUFNQyxVQUFVLE1BQU1QLE9BQU9PLFFBQVFDLE9BQU87WUFDeENDLE1BQU07Z0JBQ0ZDLE1BQU1SLElBQUlJLEtBQUtJO2dCQUNmQyxLQUFLVCxJQUFJSSxLQUFLSztnQkFDZEMsT0FBT1YsSUFBSUksS0FBS007Z0JBQ2hCQyxPQUFPWCxJQUFJSSxLQUFLTztnQkFDaEJDLE9BQU9aLElBQUlJLEtBQUtRO2dCQUNoQkMsU0FBU2IsSUFBSUksS0FBS1U7WUFDdEI7UUFDSjtRQUNBWixRQUFRQyxJQUFJO1FBQ1pGLElBQUljLE9BQU8sS0FBS0MsS0FBSztZQUFFWDtRQUFRO0lBQ25DLEVBQUUsT0FBT1ksT0FBWTtRQUNqQmhCLElBQUljLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxPQUFPQSxNQUFNSjtRQUFRO0lBQ2hEO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvU2VuZENvbnRhY3QudHN4P2Q3ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJztcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU2VuZENvbnRhY3QocmVxOiBhbnksIHJlczogYW55ID0gbnVsbCkge1xyXG4gICAgLyplbWFpbGpzLnNlbmRGb3JtKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NQUlMX1NFUlZJQ0VfSUQgYXMgc3RyaW5nLCBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRU1BSUxfVEVNUExBVEVfSUQgYXMgc3RyaW5nLCBlLmN1cnJlbnRUYXJnZXQsIHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FTUFJTF9VU0VSX0lEKVxyXG4gICAgICAgIC50aGVuKGFzeW5jKHJlc3VsdCkgPT4geyAvL0NyZWF0ZSBhIG5ldyBjb250YWN0IGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEuY29udGFjdC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JnOiBvcmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogcGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbXNnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbGVydChcIk1lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgICAgIH0sIChlcnJvcik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dClcclxuICAgICAgICB9KTsqL1xyXG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgLy9jb25zdCB7IG5hbWUsIG9yZywgZW1haWwsIHRpdGxlLCBwaG9uZSwgbXNnIH0gPSByZXEuYm9keTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IGF3YWl0IHByaXNtYS5jb250YWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBvcmc6IHJlcS5ib2R5Lm9yZyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXEuYm9keS50aXRsZSxcclxuICAgICAgICAgICAgICAgIHBob25lOiByZXEuYm9keS5waG9uZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlcS5ib2R5Lm1zZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvbnRhY3QgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiU2VuZENvbnRhY3QiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImNvbnRhY3QiLCJjcmVhdGUiLCJkYXRhIiwibmFtZSIsIm9yZyIsImVtYWlsIiwidGl0bGUiLCJwaG9uZSIsIm1lc3NhZ2UiLCJtc2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/SendContact.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/SendContact.tsx"));
module.exports = __webpack_exports__;

})();