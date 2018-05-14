import CdrIconButton from '../CdrIconButton';

function install(Vue) {
  Vue.component('cdr-icon-button', CdrIconButton);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrIconButton };
