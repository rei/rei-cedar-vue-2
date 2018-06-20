import CdrIconOnlyButton from '../CdrIconOnlyButton';

function install(Vue) {
  Vue.component('cdr-icon-only-button', CdrIconOnlyButton);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrIconOnlyButton };
