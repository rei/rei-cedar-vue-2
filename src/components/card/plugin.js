import CdrCard from './cdrCard.vue';

function install(Vue) {
  Vue.component('cdr-card', CdrCard);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrCard };
