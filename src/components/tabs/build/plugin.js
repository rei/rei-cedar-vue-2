import CdrTabs from '../CdrTabs';
import CdrTab from '../CdrTab';

function install(Vue) {
  Vue.component('cdr-tabs', CdrTabs);
  Vue.component('cdr-tab', CdrTab);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

// export { CdrTabs, CdrTab };
