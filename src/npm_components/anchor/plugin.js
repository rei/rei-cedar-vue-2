import CdrAnchor from './cdrA';

function install(Vue) {
  Vue.component('cdr-a', CdrAnchor);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrAnchor };
