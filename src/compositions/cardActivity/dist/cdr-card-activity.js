(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrCardActivity", [], factory);
	else if(typeof exports === 'object')
		exports["CdrCardActivity"] = factory();
	else
		root["CdrCardActivity"] = factory();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrCardActivity__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrCardActivity", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrCardActivity__["a"]; });


function install(Vue) {
  Vue.component('cdr-card-activity', __WEBPACK_IMPORTED_MODULE_0__cdrCardActivity__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCardActivity_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6118864_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCardActivity_vue__ = __webpack_require__(5);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCardActivity_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6118864_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrCardActivity_vue__["a" /* default */],
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

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
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
throw new Error("Cannot find module \"./node_modules/@rei-co-op/cedar-card\"");
throw new Error("Cannot find module \"@rei-co-op/cedar-heading\"");
throw new Error("Cannot find module \"@rei-co-op/cedar-image\"");
throw new Error("Cannot find module \"@rei-co-op/cedar-media-object\"");
throw new Error("Cannot find module \"@rei-co-op/cedar-rating\"");
throw new Error("Cannot find module \"@rei-co-op/cedar-list\"");
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
  name: 'cdr-card-activity',
  components: {
    cdrCard: __WEBPACK_IMPORTED_MODULE_0__node_modules_rei_co_op_cedar_card___default.a,
    cdrHeading: __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_heading___default.a,
    cdrImg: __WEBPACK_IMPORTED_MODULE_2__rei_co_op_cedar_image___default.a,
    cdrMediaObject: __WEBPACK_IMPORTED_MODULE_3__rei_co_op_cedar_media_object___default.a,
    cdrRating: __WEBPACK_IMPORTED_MODULE_4__rei_co_op_cedar_rating___default.a,
    cdrList: __WEBPACK_IMPORTED_MODULE_5__rei_co_op_cedar_list___default.a
  },
  extends: __WEBPACK_IMPORTED_MODULE_0__node_modules_rei_co_op_cedar_card___default.a,
  props: {
    /**
    * Path to primary image
    */
    media: String,
    /**
    * this is set to top when there is no attribution
    */
    mediaAlt: {
      type: String,
      default: ' '
    },
    /**
     * Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     * See cdr-img
    */
    mediaRatio: String,
    /**
     * Requires `mediaRatio`.
     * Scale the image to be as large as possible to fill the area (background-position: cover;)
     * See cdr-img
     */
    mediaCover: Boolean,
    /**
     * Requires `mediaRatio`.
     * Area to crop the image overflow to.
     * {top, y-center, bottom} {left, x-center, right}
     * See cdr-img
     */
    mediaCrop: String,
    /**
    * Title text
    */
    title: String,
    /**
    * href to turn card into a link
    */
    titleUrl: {
      type: String,
      required: true
    },
    /**
    * Heading level
    */
    titleLevel: {
      default: '2'
    },
    /**
    * Label text
    */
    label: String,
    /**
    * Location text
    */
    location: String,
    /**
    * Snapshot text
    */
    snapshot: {
      type: Array,
      required: false
    },
    /**
    * Rating value
    */
    rating: {
      type: [String, Number]
    },
    /**
    * Number of ratings
    */
    count: {
      type: [String, Number]
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cdr-card',{attrs:{"modifier":"activity"}},[_c('section',{staticClass:"cdr-inset cdr-inset--remove-top"},[_c('cdr-media-object',{attrs:{"img-src":_vm.media,"img-alt":_vm.mediaAlt,"img-crop":_vm.mediaCrop,"img-cover":_vm.mediaCover,"img-ratio":_vm.mediaRatio,"img-class":"cdr-card--activity__image","img-modifier":"responsive","modifier":"top stretch","img-radius":"top"}},[(this.label != null)?_c('div',{staticClass:"cdr-card--activity__label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),(this.title != null)?_c('cdr-heading',{attrs:{"level":_vm.titleLevel}},[_c('a',{staticClass:"cdr-card--activity__title cdr-card--activity__title--action",attrs:{"href":_vm.titleUrl}},[_vm._v(_vm._s(_vm.title))])]):_vm._e(),_vm._v(" "),(_vm.snapshot)?_c('cdr-list',{staticClass:"cdr-card--activity__snapshot",attrs:{"modifier":"inline bulleted"}},_vm._l((_vm.snapshot),function(item){return _c('li',[_vm._v("\n          "+_vm._s(item)+"\n        ")])})):_vm._e(),_vm._v(" "),(_vm.location)?_c('div',{staticClass:"cdr-card--activity__location"},[_vm._v("\n        "+_vm._s(_vm.location)+"\n      ")]):_vm._e(),_vm._v(" "),(this.rating != null)?_c('cdr-rating',{staticClass:"cdr-card--activity__rating",attrs:{"rating":_vm.rating,"count":_vm.count,"modifier":"medium"}}):_vm._e()],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});