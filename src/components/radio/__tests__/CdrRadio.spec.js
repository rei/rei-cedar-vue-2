import { shallowMount, mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrRadio from 'componentdir/radio/CdrRadio';

describe('CdrRadio', () => {
  it('renders an input', () => {
    const wrapper = mount(CdrRadio, {
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
    expect(wrapper.find('radio').hasAttribute('type', 'radio')).toBe(true);
  });

  it('adds a custom label class correctly', () => {
    const wrapper = mount(CdrRadio, {
      propsData: {
        labelClass: 'custom-label-class',
        customValue: 'A',
        name: 'testName',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-label-class').exists()).toBe(true);
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
    expect(wrapper.find('radio').classList.contains('custom-input-class')).toBe(true);
  });

  it('adds a custom content class correctly', () => {
    const wrapper = mount(CdrRadio, {
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
    expect(wrapper.find('radio').hasAttribute('name', 'testName')).toBe(true);
  });

  it('evaluates simple not checked state correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        value: 'AA',
      },
    });
    expect(wrapper.find('radio').checked).toBe(false);
  });

  it('evaluates simple checked state correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        value: 'A',
      },
    });
    expect(wrapper.find('radio').checked).toBe(true);
  });

  it('evaluates complex group not checked state correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        value: {test: 'B'},
      },
    });
    expect(wrapper.find('radio').checked).toBe(false);
  });

  it('evaluates complex group checked state correctly', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        value: {test: 'B', arr: [1,2,3]},
      },
    });
    expect(wrapper.find('radio').checked).toBe(true);
  });

  it('emits a change event with correct value', () => {
    const wrapper = shallowMount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        value: '',
      },
    });

    const rb = wrapper.findComponent({ ref: 'radio'});
    rb.trigger('click')
    expect(wrapper.emitted().change[0][0]).toBe('A');
  });
});
