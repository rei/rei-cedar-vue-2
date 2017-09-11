import 'svgxuse';
import './css/main.postcss';

import * as components from './components/_index';
import * as compositions from './compositions/_index';
import * as directives from './directives/_index';

function install(Vue, options) { // eslint-disable-line no-unused-vars
  Object.keys(components).forEach((key) => {
    if (key === 'default') return;
    Vue.component(components[key].name, components[key]);
  });

  Object.keys(compositions).forEach((key) => {
    if (key === 'default') return;
    Vue.component(compositions[key].name, compositions[key]);
  });

  Object.keys(directives).forEach((key) => {
    if (key === 'default') return;
    Vue.directive(key, directives[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install); // eslint-disable-line
}

export default install;

export {
  components,
  compositions,
  directives,
};
