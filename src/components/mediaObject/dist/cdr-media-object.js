(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrMediaObject", [], factory);
	else if(typeof exports === 'object')
		exports["CdrMediaObject"] = factory();
	else
		root["CdrMediaObject"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(31);
var toPrimitive = __webpack_require__(17);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(1);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(57);
var defined = __webpack_require__(20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(49);
var hide = __webpack_require__(5);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(36);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(51);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(67);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(1).f;
var has = __webpack_require__(3);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var LIBRARY = __webpack_require__(21);
var wksExt = __webpack_require__(27);
var defineProperty = __webpack_require__(1).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(34);
var hide = __webpack_require__(5);
var has = __webpack_require__(3);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(55);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(62);
var ITERATOR = __webpack_require__(7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(56);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(61).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(58)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(36);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrMediaObject", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject__["a"]; });


function install(Vue) {
  Vue.component('cdr-media-object', __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34a060a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__ = __webpack_require__(86);
function injectStyle (ssrContext) {
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(44)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34a060a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_a__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_image__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rei_co_op_cedar_icon__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Src_mixins_modifier__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Src_mixins_lazyImage__ = __webpack_require__(85);









/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-media-object',
  mixins: [__WEBPACK_IMPORTED_MODULE_3_Src_mixins_modifier__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4_Src_mixins_lazyImage__["a" /* default */]],
  components: {
    cdrA: __WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_a__["cdrA"],
    cdrImg: __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_image__["CdrImage"],
    cdrIcon: __WEBPACK_IMPORTED_MODULE_2__rei_co_op_cedar_icon__["cdrIcon"]
  },
  props: {
    width: String,

    mediaAlign: {
      type: String,
      validator: function validator(value) {
        return ['right', 'left', 'center'].indexOf(value) >= 0 || false;
      }
    },

    iconUrl: String,

    imgClass: String,

    imgSrc: String,

    imgRadius: String,

    imgRatio: String,

    imgCover: Boolean,

    imgCrop: String,

    imgAlt: String,

    imgModifier: String,

    imgHref: String,

    imgHrefText: String,

    imgTarget: String
  },
  computed: {
    baseClass: function baseClass() {
      return 'cdr-media-object';
    },
    alignClass: function alignClass() {
      if (this.mediaAlign) {
        return 'cdr-media-object__body--' + this.mediaAlign;
      }
      return '';
    },
    mediaWidth: function mediaWidth() {
      return 'width: ' + this.width + ';';
    }
  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);


(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(exports)) === 'object' && ( false ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && __webpack_require__(30)) define("CdrAnchor", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(exports)) === 'object') exports["CdrAnchor"] = factory();else root["CdrAnchor"] = factory();
})(this, function () {
  return function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module = installedModules[moduleId] = { i: moduleId,
        l: false,
        exports: {}
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.l = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default()(exports, name, { configurable: false,
          enumerable: true,
          get: getter
        });
      }
    };
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function getDefault() {
        return module['default'];
      } : function getModuleExports() {
        return module;
      };
      __webpack_require__.d(getter, 'a', getter);
      return getter;
    };
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "/";
    return __webpack_require__(__webpack_require__.s = 0);
  }([function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    var __WEBPACK_IMPORTED_MODULE_0__cdrA__ = __webpack_require__(1);
    __webpack_require__.d(__webpack_exports__, "CdrA", function () {
      return __WEBPACK_IMPORTED_MODULE_0__cdrA__["a"];
    });

    function install(Vue) {
      Vue.component('cdr-a', __WEBPACK_IMPORTED_MODULE_0__cdrA__["a"]);
    }

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(install);
    }

    __webpack_exports__["default"] = install;
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrA_vue__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c28c42c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrA_vue__ = __webpack_require__(6);
    function injectStyle(ssrContext) {
      __webpack_require__(2);
    }
    var normalizeComponent = __webpack_require__(3);

    var __vue_template_functional__ = false;

    var __vue_styles__ = injectStyle;

    var __vue_scopeId__ = null;

    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrA_vue__["a"], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c28c42c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrA_vue__["a"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

    __webpack_exports__["a"] = Component.exports;
  }, function (module, exports) {}, function (module, exports) {

    module.exports = function normalizeComponent(rawScriptExports, compiledTemplate, functionalTemplate, injectStyles, scopeId, moduleIdentifier) {
      var esModule;
      var scriptExports = rawScriptExports = rawScriptExports || {};

      var type = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(rawScriptExports.default);
      if (type === 'object' || type === 'function') {
        esModule = rawScriptExports;
        scriptExports = rawScriptExports.default;
      }

      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

      if (compiledTemplate) {
        options.render = compiledTemplate.render;
        options.staticRenderFns = compiledTemplate.staticRenderFns;
        options._compiled = true;
      }

      if (functionalTemplate) {
        options.functional = true;
      }

      if (scopeId) {
        options._scopeId = scopeId;
      }

      var hook;
      if (moduleIdentifier) {
        hook = function hook(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }

          if (injectStyles) {
            injectStyles.call(this, context);
          }

          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };

        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = injectStyles;
      }

      if (hook) {
        var functional = options.functional;
        var existing = functional ? options.render : options.beforeCreate;

        if (!functional) {
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        } else {
          options._injectStyles = hook;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return existing(h, context);
          };
        }
      }

      return {
        esModule: esModule,
        exports: scriptExports,
        options: options
      };
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0_Src_mixins_modifier__ = __webpack_require__(5);

    __webpack_exports__["a"] = {
      name: 'cdr-a',
      mixins: [__WEBPACK_IMPORTED_MODULE_0_Src_mixins_modifier__["a"]],
      props: {
        target: String,
        rel: String
      },
      computed: {
        baseClass: function baseClass() {
          var modifiers = this.modifier ? this.modifier.split(' ') : [];
          return modifiers.indexOf('button') >= 0 ? 'cdr-button' : 'cdr-link';
        },
        newRel: function newRel() {
          if (this.target === '_blank') {
            return this.rel || 'noopener noreferrer';
          }
          return this.rel;
        }
      }
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_exports__["a"] = {
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
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var render = function render() {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { class: _vm.modifierClass, attrs: { "target": _vm.target, "rel": _vm.newRel } }, [_vm._t("default")], 2);
    };
    var staticRenderFns = [];
    var esExports = { render: render, staticRenderFns: staticRenderFns };
    __webpack_exports__["a"] = esExports;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(15)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(1).f });


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(50);
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
/* 50 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(63);
module.exports = __webpack_require__(27).f('iterator');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(54)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var defined = __webpack_require__(20);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(1);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(13);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(37);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(59);
var toAbsoluteIndex = __webpack_require__(60);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3);
var toObject = __webpack_require__(38);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var global = __webpack_require__(0);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(22);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65);
var step = __webpack_require__(66);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(77);
module.exports = __webpack_require__(4).Symbol;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(34);
var META = __webpack_require__(70).KEY;
var $fails = __webpack_require__(8);
var shared = __webpack_require__(24);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(14);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(27);
var wksDefine = __webpack_require__(28);
var enumKeys = __webpack_require__(71);
var isArray = __webpack_require__(72);
var anObject = __webpack_require__(10);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(17);
var createDesc = __webpack_require__(12);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(73);
var $GOPD = __webpack_require__(74);
var $DP = __webpack_require__(1);
var $keys = __webpack_require__(13);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(40).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(29).f = $propertyIsEnumerable;
  __webpack_require__(39).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(21)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(11);
var has = __webpack_require__(3);
var setDesc = __webpack_require__(1).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(8)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(13);
var gOPS = __webpack_require__(39);
var pIE = __webpack_require__(29);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(37);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6);
var gOPN = __webpack_require__(40).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(29);
var createDesc = __webpack_require__(12);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(17);
var has = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(31);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('asyncIterator');


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('observable');


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);



(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(exports)) === 'object' && ( false ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && __webpack_require__(30)) define("CdrImage", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(exports)) === 'object') exports["CdrImage"] = factory();else root["CdrImage"] = factory();
})(this, function () {
  return function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module = installedModules[moduleId] = { i: moduleId,
        l: false,
        exports: {}
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.l = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default()(exports, name, { configurable: false,
          enumerable: true,
          get: getter
        });
      }
    };
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function getDefault() {
        return module['default'];
      } : function getModuleExports() {
        return module;
      };
      __webpack_require__.d(getter, 'a', getter);
      return getter;
    };
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "/";
    return __webpack_require__(__webpack_require__.s = 8);
  }([function (module, exports) {
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
    if (typeof __g == 'number') __g = global;
  }, function (module, exports) {

    var core = module.exports = { version: '2.5.1' };
    if (typeof __e == 'number') __e = core;
  }, function (module, exports) {

    module.exports = function (it) {
      return (typeof it === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(it)) === 'object' ? it !== null : typeof it === 'function';
    };
  }, function (module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(4)(function () {
      return Object.defineProperty({}, 'a', { get: function get() {
          return 7;
        } }).a != 7;
    });
  }, function (module, exports) {

    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }, function (module, exports) {
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };
  }, function (module, exports, __webpack_require__) {
    var IObject = __webpack_require__(20);
    var defined = __webpack_require__(5);
    module.exports = function (it) {
      return IObject(defined(it));
    };
  }, function (module, exports) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    var __WEBPACK_IMPORTED_MODULE_0__cdrImg__ = __webpack_require__(9);
    __webpack_require__.d(__webpack_exports__, "CdrImage", function () {
      return __WEBPACK_IMPORTED_MODULE_0__cdrImg__["a"];
    });

    function install(Vue) {
      Vue.component('cdr-img', __WEBPACK_IMPORTED_MODULE_0__cdrImg__["a"]);
    }

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(install);
    }

    __webpack_exports__["default"] = install;
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__ = __webpack_require__(12);
    var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c95cded8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__ = __webpack_require__(41);
    function injectStyle(ssrContext) {
      __webpack_require__(10);
    }
    var normalizeComponent = __webpack_require__(11);

    var __vue_template_functional__ = false;

    var __vue_styles__ = injectStyle;

    var __vue_scopeId__ = null;

    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__["a"], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c95cded8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__["a"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

    __webpack_exports__["a"] = Component.exports;
  }, function (module, exports) {}, function (module, exports) {

    module.exports = function normalizeComponent(rawScriptExports, compiledTemplate, functionalTemplate, injectStyles, scopeId, moduleIdentifier) {
      var esModule;
      var scriptExports = rawScriptExports = rawScriptExports || {};

      var type = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(rawScriptExports.default);
      if (type === 'object' || type === 'function') {
        esModule = rawScriptExports;
        scriptExports = rawScriptExports.default;
      }

      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

      if (compiledTemplate) {
        options.render = compiledTemplate.render;
        options.staticRenderFns = compiledTemplate.staticRenderFns;
        options._compiled = true;
      }

      if (functionalTemplate) {
        options.functional = true;
      }

      if (scopeId) {
        options._scopeId = scopeId;
      }

      var hook;
      if (moduleIdentifier) {
        hook = function hook(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }

          if (injectStyles) {
            injectStyles.call(this, context);
          }

          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };

        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = injectStyles;
      }

      if (hook) {
        var functional = options.functional;
        var existing = functional ? options.render : options.beforeCreate;

        if (!functional) {
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        } else {
          options._injectStyles = hook;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return existing(h, context);
          };
        }
      }

      return {
        esModule: esModule,
        exports: scriptExports,
        options: options
      };
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(13);
    var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
    var __WEBPACK_IMPORTED_MODULE_1__mixins_modifier__ = __webpack_require__(40);

    __webpack_exports__["a"] = {
      name: 'cdr-img',
      mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_modifier__["a"]],
      props: {
        src: {
          type: String,
          required: true
        },

        alt: {
          type: String,
          default: ' '
        },

        lazy: {
          type: Boolean
        },

        lazyOpts: {
          type: Object,
          default: function _default() {}
        },

        ratio: {
          type: String,
          validator: function validator(value) {
            return ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false;
          }
        },

        ratioSm: {
          type: String,
          validator: function validator(value) {
            return ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false;
          }
        },

        ratioMd: {
          type: String,
          validator: function validator(value) {
            return ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false;
          }
        },

        ratioLg: {
          type: String,
          validator: function validator(value) {
            return ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false;
          }
        },

        crop: {
          type: String
        },

        cover: {
          type: Boolean
        },

        radius: {
          type: String,
          validator: function validator(value) {
            return ['square', 'top', 'right', 'bottom', 'left'].indexOf(value) >= 0 || false;
          }
        }
      },
      computed: {
        baseClass: function baseClass() {
          return 'cdr-image';
        },
        lazyClass: function lazyClass() {
          var classObj = {};
          classObj['lazy-image'] = this.lazy;
          return classObj;
        },
        radiusClass: function radiusClass() {
          var classObj = {};
          classObj['cdr-add-radius--' + this.utiliyRadius] = this.utiliyRadius;
          return classObj;
        },
        ratioClass: function ratioClass() {
          var classObj = {};
          classObj['cdr-media-frame--' + this.ratio] = this.ratio;
          classObj['cdr-media-frame--' + this.ratioSm + '@sm'] = this.ratioSm;
          classObj['cdr-media-frame--' + this.ratioMd + '@md'] = this.ratioMd;
          classObj['cdr-media-frame--' + this.ratioLg + '@lg'] = this.ratioLg;
          return classObj;
        },
        coverClass: function coverClass() {
          var classObj = {};
          classObj['cdr-media-frame__cover'] = true;
          classObj['cdr-media-frame__cover--crop'] = this.crop;
          classObj['cdr-media-frame__cover--cover'] = this.cover;
          return classObj;
        },
        cropClass: function cropClass() {
          var base = 'cdr-media-frame';
          var cropArr = this.crop ? this.crop.split(' ') : [];

          var final = '';

          cropArr.forEach(function (crop) {
            final += base + '--' + crop + ' ';
          });
          return final;
        },
        styleObject: function styleObject() {
          return {
            backgroundImage: 'url(' + this.src + ')'
          };
        },
        lazyAttrs: function lazyAttrs() {
          var _this = this;

          var attrObj = {};
          if (this.lazy) {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.lazyOpts).forEach(function (opt) {
              attrObj['data-' + opt] = _this.lazyOpts[opt];
            });
          }
          return attrObj;
        }
      }
    };
  }, function (module, exports, __webpack_require__) {

    module.exports = { "default": __webpack_require__(14), __esModule: true };
  }, function (module, exports, __webpack_require__) {

    __webpack_require__(15);
    module.exports = __webpack_require__(1).Object.keys;
  }, function (module, exports, __webpack_require__) {
    var toObject = __webpack_require__(16);
    var $keys = __webpack_require__(17);

    __webpack_require__(29)('keys', function () {
      return function keys(it) {
        return $keys(toObject(it));
      };
    });
  }, function (module, exports, __webpack_require__) {
    var defined = __webpack_require__(5);
    module.exports = function (it) {
      return Object(defined(it));
    };
  }, function (module, exports, __webpack_require__) {
    var $keys = __webpack_require__(18);
    var enumBugKeys = __webpack_require__(28);

    module.exports = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default.a || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }, function (module, exports, __webpack_require__) {

    var has = __webpack_require__(19);
    var toIObject = __webpack_require__(6);
    var arrayIndexOf = __webpack_require__(22)(false);
    var IE_PROTO = __webpack_require__(25)('IE_PROTO');

    module.exports = function (object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) {
        if (key != IE_PROTO) has(O, key) && result.push(key);
      }
      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      }return result;
    };
  }, function (module, exports) {

    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
  }, function (module, exports, __webpack_require__) {
    var cof = __webpack_require__(21);

    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
  }, function (module, exports) {

    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
  }, function (module, exports, __webpack_require__) {
    var toIObject = __webpack_require__(6);
    var toLength = __webpack_require__(23);
    var toAbsoluteIndex = __webpack_require__(24);
    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];

          if (value != value) return true;
        } else for (; length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
        }return !IS_INCLUDES && -1;
      };
    };
  }, function (module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(7);
    var min = Math.min;
    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
    };
  }, function (module, exports, __webpack_require__) {

    var toInteger = __webpack_require__(7);
    var max = Math.max;
    var min = Math.min;
    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
  }, function (module, exports, __webpack_require__) {

    var shared = __webpack_require__(26)('keys');
    var uid = __webpack_require__(27);
    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };
  }, function (module, exports, __webpack_require__) {

    var global = __webpack_require__(0);
    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
      return store[key] || (store[key] = {});
    };
  }, function (module, exports) {

    var id = 0;
    var px = Math.random();
    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
  }, function (module, exports) {
    module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
  }, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(30);
    var core = __webpack_require__(1);
    var fails = __webpack_require__(4);
    module.exports = function (KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function () {
        fn(1);
      }), 'Object', exp);
    };
  }, function (module, exports, __webpack_require__) {

    var global = __webpack_require__(0);
    var core = __webpack_require__(1);
    var ctx = __webpack_require__(31);
    var hide = __webpack_require__(33);
    var PROTOTYPE = 'prototype';

    var $export = function $export(type, name, source) {
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
        own = !IS_FORCED && target && target[key] !== undefined;
        if (own && key in exports) continue;

        out = own ? target[key] : source[key];

        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
          var F = function F(a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0:
                  return new C();
                case 1:
                  return new C(a);
                case 2:
                  return new C(a, b);
              }return new C(a, b, c);
            }return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;

        if (IS_PROTO) {
          (exports.virtual || (exports.virtual = {}))[key] = out;

          if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
        }
      }
    };

    $export.F = 1;
    $export.G = 2;
    $export.S = 4;
    $export.P = 8;
    $export.B = 16;
    $export.W = 32;
    $export.U = 64;
    $export.R = 128;
    module.exports = $export;
  }, function (module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(32);
    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1:
          return function (a) {
            return fn.call(that, a);
          };
        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function () {
        return fn.apply(that, arguments);
      };
    };
  }, function (module, exports) {

    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };
  }, function (module, exports, __webpack_require__) {

    var dP = __webpack_require__(34);
    var createDesc = __webpack_require__(39);
    module.exports = __webpack_require__(3) ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
  }, function (module, exports, __webpack_require__) {

    var anObject = __webpack_require__(35);
    var IE8_DOM_DEFINE = __webpack_require__(36);
    var toPrimitive = __webpack_require__(38);
    var dP = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default.a;

    exports.f = __webpack_require__(3) ? __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default.a : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {}
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
  }, function (module, exports, __webpack_require__) {

    var isObject = __webpack_require__(2);
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };
  }, function (module, exports, __webpack_require__) {

    module.exports = !__webpack_require__(3) && !__webpack_require__(4)(function () {
      return Object.defineProperty(__webpack_require__(37)('div'), 'a', { get: function get() {
          return 7;
        } }).a != 7;
    });
  }, function (module, exports, __webpack_require__) {

    var isObject = __webpack_require__(2);
    var document = __webpack_require__(0).document;

    var is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };
  }, function (module, exports, __webpack_require__) {
    var isObject = __webpack_require__(2);

    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (module, exports) {

    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_exports__["a"] = {
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
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var render = function render() {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.ratio ? _c('div', { staticClass: "cdr-media-frame", class: [_vm.ratioClass, _vm.cropClass] }, [_c('div', _vm._b({ class: [_vm.coverClass, _vm.lazyClass], style: _vm.styleObject, attrs: { "aria-hidden": "true" } }, 'div', _vm.lazyAttrs, false)), _vm._v(" "), _c('img', { staticClass: "cdr-media-frame__image cdr-media-frame__image--hidden", class: [_vm.modifierClass, _vm.radiusClass], attrs: { "src": _vm.src, "alt": _vm.alt } })]) : _c('img', _vm._b({ class: [_vm.modifierClass, _vm.radiusClass, _vm.lazyClass], attrs: { "src": _vm.src, "alt": _vm.alt } }, 'img', _vm.lazyAttrs, false));
    };
    var staticRenderFns = [];
    var esExports = { render: render, staticRenderFns: staticRenderFns };
    __webpack_exports__["a"] = esExports;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(15)(module)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(4).Object.keys;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(38);
var $keys = __webpack_require__(13);

__webpack_require__(82)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9);
var core = __webpack_require__(4);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);


(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(exports)) === 'object' && ( false ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && __webpack_require__(30)) define("CdrIcon", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(exports)) === 'object') exports["CdrIcon"] = factory();else root["CdrIcon"] = factory();
})(this, function () {
  return function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module = installedModules[moduleId] = { i: moduleId,
        l: false,
        exports: {}
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.l = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default()(exports, name, { configurable: false,
          enumerable: true,
          get: getter
        });
      }
    };
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function getDefault() {
        return module['default'];
      } : function getModuleExports() {
        return module;
      };
      __webpack_require__.d(getter, 'a', getter);
      return getter;
    };
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "/";
    return __webpack_require__(__webpack_require__.s = 0);
  }([function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    var __WEBPACK_IMPORTED_MODULE_0__cdrIcon__ = __webpack_require__(1);
    __webpack_require__.d(__webpack_exports__, "CdrIcon", function () {
      return __WEBPACK_IMPORTED_MODULE_0__cdrIcon__["a"];
    });

    function install(Vue) {
      Vue.component('cdr-icon', __WEBPACK_IMPORTED_MODULE_0__cdrIcon__["a"]);
    }

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(install);
    }

    __webpack_exports__["default"] = install;
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrIcon_vue__ = __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6796b942_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrIcon_vue__ = __webpack_require__(5);
    function injectStyle(ssrContext) {
      __webpack_require__(2);
    }
    var normalizeComponent = __webpack_require__(3);

    var __vue_template_functional__ = false;

    var __vue_styles__ = injectStyle;

    var __vue_scopeId__ = null;

    var __vue_module_identifier__ = null;
    var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrIcon_vue__["a"], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6796b942_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrIcon_vue__["a"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

    __webpack_exports__["a"] = Component.exports;
  }, function (module, exports) {}, function (module, exports) {

    module.exports = function normalizeComponent(rawScriptExports, compiledTemplate, functionalTemplate, injectStyles, scopeId, moduleIdentifier) {
      var esModule;
      var scriptExports = rawScriptExports = rawScriptExports || {};

      var type = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(rawScriptExports.default);
      if (type === 'object' || type === 'function') {
        esModule = rawScriptExports;
        scriptExports = rawScriptExports.default;
      }

      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

      if (compiledTemplate) {
        options.render = compiledTemplate.render;
        options.staticRenderFns = compiledTemplate.staticRenderFns;
        options._compiled = true;
      }

      if (functionalTemplate) {
        options.functional = true;
      }

      if (scopeId) {
        options._scopeId = scopeId;
      }

      var hook;
      if (moduleIdentifier) {
        hook = function hook(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }

          if (injectStyles) {
            injectStyles.call(this, context);
          }

          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };

        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = injectStyles;
      }

      if (hook) {
        var functional = options.functional;
        var existing = functional ? options.render : options.beforeCreate;

        if (!functional) {
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        } else {
          options._injectStyles = hook;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return existing(h, context);
          };
        }
      }

      return {
        esModule: esModule,
        exports: scriptExports,
        options: options
      };
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_exports__["a"] = {
      name: 'cdr-icon',
      props: {
        url: {
          type: String,
          required: true
        }
      }
    };
  }, function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var render = function render() {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { staticClass: "cdr-icon", attrs: { "aria-hidden": "true" } }, [_c('use', { attrs: { "xlink:href": _vm.url } })]);
    };
    var staticRenderFns = [];
    var esExports = { render: render, staticRenderFns: staticRenderFns };
    __webpack_exports__["a"] = esExports;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(15)(module)))

/***/ }),
/* 84 */
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
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    lazy: Boolean,

    lazyOpts: {
      type: Object,
      default: function _default() {}
    }
  }
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.modifierClass]},[(_vm.imgHref)?[_c('cdr-a',{attrs:{"href":_vm.imgHref,"target":"imgTarget"}},[_c('span',{staticClass:"u-sr-only"},[_vm._v(_vm._s(_vm.imgHrefText))]),_vm._v(" "),(_vm.iconUrl)?_c('cdr-icon',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,attrs:{"url":_vm.iconUrl}}):_c('cdr-img',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,style:(_vm.mediaWidth),attrs:{"lazy":_vm.lazy,"lazyOpts":_vm.lazyOpts,"alt":_vm.imgAlt,"src":_vm.imgSrc,"ratio":_vm.imgRatio,"crop":_vm.imgCrop,"cover":_vm.imgCover,"radius":_vm.imgRadius,"modifier":_vm.imgModifier}})],1)]:[(_vm.iconUrl)?_c('cdr-icon',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,attrs:{"url":_vm.iconUrl}}):_c('cdr-img',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,style:(_vm.mediaWidth),attrs:{"lazy":_vm.lazy,"lazyOpts":_vm.lazyOpts,"alt":_vm.imgAlt,"src":_vm.imgSrc,"ratio":_vm.imgRatio,"crop":_vm.imgCrop,"cover":_vm.imgCover,"radius":_vm.imgRadius,"modifier":_vm.imgModifier}})],_vm._v(" "),_c('div',{staticClass:"cdr-media-object__body",class:_vm.alignClass},[_vm._t("default")],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});