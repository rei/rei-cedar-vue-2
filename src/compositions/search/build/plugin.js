import CdrSearch from '../CdrSearch';

function install(Vue) {
  Vue.component('cdr-search', CdrSearch);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
