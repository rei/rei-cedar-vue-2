(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrInput", [], factory);
	else if(typeof exports === 'object')
		exports["CdrInput"] = factory();
	else
		root["CdrInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrInput__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrInput", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrInput__["a"]; });


function install(Vue) {
  Vue.component('cdr-input', __WEBPACK_IMPORTED_MODULE_0__cdrInput__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrInput_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784968cc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrInput_vue__ = __webpack_require__(28);
function injectStyle (ssrContext) {
  __webpack_require__(7)
}
var normalizeComponent = __webpack_require__(8)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784968cc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_debounce__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_modifier__ = __webpack_require__(24);






var checkIcon = __webpack_require__(25);
var errorIcon = __webpack_require__(26);
var warningIcon = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-input',
  inheritAttrs: false,
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_modifier__["a" /* default */]],
  data: function data() {
    return {
      errors: [],
      currentValue: this.value,
      pristine: true,
      touched: false,
      valid: false,
      focused: false,
      state: ''
    };
  },

  props: {
    id: String,

    label: {
      type: String,
      required: true
    },

    hideLabel: Boolean,

    multiLine: Boolean,

    pattern: String,

    patternError: String,

    feedback: Boolean,

    type: {
      type: String,
      default: 'text'
    },

    rules: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    debounce: {
      required: false,
      default: false
    },

    disabled: Boolean,

    required: Boolean,

    immediateValidate: Boolean,

    value: {
      required: false
    }
  },
  computed: {
    inputId: function inputId() {
      return this.id ? this.id : this._uid;
    },
    messagesId: function messagesId() {
      return 'err' + this._uid;
    },
    baseClass: function baseClass() {
      return 'cdr-input';
    },
    labelClass: function labelClass() {
      return {
        'cdr-label': true,
        'cdr-label--error': this.isErr,
        'cdr-label--disabled': this.disabled
      };
    },
    inputClass: function inputClass() {
      return {
        'cdr-input': true,
        'cdr-input--multiline': this.multiLine,
        'cdr-input--error': this.isErr,
        'cdr-input--warn': this.isWarn,
        'cdr-input--preicon': this.$slots.preicon
      };
    },
    inputWrapClass: function inputWrapClass() {
      return {
        'cdr-input-wrap': true,
        'cdr-input-wrap--actions': this.$slots.pre || this.$slots.post
      };
    },
    validationIconClass: function validationIconClass() {
      return {
        'cdr-input-wrap__icon': true,
        'cdr-input-wrap__icon--error': this.isErr,
        'cdr-input-wrap__icon--warn': this.isWarn,
        'cdr-input-wrap__icon--valid': this.isValid
      };
    },
    messageClass: function messageClass() {
      return {
        'cdr-input-messages__notification': true,
        'cdr-input-messages__notification--error': this.isErr,
        'cdr-input-messages__notification--warn': this.isWarn
      };
    },
    getIcon: function getIcon() {
      var icon = '';

      if (this.isErr) {
        icon = errorIcon;
      } else if (this.isValid) {
        icon = checkIcon;
      } else if (this.isWarn) {
        icon = warningIcon;
      }

      return icon;
    },
    debounceVal: function debounceVal() {
      if (this.debounce === false) {
        return 0;
      } else if (!__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan___default()(this.debounce) && this.debounce !== '' && this.debounce !== true) {
        return this.debounce;
      }
      return 500;
    },
    isErr: function isErr() {
      return this.state === 'error';
    },
    isWarn: function isWarn() {
      return this.state === 'warn';
    },
    isValid: function isValid() {
      return this.state === 'valid';
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.pattern) {
      var regPattern = new RegExp(this.pattern);
      this.rules.push(function (text) {
        var obj = {};
        if (regPattern.test(text)) {
          obj.state = 'valid';
        } else {
          obj.state = 'error';
          obj.message = _this.patternError || '';
        }
        return obj;
      });
    }

    if (this.required) {
      this.rules.push(function (text) {
        var obj = {};

        if (_this.touched && !_this.focused && text === '') {
          obj.state = 'warn';
          obj.message = 'This field is required';
        }
        return obj;
      });
    }
    if (this.immediateValidate) {
      this.validate(true);
    }
  },

  watch: {
    focused: function focused(val) {
      this.touched = true;

      if (val) {
        this.$emit('change', val);
      }
    },
    value: function value(val) {
      this.setCurrentValue(val);
      this.validate();
    }
  },
  methods: {
    onInput: function onInput(e) {
      this.pristine = false;
      var value = e.target.value;

      this.$emit('input', value);
      this.setCurrentValue(value);
    },
    onBlur: function onBlur(e) {
      var _this2 = this;

      this.validate(true);
      this.$nextTick(function () {
        _this2.focused = false;
      });
      this.$emit('blur', e);
    },
    onFocus: function onFocus(e) {
      this.focused = true;
      this.$refs.input.focus();
      this.$emit('focus', e);
    },
    onPaste: function onPaste(e) {
      this.validate(true);
      this.$emit('paste', e);
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
    },
    validate: function validate() {
      var _this3 = this;

      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.rules.length > 0) {
        var delay = immediate ? 0 : this.debounceVal;
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_debounce__["a" /* default */])(function () {
          _this3.errors = [];
          _this3.valid = false;

          _this3.rules.forEach(function (rule) {
            var validObj = rule(_this3.currentValue);
            validObj.state = validObj.state ? validObj.state : _this3.state;

            if (validObj.state === 'valid') {
              _this3.state = validObj.state;
            } else if (validObj.state === 'warn') {
              _this3.state = validObj.state;
              _this3.errors.push(validObj.message);
            } else {
              _this3.state = validObj.state;
              if (validObj.message) {
                _this3.errors.push(validObj.message);
              }
            }
          });
        }, delay)();
      }
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(3).Number.isNaN;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(13);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(14);
var hide = __webpack_require__(16);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(19);
var toPrimitive = __webpack_require__(21);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(0);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(func, wait) {
  var timeout = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, wait);
  };
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    modifier: String
  },
  computed: {
    modifierClass: function modifierClass() {
      var base = this.baseClass;
      var modifierArr = this.modifier ? this.modifier.split(' ') : [];
      var final = '';

      if (!this.theme) {
        final += '' + base;

        modifierArr.forEach(function (mod) {
          final += ' ' + base + '--' + mod + ' ';
        });
      }

      return final;
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.67 13.67l10.1-12.03c.35-.42.3-1.05-.13-1.4-.42-.36-1.05-.3-1.4.12l-9.3 11.08-3.17-3.77c-.36-.43-1-.48-1.4-.13-.44.36-.5 1-.14 1.4l3.88 4.63c.2.26.5.43.84.43.3 0 .56-.13.74-.33z\"/></svg>"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 20C4.48 20 0 15.52 0 10S4.48 0 10 0s10 4.48 10 10-4.48 10-10 10zm1.4-10l3.3-3.3c.4-.38.4-1 0-1.4-.4-.4-1.02-.4-1.4 0L10 8.6 6.7 5.3c-.38-.4-1.02-.4-1.4 0-.4.4-.4 1.02 0 1.4L8.58 10l-3.3 3.3c-.38.38-.38 1.02 0 1.4.4.4 1.04.4 1.43 0l3.3-3.28 3.3 3.3c.38.38 1 .38 1.4 0 .4-.4.4-1.04 0-1.43L11.4 10z\"/></svg>"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.894.558l8.002 15.995c.247.494.047 1.094-.447 1.34-.14.07-.294.107-.45.107H1c-.552 0-1-.448-1-1 0-.155.037-.308.106-.447L8.106.558c.247-.494.847-.694 1.34-.447.195.1.352.255.448.45V.557zM8.78 4.5h-.03c-.552.017-.986.477-.97 1.03l.19 6.5c.017.54.46.97 1 .97h.06c.54 0 .983-.43 1-.97l.19-6.5V5.5c0-.552-.448-1-1-1h-.44zm.22 12c.69 0 1.25-.56 1.25-1.25S9.69 14 9 14s-1.25.56-1.25 1.25S8.31 16.5 9 16.5z\"/></svg>"

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cdr-input-container"},[(!_vm.hideLabel)?_c('label',{ref:"label",class:_vm.labelClass,attrs:{"for":_vm.inputId}},[_vm._v(_vm._s(_vm.label)),(_vm.required)?_c('span',[_vm._v("*")]):_vm._e()]):_vm._e(),_vm._v(" "),_c('div',{class:[_vm.inputWrapClass]},[(_vm.multiLine)?_c('textarea',_vm._b({ref:"input",class:[_vm.inputClass, _vm.modifierClass],attrs:{"id":_vm.inputId,"required":_vm.required,"disabled":_vm.disabled,"aria-label":_vm.hideLabel ? _vm.label : null,"aria-describedby":_vm.errors.length ? _vm.messagesId : null},domProps:{"value":_vm.currentValue},on:{"blur":_vm.onBlur,"input":_vm.onInput,"focus":_vm.onFocus,"paste":_vm.onPaste}},'textarea',_vm.$attrs,false)):_c('input',_vm._b({ref:"input",class:[_vm.inputClass, _vm.modifierClass],attrs:{"type":_vm.type,"id":_vm.inputId,"required":_vm.required,"disabled":_vm.disabled,"aria-label":_vm.hideLabel ? _vm.label : null,"aria-describedby":_vm.errors.length ? _vm.messagesId : null},domProps:{"value":_vm.currentValue},on:{"blur":_vm.onBlur,"input":_vm.onInput,"focus":_vm.onFocus,"paste":_vm.onPaste}},'input',_vm.$attrs,false)),_vm._v(" "),(_vm.$slots.preicon)?_c('span',{staticClass:"cdr-input__pre-icon",attrs:{"aria-hidden":"true"}},[_vm._t("preicon")],2):_vm._e(),_vm._v(" "),(_vm.feedback)?_c('span',{ref:"icon",class:_vm.validationIconClass,domProps:{"innerHTML":_vm._s(_vm.getIcon)}}):_vm._e()]),_vm._v(" "),_c('transition-group',{ref:"messages",staticClass:"cdr-input-messages",attrs:{"id":_vm.messagesId,"name":"cdr-animated-errors","tag":"div"}},_vm._l((_vm.errors),function(error){return _c('div',{key:error,ref:"error",refInFor:true,class:_vm.messageClass,attrs:{"error":error}},[_vm._v(_vm._s(error))])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});