import cdrActivityCard from './cdrActivityCard';

function install(Vue) {
  Vue.component('cdr-activity-card', cdrActivityCard);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { cdrActivityCard };
