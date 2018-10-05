import CdrThemer from '../CdrThemer';

function install(Vue) {
  Vue.component('cdr-themer', CdrThemer);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrThemer };
