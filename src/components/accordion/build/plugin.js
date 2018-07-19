import CdrAccordion from '../CdrAccordion';

function install(Vue) {
  Vue.component('cdr-accordion', CdrAccordion);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrAccordion };
