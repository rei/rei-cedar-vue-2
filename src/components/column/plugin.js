import CdrColumn from './cdrCol.vue';

function install(Vue) {
  Vue.component('cdr-col', CdrColumn);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrColumn };
