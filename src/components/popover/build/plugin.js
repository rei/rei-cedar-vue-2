import CdrPopover from '../CdrPopover';

function install(Vue) {
  Vue.component('cdr-popover', CdrPopover);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrPopover };
