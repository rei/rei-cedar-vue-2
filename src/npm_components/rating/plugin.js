import CdrRating from './cdrRating.vue';

function install(Vue) {
  Vue.component('cdr-rating', CdrRating);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrRating };
