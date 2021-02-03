import { shallowMount, mount } from '@vue/test-utils';

const styleHandler = {get: (target, prop) => prop }
const styleProxy = new Proxy({}, styleHandler);


const shallowMountWithStyle = (comp, options) => {
  return shallowMount(comp, {
    ...options,
    global: {
      mocks: {
        $style: styleProxy,
      }
    }
  });
}

const mountWithStyle = (comp, options) => {
  return mount(comp, {
    ...options,
    global: {
      mocks: {
        $style: styleProxy,
      }
    }
  });
}

export {
  shallowMountWithStyle as shallowMount,
  mountWithStyle as mount,
}
