import cdrSearch from './cdrSearch';

function install(Vue) {
  Vue.component('cdr-search', cdrSearch);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { cdrSearch };
