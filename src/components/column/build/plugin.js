import CdrCol from '../CdrCol';

function install(Vue) {
  Vue.component('cdr-col', CdrCol);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
