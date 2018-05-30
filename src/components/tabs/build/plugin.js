import CdrTabs from '../CdrTabs';

function install(Vue) {
  Vue.component('cdr-tabs', CdrTabs);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrTabs };
