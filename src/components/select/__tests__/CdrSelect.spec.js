import { mount } from '../../../../test/vue-jest-style-workaround.js';
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
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        hideLabel: true,
        id: 'test',
      },
    });
    expect(wrapper.find('select').attributes('aria-label')).toBe('test');
  });

  it('renders a prompt', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        prompt: 'what is it',
        id: 'test',
      },
    });
    expect(wrapper.find('option').text()).toBe('what is it');
  });

  it('sets select name attribute correctly', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'Label Test',
        id: 'test',
      },
      attrs: {
        name: 'testing',
      }
    });
    expect(wrapper.find('select').attributes('name')).toBe('testing');
  });

  it('sets select disabled attribute correctly', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'test',
      },
      attrs: {
        disabled: true,
      }
    });
    expect(wrapper.find('select').attributes('disabled')).toBe('');
  });

  it('sets select disabled caret classname correctly', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'test',
      },
      attrs: {
        disabled: true,
      }
    });
    const caret = wrapper.find('svg');
    expect(caret.classes()).toContain('cdr-select__caret--disabled');
  });

  it('sets select required attribute correctly', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        required: true,
        id: 'test',
      },
    });
    expect(wrapper.find('select').attributes('required')).toBe('');
  });

  it('sets select autofocus attribute correctly', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'test',
      },
      attrs: {
        autofocus: true,
      }
    });
    expect(wrapper.find('select').attributes('autofocus')).toBe('');
  });

  it('sets select multiple attribute correctly', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'Label Test',
        multiple: true,
        value: [],
        id: 'test',
      },
    });
    expect(wrapper.find('select').attributes('multiple')).toBe('');
  });

  xit('emits change event with correct value', async () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        value: '4',
        options: ['3', '4'],
        id: 'test',
      },
    });
    const select = wrapper.find('select');
    const options = select.findAll('option');
    console.log('whooooo', options);
    options[0].setSelected();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().change[0][0]).toBe('3');
    expect(wrapper.emitted().change[0][1] instanceof Event).toBeTruthy();
  });

  xit('emits change event with correct value for multiple', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        multiple: true,
        id: 'test',
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
    const select = wrapper.find('select');
    const options = select.findAll('option');
    console.log('multiple opt', options)
    options[0].element.selected = true;
    options[1].element.selected = false;
    options[2].element.selected = true;
    select.trigger('change');
    console.log('multi', wrapper.emitted())
    expect(wrapper.emitted().change[0][0]).toEqual(['1', '3']);
    expect(wrapper.emitted().change[0][1] instanceof Event).toBeTruthy();
  });

  it('updating v-model data updates the select', async () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        value: '4',
        id: 'test',
        options: ['3', '4'],
      },
    });
    const select = wrapper.find('select');
    const options = select.findAll('option');
    wrapper.setProps({modelValue: '3'});
    await wrapper.vm.$nextTick();
    expect(select.element.value).toBe('3');
    expect(options[0].element.selected).toBeTruthy();
  });

  it('renders info action slot', () => {
    const wrapper = mount(CdrSelect, {
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
        id: 'info-action',
      },
      slots: {
        'info': 'howdy',
      },
    });
    expect(wrapper.find('.cdr-label-standalone__info').text()).toBe('howdy');
  });

  it('renders pre-icon slot', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'test',
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
        id: 'test',
        error: true,
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
        id: 'test',
        error: 'wrong!',
      },
    });
    expect(wrapper.find('.cdr-form-error').text()).toBe('wrong!');
  });

  it('does not render error slot when error state is inactive', () => {
    const wrapper = mount(CdrSelect, {
      propsData: {
        label: 'test',
        id: 'test',
        error: false,
      },
      slots: {
        'error': 'whoops',
      },
    });
    expect(wrapper.find('.cdr-form-error').exists()).toBe(false);
  });
});
