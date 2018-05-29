import CdrCta from '../CdrCta';

function install(Vue) {
  Vue.component('cdr-cta', CdrCta);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrCta };
