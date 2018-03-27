import CdrA from './cdrA';

function install(Vue) {
  Vue.component('cdr-a', CdrA);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
