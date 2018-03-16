import CdrText from './CdrText';

function install(Vue) {
  Vue.component('cdr-text', CdrText);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrText };
