import { shallow } from '@vue/test-utils';
import selectComp from 'componentsdir/select/cdrSelect';
import { toArray } from 'lodash';

describe('cdrSelect.vue', () => {
  it('renders a label element', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.tagName).toBe('LABEL');
  });

  it('renders label correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test');
  });

  it('renders required label correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'Label Test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test*');
  });

  it('hide-label sets aria-label correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
        hideLabel: true,
      },
    });
    expect(wrapper.vm.$refs.select.hasAttribute('aria-label', 'test')).toBe(true);
  });

  it('maps select id to label for correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'testing',
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.select.id).toBe(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'testing',
      },
    });
    expect(wrapper.vm.$refs.select.id).toBe(wrapper.vm._uid.toString());
  });

  it('renders a select element', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.select.tagName).toBe('SELECT');
  });

  it('sets select name attribute correctly', () => {
    const wrapper = shallow(selectComp, {
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
    const wrapper = shallow(selectComp, {
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
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.select.hasAttribute('required', 'required')).toBe(true);
  });

  it('sets select autofocus attribute correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
      },
      attrs: {
        autofocus: true,
      }
    });
    expect(wrapper.vm.$refs.select.hasAttribute('autofocus')).toBe(true);
  });

  it('sets select size attribute correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
        size: '4',
      },
    });
    expect(wrapper.vm.$refs.select.hasAttribute('size', '4')).toBe(true);
  });

  it('sets select multiple attribute correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'Label Test',
        multiple: true,
      },
    });
    expect(wrapper.vm.$refs.select.hasAttribute('multiple')).toBe(true);
  });

  it('renders prompt value correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
        prompt: 'test prompt'
      },
    });
    const opts = toArray(wrapper.vm.$refs.select.options);
    expect(opts[0].value).toBe('');
    expect(opts[0].text).toBe('test prompt');
  });

  it('renders select value correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
        options: ['1', '2'],
      },
    });
    wrapper.setProps({ value: '1' });
    expect(wrapper.vm.$refs.select.value).toBe('1');
  });

  it('renders multiple select values correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
        multiple: true,
        value: ['1', '2'],
        options: ['1', '2', '3'],
      },
    });
    const optArr = toArray(wrapper.vm.$refs.select.options);
    const selected = optArr.filter(o => o.selected === true).map(o => o.value);
    expect(selected).toEqual(['1', '2']);
  });

  it('renders select value from object def correctly', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
        value: '1',
        options: [{
          value: '1',
          text: 'one',
        },
        {
          value: '2',
          text: 'two',
        }],
      },
    });
    expect(wrapper.vm.$refs.select.value).toBe('1');
  });

  it('renders multiple select values from object def correctly', () => {
    const wrapper = shallow(selectComp, {
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
    const optArr = toArray(wrapper.vm.$refs.select.options);
    const selected = optArr.filter(o => o.selected === true).map(o => o.value);
    expect(selected).toEqual(['1', '2']);
  });

  it('emits input event with correct value', () => {
    const wrapper = shallow(selectComp, {
      propsData: {
        label: 'test',
        value: '2',
        options: ['1', '2'],
      },
    });
    const select = wrapper.find('.cdr-select');
    wrapper.setProps({ value: '1' });
    select.trigger('input');
    expect(wrapper.emitted().input[0][0]).toBe('1');
  });

  it('emits input event with correct value for multiple', () => {
    const wrapper = shallow(selectComp, {
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
    const select = wrapper.find('.cdr-select');
    select.trigger('input');
    expect(wrapper.emitted().input[0][0]).toEqual(['1', '3']);
  });
});
