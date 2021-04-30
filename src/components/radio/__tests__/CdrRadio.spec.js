import { mount } from '../../../../test/vue-jest-style-workaround.js';
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
    const wrapper = mount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.find('input').attributes('type')).toBe('radio');
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
    const wrapper = mount(CdrRadio, {
      propsData: {
        inputClass: 'custom-input-class',
        customValue: 'A',
        name: 'testName',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-input-class').exists()).toBe(true);
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
    const wrapper = mount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.find('input').attributes('name')).toBe('testName');
  });

  it('evaluates simple not checked state correctly', () => {
    const wrapper = mount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        modelValue: 'AA',
      },
    });
    console.log(wrapper.html(), 'no')
    expect(wrapper.find('input').checked).toBe(false);
  });

  it('evaluates simple checked state correctly', () => {
    const wrapper = mount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        modelValue: 'A',
      },
    });
    console.log(wrapper.html(), 'yes')
    expect(wrapper.find('input').attributes('checked')).toBe(true);
  });

  it('evaluates complex group not checked state correctly', () => {
    const wrapper = mount(CdrRadio, {
      propsData: {
        customValue: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        modelValue: {test: 'B'},
      },
    });
    expect(wrapper.find('input').checked).toBe(false);
  });

  it('evaluates complex group checked state correctly', () => {
    const wrapper = mount(CdrRadio, {
      propsData: {
        customValue: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        modelValue: {test: 'B', arr: [1,2,3]},
      },
    });
    expect(wrapper.find('input').checked).toBe(true);
  });

  xit('emits a change event with correct value', () => {
    const wrapper = mount(CdrRadio, {
      propsData: {
        customValue: 'A',
        name: 'testName',
        modelValue: '',
      },
    });

    const rb = wrapper.find('input');
    rb.trigger('click')
    expect(wrapper.emitted().change[0][0]).toBe('A');
  });
});
