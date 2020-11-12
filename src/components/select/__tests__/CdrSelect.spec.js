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

  it('hide-label sets aria-label correctly', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        hideLabel: true,
      },
    });
    expect(wrapper.vm.$refs.select.hasAttribute('aria-label', 'test')).toBe(true);
  });

  it('renders a prompt', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        prompt: 'what is it'
      },
    });
    expect(wrapper.find('option').text()).toBe('what is it');
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

  it('emits change event with correct value', async () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        value: '4',
        options: ['3', '4'],
      },
    });
    const select = wrapper.findComponent({ ref: 'select'});
    const options = select.findAll('option');
    options.at(0).setSelected();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().change[0][0]).toBe('3');
    expect(wrapper.emitted().change[0][1] instanceof Event).toBeTruthy();
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
    const select = wrapper.findComponent({ ref: 'select' });
    const options = select.findAll('option');
    options.at(0).element.selected = true;
    options.at(1).element.selected = false;
    options.at(2).element.selected = true;
    select.trigger('change');
    expect(wrapper.emitted().change[0][0]).toEqual(['1', '3']);
    expect(wrapper.emitted().change[0][1] instanceof Event).toBeTruthy();
  });

  it('updating v-model data updates the select', async () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        value: '4',
        options: ['3', '4'],
      },
    });
    const select = wrapper.findComponent({ ref: 'select' });
    const options = select.findAll('option');
    wrapper.setProps({value: '3'});
    await wrapper.vm.$nextTick();
    expect(select.element.value).toBe('3');
    expect(options.at(0).element.selected).toBeTruthy();
  });

  it('renders info action slot', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'info-action'
      },
      slots: {
        'info-action': '🤠',
      },
    });
    expect(wrapper.find('.cdr-select__info-action').text()).toBe('🤠');
  });

  it('renders helper-text slot', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'info-action'
      },
      slots: {
        'helper-text': 'yee haw',
      },
    });
    expect(wrapper.find('.cdr-label-standalone__helper').text()).toBe('yee haw');
  });

  it('renders info slot', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'info-action'
      },
      slots: {
        'info': 'howdy',
      },
    });
    expect(wrapper.find('.cdr-label-standalone__info').text()).toBe('howdy');
  });

  it('renders pre-icon slot', () => {
    const wrapper = shallowMount(CdrSelect, {
      propsData: {
        label: 'test',
      },
      slots: {
        'pre-icon': '🤠',
      },
    });
    expect(wrapper.find('.cdr-select__pre-icon').text()).toBe('🤠');
  });

  it('renders error slot when error state is active', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        error: true
      },
      slots: {
        'error': 'whoops',
      },
    });
    expect(wrapper.find('.cdr-form-error').text()).toBe('whoops');
  });

  it('renders text when passed as error prop', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        error: 'wrong!'
      },
    });
    expect(wrapper.find('.cdr-form-error').text()).toBe('wrong!');
  });

  it('does not render error slot when error state is inactive', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        error: false
      },
      slots: {
        'error': 'whoops',
      },
    });
    expect(wrapper.find('.cdr-form-error').exists()).toBe(false);
  });
});
