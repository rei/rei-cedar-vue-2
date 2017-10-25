import CdrButton from './CdrButton';

function install(Vue) {
  Vue.component('cdr-button', CdrButton);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrButton };
