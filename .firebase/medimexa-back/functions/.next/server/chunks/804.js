"use strict";
exports.id = 804;
exports.ids = [804];
exports.modules = {

/***/ 7804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8953);
/* harmony import */ var _firebase_services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9551);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7717);
/* harmony import */ var _redux_slices_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8674);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_services_auth__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_8__, _components_forms__WEBPACK_IMPORTED_MODULE_9__]);
([_firebase_services_auth__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_8__, _components_forms__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function LoginCard() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    async function loginHandler(data, setLoading) {
        console.log(data);
        try {
            setLoading(true);
            const response = await _firebase_services_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"].login */ .Z.login(data.email, data.password);
            console.log(response);
            //! check if user is admin
            dispatch((0,_redux_slices_userSlice__WEBPACK_IMPORTED_MODULE_7__/* .addUser */ .cn)({
                token: response.user.accessToken,
                email: response.user.email,
                id: response.user.id
            }));
            router.push("/simuladores");
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
            if (e.code == "auth/user-not-found") {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Usuario no encontrado");
            }
        }
    }
    const fields = [
        {
            "name": "email",
            placeholder: "Correo",
            required: true
        },
        {
            "name": "password",
            placeholder: "Password",
            type: "password",
            required: true
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card w-96 bg-base-100 shadow-xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                    className: "px-10 pt-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "logo",
                        className: "rounded-xl w-[75%]"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card-body items-center text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "card-title mb-6",
                            children: "Admin Login"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            labels: false,
                            fields: fields,
                            onClick: loginHandler
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;