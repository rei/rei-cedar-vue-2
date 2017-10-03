import CdrAnchor from './cdrA.vue';

function install(Vue, options) {
  Vue.component('cdr-a', CdrAnchor);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrAnchor };
