import CdrBreadcrumb from '../CdrBreadcrumb';

function install(Vue) {
  Vue.component('cdr-breadcrumb', CdrBreadcrumb);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrBreadcrumb };
