import CdrTable from '../CdrTable';

function install(Vue) {
  Vue.component('cdr-table', CdrTable);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrTable };
