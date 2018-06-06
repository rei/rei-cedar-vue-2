import CdrLink from '../CdrLink';

function install(Vue) {
  Vue.component('cdr-link', CdrLink);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
