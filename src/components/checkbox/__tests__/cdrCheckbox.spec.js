import { shallow } from '@vue/test-utils';
import cdrCheckbox from 'componentsdir/checkbox/cdrCheckbox';


describe('cdrCheckbox.vue', () => {
  it('renders an input', () => {
    const wrapper = shallow(cdrCheckbox);
    expect(wrapper.vm.$refs.checkbox.tagName).toBe('INPUT');
  });

  it('is type checkbox', () => {
    const wrapper = shallow(cdrCheckbox);
    expect(wrapper.vm.$refs.checkbox.hasAttribute('type', 'checkbox')).toBe(true);
  });

  it('renders a label element', () => {
    const wrapper = shallow(cdrCheckbox);
    expect(wrapper.vm.$refs.label.tagName).toBe('LABEL');
  });

  it('renders label text correctly', () => {
    const wrapper = shallow(cdrCheckbox, {
      slots: {
        default: `<span>Label Test</span>`,
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test');
  });
  
  it('adds a custom label class correctly', () => {
    const wrapper = shallow(cdrCheckbox, {
      propsData: {
        labelClass: 'custom-label-class',
      },
      slots: {
        default: `<span>Label Test</span>`,
      },
    });
    expect(wrapper.vm.$refs.label.classList.contains('custom-label-class')).toBe(true);
  });

  it('maps input id to label for correctly', () => {
    const wrapper = shallow(cdrCheckbox, {
      propsData: {
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.checkbox.id).toBe(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = shallow(cdrCheckbox);
    expect(wrapper.vm.$refs.checkbox.id).toBe(wrapper.vm._uid.toString());
  });

  it('watches values correctly', () => {
    const wrapper = shallow(cdrCheckbox, {
      propsData: {
        value: false,
      },
    });
    wrapper.setProps({ value: true });
    expect(wrapper.vm.value).toBe(true);
    expect(wrapper.vm.newValue).toBe(true);
  });

  it('emits change events with correct values for default checkbox', () => {
    const wrapper = shallow(cdrCheckbox, {
      propsData: {
        value: false,
      },
    });
    const cb = wrapper.find('.cdr-checkbox');
    cb.element.click();
    expect(wrapper.emitted().change[0][0]).toBe(true);
    cb.element.click();
    expect(wrapper.emitted().change[1][0]).toBe(false);
  });
  
  it('emits change events with correct values for custom checkbox', () => {
    const wrapper = shallow(cdrCheckbox, {
      propsData: {
        trueValue: 'checked',
        falseValue: 'unchecked',
        value: '',
      },
      attachToDocument: true,
    });
    const cb = wrapper.find('.cdr-checkbox');
    cb.element.click();
    expect(wrapper.emitted().change[0][0]).toBe('checked');
    cb.element.click();
    expect(wrapper.emitted().change[1][0]).toBe('unchecked');
  });

  it('emits change events with correct values for group checkbox', () => {
    const wrapper = shallow(cdrCheckbox, {
      propsData: {
        customValue: 'b',
        value: ['a'],
      },
      attachToDocument: true,
    });
    const cb = wrapper.find('.cdr-checkbox');
    cb.element.click();
    expect(wrapper.emitted().change[0][0]).toEqual(['a', 'b']);
    cb.element.click();
    expect(wrapper.emitted().change[1][0]).toEqual(['a']);
  });
});
