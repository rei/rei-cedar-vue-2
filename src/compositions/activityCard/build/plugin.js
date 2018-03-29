import CdrActivityCard from '../CdrActivityCard';

function install(Vue) {
  Vue.component('cdr-activity-card', CdrActivityCard);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
