import 'svgxuse';
import './css/main.postcss';

import Components from './components/_index';
import Directives from './directives/_index';

function install(Vue, options) { // eslint-disable-line no-unused-vars
  Object.keys(Components).forEach((key) => {
    Vue.component(Components[key].name, Components[key]);
  });

  Object.keys(Directives).forEach((key) => {
    Vue.directive(key, Directives[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install); // eslint-disable-line
}

export default install;

export {
  Components,
  Directives,
};
