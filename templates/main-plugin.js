import {NAME-FULLNAME} from './{NAME-FULLNAME}';

function install(Vue) {
  Vue.component('{NAME-TAGNAME}', {NAME-FULLNAME});
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { {NAME-FULLNAME} };
