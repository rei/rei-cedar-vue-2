import { shallow } from '@vue/test-utils';
import CdrRadio from 'componentsdir/radio/CdrRadio';

describe('CdrRadio.vue', () => {
  it('renders an input', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.tagName).toBe('INPUT');
  });

  it('is type radio', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.hasAttribute('type', 'radio')).toBe(true);
  });

  it('renders a label element', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.label.tagName).toBe('LABEL');
  });

  it('adds a custom label class correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        labelClass: 'custom-label-class',
        value: 'A',
        name: 'testName',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.classList.contains('custom-label-class')).toBe(true);
  });
  
  it('adds a custom input class correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        inputClass: 'custom-input-class',
        value: 'A',
        name: 'testName',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.radio.classList.contains('custom-input-class')).toBe(true);
  });
  
  it('adds a custom content class correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        contentClass: 'custom-content-class',
        value: 'A',
        name: 'testName',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-content-class').exists()).toBe(true);
  });

  it('sets name attribute correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.hasAttribute('name', 'testName')).toBe(true);
  });

  it('evaluates simple not checked state correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'AA',
      },
    });
    expect(wrapper.vm.isChecked).toBe(false);
  });

  it('evaluates simple checked state correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).toBe(true);
  });

  it('evaluates group not checked state correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: 'B',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).toBe(false);
  });

  it('evaluates group checked state correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).toBe(true);
  });

  it('evaluates complex group not checked state correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        modelValue: {test: 'B'},
      },
    });
    expect(wrapper.vm.isChecked).toBe(false);
  });

  it('evaluates complex group checked state correctly', () => {
    const wrapper = shallow(CdrRadio, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        modelValue: {test: 'B', arr: [1,2,3]},
      },
    });
    expect(wrapper.vm.isChecked).toBe(true);
  });

  it('emits a change event with correct value', () => {
    const wrapper = shallow(CdrRadio, {
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
