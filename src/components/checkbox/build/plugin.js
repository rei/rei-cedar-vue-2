import CdrCheckbox from '../CdrCheckbox';

function install(Vue) {
  Vue.component('cdr-checkbox', CdrCheckbox);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
