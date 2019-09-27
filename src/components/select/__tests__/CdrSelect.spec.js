import { shallowMount } from '@vue/test-utils';
import { CdrSelect } from 'distdir/cedar.js';

describe('cdrSelect.vue', () => {
  it('renders a label element', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.tagName).toBe('LABEL');
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test ');
  });

  it('renders required label correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'Label Test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test Required');
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

  it('renders a select element', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'Label Test',
      },
    });
    const select = wrapper.find({ ref: 'select'});
    expect(select.is('select')).toBe(true);
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

  it('emits change event with correct value', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        value: '2',
        options: ['1', '2'],
      },
    });
    const select = wrapper.find({ ref: 'select'});
    wrapper.setProps({ value: '1' });
    select.trigger('change');
    expect(wrapper.emitted().change[0][0]).toBe('1');
  });

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
});
