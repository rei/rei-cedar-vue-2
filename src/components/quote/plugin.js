import CdrQuote from './CdrQuote';

function install(Vue) {
  Vue.component('cdr-quote', CdrQuote);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrQuote };
