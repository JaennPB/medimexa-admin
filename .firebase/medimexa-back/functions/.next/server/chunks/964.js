"use strict";
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 7602:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c": () => (/* binding */ mediaQuery)
/* harmony export */ });
/* harmony import */ var _orm_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(723);
/* harmony import */ var _orm_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8010);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_orm_Model__WEBPACK_IMPORTED_MODULE_0__, _orm_Query__WEBPACK_IMPORTED_MODULE_1__, _services_storage__WEBPACK_IMPORTED_MODULE_2__]);
([_orm_Model__WEBPACK_IMPORTED_MODULE_0__, _orm_Query__WEBPACK_IMPORTED_MODULE_1__, _services_storage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class Media extends _orm_Model__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(Media){
        super("medias", Media, {
            _delete: async ()=>{
                return await _services_storage__WEBPACK_IMPORTED_MODULE_2__/* ["default"]["delete"] */ .Z["delete"](this.data.url);
            }
        });
    }
    getUrl() {
        return _services_storage__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getFile */ .Z.getFile(this.data.url);
    }
}
class MediaQuery extends _orm_Query__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    constructor(){
        super("medias", Media);
    }
}
const mediaQuery = new MediaQuery();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ roleQuery),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _orm_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(723);
/* harmony import */ var _orm_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8010);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_orm_Model__WEBPACK_IMPORTED_MODULE_0__, _orm_Query__WEBPACK_IMPORTED_MODULE_1__]);
([_orm_Model__WEBPACK_IMPORTED_MODULE_0__, _orm_Query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


class Role extends _orm_Model__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(Role){
        super("roles", Role);
    }
}
class RoleQuery extends _orm_Query__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    constructor(){
        super("roles", Role);
    }
}
const roleQuery = new RoleQuery();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Role);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ typeMediaQuery)
/* harmony export */ });
/* harmony import */ var _orm_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(723);
/* harmony import */ var _orm_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8010);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_orm_Model__WEBPACK_IMPORTED_MODULE_0__, _orm_Query__WEBPACK_IMPORTED_MODULE_1__]);
([_orm_Model__WEBPACK_IMPORTED_MODULE_0__, _orm_Query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


class TypeMedia extends _orm_Model__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(TypeMedia){
        super("type_medias", TypeMedia);
    }
}
class TypeMediaQuery extends _orm_Query__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    constructor(){
        super("type_medias", TypeMedia);
    }
}
const typeMediaQuery = new TypeMediaQuery();

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TypeMedia)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "v": () => (/* binding */ userQuery)
/* harmony export */ });
/* harmony import */ var _orm_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(723);
/* harmony import */ var _orm_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8010);
/* harmony import */ var _Role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2031);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9551);
/* harmony import */ var _services_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_orm_Model__WEBPACK_IMPORTED_MODULE_0__, _orm_Query__WEBPACK_IMPORTED_MODULE_1__, _Role__WEBPACK_IMPORTED_MODULE_2__, _services_auth__WEBPACK_IMPORTED_MODULE_3__, _services_media__WEBPACK_IMPORTED_MODULE_4__]);
([_orm_Model__WEBPACK_IMPORTED_MODULE_0__, _orm_Query__WEBPACK_IMPORTED_MODULE_1__, _Role__WEBPACK_IMPORTED_MODULE_2__, _services_auth__WEBPACK_IMPORTED_MODULE_3__, _services_media__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





class User extends _orm_Model__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(user){
        super("users", user, {
            _save: async ()=>{
                const password = this.data.password;
                this.unset("password");
                return _services_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"].register */ .Z.register(this.data.email, password);
            },
            _update: async ()=>{
                if (this.old.email != this.data.email) {}
                this.unset("password");
            },
            _delete: async ()=>{
                this.data.email += "_" + Date.now();
            }
        });
        this.media = new _services_media__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(this.data.id);
    }
    unset(key) {
        if (this.data[key] != undefined) {
            delete this.data[key];
        }
    }
    role() {
        return _Role__WEBPACK_IMPORTED_MODULE_2__/* .roleQuery.find */ .O.find(this.data.role_id);
    }
}
class UserQuery extends _orm_Query__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    constructor(){
        super("users", User);
    }
}
const userQuery = new UserQuery();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7602);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _models_TypeMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6112);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models_Media__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _models_TypeMedia__WEBPACK_IMPORTED_MODULE_2__, _storage__WEBPACK_IMPORTED_MODULE_3__]);
([_models_Media__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _models_TypeMedia__WEBPACK_IMPORTED_MODULE_2__, _storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




class MediaService {
    constructor(model_id){
        this.findType = async (typeName)=>{
            return await _models_TypeMedia__WEBPACK_IMPORTED_MODULE_2__/* .typeMediaQuery.where */ .G.where("name", "==", typeName);
        };
        this.type = async (typeName)=>{
            const type = await this.findType(typeName);
            return _models_Media__WEBPACK_IMPORTED_MODULE_0__/* .mediaQuery.whereRaw */ .c.whereRaw([
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("model_id", "==", this.model_id),
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("type_media_id", "==", type.data.id)
            ]);
        };
        this.save = async (typeName, file)=>{
            const type = (await this.findType(typeName))[0];
            return _storage__WEBPACK_IMPORTED_MODULE_3__/* ["default"].upload */ .Z.upload(file).then(async (snapshot)=>{
                const url = snapshot.metadata.fullPath;
                const media = new _models_Media__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
                    "type_media_id": type.data.id,
                    "model_id": this.model_id,
                    "name": file.name,
                    "url": url
                });
                return await media.save();
            });
        };
        this.model_id = model_id;
    }
    all() {
        return _models_Media__WEBPACK_IMPORTED_MODULE_0__/* .mediaQuery.where */ .c.where("model_id", "==", this.model_id);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8545);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8097);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__]);
([_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class Storage {
    ref(route) {
        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .storage */ .tO, route);
    }
    upload(file) {
        const extension = file.name.split(".").pop();
        const name = uniqid__WEBPACK_IMPORTED_MODULE_2___default()();
        const storageRef = this.ref(`${name}.${extension}`);
        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytes)(storageRef, file);
    }
    getFile(route) {
        const ref = this.ref(route);
        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(ref);
    }
    delete(route) {
        const ref = this.ref(route);
        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.deleteObject)(ref);
    }
}
const storageService = new Storage();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;