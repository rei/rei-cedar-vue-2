import { shallowMount, mount } from '@vue/test-utils';

const styleHandler = {get: (target, prop) => prop }
const styleProxy = new Proxy({}, styleHandler);


const shallowMountWithStyle = (comp, options = {}) => {
  let opts = options;
  opts.global = options.global || {};
  opts.global.mocks = options.global.mocks || {};
  opts.global.mocks.$style = styleProxy;
  return shallowMount(comp, {
    ...opts,
  });
}

const mountWithStyle = (comp, options = {}) => {

  let opts = options;
  opts.global = options.global || {};
  opts.global.mocks = options.global.mocks || {};
  opts.global.mocks.$style = styleProxy;
  return mount(comp, {
    ...opts,
  });
}

export {
  shallowMountWithStyle as shallowMount,
  mountWithStyle as mount,
}
