import CdrRow from './cdrRow.vue';

function install(Vue) {
  Vue.component('cdr-row', CdrRow);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrRow };
