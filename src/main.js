import './css/main.postcss';

import Components from './components/_index';
// import Directives from './directives/_index'

const defaults = {
  componentPrefix: 'cdr-',
  directivePrefix: '',
};

function install(Vue, options) {
  const opts = Object.assign(defaults, (options || {}));

  Object.keys(Components).forEach((key) => {
    const tag = `${opts.componentPrefix}${key}`.toLowerCase();
    Vue.component(tag, Components[key]);
  });
}

export default {
  install,
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install }); // eslint-disable-line
}
