import CdrPagination from '../CdrPagination';

function install(Vue) {
  Vue.component('cdr-pagination', CdrPagination);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrPagination };
