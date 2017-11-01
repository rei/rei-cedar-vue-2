import CdrSelect from './cdrSelect';

function install(Vue) {
  Vue.component('cdr-select', CdrSelect);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrSelect };
