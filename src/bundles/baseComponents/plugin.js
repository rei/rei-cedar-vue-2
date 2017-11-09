import components from './_index';

function install(Vue) {
  Object.keys(components).forEach((key) => {
    if (key === 'default') return;
    Vue.component(components[key].name, components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { components };
