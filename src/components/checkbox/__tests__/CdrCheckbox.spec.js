import { shallowMount } from '@vue/test-utils';
import { CdrCheckbox } from 'distdir/cedar.esm.js';

describe('CdrCheckbox.vue', () => {
  it('renders an input', () => {
    const wrapper = shallowMount(CdrCheckbox);
    expect(wrapper.vm.$refs.checkbox.tagName).toBe('INPUT');
  });

  it('is type checkbox', () => {
    const wrapper = shallowMount(CdrCheckbox);
    expect(wrapper.vm.$refs.checkbox.hasAttribute('type', 'checkbox')).toBe(true);
  });

  it('renders a label element', () => {
    const wrapper = shallowMount(CdrCheckbox);
    expect(wrapper.vm.$refs.label.tagName).toBe('LABEL');
  });
  
  it('adds a custom label class correctly', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        labelClass: 'custom-label-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.classList.contains('custom-label-class')).toBe(true);
  });
  
  it('adds a custom input class correctly', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        inputClass: 'custom-input-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.checkbox.classList.contains('custom-input-class')).toBe(true);
  });
  
  it('adds a custom content class correctly', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        contentClass: 'custom-content-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-content-class').exists()).toBe(true);
  });

  it('watches values correctly', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        value: false,
      },
    });
    wrapper.setProps({ value: true });
    expect(wrapper.vm.value).toBe(true);
    expect(wrapper.vm.newValue).toBe(true);
  });

  it('emits change events with correct values for default checkbox', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        value: false,
      },
    });
    const cb = wrapper.find({ ref: 'checkbox'});
    cb.trigger('click');
    expect(wrapper.emitted().change[0][0]).toBe(true);
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toBe(false);
  });
  
  it('emits change events with correct values for custom checkbox', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        trueValue: 'checked',
        falseValue: 'unchecked',
        value: '',
      },
    });
    const cb = wrapper.find({ ref: 'checkbox'});
    cb.trigger('click');
    expect(wrapper.emitted().change[0][0]).toBe('checked');
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toBe('unchecked');
  });
  
  it('emits change events with correct values for group checkbox', () => {
    const wrapper = shallowMount(CdrCheckbox, {
      propsData: {
        customValue: 'b',
        value: ['a'],
      },
    });
    const cb = wrapper.find({ ref: 'checkbox'});
    cb.trigger('click');
    expect(wrapper.emitted().change[0][0]).toEqual(['a', 'b']);
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toEqual(['a']);
  });
});
