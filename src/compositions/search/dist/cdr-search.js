(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrSearch", [], factory);
	else if(typeof exports === 'object')
		exports["CdrSearch"] = factory();
	else
		root["CdrSearch"] = factory();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrSearch__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cdrSearch", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrSearch__["a"]; });


function install(Vue) {
  Vue.component('cdr-search', __WEBPACK_IMPORTED_MODULE_0__cdrSearch__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrSearch_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a59f020_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrSearch_vue__ = __webpack_require__(7);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrSearch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a59f020_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrSearch_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_input__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_input__);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-search',
  inheritAttrs: false,
  components: {
    CdrButton: __WEBPACK_IMPORTED_MODULE_0__rei_co_op_cedar_button__["CdrButton"],
    CdrInput: __WEBPACK_IMPORTED_MODULE_1__rei_co_op_cedar_input__["CdrInput"]
  },
  data: function data() {
    return {
      searchValue: this.value
    };
  },

  props: {
    value: String,

    click: Function,

    bare: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonModifier: function buttonModifier() {
      return this.large ? '' : 'sm';
    },
    inputModifier: function inputModifier() {
      return this.large ? 'large' : '';
    }
  },
  watch: {
    value: function value() {
      this.searchValue = this.value;
    }
  },
  methods: {
    updateSearch: function updateSearch() {
      this.$emit('input', this.searchValue);
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
		define("CdrButton", [], factory);
	else if(typeof exports === 'object')
		exports["CdrButton"] = factory();
	else
		root["CdrButton"] = factory();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CdrButton__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrButton", function() { return __WEBPACK_IMPORTED_MODULE_0__CdrButton__["a"]; });


function install(Vue) {
  Vue.component('cdr-button', __WEBPACK_IMPORTED_MODULE_0__CdrButton__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_CdrButton_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08ba5494_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_CdrButton_vue__ = __webpack_require__(7);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_CdrButton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08ba5494_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_CdrButton_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_theme__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_modifier__ = __webpack_require__(6);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-button',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_theme__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_modifier__["a" /* default */]],
  props: {
    /**
     * {button, submit, reset}. Defines the button type.
     */
    type: {
      type: String,
      default: 'button',
      validator: value => ['button', 'submit', 'reset'].indexOf(value) >= 0 || false
    },
    /**
     * Add custom click actions.
     */
    onClick: {
      type: Function,
      default: () => () => null
    }
  },
  computed: {
    baseClass() {
      const modifiers = this.modifier ? this.modifier.split(' ') : [];
      return modifiers.indexOf('link') >= 0 ? 'cdr-link' : 'cdr-button';
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Use of this mixin requires adding either a data value or computed property
 * of 'baseClass' that is a string of the base class value
 */
/**
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    /**
     * Name of the css module theme
     */
    theme: String,
  },
  computed: {
    themeClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = '';

      if (this.theme) {
        final += `${this[this.theme][base]} `;

        modifierArr.forEach((mod) => {
          final += `${this[this.theme][`${base}--${mod}`]} `;
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:[_vm.modifierClass, _vm.themeClass],attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[_vm._t("default")],2)}
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrInput_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrInput", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrInput_vue__["a"]; });


function install(Vue) {
  Vue.component('cdr-input', __WEBPACK_IMPORTED_MODULE_0__cdrInput_vue__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrInput_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784968cc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrInput_vue__ = __webpack_require__(10);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784968cc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_theme_loader_index_js_ref_1_1_cdrInput_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_debounce__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_modifier__ = __webpack_require__(6);
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
//
//
//
//
//




/* eslint-disable */
const checkIcon = __webpack_require__(7);
const errorIcon = __webpack_require__(8);
const warningIcon = __webpack_require__(9);
/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-input',
  inheritAttrs: false,
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_modifier__["a" /* default */]],
  data() {
    return {
      errors: [],
      lazyValue: this.value,
      pristine: true,
      touched: false,
      valid: false,
      focused: false,
      state: ''
    };
  },
  props: {
    /**
     * id for the input that is mapped to the label 'for' attribute.
     * If one is not provided, it will be auto generated.
    */
    id: String,
    /**
     * Label text. This is required for a11y even if hiding the label with `hideLabel`.
    */
    label: {
      type: String,
      required: true
    },
    /**
     * Removes the label element but sets the input 'aria-label' to `label` text for a11y.
    */
    hideLabel: Boolean,
    /**
     * Changes the input to a textarea.
    */
    multiLine: Boolean,
    /**
     * Regex validation pattern. Useful for simple validation.
    */
    pattern: String,
    /**
     * Error message to be displayed when `pattern` validation fails.
    */
    patternError: String,
    /**
     * Enables icon feedback as part of validation
     * for valid, warn, and error states.
    */
    feedback: Boolean,
    /**
     * Input type. NOTE: This component is meant for text style inputs.
     * Other input types (checkbox, radio) have their own components.
    */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * Array of functions. Provide your own validation function(s).
     * Takes the input string and outputs an object with a state and message.
     * State is a String with value `valid`, `warning`, or `error`.
     * Message is any String.
    */
    rules: {
      type: Array,
      default: () => []
    },
    /**
     * Boolean or Number.
     * true has a default of 500ms.
     * Providing a number will set debounce to that (in ms).
     * false is no debounce.
    */
    debounce: {
      required: false,
      default: false
    },
    /** @ignore */
    disabled: Boolean,
    /** @ignore */
    required: Boolean,
    /** @ignore */
    immediateValidate: Boolean,
    /** @ignore */
    value: {
      required: false
    }
  },
  computed: {
    // Use given id or generate one
    inputId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    messagesId() {
      return `err${this._uid}`; // eslint-disable-line no-underscore-dangle
    },
    baseClass() {
      return 'cdr-input';
    },
    labelClass() {
      return {
        'cdr-label': true,
        'cdr-label--error': this.isErr,
        'cdr-label--disabled': this.disabled
      };
    },
    inputClass() {
      return {
        'cdr-input': true,
        'cdr-input--multiline': this.multiLine,
        'cdr-input--error': this.isErr,
        'cdr-input--warn': this.isWarn,
        'cdr-input--preicon': this.$slots.preicon
      };
    },
    inputWrapClass() {
      return {
        'cdr-input-wrap': true,
        'cdr-input-wrap--actions': this.$slots.pre || this.$slots.post
      };
    },
    validationIconClass() {
      return {
        'cdr-input-wrap__icon': true,
        'cdr-input-wrap__icon--error': this.isErr,
        'cdr-input-wrap__icon--warn': this.isWarn,
        'cdr-input-wrap__icon--valid': this.isValid
      };
    },
    messageClass() {
      return {
        'cdr-input-messages__notification': true,
        'cdr-input-messages__notification--error': this.isErr,
        'cdr-input-messages__notification--warn': this.isWarn
      };
    },
    getIcon() {
      let icon = '';

      if (this.isErr) {
        icon = errorIcon;
      } else if (this.isValid) {
        icon = checkIcon;
      } else if (this.isWarn) {
        icon = warningIcon;
      }

      return icon;
    },
    // Check if debounce is enabled, defined, or default
    debounceVal() {
      if (this.debounce === false) {
        return 0;
      } else if (!Number.isNaN(this.debounce) && this.debounce !== '' && this.debounce !== true) {
        return this.debounce;
      }
      return 500;
    },
    isErr() {
      return this.state === 'error';
    },
    isWarn() {
      return this.state === 'warn';
    },
    isValid() {
      return this.state === 'valid';
    },
    modifiers() {
      const modifiers = {
        lazy: false,
        number: false,
        trim: false
      };

      if (!this._vnode.data.directives) {
        //eslint-disable-line
        return modifiers;
      }

      const model = this._vnode.data.directives.find(i => i.name === 'model'); //eslint-disable-line

      if (!model) {
        return modifiers;
      }

      return Object.assign(modifiers, model.modifiers);
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(valArg) {
        let val = valArg;
        if (this.modifiers.trim) {
          val = val.trim();
        }

        if (this.modifiers.number) {
          val = Number(val);
        }

        if (!this.modifiers.lazy) {
          this.$emit('input', val);
        }

        this.lazyValue = val;
      }
    }
  },
  mounted() {
    // Convert pattern to a rule for testing
    if (this.pattern) {
      const regPattern = new RegExp(this.pattern);
      this.rules.push(text => {
        const obj = {};
        if (regPattern.test(text)) {
          obj.state = 'valid';
        } else {
          obj.state = 'error';
          obj.message = this.patternError || '';
        }
        return obj;
      });
    }
    // Provide some default validation for required
    if (this.required) {
      this.rules.push(text => {
        const obj = {};
        // interacted with, not currently focsed, and empty
        if (this.touched && !this.focused && text === '') {
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
    focused(val) {
      this.touched = true;

      if (val) {
        this.$emit('change', this.lazyValue);
      }
    },
    value() {
      this.lazyValue = this.value;
      this.validate();
    }
  },
  methods: {
    onInput(e) {
      this.pristine = false;
      this.inputValue = e.target.value;
    },
    onBlur(e) {
      this.validate(true);
      this.$nextTick(() => {
        this.focused = false;
      });
      this.$emit('blur', e);
    },
    onFocus(e) {
      this.focused = true;
      this.$refs.input.focus();
      this.$emit('focus', e);
    },
    onPaste(e) {
      this.validate(true);
      this.$emit('paste', e);
    },
    validate(immediate = false) {
      // only validate rules if there are any
      if (this.rules.length > 0) {
        const delay = immediate ? 0 : this.debounceVal;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_debounce__["a" /* default */])(() => {
          this.errors = [];
          this.valid = false;

          this.rules.forEach(rule => {
            const validObj = rule(this.value);
            validObj.state = validObj.state ? validObj.state : this.state;

            if (validObj.state === 'valid') {
              this.state = validObj.state;
            } else if (validObj.state === 'warn') {
              this.state = validObj.state;
              this.errors.push(validObj.message);
            } else {
              this.state = validObj.state;
              if (validObj.message) {
                this.errors.push(validObj.message);
              }
            }
          });
        }, delay)();
      }
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(func, wait) {
  let timeout;
  return function (...args) { // eslint-disable-line func-names
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><path  d=\"m31.19 8.597l-19.19 18.609c-.498.484-1.157.753-1.857.753-.711 0-1.38-.279-1.885-.782l-7.477-7.477c-.503-.503-.781-1.172-.781-1.885 0-.713.278-1.381.781-1.885 1.01-1.01 2.762-1.01 3.77.0001l5.622 5.62 17.305-16.784c1.022-.993 2.78-.963 3.769.059.496.511.763 1.184.751 1.897-.001.712-.298 1.377-.811 1.873\"/></svg>"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><path  d=\"m16 .0001c-8.836 0-16 7.163-16 15.999s7.164 15.999 16 15.999c8.836 0 16-7.163 16-15.999s-7.164-15.999-16-15.999m7.955 23.946c-.309.309-.721.48-1.158.48-.438 0-.849-.17-1.158-.48l-5.639-5.638-5.606 5.606c-.244.339-.613.518-1.068.518-.056 0-.114-.003-.172-.009-.471-.046-.834-.203-1.109-.477-.309-.309-.48-.721-.48-1.158s.17-.849.48-1.158l5.639-5.638-5.639-5.638c-.309-.309-.479-.72-.479-1.158 0-.438.17-.849.479-1.158.309-.309.721-.48 1.158-.48.437 0 .849.17 1.158.48l5.639 5.638 5.639-5.638c.309-.309.721-.48 1.158-.48.437 0 .849.17 1.158.48.639.639.639 1.678 0 2.316l-5.639 5.638 5.639 5.638c.309.309.479.72.479 1.158 0 .438-.17.849-.479 1.158\"/></svg>"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><path  d=\"m31.852 29.3l-14.846-27.722c-.207-.358-.59-.58-1.01-.58-.418 0-.802.222-1.01.58l-14.844 27.722c-.202.352-.198.785.008 1.133.208.352.587.567.997.567h29.692c.408 0 .79-.215.997-.567.207-.348.21-.782.001-1.133m-14.186-1.633h-3.333v-3.334h3.333v3.334m0-5.834h-3.333v-10.834h3.333v10.834\"/></svg>"

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cdr-input-container"},[(!_vm.hideLabel)?_c('label',{ref:"label",class:_vm.labelClass,attrs:{"for":_vm.inputId}},[_vm._v(_vm._s(_vm.label)),(_vm.required)?_c('span',[_vm._v("*")]):_vm._e()]):_vm._e(),_vm._v(" "),_c('div',{class:[_vm.inputWrapClass]},[(_vm.multiLine)?_c('textarea',_vm._g(_vm._b({ref:"input",class:[_vm.inputClass, _vm.modifierClass],attrs:{"id":_vm.inputId,"required":_vm.required,"disabled":_vm.disabled,"aria-label":_vm.hideLabel ? _vm.label : null,"aria-describedby":_vm.errors.length ? _vm.messagesId : null},domProps:{"value":_vm.lazyValue},on:{"blur":_vm.onBlur,"input":_vm.onInput,"focus":_vm.onFocus,"paste":_vm.onPaste}},'textarea',_vm.$attrs,false),_vm.$listeners)):_c('input',_vm._g(_vm._b({ref:"input",class:[_vm.inputClass, _vm.modifierClass],attrs:{"type":_vm.type,"id":_vm.inputId,"required":_vm.required,"disabled":_vm.disabled,"aria-label":_vm.hideLabel ? _vm.label : null,"aria-describedby":_vm.errors.length ? _vm.messagesId : null},domProps:{"value":_vm.lazyValue},on:{"blur":_vm.onBlur,"input":_vm.onInput,"focus":_vm.onFocus,"paste":_vm.onPaste}},'input',_vm.$attrs,false),_vm.$listeners)),_vm._v(" "),(_vm.$slots.preicon)?_c('span',{staticClass:"cdr-input__pre-icon",attrs:{"aria-hidden":"true"}},[_vm._t("preicon")],2):_vm._e(),_vm._v(" "),(_vm.feedback)?_c('span',{ref:"icon",class:_vm.validationIconClass,domProps:{"innerHTML":_vm._s(_vm.getIcon)}}):_vm._e()]),_vm._v(" "),_c('transition-group',{ref:"messages",staticClass:"cdr-input-messages",attrs:{"id":_vm.messagesId,"name":"cdr-animated-errors","tag":"div"}},_vm._l((_vm.errors),function(error){return _c('div',{key:error,ref:"error",refInFor:true,class:_vm.messageClass,attrs:{"error":error}},[_vm._v(_vm._s(error))])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cdr-search"},[_c('cdr-input',_vm._g(_vm._b({staticClass:"cdr-search__input",attrs:{"label":"Search","hide-label":"","placeholder":"Search","modifier":_vm.inputModifier},on:{"input":_vm.updateSearch},model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}},'cdr-input',_vm.$attrs,false),_vm.$listeners),[_c('span',{staticClass:"cdr-search__icon",attrs:{"slot":"preicon"},slot:"preicon"})]),_vm._v(" "),(!_vm.bare)?_c('cdr-button',{attrs:{"modifier":_vm.buttonModifier,"on-click":_vm.click}},[_vm._v("Search")]):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});