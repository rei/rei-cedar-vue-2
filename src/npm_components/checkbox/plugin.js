import CdrCheckbox from './cdrCheckbox';

function install(Vue) {
  Vue.component('cdr-checkbox', CdrCheckbox);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrCheckbox };
