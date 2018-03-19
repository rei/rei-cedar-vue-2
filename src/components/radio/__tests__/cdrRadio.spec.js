import { shallow } from '@vue/test-utils';
import cdrRadio from 'componentsdir/radio/cdrRadio';

describe('cdrRadio.vue', () => {
  it('renders an input', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.tagName).toBe('INPUT');
  });

  it('is type radio', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.hasAttribute('type', 'radio')).toBe(true);
  });

  it('renders a label element', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.label.tagName).toBe('LABEL');
  });

  it('renders label text correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      },
      slots: {
        default: `<span>Label Test</span>`,
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test');
  });

  it('maps input id to label for correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.radio.id).toBe(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.id).toBe(wrapper.vm._uid.toString());
  });

  it('sets name attribute correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.hasAttribute('name', 'testName')).toBe(true);
  });

  it('evaluates simple not checked state correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'AA',
      },
    });
    expect(wrapper.vm.isChecked).toBe(false);
  });

  it('evaluates simple checked state correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).toBe(true);
  });

  it('evaluates group not checked state correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'B',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).toBe(false);
  });

  it('evaluates group checked state correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).toBe(true);
  });

  it('evaluates complex group not checked state correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        modelValue: {test: 'B'},
      },
    });
    expect(wrapper.vm.isChecked).toBe(false);
  });

  it('evaluates complex group checked state correctly', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        modelValue: {test: 'B', arr: [1,2,3]},
      },
    });
    expect(wrapper.vm.isChecked).toBe(true);
  });

  it('emits a change event with correct value', () => {
    const wrapper = shallow(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: '',
      },
    });
    wrapper.setProps({ value: 'B' });
    wrapper.vm.onChange();
    expect(wrapper.emitted().change[0][0]).toBe('B');
  });
});
