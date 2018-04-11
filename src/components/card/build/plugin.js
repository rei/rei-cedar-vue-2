import CdrCard from '../CdrCard';

function install(Vue) {
  Vue.component('cdr-card', CdrCard);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
