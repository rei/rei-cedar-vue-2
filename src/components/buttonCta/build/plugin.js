import CdrButtonCta from '../CdrButtonCta';

function install(Vue) {
  Vue.component('cdr-button-cta', CdrButtonCta);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrButtonCta };
