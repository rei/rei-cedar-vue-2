import CdrLayout from '../CdrLayout';

function install(Vue) {
  Vue.component('cdr-layout', CdrLayout);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrLayout };
