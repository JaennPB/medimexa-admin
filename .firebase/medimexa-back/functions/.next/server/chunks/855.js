"use strict";
exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8545);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


class Model {
    constructor(table, data, extend = {}){
        this.save = async ()=>{
            if (this._save != undefined) {
                try {
                    await this._save();
                } catch (e) {}
            }
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, this.table), {
                ...this.data,
                created_at: Date.now(),
                updated_at: Date.now(),
                deleted_at: null
            }).then((doc)=>{
                this.old = doc;
                this.data.id = doc.id;
            });
        };
        this.update = async ()=>{
            if (this._update != undefined) {
                try {
                    await this._update();
                } catch (e) {}
            }
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, this.table, this.data.id), {
                ...this.data,
                updated_at: Date.now()
            });
        };
        this.delete = async ()=>{
            if (this._delete != undefined) {
                try {
                    await this._delete();
                } catch (e) {}
            }
            this.data.deleted_at = Date.now();
            this.update();
        };
        this.table = table;
        this.data = data;
        this.old = data;
        if (extend._save) {
            this._save = extend._save;
        }
        if (extend._update) {
            this._update = extend._update;
        }
        if (extend._delete) {
            this._delete = extend._delete;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8545);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, "cities"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("capital", "==", true));
class Query {
    constructor(table, model){
        this.find = (id)=>{
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, this.table, id)).then((doc)=>{
                let data = doc.data();
                if (data) {
                    data = {
                        id: doc.id,
                        ...doc.data()
                    };
                    if (data.deleted_at == null) {
                        return new this.model(data);
                    }
                }
                throw "No se encontro el usuario";
            });
        };
        this.all = ()=>{
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, this.table)).then((snapshot)=>{
                return snapshot.docs.filter(this.filterDoc).map(this.mapDoc);
            });
        };
        this.where = (key, sign, value)=>{
            const collect = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, this.table);
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(collect, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)(key, sign, value));
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(q).then((snapshot)=>{
                return snapshot.docs.filter(this.filterDoc).map(this.mapDoc);
            });
        };
        this.whereRaw = (wheres)=>{
            const collect = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, this.table);
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(collect, ...wheres);
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(q).then((snapshot)=>{
                return snapshot.docs.filter(this.filterDoc).map(this.mapDoc);
            });
        };
        this.subscribe = (setValue, setError = null)=>{
            if (!setError) {
                setError = ()=>{};
            }
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, this.table), (snapshot)=>{
                let docs = snapshot.docs.filter(this.filterDoc).map(this.mapDoc);
                setValue(docs);
            }, (error)=>{
                setError(Error);
                console.log(error);
            });
        };
        this.filterDoc = (doc)=>{
            return doc.data().deleted_at == null;
        };
        this.mapDoc = (doc)=>{
            return new this.model({
                ...doc.data(),
                id: doc.id
            });
        };
        this.toArray = (res)=>{
            return res.map((item)=>item.data);
        };
        this.first = (res)=>{
            return res[0] || false;
        };
        this.table = table;
        this.model = model;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Query);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;