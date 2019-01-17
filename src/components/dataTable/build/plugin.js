import CdrDataTable from '../CdrDataTable';

function install(Vue) {
  Vue.component('cdr-data-table', CdrDataTable);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrDataTable };
