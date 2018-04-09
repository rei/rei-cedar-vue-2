import CdrMediaObject from '../CdrMediaObject';

function install(Vue) {
  Vue.component('cdr-media-object', CdrMediaObject);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
