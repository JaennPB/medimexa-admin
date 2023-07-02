"use strict";
exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 8545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export db */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const firebaseConfig = {
    production: false,
    apiKey: "AIzaSyDD-Bi5mnpuEkeNwzlqdhPN-ODfSQX6zg0",
    authDomain: "medimexa-back.firebaseapp.com",
    projectId: "medimexa-back",
    storageBucket: "medimexa-back.appspot.com",
    messagingSenderId: "376506424578",
    appId: "1:376506424578:web:9d61e0981dc00a5422b61b"
};
// Initialize Firebase
let app = null;
let db = null;
let auth = null;
let storage = null;
if ((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length < 1) {
    app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
}
db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8545);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


class AuthService {
    constructor(){}
    register(email, password) {
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8, email, password);
    }
    login(email, password) {
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8, email, password).then((userCredential)=>{
            return userCredential;
        });
    }
    signOut() {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8);
    }
    resetPassword(email) {
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.sendPasswordResetEmail)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8, email);
    }
    changePassword(password) {
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth.currentUser */ .I8.currentUser, password);
    }
    deleteAccount() {
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.deleteUser)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth.currentUser */ .I8.currentUser);
    }
    getUser() {
        return _config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth.currentUser */ .I8.currentUser;
    }
    onAuth(fn) {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8, fn);
    }
}
const authService = new AuthService();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;