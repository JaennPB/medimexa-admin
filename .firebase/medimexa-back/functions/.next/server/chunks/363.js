"use strict";
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 1363:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Builder = ({ fields , onClick , confirm =true , labels =true , validations =false  })=>{
    let initialState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const loadInitialState = ()=>{
        let tempFields = initialState.current;
        for(let k in fields){
            tempFields[fields[k].name] = fields[k].defaultValue || "";
        }
        initialState.current = tempFields;
    };
    loadInitialState();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState.current);
    const [inputs, setInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(fields);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setData(initialState.current);
        setInputs(fields);
    }, [
        fields,
        initialState
    ]);
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const checkRequired = (field, invalid)=>{
        if (field.required) {
            let typeofname = typeof data[field.name];
            if (typeofname == "string" || typeofname == "number") {
                if (data[field.name].toString().trim() === "") {
                    field.noValid = true;
                    invalid = true;
                    field.noValidMessage = "Es requerido";
                } else {
                    field.noValid = false;
                }
            } else {
                if (Object.keys(data[field.name]).length) {
                    field.noValid = false;
                } else {
                    invalid = true;
                    field.noValid = true;
                }
            }
        }
        return {
            field,
            invalid
        };
    };
    const checkValidations = (field, invalid)=>{
        if (validations) {
            const test = validations[field.name] || false;
            if (test) {
                if (!test.fn(data[field.name])) {
                    field.noValid = true;
                    field.noValidMessage = test.message;
                }
            }
        }
        return {
            field,
            invalid
        };
    };
    const handleClick = ()=>{
        let invalid = false;
        let newIinputs = inputs.map((field)=>{
            let result = checkRequired(field, invalid);
            field = result.field;
            invalid = result.invalid;
            result = checkValidations(field, invalid);
            field = result.field;
            invalid = result.invalid;
            return field;
        });
        if (invalid) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Tienes algunos errores");
            setInputs(newIinputs);
        } else {
            let _data = Object();
            for(let key in data){
                if (data[key] !== "") {
                    _data[key] = data[key];
                }
            }
            setLoading(true);
            onClick(_data, setLoading);
        }
    };
    const setFile = (e, field)=>{
        let _data = {
            target: {
                name: "",
                value: ""
            }
        };
        _data.target.name = field.name;
        _data.target.value = e.target.files[0];
        handleChange(_data);
    };
    const checkReadOnly = (field)=>field.readonly ? " (No se puede editar)" : field.required ? "" : " (opcional)";
    const fieldOrEmpty = (field, empty = "")=>field || empty;
    const trueOrFalse = (field)=>{
        if (field) {
            return parseInt(field);
        }
        return 0;
    };
    const handleOptionsChange = (option, field, e)=>{
        let options = data[field.name] || {};
        if (e.target.value.trim() == "") {
            return;
        }
        options[option] = e.target.value, setData({
            ...data,
            [field.name]: options
        });
    };
    const setDefaultValue = (field, option)=>{
        let val = "";
        if (field.defaultValue) {
            val = field.defaultValue[option] || "";
        }
        return val;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            inputs.map((field)=>{
                const { name  } = field;
                let readonly = false;
                if (field.readonly) {
                    readonly = true;
                }
                let type = field.type || "text";
                if (field.date) {
                    type = "date";
                }
                if (field.number) {
                    type = "number";
                }
                if (field.password) {
                    type = "password";
                }
                if (data[field.name] == null) return null;
                let formInput = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: type,
                    readOnly: readonly,
                    min: fieldOrEmpty(field.min),
                    placeholder: fieldOrEmpty(field.placeholder) + checkReadOnly(field),
                    name: field.name,
                    defaultValue: field.defaultValue || "",
                    value: data[name],
                    onChange: handleChange,
                    className: "input input-bordered input-primary w-full mb-6 " + field.className || 0
                }, "input" + field.name);
                if (field.options) {
                    formInput = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        placeholder: fieldOrEmpty(field.placeholder) + checkReadOnly(field),
                        name: field.name,
                        defaultValue: field.defaultValue || "",
                        value: data[name],
                        onChange: handleChange,
                        className: "input input-bordered input-primary w-full mb-6 " + field.className || 0,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                children: [
                                    field.placeholder,
                                    " (Elige una opcion)"
                                ]
                            }),
                            field.options
                        ]
                    }, "input" + field.name);
                }
                if (field.textarea) {
                    formInput = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        rows: 6,
                        readOnly: readonly,
                        placeholder: fieldOrEmpty(field.placeholder) + checkReadOnly(field),
                        name: field.name,
                        defaultValue: field.defaultValue || "",
                        value: data[name],
                        onChange: handleChange,
                        className: "input input-bordered input-primary w-full mb-6 " + field.className || 0
                    }, "input" + field.name);
                }
                if (field.answers) {
                    formInput = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-dashed border-2 border-gray-500 p-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    marginBottom: 12
                                },
                                defaultValue: setDefaultValue(field, "a"),
                                type: "input",
                                placeholder: "Opcion A",
                                onChange: (e)=>handleOptionsChange("a", field, e),
                                className: "input input-bordered input-primary w-full  mb-6 " + field.className || 0
                            }, "input-opcion-1-" + field.name),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    marginBottom: 12
                                },
                                defaultValue: setDefaultValue(field, "b"),
                                type: "input",
                                placeholder: "Opcion B",
                                onChange: (e)=>handleOptionsChange("b", field, e),
                                className: "input input-bordered input-primary w-full  mb-6 " + field.className || 0
                            }, "input-opcion-1-" + field.name),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    marginBottom: 12
                                },
                                defaultValue: setDefaultValue(field, "c"),
                                type: "input",
                                placeholder: "Opcion C",
                                onChange: (e)=>handleOptionsChange("c", field, e),
                                className: "input input-bordered input-primary w-full  mb-6 " + field.className || 0
                            }, "input-opcion-1-" + field.name),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    marginBottom: 12
                                },
                                defaultValue: setDefaultValue(field, "d"),
                                type: "input",
                                placeholder: "Opcion D",
                                onChange: (e)=>handleOptionsChange("d", field, e),
                                className: "input input-bordered input-primary w-full  mb-6 " + field.className || 0
                            }, "input-opcion-1-" + field.name),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    marginBottom: 12
                                },
                                defaultValue: setDefaultValue(field, "e"),
                                type: "input",
                                placeholder: "Opcion E",
                                onChange: (e)=>handleOptionsChange("e", field, e),
                                className: "input input-bordered input-primary w-full  mb-6 " + field.className || 0
                            }, "input-opcion-1-" + field.name),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    marginBottom: 12
                                },
                                defaultValue: setDefaultValue(field, "f"),
                                type: "input",
                                placeholder: "Opcion F",
                                onChange: (e)=>handleOptionsChange("f", field, e),
                                className: "input input-bordered input-primary w-full  mb-6 " + field.className || 0
                            }, "input-opcion-1-" + field.name)
                        ]
                    });
                }
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        labels && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: field.placeholder
                        }),
                        formInput,
                        field.noValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            style: {
                                color: "red"
                            },
                            children: field.noValidMessage
                        }, "small" + field.name)
                    ]
                });
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn btn-primary btn-block",
                onClick: handleClick,
                children: loading ? "Cargando..." : "Guardar"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Builder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;