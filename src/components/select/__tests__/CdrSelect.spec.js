import { shallowMount, mount } from '@vue/test-utils';
import CdrSelect from 'componentdir/select/CdrSelect';

describe('cdrSelect', () => {
  it('renders correctly', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'Label Test',
        id: 'renders'
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders required label correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'Label Test',
        required: true,
        id: 'required-label'
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('hide-label sets aria-label correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        hideLabel: true,
      },
    });
    expect(wrapper.vm.$refs.select.hasAttribute('aria-label', 'test')).toBe(true);
  });

  it('maps select id to label for correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'testing',
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.select.id).toBe(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'testing',
      },
    });
    expect(wrapper.vm.$refs.select.id).toBe(wrapper.vm._uid.toString());
  });

  it('sets select name attribute correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'Label Test',
      },
      attrs: {
        name: 'testing',
      }
    });
    expect(wrapper.vm.$refs.select.hasAttribute('name', 'testing')).toBe(true);
  });

  it('sets select disabled attribute correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
      },
      attrs: {
        disabled: true,
      }
    });
    expect(wrapper.vm.$refs.select.hasAttribute('disabled')).toBe(true);
  });

  it('sets select disabled caret classname correctly', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
      },
      attrs: {
        disabled: true,
      }
    });
    const caret = wrapper.find('svg');
    expect(caret.classes()).toContain('cdr-select__caret--disabled');
  });

  it('sets select required attribute correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.select.hasAttribute('required', 'required')).toBe(true);
  });

  it('sets select autofocus attribute correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
      },
      attrs: {
        autofocus: true,
      }
    });
    expect(wrapper.vm.$refs.select.hasAttribute('autofocus')).toBe(true);
  });

  it('sets select multiple attribute correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'Label Test',
        multiple: true,
        value: [],
      },
    });
    expect(wrapper.vm.$refs.select.hasAttribute('multiple')).toBe(true);
  });

  it('emits input event with correct value', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        value: '2',
        options: ['1', '2'],
      },
    });
    const select = wrapper.find({ ref: 'select'});
    wrapper.setProps({ value: '1' });
    select.trigger('input');
    expect(wrapper.emitted().input[0][0]).toBe('1');
  });

  // Deprecated event and should be removed
  // when the change event is removed.
  it('emits change event with correct value', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        value: '4',
        options: ['3', '4'],
      },
    });
    const select = wrapper.find({ ref: 'select'});
    wrapper.setProps({ value: '3' });
    select.trigger('change');
    expect(wrapper.emitted().change[0][0]).toBe('3');
  });

  it('emits input event with correct value for multiple', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        multiple: true,
        value: ['1', '2'],
        options: [{
          value: '1',
          text: 'one',
        },
        {
          value: '2',
          text: 'two',
        },
        {
          value: '3',
          text: 'three',
        }],
      },
    });
    wrapper.setProps({ value: ['1', '3'] });
    const propValues = wrapper.vm.value;
    for(let o of wrapper.vm.$refs.select.options) {
      propValues.indexOf(o.value) >= 0 ? o.selected = true : o.selected = false;
    }
    const select = wrapper.find({ ref: 'select'});
    select.trigger('input');
    expect(wrapper.emitted().input[0][0]).toEqual(['1', '3']);
  });

  // Deprecated event and should be removed
  // when the change event is removed.
  it('emits change event with correct value for multiple', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        multiple: true,
        value: ['1', '2'],
        options: [{
          value: '1',
          text: 'one',
        },
        {
          value: '2',
          text: 'two',
        },
        {
          value: '3',
          text: 'three',
        }],
      },
    });
    wrapper.setProps({ value: ['1', '3'] });
    const propValues = wrapper.vm.value;
    for(let o of wrapper.vm.$refs.select.options) {
      propValues.indexOf(o.value) >= 0 ? o.selected = true : o.selected = false;
    }
    const select = wrapper.find({ ref: 'select'});
    select.trigger('input');
    expect(wrapper.emitted().change[0][0]).toEqual(['1', '3']);
  });

  // NOTE - can't use v-model directly here, targeting the `data` prop instead
  it('updating v-model data updates the select', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        value: '4',
        options: ['3', '4'],
      },
    });
    const select = wrapper.find({ ref: 'select' });
    wrapper.setProps({value: '3'});
    expect(select.element.value).toBe('3');
  });

  it('renders info slot', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'info-slot'
      },
      slots: {
        'info': '🤠',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders helper-text slot', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'helper-text'
      },
      slots: {
        'helper-text': 'very helpful',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
