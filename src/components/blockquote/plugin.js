import CdrBlockquote from './CdrBlockquote';

function install(Vue) {
  Vue.component('cdr-blockquote', CdrBlockquote);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrBlockquote };
