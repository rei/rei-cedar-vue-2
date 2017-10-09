(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CdrAnchor", [], factory);
	else if(typeof exports === 'object')
		exports["CdrAnchor"] = factory();
	else
		root["CdrAnchor"] = factory();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cdrA__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CdrAnchor", function() { return __WEBPACK_IMPORTED_MODULE_0__cdrA__["a"]; });


function install(Vue) {
  Vue.component('cdr-a', __WEBPACK_IMPORTED_MODULE_0__cdrA__["a" /* default */]);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cdrA_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c28c42c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_cdrA_vue__ = __webpack_require__(10);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cdrA_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c28c42c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_cdrA_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "cdrA.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cdrA.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c28c42c", Component.options)
  } else {
    hotAPI.reload("data-v-5c28c42c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7f3f9d60", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c28c42c\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cdrA.vue", function() {
     var newContent = require("!!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c28c42c\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cdrA.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "/*\n    This file was auto-generated by Brand.ai from the Digital REI Brand design library. \n    To keep style values in sync across teams, changes to this file should be made directly from Brand.ai:\n    https://brand.ai/styleguide/digital-rei-brand\n    Most recent file URL: https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/_style-params.scss?key=rJf4Z1nS7Z\n    Log-in via https://brand.ai to update the style values corresponding to this file. \n\n*/\n/*\n    Colors:\n*/\n/*\n    Font Styles:\n*/\n/*\n    Measurements:\n*/\n/*\n    Shadows:\n*/\n/*\n* Global generics\n*\n* TOC:\n* Outline\n*/\n/* Outline */\n/* spacing modifiers */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  line-height: 1;\n  font-size: inherit;\n}\nol,\nul,\ndl {\n  margin: 0;\n}\n/*\nNOTE: Custom properties can't be used in the custom media query definition since they rely on the DOM\nThese currently are only for reference/possible future use elsewhere\n*/\n/* Media Queries */\n/**\n  * REI Cedar inset variables:\n  * This file provides a contract between\n  * design tokens and cedar non-changing variables.\n  *\n  * Insets are used to add spacing to all of our elements,\n  * it is critical that all elements use these variables for\n  * their internal spacing values.\n  *\n  * TOC:\n  * Inset options\n  ** extra extra small\n  ** extra small\n  ** small\n  ** medium\n  ** large\n  ** extra large\n*/\n/**\n  * inset options\n*/\n/* extra extra small */\n/* extra small */\n/* small */\n/* medium */\n/* large */\n/* extra large */\n/*\n*\n* REI Cedar Color\n* Base values inherited from brandai.pcss\n*\n* TOC:\n*  Global generics\n** Outline\n** Transparent\n*/\n/*\n* Global generics\n*/\n/* Outline */\n/* Transparent  */\n/* shared */\n/* Fonts */\n/* Size */\n/* Line Height */\n/**\n  * REI Cedar Button variables:\n  * This file provides a contract between\n  * design tokens and cedar non-changing variables.\n  *\n  * TOC:\n  * Button Themes\n  ** Settings\n  ** Active\n  ** Focus\n  ** Disabled\n  * Button Sizes\n*/\n/**\n  * button themes\n*/\n/* default */\n/* Secondary */\n/**\n  * active\n*/\n/* default */\n/* secondary active */\n/**\n  * focus\n*/\n/* default */\n/* secondary */\n/**\n  * disabled\n*/\n/* default */\n/* secondary */\n/**\n  * button sizes\n*/\n/* small */\n/* extra small */\n/* ==========================================================================\n   # LINK\n   ========================================================================== */\n/*\n* TOC:\n*\n* Base class\n* Style variants\n*/\n.cdr-link {\n  cursor: pointer;\n  display: inline;\n  border: none;\n  text-decoration: underline;\n  outline: none;\n  background-color: transparent;\n  border-color: inherit;\n  color: #426c90;\n}\n.cdr-link:hover,\n  .cdr-link:active,\n  .cdr-link:focus {\n    outline: none;\n    text-decoration: underline;\n    background-color: transparent;\n    color: #426c90;\n  }\n.cdr-link:focus {\n    outline: thin dotted #8dd1ed;\n  }\n/* Style variants\n    ========================================================================== */\n.cdr-link--contrast,\n  .cdr-link--contrast:hover,\n  .cdr-link--contrast:active,\n  .cdr-link--contrast:focus,\n  .cdr-link--contrast:visited {\n    color: #4eaaff;\n  }\n.cdr-link--overlay,\n  .cdr-link--overlay:hover,\n  .cdr-link--overlay:active,\n  .cdr-link--overlay:focus,\n  .cdr-link--overlay:visited {\n    color: #ffffff;\n  }\n.cdr-link--standalone {\n    text-decoration: none;\n  }\n.cdr-link--standalone:hover,\n    .cdr-link--standalone:active,\n    .cdr-link--standalone:focus,\n    .cdr-link--standalone:visited {\n      text-decoration: underline;\n    }\n", "", {"version":3,"sources":["/Users/alltayl/Repos/rei-cedar/src/css/settings/brandai.pcss","/Users/alltayl/Repos/rei-cedar/src/css/settings/global.pcss","/Users/alltayl/Repos/rei-cedar/src/css/settings/responsive.pcss","/Users/alltayl/Repos/rei-cedar/src/css/settings/inset.pcss","/Users/alltayl/Repos/rei-cedar/src/css/settings/color.pcss","/Users/alltayl/Repos/rei-cedar/src/css/settings/font.pcss","/Users/alltayl/Repos/rei-cedar/src/css/settings/buttons.pcss","/Users/alltayl/Repos/rei-cedar/src/npm_components/anchor/cdrA.pcss"],"names":[],"mappings":"AAAA;;;;;;;EAOE;AACF;;EAEE;AA6KF;;EAEE;AA6qBF;;EAEE;AA8BF;;EAEE;ACx4BF;;;;;EAKE;AAEF,aAAa;AAIb,uBAAuB;AAIvB;;;;;;EAME,UAAU;EACV,eAAe;EACf,mBAAmB;CACpB;AAED;;;EAGE,UAAU;CACX;AC9BD;;;EAGE;AAMF,mBAAmB;ACTnB;;;;;;;;;;;;;;;;;EAiBE;AAEF;;EAEE;AAEF,uBAAuB;AAQvB,iBAAiB;AAQjB,WAAW;AAQX,YAAY;AAQZ,WAAW;AAQX,iBAAiB;AC/DjB;;;;;;;;;EASE;AAEF;;EAEE;AAEF,aAAa;AAIb,kBAAkB;ACnBlB,YAAY;AAEZ,WAAW;AAeX,UAAU;AAIV,iBAAiB;ACrBjB;;;;;;;;;;;;EAYE;AAEF;;EAEE;AAEF,aAAa;AAWb,eAAe;AAKf;;EAEE;AAEF,aAAa;AAKb,sBAAsB;AAKtB;;EAEE;AAEF,aAAa;AAIb,eAAe;AAIf;;EAEE;AAEF,aAAa;AAKb,eAAe;AAKf;;EAEE;AAEF,WAAW;AAOX,iBAAiB;ACrFjB;;gFAEgF;AAEhF;;;;;EAKE;AAEF;EACE,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,2BAA2B;EAC3B,cAAc;EACd,8BAAgD;EAChD,sBAAwC;EACxC,eAAuB;CA4CxB;AA1CC;;;IAGE,cAAc;IACd,2BAA2B;IAC3B,8BAAgD;IAChD,eAA8B;GAC/B;AAED;IACE,6BAA4E;GAC7E;AAED;iFAC+E;AAE/E;;;;;IAKE,eAA+B;GAChC;AAED;;;;;IAKE,eAAwC;GACzC;AAED;IACE,sBAAsB;GAQvB;AANC;;;;MAIE,2BAA2B;KAC5B","file":"cdrA.vue","sourcesContent":["/*\n    This file was auto-generated by Brand.ai from the Digital REI Brand design library. \n    To keep style values in sync across teams, changes to this file should be made directly from Brand.ai:\n    https://brand.ai/styleguide/digital-rei-brand\n    Most recent file URL: https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/_style-params.scss?key=rJf4Z1nS7Z\n    Log-in via https://brand.ai to update the style values corresponding to this file. \n\n*/\n/*\n    Colors:\n*/\n\n// Lowe\n$sys-color-lowe-lighten-40: #f7e8db;\n$sys-color-lowe-lighten-30: #edc9a9;\n$sys-color-lowe-lighten-20: #e2a875;\n$sys-color-lowe-lighten-10: #d68441;\n$sys-color-lowe-base: #bd5b0d;\n$sys-color-lowe-darken-10: #a14e0b;\n$sys-color-lowe-darken-20: #783b09;\n$sys-color-lowe-darken-30: #512605;\n$sys-color-lowe-darken-40: #281303;\n\n// Messner\n$sys-color-messner-lighten-40: #e6ece4;\n$sys-color-messner-lighten-30: #c5d2bf;\n$sys-color-messner-lighten-20: #a0b696;\n$sys-color-messner-lighten-10: #7a966e;\n$sys-color-messner-base: #507141;\n$sys-color-messner-darken-10: #446037;\n$sys-color-messner-darken-20: #33482a;\n$sys-color-messner-darken-30: #22301c;\n$sys-color-messner-darken-40: #11180e;\n\n// Loretan\n$sys-color-loretan-lighten-40: #e4ebf1;\n$sys-color-loretan-lighten-30: #bfd0de;\n$sys-color-loretan-lighten-20: #98b3c8;\n$sys-color-loretan-lighten-10: #6f92b2;\n$sys-color-loretan-base: #426c90;\n$sys-color-loretan-darken-10: #385c7a;\n$sys-color-loretan-darken-20: #2b455c;\n$sys-color-loretan-darken-30: #1c2e3e;\n$sys-color-loretan-darken-40: #0e171f;\n\n// Pasaban\n$sys-color-pasaban-lighten-40: #f5e4df;\n$sys-color-pasaban-lighten-30: #e9c2b5;\n$sys-color-pasaban-lighten-20: #db9b85;\n$sys-color-pasaban-lighten-10: #cb7457;\n$sys-color-pasaban-base: #af4827;\n$sys-color-pasaban-darken-10: #953e21;\n$sys-color-pasaban-darken-20: #702e18;\n$sys-color-pasaban-darken-30: #42170f;\n$sys-color-pasaban-darken-40: #250f09;\n\n// Hillary\n$sys-color-hillary-lighten-40: #f0f0f0;\n$sys-color-hillary-lighten-30: #e9e9e9;\n$sys-color-hillary-lighten-20: #c5c5c5;\n$sys-color-hillary-lighten-10: #b8b8b8;\n$sys-color-hillary-base: #8b8b8b;\n$sys-color-hillary-darken-10: #767676;\n$sys-color-hillary-darken-20: #585858;\n$sys-color-hillary-darken-30: #2e2e2e;\n$sys-color-hillary-darken-40: #1b1c1c;\n\n// Steck\n$sys-color-steck-lighten-40: #f7f6f3;\n$sys-color-steck-lighten-30: #edece4;\n$sys-color-steck-lighten-20: #e3e0d2;\n$sys-color-steck-lighten-10: #d7d3bf;\n$sys-color-steck-base: #beb9a0;\n$sys-color-steck-darken-10: #a29e88;\n$sys-color-steck-darken-20: #797666;\n$sys-color-steck-darken-30: #514f44;\n$sys-color-steck-darken-40: #282722;\n\n// Shade\n$sys-color-shade-lighter-40: rgba(27, 28, 28, 0.1);\n$sys-color-shade-lighter-30: rgba(27, 28, 28, 0.2);\n$sys-color-shade-lighter-20: rgba(27, 28, 28, 0.3);\n$sys-color-shade-lighter-10: rgba(27, 28, 28, 0.4);\n$sys-color-shade-base: rgba(27, 28, 28, 0.5);\n$sys-color-shade-darker-10: rgba(27, 28, 28, 0.6);\n$sys-color-shade-darker-20: rgba(27, 28, 28, 0.7);\n$sys-color-shade-darker-30: rgba(27, 28, 28, 0.8);\n$sys-color-shade-darker-40: rgba(27, 28, 28, 0.9);\n\n// system\n$sys-color-system-10: #222222;\n$sys-color-system-20: #000000;\n$sys-color-error: #cc0000;\n$sys-color-warning: #e4ac00;\n$sys-color-success: #a1c900;\n\n// Buttons\n$sys-color-btn-primary: #426c90;\n$sys-color-btn-primary-stroke: #426c90;\n$sys-color-btn-primary-active: #2b455c;\n$sys-color-btn-primary-active-stroke: #2b455c;\n$sys-color-btn-secondary: #ffffff;\n$sys-color-btn-secondary-stroke: #808083;\n$sys-color-btn-secondary-active-stroke: #808083;\n$sys-color-btn-secondary-active: #ffffff;\n$sys-color-btn-text: #ffffff;\n$sys-color-btn-text-active: #ffffff;\n$sys-color-btn-primary-disabled: #c5c5c5;\n$sys-color-btn-primary-disabled-stroke: #c5c5c5;\n$sys-color-btn-primary-disabled-text: #ffffff;\n$sys-color-btn-secondary-disabled: #ffffff;\n$sys-color-btn-secondary-disabled-text: #c5c5c5;\n$sys-color-btn-secondary-disabled-stroke: #c5c5c5;\n$sys-color-btn-secondary-focus-text: #000000;\n$sys-color-btn-secondary-text: #000000;\n$sys-color-btn-secondary-text-active: #000000;\n$sys-color-btn-stroke-focus: #8dd1ed;\n$sys-color-btn-primary-focus-text: #ffffff;\n\n// Card\n$sys-color-activity-card: #ffffff;\n$sys-color-activity-card-stroke: #d7d8d8;\n$sys-color-activity-card-text: #2e2e2e;\n$sys-color-activity-card-subtext: #6a6a6a;\n\n// Form Controls\n$sys-color-control-text: #2e2e2e;\n$sys-color-control-text-disabled: #c5c5c5;\n$sys-color-control-stroke: #767676;\n$sys-color-control-stroke-disabled: #c5c5c5;\n$sys-color-control-selected: #426c90;\n$sys-color-control-selected-stroke: #426c90;\n$sys-color-control-selected-hover: #2b455c;\n$sys-color-control-selected-hover-stroke: #2b455c;\n$sys-color-control-selected-disabled: #c5c5c5;\n$sys-color-control-selected-disabled-stroke: #c5c5c5;\n$sys-color-control-icon: #ffffff;\n$sys-color-switch-handle: #767676;\n$sys-color-switch-handle-disabled: #c5c5c5;\n$sys-color-radio-selected: #426c90;\n$sys-color-radio-selected-hover: #2b455c;\n$sys-color-radio-disabled: #c5c5c5;\n\n// Form Inputs\n$sys-color-input: #ffffff;\n$sys-color-input-disabled: #e9e9e9;\n$sys-color-input-warning: #fcf6e5;\n$sys-color-input-error: #f9e5e5;\n$sys-color-input-stroke: #c5c5c5;\n$sys-color-input-warning-stroke: #e4ac00;\n$sys-color-input-error-stroke: #cc0000;\n$sys-color-input-placeholder-text: #767676;\n$sys-color-input-text: #2e2e2e;\n$sys-color-input-disabled-text: #c5c5c5;\n$sys-color-input-label: #2e2e2e;\n$sys-color-input-disabled-label: #c5c5c5;\n$sys-color-input-error-label: #cc0000;\n\n// links\n$sys-color-link: #426c90;\n$sys-color-link-active: #426c90;\n$sys-color-link-overlay: #4eaaff;\n$sys-color-link-contrast-overlay: #ffffff;\n\n// Ratings\n$sys-color-rating: #2e2e2e;\n$sys-color-rating-bg: #c5c5c5;\n$sys-color-rating-text: #2e2e2e;\n$sys-color-rating-text-sm: #767676;\n\n// Search\n$sys-color-search-icon: #767676;\n$sys-color-search-secondary-icon: #c5c5c5;\n$sys-color-search-standalone-icon: #2e2e2e;\n\n// Tab Navigation\n$sys-color-tab-text: #2e2e2e;\n$sys-color-tab-active-text: #426c90;\n$sys-color-tab-hover-text: #426c90;\n$sys-color-tab-disabled-text: #c5c5c5;\n$sys-color-tab-active-stroke: #426c90;\n$sys-color-tab-stroke: #c5c5c5;\n\n/*\n    Font Styles:\n*/\n\n// spruce-dsp-90 font style\n$sys-font-spruce-dsp-90-font-size: 96px;\n$sys-font-spruce-dsp-90-line-height: 104px;\n$sys-font-spruce-dsp-90-text-align: start;\n$sys-font-spruce-dsp-90-color: #2e2e2e;\n$sys-font-spruce-dsp-90-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-90-font-style: normal;\n$sys-font-spruce-dsp-90-font-weight: bold;\n$sys-font-spruce-dsp-90-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-90 () {\n  font-size: $sys-font-spruce-dsp-90-font-size;\n  line-height: $sys-font-spruce-dsp-90-line-height;\n  text-align: $sys-font-spruce-dsp-90-text-align;\n  color: $sys-font-spruce-dsp-90-color;\n  letter-spacing: $sys-font-spruce-dsp-90-letter-spacing;\n  font-style: $sys-font-spruce-dsp-90-font-style;\n  font-weight: $sys-font-spruce-dsp-90-font-weight;\n  font-family: $sys-font-spruce-dsp-90-font-family;\n}\n\n// spruce-dsp-80 font style\n$sys-font-spruce-dsp-80-font-size: 76px;\n$sys-font-spruce-dsp-80-line-height: 84px;\n$sys-font-spruce-dsp-80-text-align: start;\n$sys-font-spruce-dsp-80-color: #2e2e2e;\n$sys-font-spruce-dsp-80-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-80-font-style: normal;\n$sys-font-spruce-dsp-80-font-weight: bold;\n$sys-font-spruce-dsp-80-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-80 () {\n  font-size: $sys-font-spruce-dsp-80-font-size;\n  line-height: $sys-font-spruce-dsp-80-line-height;\n  text-align: $sys-font-spruce-dsp-80-text-align;\n  color: $sys-font-spruce-dsp-80-color;\n  letter-spacing: $sys-font-spruce-dsp-80-letter-spacing;\n  font-style: $sys-font-spruce-dsp-80-font-style;\n  font-weight: $sys-font-spruce-dsp-80-font-weight;\n  font-family: $sys-font-spruce-dsp-80-font-family;\n}\n\n// spruce-dsp-70 font style\n$sys-font-spruce-dsp-70-font-size: 56px;\n$sys-font-spruce-dsp-70-line-height: 60px;\n$sys-font-spruce-dsp-70-text-align: start;\n$sys-font-spruce-dsp-70-color: #2e2e2e;\n$sys-font-spruce-dsp-70-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-70-font-style: normal;\n$sys-font-spruce-dsp-70-font-weight: bold;\n$sys-font-spruce-dsp-70-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-70 () {\n  font-size: $sys-font-spruce-dsp-70-font-size;\n  line-height: $sys-font-spruce-dsp-70-line-height;\n  text-align: $sys-font-spruce-dsp-70-text-align;\n  color: $sys-font-spruce-dsp-70-color;\n  letter-spacing: $sys-font-spruce-dsp-70-letter-spacing;\n  font-style: $sys-font-spruce-dsp-70-font-style;\n  font-weight: $sys-font-spruce-dsp-70-font-weight;\n  font-family: $sys-font-spruce-dsp-70-font-family;\n}\n\n// spruce-dsp-60 font style\n$sys-font-spruce-dsp-60-font-size: 40px;\n$sys-font-spruce-dsp-60-line-height: 48px;\n$sys-font-spruce-dsp-60-text-align: start;\n$sys-font-spruce-dsp-60-color: #2e2e2e;\n$sys-font-spruce-dsp-60-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-60-font-style: normal;\n$sys-font-spruce-dsp-60-font-weight: bold;\n$sys-font-spruce-dsp-60-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-60 () {\n  font-size: $sys-font-spruce-dsp-60-font-size;\n  line-height: $sys-font-spruce-dsp-60-line-height;\n  text-align: $sys-font-spruce-dsp-60-text-align;\n  color: $sys-font-spruce-dsp-60-color;\n  letter-spacing: $sys-font-spruce-dsp-60-letter-spacing;\n  font-style: $sys-font-spruce-dsp-60-font-style;\n  font-weight: $sys-font-spruce-dsp-60-font-weight;\n  font-family: $sys-font-spruce-dsp-60-font-family;\n}\n\n// spruce-dsp-50 font style\n$sys-font-spruce-dsp-50-font-size: 28px;\n$sys-font-spruce-dsp-50-line-height: 36px;\n$sys-font-spruce-dsp-50-text-align: start;\n$sys-font-spruce-dsp-50-color: #2e2e2e;\n$sys-font-spruce-dsp-50-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-50-font-style: normal;\n$sys-font-spruce-dsp-50-font-weight: bold;\n$sys-font-spruce-dsp-50-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-50 () {\n  font-size: $sys-font-spruce-dsp-50-font-size;\n  line-height: $sys-font-spruce-dsp-50-line-height;\n  text-align: $sys-font-spruce-dsp-50-text-align;\n  color: $sys-font-spruce-dsp-50-color;\n  letter-spacing: $sys-font-spruce-dsp-50-letter-spacing;\n  font-style: $sys-font-spruce-dsp-50-font-style;\n  font-weight: $sys-font-spruce-dsp-50-font-weight;\n  font-family: $sys-font-spruce-dsp-50-font-family;\n}\n\n// spruce-dsp-40 font style\n$sys-font-spruce-dsp-40-font-size: 20px;\n$sys-font-spruce-dsp-40-line-height: 28px;\n$sys-font-spruce-dsp-40-text-align: start;\n$sys-font-spruce-dsp-40-color: #2e2e2e;\n$sys-font-spruce-dsp-40-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-40-font-style: normal;\n$sys-font-spruce-dsp-40-font-weight: bold;\n$sys-font-spruce-dsp-40-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-40 () {\n  font-size: $sys-font-spruce-dsp-40-font-size;\n  line-height: $sys-font-spruce-dsp-40-line-height;\n  text-align: $sys-font-spruce-dsp-40-text-align;\n  color: $sys-font-spruce-dsp-40-color;\n  letter-spacing: $sys-font-spruce-dsp-40-letter-spacing;\n  font-style: $sys-font-spruce-dsp-40-font-style;\n  font-weight: $sys-font-spruce-dsp-40-font-weight;\n  font-family: $sys-font-spruce-dsp-40-font-family;\n}\n\n// spruce-dsp-30 font style\n$sys-font-spruce-dsp-30-font-size: 18px;\n$sys-font-spruce-dsp-30-line-height: 24px;\n$sys-font-spruce-dsp-30-text-align: start;\n$sys-font-spruce-dsp-30-color: #2e2e2e;\n$sys-font-spruce-dsp-30-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-30-font-style: normal;\n$sys-font-spruce-dsp-30-font-weight: 600;\n$sys-font-spruce-dsp-30-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-30 () {\n  font-size: $sys-font-spruce-dsp-30-font-size;\n  line-height: $sys-font-spruce-dsp-30-line-height;\n  text-align: $sys-font-spruce-dsp-30-text-align;\n  color: $sys-font-spruce-dsp-30-color;\n  letter-spacing: $sys-font-spruce-dsp-30-letter-spacing;\n  font-style: $sys-font-spruce-dsp-30-font-style;\n  font-weight: $sys-font-spruce-dsp-30-font-weight;\n  font-family: $sys-font-spruce-dsp-30-font-family;\n}\n\n// spruce-dsp-20 font style\n$sys-font-spruce-dsp-20-font-size: 16px;\n$sys-font-spruce-dsp-20-line-height: 22px;\n$sys-font-spruce-dsp-20-text-align: start;\n$sys-font-spruce-dsp-20-color: #2e2e2e;\n$sys-font-spruce-dsp-20-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-20-font-style: normal;\n$sys-font-spruce-dsp-20-font-weight: bold;\n$sys-font-spruce-dsp-20-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-20 () {\n  font-size: $sys-font-spruce-dsp-20-font-size;\n  line-height: $sys-font-spruce-dsp-20-line-height;\n  text-align: $sys-font-spruce-dsp-20-text-align;\n  color: $sys-font-spruce-dsp-20-color;\n  letter-spacing: $sys-font-spruce-dsp-20-letter-spacing;\n  font-style: $sys-font-spruce-dsp-20-font-style;\n  font-weight: $sys-font-spruce-dsp-20-font-weight;\n  font-family: $sys-font-spruce-dsp-20-font-family;\n}\n\n// spruce-dsp-10 font style\n$sys-font-spruce-dsp-10-font-size: 14px;\n$sys-font-spruce-dsp-10-line-height: 20px;\n$sys-font-spruce-dsp-10-text-align: start;\n$sys-font-spruce-dsp-10-color: #2e2e2e;\n$sys-font-spruce-dsp-10-letter-spacing: 0.2px;\n$sys-font-spruce-dsp-10-font-style: normal;\n$sys-font-spruce-dsp-10-font-weight: bold;\n$sys-font-spruce-dsp-10-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-dsp-10 () {\n  font-size: $sys-font-spruce-dsp-10-font-size;\n  line-height: $sys-font-spruce-dsp-10-line-height;\n  text-align: $sys-font-spruce-dsp-10-text-align;\n  color: $sys-font-spruce-dsp-10-color;\n  letter-spacing: $sys-font-spruce-dsp-10-letter-spacing;\n  font-style: $sys-font-spruce-dsp-10-font-style;\n  font-weight: $sys-font-spruce-dsp-10-font-weight;\n  font-family: $sys-font-spruce-dsp-10-font-family;\n}\n\n// spruce-bdy-40 font style\n$sys-font-spruce-bdy-40-font-size: 24px;\n$sys-font-spruce-bdy-40-line-height: 32px;\n$sys-font-spruce-bdy-40-text-align: left;\n$sys-font-spruce-bdy-40-color: #2e2e2e;\n$sys-font-spruce-bdy-40-font-style: normal;\n$sys-font-spruce-bdy-40-font-weight: 400;\n$sys-font-spruce-bdy-40-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-bdy-40 () {\n  font-size: $sys-font-spruce-bdy-40-font-size;\n  line-height: $sys-font-spruce-bdy-40-line-height;\n  text-align: $sys-font-spruce-bdy-40-text-align;\n  color: $sys-font-spruce-bdy-40-color;\n  font-style: $sys-font-spruce-bdy-40-font-style;\n  font-weight: $sys-font-spruce-bdy-40-font-weight;\n  font-family: $sys-font-spruce-bdy-40-font-family;\n}\n\n// spruce-bdy-30 font style\n$sys-font-spruce-bdy-30-font-size: 20px;\n$sys-font-spruce-bdy-30-line-height: 28px;\n$sys-font-spruce-bdy-30-text-align: left;\n$sys-font-spruce-bdy-30-color: #2e2e2e;\n$sys-font-spruce-bdy-30-font-style: normal;\n$sys-font-spruce-bdy-30-font-weight: 400;\n$sys-font-spruce-bdy-30-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-bdy-30 () {\n  font-size: $sys-font-spruce-bdy-30-font-size;\n  line-height: $sys-font-spruce-bdy-30-line-height;\n  text-align: $sys-font-spruce-bdy-30-text-align;\n  color: $sys-font-spruce-bdy-30-color;\n  font-style: $sys-font-spruce-bdy-30-font-style;\n  font-weight: $sys-font-spruce-bdy-30-font-weight;\n  font-family: $sys-font-spruce-bdy-30-font-family;\n}\n\n// spruce-bdy-20 font style\n$sys-font-spruce-bdy-20-font-size: 18px;\n$sys-font-spruce-bdy-20-line-height: 28px;\n$sys-font-spruce-bdy-20-text-align: left;\n$sys-font-spruce-bdy-20-color: #2e2e2e;\n$sys-font-spruce-bdy-20-font-style: normal;\n$sys-font-spruce-bdy-20-font-weight: 400;\n$sys-font-spruce-bdy-20-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-bdy-20 () {\n  font-size: $sys-font-spruce-bdy-20-font-size;\n  line-height: $sys-font-spruce-bdy-20-line-height;\n  text-align: $sys-font-spruce-bdy-20-text-align;\n  color: $sys-font-spruce-bdy-20-color;\n  font-style: $sys-font-spruce-bdy-20-font-style;\n  font-weight: $sys-font-spruce-bdy-20-font-weight;\n  font-family: $sys-font-spruce-bdy-20-font-family;\n}\n\n// spruce-bdy-10 font style\n$sys-font-spruce-bdy-10-font-size: 16px;\n$sys-font-spruce-bdy-10-line-height: 26px;\n$sys-font-spruce-bdy-10-text-align: left;\n$sys-font-spruce-bdy-10-color: #2e2e2e;\n$sys-font-spruce-bdy-10-font-style: normal;\n$sys-font-spruce-bdy-10-font-weight: 400;\n$sys-font-spruce-bdy-10-font-family: Sentinel, Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n@mixin sys-font-spruce-bdy-10 () {\n  font-size: $sys-font-spruce-bdy-10-font-size;\n  line-height: $sys-font-spruce-bdy-10-line-height;\n  text-align: $sys-font-spruce-bdy-10-text-align;\n  color: $sys-font-spruce-bdy-10-color;\n  font-style: $sys-font-spruce-bdy-10-font-style;\n  font-weight: $sys-font-spruce-bdy-10-font-weight;\n  font-family: $sys-font-spruce-bdy-10-font-family;\n}\n\n// redwood-dsp-70 font style\n$sys-font-redwood-dsp-70-font-size: 28px;\n$sys-font-redwood-dsp-70-line-height: 36px;\n$sys-font-redwood-dsp-70-text-align: left;\n$sys-font-redwood-dsp-70-color: #2e2e2e;\n$sys-font-redwood-dsp-70-font-style: normal;\n$sys-font-redwood-dsp-70-font-weight: 400;\n$sys-font-redwood-dsp-70-font-family: Roboto;\n\n@mixin sys-font-redwood-dsp-70 () {\n  font-size: $sys-font-redwood-dsp-70-font-size;\n  line-height: $sys-font-redwood-dsp-70-line-height;\n  text-align: $sys-font-redwood-dsp-70-text-align;\n  color: $sys-font-redwood-dsp-70-color;\n  font-style: $sys-font-redwood-dsp-70-font-style;\n  font-weight: $sys-font-redwood-dsp-70-font-weight;\n  font-family: $sys-font-redwood-dsp-70-font-family;\n}\n\n// redwood-dsp-60 font style\n$sys-font-redwood-dsp-60-font-size: 24px;\n$sys-font-redwood-dsp-60-line-height: 32px;\n$sys-font-redwood-dsp-60-text-align: left;\n$sys-font-redwood-dsp-60-color: #2e2e2e;\n$sys-font-redwood-dsp-60-font-style: normal;\n$sys-font-redwood-dsp-60-font-weight: 400;\n$sys-font-redwood-dsp-60-font-family: Roboto;\n\n@mixin sys-font-redwood-dsp-60 () {\n  font-size: $sys-font-redwood-dsp-60-font-size;\n  line-height: $sys-font-redwood-dsp-60-line-height;\n  text-align: $sys-font-redwood-dsp-60-text-align;\n  color: $sys-font-redwood-dsp-60-color;\n  font-style: $sys-font-redwood-dsp-60-font-style;\n  font-weight: $sys-font-redwood-dsp-60-font-weight;\n  font-family: $sys-font-redwood-dsp-60-font-family;\n}\n\n// redwood-dsp-50 font style\n$sys-font-redwood-dsp-50-font-size: 20px;\n$sys-font-redwood-dsp-50-line-height: 28px;\n$sys-font-redwood-dsp-50-text-align: left;\n$sys-font-redwood-dsp-50-color: #2e2e2e;\n$sys-font-redwood-dsp-50-font-style: normal;\n$sys-font-redwood-dsp-50-font-weight: 400;\n$sys-font-redwood-dsp-50-font-family: Roboto;\n\n@mixin sys-font-redwood-dsp-50 () {\n  font-size: $sys-font-redwood-dsp-50-font-size;\n  line-height: $sys-font-redwood-dsp-50-line-height;\n  text-align: $sys-font-redwood-dsp-50-text-align;\n  color: $sys-font-redwood-dsp-50-color;\n  font-style: $sys-font-redwood-dsp-50-font-style;\n  font-weight: $sys-font-redwood-dsp-50-font-weight;\n  font-family: $sys-font-redwood-dsp-50-font-family;\n}\n\n// redwood-dsp-40 font style\n$sys-font-redwood-dsp-40-font-size: 18px;\n$sys-font-redwood-dsp-40-line-height: 24px;\n$sys-font-redwood-dsp-40-text-align: left;\n$sys-font-redwood-dsp-40-color: #2e2e2e;\n$sys-font-redwood-dsp-40-font-style: normal;\n$sys-font-redwood-dsp-40-font-weight: 400;\n$sys-font-redwood-dsp-40-font-family: Roboto;\n\n@mixin sys-font-redwood-dsp-40 () {\n  font-size: $sys-font-redwood-dsp-40-font-size;\n  line-height: $sys-font-redwood-dsp-40-line-height;\n  text-align: $sys-font-redwood-dsp-40-text-align;\n  color: $sys-font-redwood-dsp-40-color;\n  font-style: $sys-font-redwood-dsp-40-font-style;\n  font-weight: $sys-font-redwood-dsp-40-font-weight;\n  font-family: $sys-font-redwood-dsp-40-font-family;\n}\n\n// redwood-dsp-30 font style\n$sys-font-redwood-dsp-30-font-size: 16px;\n$sys-font-redwood-dsp-30-line-height: 22px;\n$sys-font-redwood-dsp-30-text-align: left;\n$sys-font-redwood-dsp-30-color: #2e2e2e;\n$sys-font-redwood-dsp-30-font-style: normal;\n$sys-font-redwood-dsp-30-font-weight: 400;\n$sys-font-redwood-dsp-30-font-family: Roboto;\n\n@mixin sys-font-redwood-dsp-30 () {\n  font-size: $sys-font-redwood-dsp-30-font-size;\n  line-height: $sys-font-redwood-dsp-30-line-height;\n  text-align: $sys-font-redwood-dsp-30-text-align;\n  color: $sys-font-redwood-dsp-30-color;\n  font-style: $sys-font-redwood-dsp-30-font-style;\n  font-weight: $sys-font-redwood-dsp-30-font-weight;\n  font-family: $sys-font-redwood-dsp-30-font-family;\n}\n\n// redwood-dsp-20 font style\n$sys-font-redwood-dsp-20-font-size: 14px;\n$sys-font-redwood-dsp-20-line-height: 20px;\n$sys-font-redwood-dsp-20-text-align: start;\n$sys-font-redwood-dsp-20-color: #2e2e2e;\n$sys-font-redwood-dsp-20-font-style: normal;\n$sys-font-redwood-dsp-20-font-weight: 400;\n$sys-font-redwood-dsp-20-font-family: Roboto;\n\n@mixin sys-font-redwood-dsp-20 () {\n  font-size: $sys-font-redwood-dsp-20-font-size;\n  line-height: $sys-font-redwood-dsp-20-line-height;\n  text-align: $sys-font-redwood-dsp-20-text-align;\n  color: $sys-font-redwood-dsp-20-color;\n  font-style: $sys-font-redwood-dsp-20-font-style;\n  font-weight: $sys-font-redwood-dsp-20-font-weight;\n  font-family: $sys-font-redwood-dsp-20-font-family;\n}\n\n// redwood-dsp-10 font style\n$sys-font-redwood-dsp-10-font-size: 12px;\n$sys-font-redwood-dsp-10-line-height: 16px;\n$sys-font-redwood-dsp-10-text-align: left;\n$sys-font-redwood-dsp-10-color: #2e2e2e;\n$sys-font-redwood-dsp-10-font-style: normal;\n$sys-font-redwood-dsp-10-font-weight: 400;\n$sys-font-redwood-dsp-10-font-family: Roboto;\n\n@mixin sys-font-redwood-dsp-10 () {\n  font-size: $sys-font-redwood-dsp-10-font-size;\n  line-height: $sys-font-redwood-dsp-10-line-height;\n  text-align: $sys-font-redwood-dsp-10-text-align;\n  color: $sys-font-redwood-dsp-10-color;\n  font-style: $sys-font-redwood-dsp-10-font-style;\n  font-weight: $sys-font-redwood-dsp-10-font-weight;\n  font-family: $sys-font-redwood-dsp-10-font-family;\n}\n\n// redwood-bdy-40 font style\n$sys-font-redwood-bdy-40-font-size: 20px;\n$sys-font-redwood-bdy-40-line-height: 28px;\n$sys-font-redwood-bdy-40-text-align: left;\n$sys-font-redwood-bdy-40-color: #2e2e2e;\n$sys-font-redwood-bdy-40-font-style: normal;\n$sys-font-redwood-bdy-40-font-weight: 400;\n$sys-font-redwood-bdy-40-font-family: Roboto;\n\n@mixin sys-font-redwood-bdy-40 () {\n  font-size: $sys-font-redwood-bdy-40-font-size;\n  line-height: $sys-font-redwood-bdy-40-line-height;\n  text-align: $sys-font-redwood-bdy-40-text-align;\n  color: $sys-font-redwood-bdy-40-color;\n  font-style: $sys-font-redwood-bdy-40-font-style;\n  font-weight: $sys-font-redwood-bdy-40-font-weight;\n  font-family: $sys-font-redwood-bdy-40-font-family;\n}\n\n// redwood-bdy-30 font style\n$sys-font-redwood-bdy-30-font-size: 18px;\n$sys-font-redwood-bdy-30-line-height: 24px;\n$sys-font-redwood-bdy-30-text-align: left;\n$sys-font-redwood-bdy-30-color: #2e2e2e;\n$sys-font-redwood-bdy-30-font-style: normal;\n$sys-font-redwood-bdy-30-font-weight: 400;\n$sys-font-redwood-bdy-30-font-family: Roboto;\n\n@mixin sys-font-redwood-bdy-30 () {\n  font-size: $sys-font-redwood-bdy-30-font-size;\n  line-height: $sys-font-redwood-bdy-30-line-height;\n  text-align: $sys-font-redwood-bdy-30-text-align;\n  color: $sys-font-redwood-bdy-30-color;\n  font-style: $sys-font-redwood-bdy-30-font-style;\n  font-weight: $sys-font-redwood-bdy-30-font-weight;\n  font-family: $sys-font-redwood-bdy-30-font-family;\n}\n\n// redwood-bdy-20 font style\n$sys-font-redwood-bdy-20-font-size: 16px;\n$sys-font-redwood-bdy-20-line-height: 26px;\n$sys-font-redwood-bdy-20-text-align: left;\n$sys-font-redwood-bdy-20-color: #2e2e2e;\n$sys-font-redwood-bdy-20-font-style: normal;\n$sys-font-redwood-bdy-20-font-weight: 400;\n$sys-font-redwood-bdy-20-font-family: Roboto;\n\n@mixin sys-font-redwood-bdy-20 () {\n  font-size: $sys-font-redwood-bdy-20-font-size;\n  line-height: $sys-font-redwood-bdy-20-line-height;\n  text-align: $sys-font-redwood-bdy-20-text-align;\n  color: $sys-font-redwood-bdy-20-color;\n  font-style: $sys-font-redwood-bdy-20-font-style;\n  font-weight: $sys-font-redwood-bdy-20-font-weight;\n  font-family: $sys-font-redwood-bdy-20-font-family;\n}\n\n// redwood-bdy-10 font style\n$sys-font-redwood-bdy-10-font-size: 14px;\n$sys-font-redwood-bdy-10-line-height: 24px;\n$sys-font-redwood-bdy-10-text-align: left;\n$sys-font-redwood-bdy-10-color: #2e2e2e;\n$sys-font-redwood-bdy-10-font-style: normal;\n$sys-font-redwood-bdy-10-font-weight: 400;\n$sys-font-redwood-bdy-10-font-family: Roboto;\n\n@mixin sys-font-redwood-bdy-10 () {\n  font-size: $sys-font-redwood-bdy-10-font-size;\n  line-height: $sys-font-redwood-bdy-10-line-height;\n  text-align: $sys-font-redwood-bdy-10-text-align;\n  color: $sys-font-redwood-bdy-10-color;\n  font-style: $sys-font-redwood-bdy-10-font-style;\n  font-weight: $sys-font-redwood-bdy-10-font-weight;\n  font-family: $sys-font-redwood-bdy-10-font-family;\n}\n\n// redwood-ui-30 font style\n$sys-font-redwood-ui-30-font-size: 16px;\n$sys-font-redwood-ui-30-line-height: 16px;\n$sys-font-redwood-ui-30-text-align: start;\n$sys-font-redwood-ui-30-color: #000000;\n$sys-font-redwood-ui-30-font-style: normal;\n$sys-font-redwood-ui-30-font-weight: 400;\n$sys-font-redwood-ui-30-font-family: Roboto;\n\n@mixin sys-font-redwood-ui-30 () {\n  font-size: $sys-font-redwood-ui-30-font-size;\n  line-height: $sys-font-redwood-ui-30-line-height;\n  text-align: $sys-font-redwood-ui-30-text-align;\n  color: $sys-font-redwood-ui-30-color;\n  font-style: $sys-font-redwood-ui-30-font-style;\n  font-weight: $sys-font-redwood-ui-30-font-weight;\n  font-family: $sys-font-redwood-ui-30-font-family;\n}\n\n// redwood-ui-20 font style\n$sys-font-redwood-ui-20-font-size: 14px;\n$sys-font-redwood-ui-20-line-height: 14px;\n$sys-font-redwood-ui-20-text-align: start;\n$sys-font-redwood-ui-20-color: #000000;\n$sys-font-redwood-ui-20-font-style: normal;\n$sys-font-redwood-ui-20-font-weight: 400;\n$sys-font-redwood-ui-20-font-family: Roboto;\n\n@mixin sys-font-redwood-ui-20 () {\n  font-size: $sys-font-redwood-ui-20-font-size;\n  line-height: $sys-font-redwood-ui-20-line-height;\n  text-align: $sys-font-redwood-ui-20-text-align;\n  color: $sys-font-redwood-ui-20-color;\n  font-style: $sys-font-redwood-ui-20-font-style;\n  font-weight: $sys-font-redwood-ui-20-font-weight;\n  font-family: $sys-font-redwood-ui-20-font-family;\n}\n\n// maple-utl-70 font style\n$sys-font-maple-utl-70-font-size: 28px;\n$sys-font-maple-utl-70-line-height: 36px;\n$sys-font-maple-utl-70-text-align: left;\n$sys-font-maple-utl-70-color: #2e2e2e;\n$sys-font-maple-utl-70-font-style: normal;\n$sys-font-maple-utl-70-font-weight: 400;\n$sys-font-maple-utl-70-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-utl-70 () {\n  font-size: $sys-font-maple-utl-70-font-size;\n  line-height: $sys-font-maple-utl-70-line-height;\n  text-align: $sys-font-maple-utl-70-text-align;\n  color: $sys-font-maple-utl-70-color;\n  font-style: $sys-font-maple-utl-70-font-style;\n  font-weight: $sys-font-maple-utl-70-font-weight;\n  font-family: $sys-font-maple-utl-70-font-family;\n}\n\n// maple-utl-60 font style\n$sys-font-maple-utl-60-font-size: 24px;\n$sys-font-maple-utl-60-line-height: 32px;\n$sys-font-maple-utl-60-text-align: left;\n$sys-font-maple-utl-60-color: #2e2e2e;\n$sys-font-maple-utl-60-font-style: normal;\n$sys-font-maple-utl-60-font-weight: 400;\n$sys-font-maple-utl-60-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-utl-60 () {\n  font-size: $sys-font-maple-utl-60-font-size;\n  line-height: $sys-font-maple-utl-60-line-height;\n  text-align: $sys-font-maple-utl-60-text-align;\n  color: $sys-font-maple-utl-60-color;\n  font-style: $sys-font-maple-utl-60-font-style;\n  font-weight: $sys-font-maple-utl-60-font-weight;\n  font-family: $sys-font-maple-utl-60-font-family;\n}\n\n// maple-utl-50 font style\n$sys-font-maple-utl-50-font-size: 20px;\n$sys-font-maple-utl-50-line-height: 28px;\n$sys-font-maple-utl-50-text-align: left;\n$sys-font-maple-utl-50-color: #2e2e2e;\n$sys-font-maple-utl-50-font-style: normal;\n$sys-font-maple-utl-50-font-weight: 400;\n$sys-font-maple-utl-50-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-utl-50 () {\n  font-size: $sys-font-maple-utl-50-font-size;\n  line-height: $sys-font-maple-utl-50-line-height;\n  text-align: $sys-font-maple-utl-50-text-align;\n  color: $sys-font-maple-utl-50-color;\n  font-style: $sys-font-maple-utl-50-font-style;\n  font-weight: $sys-font-maple-utl-50-font-weight;\n  font-family: $sys-font-maple-utl-50-font-family;\n}\n\n// maple-utl-40 font style\n$sys-font-maple-utl-40-font-size: 18px;\n$sys-font-maple-utl-40-line-height: 24px;\n$sys-font-maple-utl-40-text-align: left;\n$sys-font-maple-utl-40-color: #2e2e2e;\n$sys-font-maple-utl-40-font-style: normal;\n$sys-font-maple-utl-40-font-weight: 400;\n$sys-font-maple-utl-40-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-utl-40 () {\n  font-size: $sys-font-maple-utl-40-font-size;\n  line-height: $sys-font-maple-utl-40-line-height;\n  text-align: $sys-font-maple-utl-40-text-align;\n  color: $sys-font-maple-utl-40-color;\n  font-style: $sys-font-maple-utl-40-font-style;\n  font-weight: $sys-font-maple-utl-40-font-weight;\n  font-family: $sys-font-maple-utl-40-font-family;\n}\n\n// maple-utl-30 font style\n$sys-font-maple-utl-30-font-size: 16px;\n$sys-font-maple-utl-30-line-height: 22px;\n$sys-font-maple-utl-30-text-align: left;\n$sys-font-maple-utl-30-color: #2e2e2e;\n$sys-font-maple-utl-30-font-style: normal;\n$sys-font-maple-utl-30-font-weight: 400;\n$sys-font-maple-utl-30-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-utl-30 () {\n  font-size: $sys-font-maple-utl-30-font-size;\n  line-height: $sys-font-maple-utl-30-line-height;\n  text-align: $sys-font-maple-utl-30-text-align;\n  color: $sys-font-maple-utl-30-color;\n  font-style: $sys-font-maple-utl-30-font-style;\n  font-weight: $sys-font-maple-utl-30-font-weight;\n  font-family: $sys-font-maple-utl-30-font-family;\n}\n\n// maple-utl-20 font style\n$sys-font-maple-utl-20-font-size: 14px;\n$sys-font-maple-utl-20-line-height: 20px;\n$sys-font-maple-utl-20-text-align: start;\n$sys-font-maple-utl-20-color: #2e2e2e;\n$sys-font-maple-utl-20-font-style: normal;\n$sys-font-maple-utl-20-font-weight: 400;\n$sys-font-maple-utl-20-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-utl-20 () {\n  font-size: $sys-font-maple-utl-20-font-size;\n  line-height: $sys-font-maple-utl-20-line-height;\n  text-align: $sys-font-maple-utl-20-text-align;\n  color: $sys-font-maple-utl-20-color;\n  font-style: $sys-font-maple-utl-20-font-style;\n  font-weight: $sys-font-maple-utl-20-font-weight;\n  font-family: $sys-font-maple-utl-20-font-family;\n}\n\n// maple-utl-10 font style\n$sys-font-maple-utl-10-font-size: 12px;\n$sys-font-maple-utl-10-line-height: 16px;\n$sys-font-maple-utl-10-text-align: left;\n$sys-font-maple-utl-10-color: #2e2e2e;\n$sys-font-maple-utl-10-font-style: normal;\n$sys-font-maple-utl-10-font-weight: 400;\n$sys-font-maple-utl-10-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-utl-10 () {\n  font-size: $sys-font-maple-utl-10-font-size;\n  line-height: $sys-font-maple-utl-10-line-height;\n  text-align: $sys-font-maple-utl-10-text-align;\n  color: $sys-font-maple-utl-10-color;\n  font-style: $sys-font-maple-utl-10-font-style;\n  font-weight: $sys-font-maple-utl-10-font-weight;\n  font-family: $sys-font-maple-utl-10-font-family;\n}\n\n// maple-ui-30 font style\n$sys-font-maple-ui-30-font-size: 18px;\n$sys-font-maple-ui-30-line-height: 21px;\n$sys-font-maple-ui-30-text-align: left;\n$sys-font-maple-ui-30-color: #2e2e2e;\n$sys-font-maple-ui-30-font-style: normal;\n$sys-font-maple-ui-30-font-weight: bold;\n$sys-font-maple-ui-30-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-ui-30 () {\n  font-size: $sys-font-maple-ui-30-font-size;\n  line-height: $sys-font-maple-ui-30-line-height;\n  text-align: $sys-font-maple-ui-30-text-align;\n  color: $sys-font-maple-ui-30-color;\n  font-style: $sys-font-maple-ui-30-font-style;\n  font-weight: $sys-font-maple-ui-30-font-weight;\n  font-family: $sys-font-maple-ui-30-font-family;\n}\n\n// maple-ui-40 font style\n$sys-font-maple-ui-40-font-size: 18px;\n$sys-font-maple-ui-40-line-height: 18px;\n$sys-font-maple-ui-40-text-align: left;\n$sys-font-maple-ui-40-color: #2e2e2e;\n$sys-font-maple-ui-40-font-style: normal;\n$sys-font-maple-ui-40-font-weight: 400;\n$sys-font-maple-ui-40-font-family: Roboto Condensed;\n\n@mixin sys-font-maple-ui-40 () {\n  font-size: $sys-font-maple-ui-40-font-size;\n  line-height: $sys-font-maple-ui-40-line-height;\n  text-align: $sys-font-maple-ui-40-text-align;\n  color: $sys-font-maple-ui-40-color;\n  font-style: $sys-font-maple-ui-40-font-style;\n  font-weight: $sys-font-maple-ui-40-font-weight;\n  font-family: $sys-font-maple-ui-40-font-family;\n}\n\n/*\n    Measurements:\n*/\n\n// Spacing\n$spacing-space-closed: 0;\n$spacing-space-xxs: 0.2rem;\n$spacing-space-xs: 0.4rem;\n$spacing-space-sm: 0.8rem;\n$spacing-space-md: 1.6rem;\n$spacing-space-lg: 3.2rem;\n$spacing-space-xl: 6.4rem;\n$spacing-space-xxl: 12.8rem;\n\n// Radius\n$radius-radius-10: 0.2rem;\n$radius-radius-00: 0;\n$radius-button: 0.2rem;\n$radius-card: 0.2rem;\n$radius-radius-20: 3.2rem;\n$radius-input: 0.3rem;\n\n// Sizing\n$sizing-size-closed: 0;\n$sizing-size-xxs: 0.2rem;\n$sizing-size-xs: 0.4rem;\n$sizing-size-sm: 0.8rem;\n$sizing-size-md: 1.6rem;\n$sizing-size-lg: 3.2rem;\n$sizing-size-xl: 6.4rem;\n$sizing-size-xxl: 12.8rem;\n\n/*\n    Shadows:\n*/\n\n// Elevation\n$shadow-prominence-00: 0 0 0 0 rgba(27, 28, 28, 0.5);\n$shadow-prominence-10: 0.2rem 0.2rem 0.2rem rgba(27, 28, 28, 0.4);\n$shadow-prominence-20: 0.4rem 0.4rem 0.4rem rgba(27, 28, 28, 0.3);\n$shadow-prominence-30: 0.8rem 0.8rem 0.8rem rgba(27, 28, 28, 0.2);\n$shadow-prominence-40: 1.6rem 1.6rem 1.6rem rgba(27, 28, 28, 0.2);\n","/*\n* Global generics\n*\n* TOC:\n* Outline\n*/\n\n/* Outline */\n$outline-default-width: thin;\n$outline-default-style: dotted;\n\n/* spacing modifiers */\n$size-modifier--stretch: 1.5;\n$size-modifier--squish: 0.5;\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  line-height: 1;\n  font-size: inherit;\n}\n\nol,\nul,\ndl {\n  margin: 0;\n}\n","/*\nNOTE: Custom properties can't be used in the custom media query definition since they rely on the DOM\nThese currently are only for reference/possible future use elsewhere\n*/\n$xs-bp: 0;\n$sm-bp: 768px;\n$md-bp: 992px;\n$lg-bp: 1200px;\n\n/* Media Queries */\n\n@custom-media --xs-mq (width >= $xs-bp);\n@custom-media --xs-mq-only (width >= $xs-bp) and (width < $sm-bp);\n@custom-media --sm-mq (width >= $sm-bp);\n@custom-media --sm-mq-only (width >= $sm-bp) and (width < $md-bp);\n@custom-media --md-mq (width >= $md-bp);\n@custom-media --md-mq-only (width >= $md-bp) and (width < $lg-bp);\n@custom-media --lg-mq (width >= $lg-bp);\n@custom-media --lg-mq-only (width >= $lg-bp);\n","/**\n  * REI Cedar inset variables:\n  * This file provides a contract between\n  * design tokens and cedar non-changing variables.\n  *\n  * Insets are used to add spacing to all of our elements,\n  * it is critical that all elements use these variables for\n  * their internal spacing values.\n  *\n  * TOC:\n  * Inset options\n  ** extra extra small\n  ** extra small\n  ** small\n  ** medium\n  ** large\n  ** extra large\n*/\n\n/**\n  * inset options\n*/\n\n/* extra extra small */\n$sizing-size-xxs-squish: calc($sizing-size-xxs * $size-modifier--squish);\n$sizing-size-xxs-stretch: calc($sizing-size-xxs * $size-modifier--stretch);\n\n$inset-xxs: $sizing-size-xxs;\n$inset-xxs--squish: $sizing-size-xxs-squish $sizing-size-xxs;\n$inset-xxs--stretch: $sizing-size-xxs-stretch $sizing-size-xxs;\n\n/* extra small */\n$sizing-size-xs-squish: calc($sizing-size-xs * $size-modifier--squish);\n$sizing-size-xs-stretch: calc($sizing-size-xs * $size-modifier--stretch);\n\n$inset-xs: $sizing-size-xs;\n$inset-xs--squish: $sizing-size-xs-squish $sizing-size-xs;\n$inset-xs--stretch: $sizing-size-xs-stretch $sizing-size-xs;\n\n/* small */\n$sizing-size-sm-squish: calc($sizing-size-sm * $size-modifier--squish);\n$sizing-size-sm-stretch: calc($sizing-size-sm * $size-modifier--stretch);\n\n$inset-sm: $sizing-size-sm;\n$inset-sm--squish: $sizing-size-sm-squish $sizing-size-sm;\n$inset-sm--stretch: $sizing-size-sm-stretch $sizing-size-sm;\n\n/* medium */\n$sizing-size-md-squish: calc($sizing-size-md * $size-modifier--squish);\n$sizing-size-md-stretch: calc($sizing-size-md * $size-modifier--stretch);\n\n$inset-md: $sizing-size-md;\n$inset-md--squish: $sizing-size-md-squish $sizing-size-md;\n$inset-md--stretch: $sizing-size-md-stretch $sizing-size-md;\n\n/* large */\n$sizing-size-lg-squish: calc($sizing-size-lg * $size-modifier--squish);\n$sizing-size-lg-stretch: calc($sizing-size-lg * $size-modifier--stretch);\n\n$inset-lg: $sizing-size-lg;\n$inset-lg--squish: $sizing-size-lg-squish $sizing-size-lg;\n$inset-lg--stretch: $sizing-size-lg-stretch $sizing-size-lg;\n\n/* extra large */\n$sizing-size-xl-squish: calc($sizing-size-xl * $size-modifier--squish);\n$sizing-size-xl-stretch: calc($sizing-size-xl * $size-modifier--stretch);\n\n$inset-xl: $sizing-size-xl;\n$inset-xl--squish: $sizing-size-xl-squish $sizing-size-xl;\n$inset-xl--stretch: $sizing-size-xl-stretch $sizing-size-xl;\n","/*\n*\n* REI Cedar Color\n* Base values inherited from brandai.pcss\n*\n* TOC:\n*  Global generics\n** Outline\n** Transparent\n*/\n\n/*\n* Global generics\n*/\n\n/* Outline */\n$color-outline: inherit;\n$color-outline-focus: #8dd1ed;\n\n/* Transparent  */\n$color-transparent-background: transparent;\n$color-transparent-border: inherit;\n","/* shared */\n\n/* Fonts */\n$font-fallback-sans-serif: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n$font-family-sans-serif: \"Roboto\", $font-fallback-sans-serif;\n\n$font-brand: \"HCo Sentinel\", $font-family-sans-serif;\n\n$font-brand-secondary: \"Plak Black Condensed\", $font-family-sans-serif;\n$font-brand-secondary-weight: normal !important;\n\n$font-copy: $font-family-sans-serif;\n$font-copy-weight: normal;\n\n$font-copy-secondary: \"Roboto Condensed\", $font-family-sans-serif;\n$font-copy-secondary-weight: 700;\n\n/* Size */\n$font-size-body-copy: $sys-font-spruce-bdy-20-font-size;\n$font-size-navigation: $sys-font-spruce-bdy-20-font-size;\n\n/* Line Height */\n$line-height-closed: 1;\n$line-height-neutral: 1.5;\n$line-height-open: 2;\n","/**\n  * REI Cedar Button variables:\n  * This file provides a contract between\n  * design tokens and cedar non-changing variables.\n  *\n  * TOC:\n  * Button Themes\n  ** Settings\n  ** Active\n  ** Focus\n  ** Disabled\n  * Button Sizes\n*/\n\n/**\n  * button themes\n*/\n\n/* default */\n$btn-bg: $sys-color-btn-primary;\n$btn-stroke: $sys-color-btn-primary-stroke;\n$btn-radius: $radius-button;\n$btn-text: $sys-color-btn-text;\n$btn-font-family: $sys-font-redwood-ui-30-font-family;\n$btn-font-size: $sys-font-redwood-ui-30-font-size;\n$btn-font-style: $sys-font-redwood-ui-30-font-style;\n$btn-font-weight: $sys-font-redwood-ui-30-font-weight;\n$btn-line-height: $sys-font-redwood-ui-30-line-height;\n\n/* Secondary */\n$btn-secondary-bg: $sys-color-btn-secondary;\n$btn-secondary-stroke: $sys-color-btn-secondary-stroke;\n$btn-secondary-text: $sys-color-btn-secondary-text;\n\n/**\n  * active\n*/\n\n/* default */\n$btn-active-bg: $sys-color-btn-primary-active;\n$btn-active-stroke: $sys-color-btn-primary-active-stroke;\n$btn-active-text: $sys-color-btn-text-active;\n\n/* secondary active */\n$btn-secondary-active-bg: $sys-color-btn-secondary-active;\n$btn-secondary-active-stroke: $sys-color-btn-secondary-active-stroke;\n$btn-secondary-active-text: $sys-color-btn-secondary-text;\n\n/**\n  * focus\n*/\n\n/* default */\n$btn-focus-text: $sys-color-btn-primary-focus-text;\n$btn-focus-stroke: $sys-color-btn-stroke-focus;\n\n/* secondary */\n$btn-secondary-focus-text: $sys-color-btn-secondary-focus-text;\n$btn-secondary-focus-stroke: $sys-color-btn-stroke-focus;\n\n/**\n  * disabled\n*/\n\n/* default */\n$btn-disabled-bg: $sys-color-btn-primary-disabled;\n$btn-disabled-stroke: $sys-color-btn-primary-disabled-stroke;\n$btn-disabled-text: $sys-color-btn-primary-disabled-text;\n\n/* secondary */\n$btn-secondary-disabled-bg: $sys-color-btn-secondary-disabled;\n$btn-secondary-disabled-stroke: $sys-color-btn-secondary-disabled-stroke;\n$btn-secondary-disabled-text: $sys-color-btn-secondary-disabled-text;\n\n/**\n  * button sizes\n*/\n\n/* small */\n$btn--sm-font-family: $sys-font-redwood-ui-30-font-family;\n$btn--sm-font-size: $sys-font-redwood-ui-30-font-size;\n$btn--sm-font-style: $sys-font-redwood-ui-30-font-style;\n$btn--sm-font-weight: $sys-font-redwood-ui-30-font-weight;\n$btn--sm-line-height: $sys-font-redwood-ui-30-line-height;\n\n/* extra small */\n$btn--xs-font-family: $sys-font-redwood-ui-20-font-family;\n$btn--xs-font-size: $sys-font-redwood-ui-20-font-size;\n$btn--xs-font-style: $sys-font-redwood-ui-20-font-style;\n$btn--xs-font-weight: $sys-font-redwood-ui-20-font-weight;\n$btn--xs-line-height: $sys-font-redwood-ui-20-line-height;\n","/* ==========================================================================\n   # LINK\n   ========================================================================== */\n\n/*\n* TOC:\n*\n* Base class\n* Style variants\n*/\n\n.cdr-link {\n  cursor: pointer;\n  display: inline;\n  border: none;\n  text-decoration: underline;\n  outline: none;\n  background-color: $color-transparent-background;\n  border-color: $color-transparent-border;\n  color: $sys-color-link;\n\n  &:hover,\n  &:active,\n  &:focus {\n    outline: none;\n    text-decoration: underline;\n    background-color: $color-transparent-background;\n    color: $sys-color-link-active;\n  }\n\n  &:focus {\n    outline: $outline-default-width $outline-default-style $color-outline-focus;\n  }\n\n  /* Style variants\n    ========================================================================== */\n\n  &--contrast,\n  &--contrast:hover,\n  &--contrast:active,\n  &--contrast:focus,\n  &--contrast:visited {\n    color: $sys-color-link-overlay;\n  }\n\n  &--overlay,\n  &--overlay:hover,\n  &--overlay:active,\n  &--overlay:focus,\n  &--overlay:visited {\n    color: $sys-color-link-contrast-overlay;\n  }\n\n  &--standalone {\n    text-decoration: none;\n\n    &:hover,\n    &:active,\n    &:focus,\n    &:visited {\n      text-decoration: underline;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_modifier__ = __webpack_require__(9);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cdr-a',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_modifier__["a" /* default */]],
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
});

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      class: _vm.modifierClass,
      attrs: { target: _vm.target, rel: _vm.newRel }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c28c42c", esExports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=rei-cdr-a.js.map