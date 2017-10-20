import CdrRadio from './cdrRadio.vue';

function install(Vue) {
  Vue.component('cdr-radio', CdrRadio);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrRadio };
