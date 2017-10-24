import CdrCardActivity from './cdrCardActivity';

function install(Vue) {
  Vue.component('cdr-card-activity', CdrCardActivity);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrCardActivity };
