import CdrLead from '../CdrLead';

function install(Vue) {
  Vue.component('cdr-lead', CdrLead);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrLead };
