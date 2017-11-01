(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrActivityCard", [], factory);
	else if(typeof exports === 'object')
		exports["CdrActivityCard"] = factory();
	else
		root["CdrActivityCard"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrActivityCard__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cdrActivityCard", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrActivityCard__["a"]; });


function install(Vue) {
  Vue.component('cdr-activity-card', __WEBPACK_IMPORTED_MODULE_0__cdrActivityCard__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrActivityCard_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c908664_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrActivityCard_vue__ = __webpack_require__(11);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrActivityCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c908664_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrActivityCard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_heading__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rei_co_op_cedar_image__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rei_co_op_cedar_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rei_co_op_cedar_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rei_co_op_cedar_media_object__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rei_co_op_cedar_media_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rei_co_op_cedar_media_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rei_co_op_cedar_rating__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rei_co_op_cedar_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rei_co_op_cedar_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rei_co_op_cedar_list__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rei_co_op_cedar_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rei_co_op_cedar_list__);










/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-activity-card',
  components: {
    CdrCard: __WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_card__["CdrCard"],
    CdrHeading: __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_heading__["CdrHeading"],
    cdrImg: __WEBPACK_IMPORTED_MODULE_2__rei_co_op_cedar_image__["CdrImage"],
    CdrMediaObject: __WEBPACK_IMPORTED_MODULE_3__rei_co_op_cedar_media_object__["CdrMediaObject"],
    CdrRating: __WEBPACK_IMPORTED_MODULE_4__rei_co_op_cedar_rating__["CdrRating"],
    CdrList: __WEBPACK_IMPORTED_MODULE_5__rei_co_op_cedar_list__["CdrList"]
  },
  props: {
    media: String,

    mediaAlt: {
      type: String,
      default: ' '
    },

    mediaRatio: String,

    mediaCover: Boolean,

    mediaCrop: String,

    title: String,

    titleUrl: {
      type: String,
      required: true
    },

    titleLevel: {
      default: '2'
    },

    label: String,

    location: String,

    snapshot: {
      type: Array,
      required: false
    },

    rating: {
      type: [String, Number]
    },

    count: {
      type: [String, Number]
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrCard", [], factory);
	else if(typeof exports === 'object')
		exports["CdrCard"] = factory();
	else
		root["CdrCard"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrCard_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrCard", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrCard_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-card', __WEBPACK_IMPORTED_MODULE_0__cdrCard_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCard_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b242f20_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCard_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b242f20_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_modifier__ = __webpack_require__(5);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-card',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_modifier__["a" /* default */]],
  computed: {
    baseClass() {
      return 'cdr-card';
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    /**
     * Space separated list of modifiers. See below for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = '';

      if (!this.theme) {
        final += `${base}`;

        modifierArr.forEach((mod) => {
          final += ` ${base}--${mod} `;
        });
      }

      return final;
    },
  },
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{class:[_vm.modifierClass]},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrHeading", [], factory);
	else if(typeof exports === 'object')
		exports["CdrHeading"] = factory();
	else
		root["CdrHeading"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrHeading_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrHeading", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrHeading_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-heading', __WEBPACK_IMPORTED_MODULE_0__cdrHeading_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrHeading_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7efa8468_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrHeading_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrHeading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7efa8468_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrHeading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_modifier__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//



/**
 * Component is described here.
 *
 * @example ./typography.md
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-heading',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_modifier__["a" /* default */]],
  data() {
    return {
      headClass: 'cdr-heading'
    };
  },
  props: {
    /**
     * Heading level -- 1 = h1, 2 = h2, etc.
     */
    level: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    baseClass() {
      return 'cdr-type';
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    /**
     * Space separated list of modifiers. See below for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = '';

      if (!this.theme) {
        final += `${base}`;

        modifierArr.forEach((mod) => {
          final += ` ${base}--${mod} `;
        });
      }

      return final;
    },
  },
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.level === '1')?_c('h1',{class:[_vm.headClass, _vm.modifierClass]},[_vm._t("default")],2):(_vm.level === '2')?_c('h2',{class:[_vm.headClass, _vm.modifierClass]},[_vm._t("default")],2):(_vm.level === '3')?_c('h3',{class:[_vm.headClass, _vm.modifierClass]},[_vm._t("default")],2):(_vm.level === '4')?_c('h4',{class:[_vm.headClass, _vm.modifierClass]},[_vm._t("default")],2):(_vm.level === '5')?_c('h5',{class:[_vm.headClass, _vm.modifierClass]},[_vm._t("default")],2):(_vm.level === '6')?_c('h6',{class:[_vm.headClass, _vm.modifierClass]},[_vm._t("default")],2):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrImage", [], factory);
	else if(typeof exports === 'object')
		exports["CdrImage"] = factory();
	else
		root["CdrImage"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrImg_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrImage", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrImg_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-img', __WEBPACK_IMPORTED_MODULE_0__cdrImg_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c95cded8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c95cded8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_modifier__ = __webpack_require__(5);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-img',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_modifier__["a" /* default */]],
  inheritAttrs: false,
  props: {
    /**
     * Required. Image source url.
     */
    src: {
      type: String,
      required: true
    },
    /**
     * Required. Image alt text.
     */
    alt: {
      type: String,
      default: ' '
    },
    /**
     * Enable lazy loading.
     */
    lazy: {
      type: Boolean
    },
    /**
     * Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     */
    ratio: {
      type: String,
      validator: value => ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false
    },
    /**
     * sm breakpoint and above
     */
    ratioSm: {
      type: String,
      validator: value => ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false
    },
    /**
     * md breakpoint and above
     */
    ratioMd: {
      type: String,
      validator: value => ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false
    },
    /**
     * lg breakpoint and above
     */
    ratioLg: {
      type: String,
      validator: value => ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false
    },
    /**
     * Requires a `ratio`.
     * Area to crop the image overflow to.
     * {top, y-center, bottom} {left, x-center, right}
     */
    crop: {
      type: String
    },
    /**
     * Requires a `ratio`.
     * Scale the image to be as large as possible to fill the area (background-position: cover;)
     */
    cover: {
      type: Boolean
    },
    /**
     * Sets a border radius to an element {square, top, right, bottom, left}
     */
    radius: {
      type: String,
      validator: value => ['square', 'top', 'right', 'bottom', 'left'].indexOf(value) >= 0 || false
    }
  },
  computed: {
    baseClass() {
      return 'cdr-image';
    },
    lazyClass() {
      const classObj = {};
      classObj['lazy-image'] = this.lazy;
      return classObj;
    },
    radiusClass() {
      const classObj = {};
      classObj[`cdr-add-radius--${this.utiliyRadius}`] = this.utiliyRadius;
      return classObj;
    },
    ratioClass() {
      const classObj = {};
      classObj[`cdr-media-frame--${this.ratio}`] = this.ratio;
      classObj[`cdr-media-frame--${this.ratioSm}@sm`] = this.ratioSm;
      classObj[`cdr-media-frame--${this.ratioMd}@md`] = this.ratioMd;
      classObj[`cdr-media-frame--${this.ratioLg}@lg`] = this.ratioLg;
      return classObj;
    },
    coverClass() {
      const classObj = {};
      classObj['cdr-media-frame__cover'] = true;
      classObj['cdr-media-frame__cover--crop'] = this.crop;
      classObj['cdr-media-frame__cover--cover'] = this.cover;
      return classObj;
    },
    cropClass() {
      const base = 'cdr-media-frame';
      const cropArr = this.crop ? this.crop.split(' ') : [];

      let final = '';

      cropArr.forEach(crop => {
        final += `${base}--${crop} `;
      });
      return final;
    },
    styleObject() {
      return {
        backgroundImage: `url(${this.src})`
      };
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    /**
     * Space separated list of modifiers. See below for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = '';

      if (!this.theme) {
        final += `${base}`;

        modifierArr.forEach((mod) => {
          final += ` ${base}--${mod} `;
        });
      }

      return final;
    },
  },
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ratio)?_c('div',{staticClass:"cdr-media-frame",class:[_vm.ratioClass, _vm.cropClass]},[_c('div',_vm._b({class:[_vm.coverClass, _vm.lazyClass],style:(_vm.styleObject),attrs:{"aria-hidden":"true"}},'div',_vm.$attrs,false)),_vm._v(" "),_c('img',_vm._b({staticClass:"cdr-media-frame__image cdr-media-frame__image--hidden",class:[_vm.modifierClass, _vm.radiusClass],attrs:{"src":_vm.src,"alt":_vm.alt}},'img',_vm.$attrs,false))]):_c('img',_vm._b({class:[_vm.modifierClass, _vm.radiusClass, _vm.lazyClass],attrs:{"src":_vm.src,"alt":_vm.alt}},'img',_vm.$attrs,false))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    /**
     * Space separated list of modifiers. See below for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = '';

      if (!this.theme) {
        final += `${base}`;

        modifierArr.forEach((mod) => {
          final += ` ${base}--${mod} `;
        });
      }

      return final;
    },
  },
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject_vue__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrMediaObject", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-media-object', __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34a060a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__ = __webpack_require__(14);
function injectStyle (ssrContext) {
  __webpack_require__(4)
}
var normalizeComponent = __webpack_require__(0)
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
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_cdrImg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_cdrIcon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_modifier__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-media-object',
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_modifier__["a" /* default */]],
  inheritAttrs: false,
  components: {
    cdrImg: __WEBPACK_IMPORTED_MODULE_0__image_cdrImg__["a" /* default */],
    cdrIcon: __WEBPACK_IMPORTED_MODULE_1__icon_cdrIcon__["a" /* default */]
  },
  props: {
    /**
    * Sets the media width
    */
    width: String,
    /**
    * Allows you to align your text
    * {right, left, center}
    */
    mediaAlign: {
      type: String,
      validator: value => ['right', 'left', 'center'].indexOf(value) >= 0 || false
    },
    /**
     * icon svg path
     * See cdr-icon
    */
    iconUrl: String,
    /**
    * Custom class added to the image/icon
    */
    imgClass: String,
    /**
     * Image path.
     * See cdr-img
    */
    imgSrc: String,
    /**
     * Image radius.
     * See cdr-img
    */
    imgRadius: String,
    /**
     * Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     * See cdr-img
    */
    imgRatio: String,
    /**
     * Requires `imgRatio`.
     * Scale the image to be as large as possible to fill the area (background-position: cover;)
     * See cdr-img
     */
    imgCover: Boolean,
    /**
     * Requires `imgRatio`.
     * Area to crop the image overflow to.
     * {top, y-center, bottom} {left, x-center, right}
     * See cdr-img
     */
    imgCrop: String,
    /**
     * Image alternitive description, defaults to blank
     * See cdr-img
    */
    imgAlt: String,
    /**
     * {Responsive, Rounded, circle, thumbnail}
     * See cdr-img
    */
    imgModifier: String
  },
  computed: {
    baseClass() {
      return 'cdr-media-object';
    },
    alignClass() {
      if (this.mediaAlign) {
        return `cdr-media-object__body--${this.mediaAlign}`;
      }
      return '';
    },
    mediaWidth() {
      return `width: ${this.width};`;
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mediaObject_node_modules_vue_loader_lib_selector_type_script_index_0_mediaObject_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediaObject_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bf63a8b_hasScoped_false_buble_transforms_mediaObject_node_modules_vue_loader_lib_selector_type_template_index_0_mediaObject_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__ = __webpack_require__(9);
function injectStyle (ssrContext) {
  __webpack_require__(7)
}
var normalizeComponent = __webpack_require__(0)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mediaObject_node_modules_vue_loader_lib_selector_type_script_index_0_mediaObject_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mediaObject_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bf63a8b_hasScoped_false_buble_transforms_mediaObject_node_modules_vue_loader_lib_selector_type_template_index_0_mediaObject_node_modules_vue_theme_loader_index_js_ref_1_1_cdrImg_vue__["a" /* default */],
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_modifier__ = __webpack_require__(1);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-img',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_modifier__["a" /* default */]],
  inheritAttrs: false,
  props: {
    /**
     * Required. Image source url.
     */
    src: {
      type: String,
      required: true
    },
    /**
     * Required. Image alt text.
     */
    alt: {
      type: String,
      default: ' '
    },
    /**
     * Enable lazy loading.
     */
    lazy: {
      type: Boolean
    },
    /**
     * Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     */
    ratio: {
      type: String,
      validator: value => ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false
    },
    /**
     * sm breakpoint and above
     */
    ratioSm: {
      type: String,
      validator: value => ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false
    },
    /**
     * md breakpoint and above
     */
    ratioMd: {
      type: String,
      validator: value => ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false
    },
    /**
     * lg breakpoint and above
     */
    ratioLg: {
      type: String,
      validator: value => ['auto', 'square', '1-2', '2-3', '3-4', '9-16', '2-1', '3-2', '4-3', '16-9'].indexOf(value) >= 0 || false
    },
    /**
     * Requires a `ratio`.
     * Area to crop the image overflow to.
     * {top, y-center, bottom} {left, x-center, right}
     */
    crop: {
      type: String
    },
    /**
     * Requires a `ratio`.
     * Scale the image to be as large as possible to fill the area (background-position: cover;)
     */
    cover: {
      type: Boolean
    },
    /**
     * Sets a border radius to an element {square, top, right, bottom, left}
     */
    radius: {
      type: String,
      validator: value => ['square', 'top', 'right', 'bottom', 'left'].indexOf(value) >= 0 || false
    }
  },
  computed: {
    baseClass() {
      return 'cdr-image';
    },
    lazyClass() {
      const classObj = {};
      classObj['lazy-image'] = this.lazy;
      return classObj;
    },
    radiusClass() {
      const classObj = {};
      classObj[`cdr-add-radius--${this.utiliyRadius}`] = this.utiliyRadius;
      return classObj;
    },
    ratioClass() {
      const classObj = {};
      classObj[`cdr-media-frame--${this.ratio}`] = this.ratio;
      classObj[`cdr-media-frame--${this.ratioSm}@sm`] = this.ratioSm;
      classObj[`cdr-media-frame--${this.ratioMd}@md`] = this.ratioMd;
      classObj[`cdr-media-frame--${this.ratioLg}@lg`] = this.ratioLg;
      return classObj;
    },
    coverClass() {
      const classObj = {};
      classObj['cdr-media-frame__cover'] = true;
      classObj['cdr-media-frame__cover--crop'] = this.crop;
      classObj['cdr-media-frame__cover--cover'] = this.cover;
      return classObj;
    },
    cropClass() {
      const base = 'cdr-media-frame';
      const cropArr = this.crop ? this.crop.split(' ') : [];

      let final = '';

      cropArr.forEach(crop => {
        final += `${base}--${crop} `;
      });
      return final;
    },
    styleObject() {
      return {
        backgroundImage: `url(${this.src})`
      };
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ratio)?_c('div',{staticClass:"cdr-media-frame",class:[_vm.ratioClass, _vm.cropClass]},[_c('div',_vm._b({class:[_vm.coverClass, _vm.lazyClass],style:(_vm.styleObject),attrs:{"aria-hidden":"true"}},'div',_vm.$attrs,false)),_vm._v(" "),_c('img',_vm._b({staticClass:"cdr-media-frame__image cdr-media-frame__image--hidden",class:[_vm.modifierClass, _vm.radiusClass],attrs:{"src":_vm.src,"alt":_vm.alt}},'img',_vm.$attrs,false))]):_c('img',_vm._b({class:[_vm.modifierClass, _vm.radiusClass, _vm.lazyClass],attrs:{"src":_vm.src,"alt":_vm.alt}},'img',_vm.$attrs,false))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mediaObject_node_modules_vue_loader_lib_selector_type_script_index_0_mediaObject_node_modules_vue_theme_loader_index_js_ref_1_1_cdrIcon_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediaObject_node_modules_vue_loader_lib_template_compiler_index_id_data_v_483b6339_hasScoped_false_buble_transforms_mediaObject_node_modules_vue_loader_lib_selector_type_template_index_0_mediaObject_node_modules_vue_theme_loader_index_js_ref_1_1_cdrIcon_vue__ = __webpack_require__(13);
function injectStyle (ssrContext) {
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(0)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mediaObject_node_modules_vue_loader_lib_selector_type_script_index_0_mediaObject_node_modules_vue_theme_loader_index_js_ref_1_1_cdrIcon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mediaObject_node_modules_vue_loader_lib_template_compiler_index_id_data_v_483b6339_hasScoped_false_buble_transforms_mediaObject_node_modules_vue_loader_lib_selector_type_template_index_0_mediaObject_node_modules_vue_theme_loader_index_js_ref_1_1_cdrIcon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/**
 * **NOTE:** Can only be used with an SVG symbol sprite.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-icon',
  props: {
    /**
     * URL to the svg sprite and icon name. /path/to/svg.svg#icon-name
     */
    url: {
      type: String,
      required: true
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"cdr-icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":_vm.url}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.modifierClass]},[(_vm.iconUrl)?_c('cdr-icon',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,attrs:{"url":_vm.iconUrl}}):_c('cdr-img',_vm._b({staticClass:"cdr-media-object__figure",class:_vm.imgClass,style:(_vm.mediaWidth),attrs:{"alt":_vm.imgAlt,"src":_vm.imgSrc,"ratio":_vm.imgRatio,"crop":_vm.imgCrop,"cover":_vm.imgCover,"radius":_vm.imgRadius,"modifier":_vm.imgModifier}},'cdr-img',_vm.$attrs,false)),_vm._v(" "),_c('div',{staticClass:"cdr-media-object__body",class:_vm.alignClass},[_vm._t("default")],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrRating", [], factory);
	else if(typeof exports === 'object')
		exports["CdrRating"] = factory();
	else
		root["CdrRating"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrRating_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrRating", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrRating_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-rating', __WEBPACK_IMPORTED_MODULE_0__cdrRating_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrRating_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4966166c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrRating_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrRating_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4966166c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrRating_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_modifier__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-rating',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_modifier__["a" /* default */]],
  props: {
    /**
     * Rating out of 5
     */
    rating: {
      required: true,
      type: [String, Number]
    },
    /**
     * Number of ratings
     */
    count: {
      required: false,
      type: [String, Number]
    },
    /**
     * Hides the word 'reviews' if true
     */
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseClass() {
      return 'cdr-rating';
    },
    whole() {
      return Math.floor(this.rating);
    },
    remainder() {
      const full = (Math.round(this.rating * 4) / 4).toFixed(2);

      return full.split('.')[1];
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    /**
     * Space separated list of modifiers. See below for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = '';

      if (!this.theme) {
        final += `${base}`;

        modifierArr.forEach((mod) => {
          final += ` ${base}--${mod} `;
        });
      }

      return final;
    },
  },
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cdr-rating",class:[_vm.modifierClass]},[_c('div',{staticClass:"cdr-rating__background"},_vm._l((5),function(n){return _c('span',{key:n,staticClass:"cdr-rating__icon cdr-rating__placeholder",attrs:{"aria-hidden":"true"}})})),_vm._v(" "),_c('div',{staticClass:"cdr-rating__ratings"},[_vm._l((_vm.whole),function(n){return _c('span',{key:n,staticClass:"cdr-rating__icon cdr-rating__100",attrs:{"aria-hidden":"true"}})}),_vm._v(" "),(_vm.remainder === '25')?_c('span',{staticClass:"cdr-rating__icon cdr-rating__25",attrs:{"aria-hidden":"true"}}):(_vm.remainder === '50')?_c('span',{staticClass:"cdr-rating__icon cdr-rating__50",attrs:{"aria-hidden":"true"}}):(_vm.remainder === '75')?_c('span',{staticClass:"cdr-rating__icon cdr-rating__75",attrs:{"aria-hidden":"true"}}):_vm._e()],2),_vm._v(" "),(_vm.count)?_c('span',{staticClass:"cdr-rating__count",attrs:{"aria-hidden":"true"}},[_vm._v("("+_vm._s(_vm.count)+")"),(!_vm.compact)?_c('span',[_vm._v(" Reviews")]):_vm._e()]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"u-sr-only"},[_vm._v("rated "+_vm._s(_vm.rating)+" out of 5 with "+_vm._s(_vm.count)+" reviews")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrList", [], factory);
	else if(typeof exports === 'object')
		exports["CdrList"] = factory();
	else
		root["CdrList"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrList_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrList", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrList_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-list', __WEBPACK_IMPORTED_MODULE_0__cdrList_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrList_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7baa10e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrList_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7baa10e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_modifier__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-list',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_modifier__["a" /* default */]],
  props: {
    /**
     * List type. 'ul' = Unordered List. 'ol' = Ordered List.
     */
    type: {
      type: String,
      default: 'ul',
      validator: value => ['ul', 'ol'].indexOf(value) >= 0 || false
    }
  },
  computed: {
    baseClass() {
      return 'cdr-list';
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    /**
     * Space separated list of modifiers. See below for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = '';

      if (!this.theme) {
        final += `${base}`;

        modifierArr.forEach((mod) => {
          final += ` ${base}--${mod} `;
        });
      }

      return final;
    },
  },
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.type === 'ul')?_c('ul',{class:_vm.modifierClass},[_vm._t("default")],2):(_vm.type === 'ol')?_c('ol',{class:_vm.modifierClass},[_vm._t("default")],2):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cdr-card',{attrs:{"modifier":"activity"}},[_c('section',{staticClass:"cdr-inset cdr-inset--remove-top"},[_c('cdr-media-object',{attrs:{"img-src":_vm.media,"img-alt":_vm.mediaAlt,"img-crop":_vm.mediaCrop,"img-cover":_vm.mediaCover,"img-ratio":_vm.mediaRatio,"img-class":"cdr-card--activity__image","img-modifier":"responsive","modifier":"top stretch","img-radius":"top"}},[(this.label != null)?_c('div',{staticClass:"cdr-card--activity__label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),(this.title != null)?_c('cdr-heading',{attrs:{"level":_vm.titleLevel}},[_c('a',{staticClass:"cdr-card--activity__title cdr-card--activity__title--action",attrs:{"href":_vm.titleUrl}},[_vm._v(_vm._s(_vm.title))])]):_vm._e(),_vm._v(" "),(_vm.snapshot)?_c('cdr-list',{staticClass:"cdr-card--activity__snapshot",attrs:{"modifier":"inline bulleted"}},_vm._l((_vm.snapshot),function(item){return _c('li',[_vm._v("\n          "+_vm._s(item)+"\n        ")])})):_vm._e(),_vm._v(" "),(_vm.location)?_c('div',{staticClass:"cdr-card--activity__location"},[_vm._v("\n        "+_vm._s(_vm.location)+"\n      ")]):_vm._e(),_vm._v(" "),(this.rating != null)?_c('cdr-rating',{staticClass:"cdr-card--activity__rating",attrs:{"rating":_vm.rating,"count":_vm.count,"modifier":"medium"}}):_vm._e()],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});