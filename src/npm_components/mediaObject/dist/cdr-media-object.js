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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrMediaObject", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-media-object', __WEBPACK_IMPORTED_MODULE_0__cdrMediaObject_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34a060a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__ = __webpack_require__(5);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34a060a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrMediaObject_vue__["a" /* default */],
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
throw new Error("Cannot find module \"@/components/anchor/cdrA\"");
throw new Error("Cannot find module \"@/components/image/cdrImg\"");
throw new Error("Cannot find module \"@/components/icon/cdrIcon\"");
throw new Error("Cannot find module \"@/mixins/modifier\"");
throw new Error("Cannot find module \"@/mixins/lazyImage\"");
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
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_modifier___default.a, __WEBPACK_IMPORTED_MODULE_4__mixins_lazyImage___default.a],
  components: {
    cdrA: __WEBPACK_IMPORTED_MODULE_0__components_anchor_cdrA___default.a,
    cdrImg: __WEBPACK_IMPORTED_MODULE_1__components_image_cdrImg___default.a,
    cdrIcon: __WEBPACK_IMPORTED_MODULE_2__components_icon_cdrIcon___default.a
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
    imgModifier: String,
    /**
     * Link the image
    */
    imgHref: String,
    /**
     * Screen reader text for the linked image
    */
    imgHrefText: String,
    /**
     * Target for the image link
    */
    imgTarget: String
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.modifierClass]},[(_vm.imgHref)?[_c('cdr-a',{attrs:{"href":_vm.imgHref,"target":"imgTarget"}},[_c('span',{staticClass:"u-sr-only"},[_vm._v(_vm._s(_vm.imgHrefText))]),_vm._v(" "),(_vm.iconUrl)?_c('cdr-icon',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,attrs:{"url":_vm.iconUrl}}):_c('cdr-img',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,style:(_vm.mediaWidth),attrs:{"lazy":_vm.lazy,"lazyOpts":_vm.lazyOpts,"alt":_vm.imgAlt,"src":_vm.imgSrc,"ratio":_vm.imgRatio,"crop":_vm.imgCrop,"cover":_vm.imgCover,"radius":_vm.imgRadius,"modifier":_vm.imgModifier}})],1)]:[(_vm.iconUrl)?_c('cdr-icon',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,attrs:{"url":_vm.iconUrl}}):_c('cdr-img',{staticClass:"cdr-media-object__figure",class:_vm.imgClass,style:(_vm.mediaWidth),attrs:{"lazy":_vm.lazy,"lazyOpts":_vm.lazyOpts,"alt":_vm.imgAlt,"src":_vm.imgSrc,"ratio":_vm.imgRatio,"crop":_vm.imgCrop,"cover":_vm.imgCover,"radius":_vm.imgRadius,"modifier":_vm.imgModifier}})],_vm._v(" "),_c('div',{staticClass:"cdr-media-object__body",class:_vm.alignClass},[_vm._t("default")],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});