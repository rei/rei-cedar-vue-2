(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrColumn", [], factory);
	else if(typeof exports === 'object')
		exports["CdrColumn"] = factory();
	else
		root["CdrColumn"] = factory();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrCol_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrColumn", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrCol_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-col', __WEBPACK_IMPORTED_MODULE_0__cdrCol_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCol_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15b4246c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCol_vue__ = __webpack_require__(5);
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCol_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15b4246c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCol_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_rei_co_op_cedar_row__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_rei_co_op_cedar_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_rei_co_op_cedar_row__);
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
  name: 'cdr-col',
  components: { Row: __WEBPACK_IMPORTED_MODULE_0__node_modules_rei_co_op_cedar_row___default.a },
  inject: ['rowType'],
  inheritAttrs: false,
  props: {
    /**
     * Number of columns (1-12) the column should span.
     */
    span: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num > 0 && num <= 12 || false;
      }
    },
    /** Sm breakpoint and above */
    spanSm: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num > 0 && num <= 12 || false;
      }
    },
    /** Md breakpoint and above */
    spanMd: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num > 0 && num <= 12 || false;
      }
    },
    /** Lg breakpoint and above */
    spanLg: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num > 0 && num <= 12 || false;
      }
    },
    /**
     * Number of columns (1-12) of empty space to add left of this column.
     */
    offsetLeft: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num >= 0 && num <= 12 || false;
      }
    },
    /** Sm breakpoint and above */
    offsetLeftSm: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num >= 0 && num <= 12 || false;
      }
    },
    /** Md breakpoint and above */
    offsetLeftMd: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num >= 0 && num <= 12 || false;
      }
    },
    /** Lg breakpoint and above */
    offsetLeftLg: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num >= 0 && num <= 12 || false;
      }
    },
    /**
     * Number of columns (1-12) of empty space to add right of this column.
     */
    offsetRight: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num >= 0 && num <= 12 || false;
      }
    },
    /** Sm breakpoint and above */
    offsetRightSm: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num >= 0 && num <= 12 || false;
      }
    },
    /** Md breakpoint and above */
    offsetRightMd: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num >= 0 && num <= 12 || false;
      }
    },
    /** Lg breakpoint and above */
    offsetRightLg: {
      type: [String, Number],
      validator: value => {
        const num = parseInt(value, 10);
        return num >= 0 && num <= 12 || false;
      }
    },
    /**
     * How the column should align (overrides cdr-row alignment).
     * {top, middle, bottom, stretch}.
     * See CSS flexbox align-self.
     */
    alignSelf: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false
    },
    /** Sm breakpoint and above */
    alignSelfSm: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false
    },
    /** Md breakpoint and above */
    alignSelfMd: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false
    },
    /** Lg breakpoint and above */
    alignSelfLg: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false
    },
    /**
     * Control when column should be hidden. {up, down, only}.
     * 'up' hides at breakpoint and up.
     * 'down' hides at breakpoint and down.
     * 'only' hides only at breakpoint.
     */
    hide: {
      type: String,
      validator: value => ['up', 'down', 'only'].indexOf(value) >= 0 || false
    },
    /** Sm breakpoint and above */
    hideSm: {
      type: String,
      validator: value => ['up', 'down', 'only'].indexOf(value) >= 0 || false
    },
    /** Md breakpoint and above */
    hideMd: {
      type: String,
      validator: value => ['up', 'down', 'only'].indexOf(value) >= 0 || false
    },
    /** Lg breakpoint and above */
    hideLg: {
      type: String,
      validator: value => ['up', 'down', 'only'].indexOf(value) >= 0 || false
    },
    /**
     * Makes the column act as a new cdr-row.
     * Setting this to true exposes the same props as cdr-row.
     */
    isRow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isList() {
      return this.rowType === 'list';
    },
    columnClasses() {
      const classObj = {};
      // span
      classObj[`cdr-col_span${this.span}`] = this.span;
      classObj[`cdr-col_span${this.spanSm}@sm`] = this.spanSm;
      classObj[`cdr-col_span${this.spanMd}@md`] = this.spanMd;
      classObj[`cdr-col_span${this.spanLg}@lg`] = this.spanLg;
      // hide
      classObj[`cdr-col--hide-${this.hide}`] = this.hide;
      classObj[`cdr-col--hide@sm-${this.hideSm}`] = this.hideSm;
      classObj[`cdr-col--hide@md-${this.hideMd}`] = this.hideMd;
      classObj[`cdr-col--hide@lg-${this.hideLg}`] = this.hideLg;
      // offset left
      classObj[`cdr-col--offsetLeft${this.offsetLeft}`] = this.offsetLeft;
      classObj[`cdr-col--offsetLeft${this.offsetLeftSm}@sm`] = this.offsetLeftSm;
      classObj[`cdr-col--offsetLeft${this.offsetLeftMd}@md`] = this.offsetLeftMd;
      classObj[`cdr-col--offsetLeft${this.offsetLeftLg}@lg`] = this.offsetLeftLg;
      // offset right
      classObj[`cdr-col--offsetRight${this.offsetRight}`] = this.offsetRight;
      classObj[`cdr-col--offsetRight${this.offsetRightSm}@sm`] = this.offsetRightSm;
      classObj[`cdr-col--offsetRight${this.offsetRightMd}@md`] = this.offsetRightMd;
      classObj[`cdr-col--offsetRight${this.offsetRightLg}@lg`] = this.offsetRightLg;
      // align
      classObj[`cdr-col--${this.alignSelf}`] = this.alignSelf;
      classObj[`cdr-col--${this.alignSelfSm}@sm`] = this.alignSelfSm;
      classObj[`cdr-col--${this.alignSelfMd}@md`] = this.alignSelfMd;
      classObj[`cdr-col--${this.alignSelfLg}@lg`] = this.alignSelfLg;

      return classObj;
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrRow", [], factory);
	else if(typeof exports === 'object')
		exports["CdrRow"] = factory();
	else
		root["CdrRow"] = factory();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrRow_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrRow", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrRow_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-row', __WEBPACK_IMPORTED_MODULE_0__cdrRow_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrRow_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21084ecc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrRow_vue__ = __webpack_require__(4);
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrRow_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21084ecc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrRow_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'cdr-row',
  props: {
    /**
     * Number of columns in the row (1-12, auto).
     */
    cols: {
      type: [String, Number],
      validator: value => {
        const str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].indexOf(str) >= 0 || false;
      }
    },
    /** Sm breakpoint and above */
    colsSm: {
      type: [String, Number],
      validator: value => {
        const str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].indexOf(str) >= 0 || false;
      }
    },
    /** Md breakpoint and above */
    colsMd: {
      type: [String, Number],
      validator: value => {
        const str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].indexOf(str) >= 0 || false;
      }
    },
    /** Lg breakpoint and above */
    colsLg: {
      type: [String, Number],
      validator: value => {
        const str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].indexOf(str) >= 0 || false;
      }
    },
    /**
     * How columns should be justified within empty space of the row.
     * {left, center, right, around, between}.
     * See CSS flexbox justify-content.
     */
    justify: {
      type: String,
      validator: value => ['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0 || false
    },
    /** Sm breakpoint and above */
    justifySm: {
      type: String,
      validator: value => ['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0 || false
    },
    /** Md breakpoint and above */
    justifyMd: {
      type: String,
      validator: value => ['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0 || false
    },
    /** Lg breakpoint and above */
    justifyLg: {
      type: String,
      validator: value => ['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0 || false
    },
    /**
     * How columns of different heights should align.
     * {top, middle, bottom, stretch}.
     * See CSS flexbox align-items.
     */
    align: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false
    },
    /** Sm breakpoint and above */
    alignSm: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false
    },
    /** Md breakpoint and above */
    alignMd: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false
    },
    /** Lg breakpoint and above */
    alignLg: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false
    },
    /**
     * Overrides default gutter spacing.
     * {none}.
     */
    gutter: {
      type: String,
      validator: value => ['none', 'xxs'].indexOf(value) >= 0 || false
    },
    /** Sm breakpoint and above */
    gutterSm: {
      type: String,
      validator: value => ['none', 'xxs'].indexOf(value) >= 0 || false
    },
    /** Md breakpoint and above */
    gutterMd: {
      type: String,
      validator: value => ['none', 'xxs'].indexOf(value) >= 0 || false
    },
    /** Lg breakpoint and above */
    gutterLg: {
      type: String,
      validator: value => ['none', 'xxs'].indexOf(value) >= 0 || false
    },
    /**
     * Changes row to a column layout.
     * See CSS flexbox flex-direction.
     */
    vertical: {
      type: Boolean,
      default: false
    },
    /** Sm breakpoint and above */
    verticalSm: {
      type: Boolean,
      default: false
    },
    /** Md breakpoint and above */
    verticalMd: {
      type: Boolean,
      default: false
    },
    /** Lg breakpoint and above */
    verticalLg: {
      type: Boolean,
      default: false
    },
    /**
     * Enables row wrapping. Only needs to be changed if overriding `nowrap`
     * See CSS flexbox flex-wrap.
     */
    wrap: {
      type: Boolean,
      default: false
    },
    /** Sm breakpoint and above */
    wrapSm: {
      type: Boolean,
      default: false
    },
    /** Md breakpoint and above */
    wrapMd: {
      type: Boolean,
      default: false
    },
    /** Lg breakpoint and above */
    wrapLg: {
      type: Boolean,
      default: false
    },
    /**
     * Disables row wrapping and enables overflow scrolling.
     * See CSS flexbox flex-wrap.
     */
    nowrap: {
      type: Boolean,
      default: false
    },
    /** Sm breakpoint and above */
    nowrapSm: {
      type: Boolean,
      default: false
    },
    /** Md breakpoint and above */
    nowrapMd: {
      type: Boolean,
      default: false
    },
    /** Lg breakpoint and above */
    nowrapLg: {
      type: Boolean,
      default: false
    },
    /**
     * Changes grid to built with ul>li rather than divs.
     * {normal, list}
     */
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'list'].indexOf(value) >= 0 || false
    }
  },
  provide() {
    return {
      rowType: this.type
    };
  },
  computed: {
    rowClasses() {
      const classObj = {};
      classObj[`cdr-row_row${this.cols}`] = this.cols;
      classObj[`cdr-row_row${this.colsSm}@sm`] = this.colsSm;
      classObj[`cdr-row_row${this.colsMd}@md`] = this.colsMd;
      classObj[`cdr-row_row${this.colsLg}@lg`] = this.colsLg;
      // justify
      classObj[`cdr-row--${this.justify}`] = this.justify;
      classObj[`cdr-row--${this.justifySm}@sm`] = this.justifySm;
      classObj[`cdr-row--${this.justifyMd}@md`] = this.justifyMd;
      classObj[`cdr-row--${this.justifyLg}@lg`] = this.justifyLg;
      // align
      classObj[`cdr-row--${this.align}`] = this.align;
      classObj[`cdr-row--${this.alignSm}@sm`] = this.alignSm;
      classObj[`cdr-row--${this.alignMd}@md`] = this.alignMd;
      classObj[`cdr-row--${this.alignLg}@lg`] = this.alignLg;
      // column
      classObj['cdr-row--column'] = this.vertical;
      classObj['cdr-row--column@sm'] = this.verticalSm;
      classObj['cdr-row--column@md'] = this.verticalMd;
      classObj['cdr-row--column@lg'] = this.verticalLg;
      // gutter
      classObj[`cdr-row--gutter-${this.gutter}`] = this.gutter;
      classObj[`cdr-row--gutter-${this.gutterSm}@sm`] = this.gutterSm;
      classObj[`cdr-row--gutter-${this.gutterMd}@md`] = this.gutterMd;
      classObj[`cdr-row--gutter-${this.gutterLg}@lg`] = this.gutterLg;
      // wrap
      classObj['cdr-row--wrap@sm'] = this.wrapSm;
      classObj['cdr-row--wrap@md'] = this.wrapMd;
      classObj['cdr-row--wrap@lg'] = this.wrapLg;
      // noWrap
      classObj['cdr-row--noWrap'] = this.nowrap;
      classObj['cdr-row--noWrap@sm'] = this.nowrapSm;
      classObj['cdr-row--noWrap@md'] = this.nowrapMd;
      classObj['cdr-row--noWrap@lg'] = this.nowrapLg;

      return classObj;
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.type === 'normal')?_c('div',{staticClass:"cdr-row",class:_vm.rowClasses},[_vm._t("default")],2):(_vm.type === 'list')?_c('ul',{staticClass:"cdr-row",class:_vm.rowClasses},[_vm._t("default")],2):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.isRow && !_vm.isList)?_c('div',{staticClass:"cdr-col",class:_vm.columnClasses},[_c('div',{staticClass:"cdr-col__content"},[_vm._t("default")],2)]):(!_vm.isRow && _vm.isList)?_c('li',{staticClass:"cdr-col",class:_vm.columnClasses},[_c('div',{staticClass:"cdr-col__content"},[_vm._t("default")],2)]):(_vm.isRow && _vm.isList)?_c('li',{staticClass:"cdr-row cdr-col",class:_vm.columnClasses},[_c('row',_vm._b({staticClass:"cdr-col"},'row',_vm.$attrs,false),[_vm._t("default")],2)],1):_c('row',_vm._b({staticClass:"cdr-col",class:_vm.columnClasses},'row',_vm.$attrs,false),[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});