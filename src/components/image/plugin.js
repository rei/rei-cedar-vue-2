import CdrImage from './cdrImg.vue';

function install(Vue) {
  Vue.component('cdr-img', CdrImage);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrImage };
