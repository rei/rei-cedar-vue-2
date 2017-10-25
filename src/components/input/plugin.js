import CdrInput from './cdrInput.vue';

function install(Vue) {
  Vue.component('cdr-input', CdrInput);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrInput };
