import CdrRating from '../CdrRating';

function install(Vue) {
  Vue.component('cdr-rating', CdrRating);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
