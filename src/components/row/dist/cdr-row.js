(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrRow__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrRow", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrRow__["a"]; });


function install(Vue) {
  Vue.component('cdr-row', __WEBPACK_IMPORTED_MODULE_0__cdrRow__["a" /* default */]);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-row',
  props: {
    cols: {
      type: [String, Number],
      validator: function validator(value) {
        var str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].indexOf(str) >= 0 || false;
      }
    },

    colsSm: {
      type: [String, Number],
      validator: function validator(value) {
        var str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].indexOf(str) >= 0 || false;
      }
    },

    colsMd: {
      type: [String, Number],
      validator: function validator(value) {
        var str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].indexOf(str) >= 0 || false;
      }
    },

    colsLg: {
      type: [String, Number],
      validator: function validator(value) {
        var str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].indexOf(str) >= 0 || false;
      }
    },

    justify: {
      type: String,
      validator: function validator(value) {
        return ['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0 || false;
      }
    },

    justifySm: {
      type: String,
      validator: function validator(value) {
        return ['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0 || false;
      }
    },

    justifyMd: {
      type: String,
      validator: function validator(value) {
        return ['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0 || false;
      }
    },

    justifyLg: {
      type: String,
      validator: function validator(value) {
        return ['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0 || false;
      }
    },

    align: {
      type: String,
      validator: function validator(value) {
        return ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false;
      }
    },

    alignSm: {
      type: String,
      validator: function validator(value) {
        return ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false;
      }
    },

    alignMd: {
      type: String,
      validator: function validator(value) {
        return ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false;
      }
    },

    alignLg: {
      type: String,
      validator: function validator(value) {
        return ['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0 || false;
      }
    },

    gutter: {
      type: String,
      validator: function validator(value) {
        return ['none', 'xxs'].indexOf(value) >= 0 || false;
      }
    },

    gutterSm: {
      type: String,
      validator: function validator(value) {
        return ['none', 'xxs'].indexOf(value) >= 0 || false;
      }
    },

    gutterMd: {
      type: String,
      validator: function validator(value) {
        return ['none', 'xxs'].indexOf(value) >= 0 || false;
      }
    },

    gutterLg: {
      type: String,
      validator: function validator(value) {
        return ['none', 'xxs'].indexOf(value) >= 0 || false;
      }
    },

    vertical: {
      type: Boolean,
      default: false
    },

    verticalSm: {
      type: Boolean,
      default: false
    },

    verticalMd: {
      type: Boolean,
      default: false
    },

    verticalLg: {
      type: Boolean,
      default: false
    },

    wrap: {
      type: Boolean,
      default: false
    },

    wrapSm: {
      type: Boolean,
      default: false
    },

    wrapMd: {
      type: Boolean,
      default: false
    },

    wrapLg: {
      type: Boolean,
      default: false
    },

    nowrap: {
      type: Boolean,
      default: false
    },

    nowrapSm: {
      type: Boolean,
      default: false
    },

    nowrapMd: {
      type: Boolean,
      default: false
    },

    nowrapLg: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'normal',
      validator: function validator(value) {
        return ['normal', 'list'].indexOf(value) >= 0 || false;
      }
    }
  },
  provide: function provide() {
    return {
      rowType: this.type
    };
  },

  computed: {
    rowClasses: function rowClasses() {
      var classObj = {};
      classObj['cdr-row_row' + this.cols] = this.cols;
      classObj['cdr-row_row' + this.colsSm + '@sm'] = this.colsSm;
      classObj['cdr-row_row' + this.colsMd + '@md'] = this.colsMd;
      classObj['cdr-row_row' + this.colsLg + '@lg'] = this.colsLg;

      classObj['cdr-row--' + this.justify] = this.justify;
      classObj['cdr-row--' + this.justifySm + '@sm'] = this.justifySm;
      classObj['cdr-row--' + this.justifyMd + '@md'] = this.justifyMd;
      classObj['cdr-row--' + this.justifyLg + '@lg'] = this.justifyLg;

      classObj['cdr-row--' + this.align] = this.align;
      classObj['cdr-row--' + this.alignSm + '@sm'] = this.alignSm;
      classObj['cdr-row--' + this.alignMd + '@md'] = this.alignMd;
      classObj['cdr-row--' + this.alignLg + '@lg'] = this.alignLg;

      classObj['cdr-row--column'] = this.vertical;
      classObj['cdr-row--column@sm'] = this.verticalSm;
      classObj['cdr-row--column@md'] = this.verticalMd;
      classObj['cdr-row--column@lg'] = this.verticalLg;

      classObj['cdr-row--gutter-' + this.gutter] = this.gutter;
      classObj['cdr-row--gutter-' + this.gutterSm + '@sm'] = this.gutterSm;
      classObj['cdr-row--gutter-' + this.gutterMd + '@md'] = this.gutterMd;
      classObj['cdr-row--gutter-' + this.gutterLg + '@lg'] = this.gutterLg;

      classObj['cdr-row--wrap@sm'] = this.wrapSm;
      classObj['cdr-row--wrap@md'] = this.wrapMd;
      classObj['cdr-row--wrap@lg'] = this.wrapLg;

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