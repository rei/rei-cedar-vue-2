import CdrImg from '../CdrImg';

function install(Vue) {
  Vue.component('cdr-img', CdrImg);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
