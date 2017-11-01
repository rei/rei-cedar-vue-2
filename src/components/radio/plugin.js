import CdrRadio from './cdrRadio';

function install(Vue) {
  Vue.component('cdr-radio', CdrRadio);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrRadio };
