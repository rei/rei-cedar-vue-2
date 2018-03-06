import CdrCaption from './CdrCaption';

function install(Vue) {
  Vue.component('cdr-caption', CdrCaption);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrCaption };
