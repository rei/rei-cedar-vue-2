import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrCheckbox from 'componentdir/checkbox/CdrCheckbox';

describe('CdrCheckbox', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        labelClass: 'custom-label-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('is type checkbox', () => {
    const wrapper = mount(CdrCheckbox);
    expect(wrapper.find('input').attributes('type')).toBe('checkbox');
  });

  it('renders a label element', () => {
    const wrapper = mount(CdrCheckbox);
    expect(wrapper.find('label').exists()).toBe(true);
  });

  it('adds a custom label class correctly', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        labelClass: 'custom-label-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-label-class').exists()).toBe(true);
  });

  it('adds a custom input class correctly', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        inputClass: 'custom-input-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-input-class').exists()).toBe(true);
  });

  it('adds a custom content class correctly', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        contentClass: 'custom-content-class',
      },
      slots: {
        default: 'Label Test',
      },
    });
    expect(wrapper.find('.custom-content-class').exists()).toBe(true);
  });

  it('watches values correctly', async () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        modelValue: false,
      },
    });
    wrapper.setProps({ modelValue: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.modelValue).toBe(true);
  });

  it('emits change events with correct values for default checkbox', async () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        modelValue: false,
      },
    });
    const cb = wrapper.find('input');
    cb.trigger('click');

    cb.trigger('click');
    console.log(cb.html())

    await wrapper.vm.$nextTick();
    console.log('EMISSIONS', wrapper.emitted())
    
    expect(wrapper.emitted().change[0][0]).toBe(true);
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toBe(false);
  });

  it('emits change events with correct values for custom checkbox', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        trueValue: 'checked',
        falseValue: 'unchecked',
        modelValue: '',
      },
    });
    const cb = wrapper.find('input');
    cb.trigger('click');
    console.log('tru', wrapper.emitted().click)
    expect(wrapper.emitted().change[0][0]).toBe('checked');
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toBe('unchecked');
  });

  it('emits change events with correct values for group checkbox', () => {
    const wrapper = mount(CdrCheckbox, {
      propsData: {
        customValue: 'b',
        modelValue: ['a'],
      },
    });
    const cb = wrapper.find('input');
    cb.trigger('click');
    expect(wrapper.emitted().change[0][0]).toEqual(['a', 'b']);
    cb.trigger('click');
    expect(wrapper.emitted().change[1][0]).toEqual(['a']);
  });
});
