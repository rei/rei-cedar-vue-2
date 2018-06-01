import CdrRow from '../CdrRow';
import CdrCol from '../CdrCol';

function install(Vue) {
  Vue.component('cdr-row', CdrRow);
  Vue.component('cdr-col', CdrCol);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
