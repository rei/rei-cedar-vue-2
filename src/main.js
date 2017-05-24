import 'svgxuse';
import './css/main.postcss';

import Components from './components/_index';
import Directives from './directives/_index';

function install(Vue, options) {// eslint-disable-line

  Object.keys(Components).forEach((key) => {
    Vue.component(Components[key].name, Components[key]);
  });

  // TODO output directives correctly
  Object.keys(Directives).forEach((key) => {
    Vue.directive(Directives[key].name, Directives[key]);
  });
}

export default {
  install,
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install }); // eslint-disable-line
}
