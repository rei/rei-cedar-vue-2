import CdrTabs from '../CdrTabs';
import CdrTabPanel from '../CdrTabPanel';

function install(Vue) {
  Vue.component('cdr-tabs', CdrTabs);
  Vue.component('cdr-tab-panel', CdrTabPanel);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
