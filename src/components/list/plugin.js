import CdrList from './cdrList.vue';

function install(Vue) {
  Vue.component('cdr-list', CdrList);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrList };
