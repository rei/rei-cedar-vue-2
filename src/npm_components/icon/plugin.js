import CdrIcon from './cdrIcon.vue';

function install(Vue) {
  Vue.component('cdr-icon', CdrIcon);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrIcon };
