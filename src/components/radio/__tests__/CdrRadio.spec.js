import { shallowMount, mount } from '@vue/test-utils';
import CdrRadio from 'componentdir/radio/CdrRadio';

describe('CdrRadio', () => {
  it('renders an input', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('is type radio', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.hasAttribute('type', 'radio')).toBe(true);
  });

  it('adds a custom label class correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        labelClass: 'custom-label-class',
        customValue: 'A',
        name: 'testName',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.classList.contains('custom-label-class')).toBe(true);
  });

  it('adds a custom input class correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        inputClass: 'custom-input-class',
        customValue: 'A',
        name: 'testName',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.radio.classList.contains('custom-input-class')).toBe(true);
  });

  it('adds a custom content class correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        contentClass: 'custom-content-class',
        customValue: 'A',
        name: 'testName',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-content-class').exists()).toBe(true);
  });

  it('sets name attribute correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.hasAttribute('name', 'testName')).toBe(true);
  });

  it('evaluates simple not checked state correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        value: 'AA',
      },
    });
    expect(wrapper.vm.$refs.radio.checked).toBe(false);
  });

  it('evaluates simple checked state correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        value: 'A',
      },
    });
    expect(wrapper.vm.$refs.radio.checked).toBe(true);
  });

  it('evaluates complex group not checked state correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        value: {test: 'B'},
      },
    });
    expect(wrapper.vm.$refs.radio.checked).toBe(false);
  });

  it('evaluates complex group checked state correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        value: {test: 'B', arr: [1,2,3]},
      },
    });
    expect(wrapper.vm.$refs.radio.checked).toBe(true);
  });

  it('emits a change event with correct value', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        value: '',
      },
    });

    const rb = wrapper.find({ ref: 'radio'});
    rb.trigger('click')
    expect(wrapper.emitted().change[0][0]).toBe('A');
  });
});
