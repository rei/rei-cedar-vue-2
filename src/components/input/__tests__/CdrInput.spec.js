import { mount } from '../../../../test/vue-jest-style-workaround.js';
import sinon from 'sinon';
import CdrInput from 'componentdir/input/CdrInput';

describe('CdrInput', () => {
  it('renders correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        label: 'Label Test',
        id: 'renders'
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders number input correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        label: 'Label Test',
        id: 'renders',
        type: 'number',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders an input element', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'Label Test',
      },
    });
    expect(wrapper.find('.cdr-input').element.tagName).toBe('INPUT');
  });

  it('sets input name attribute correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'Label Test',
      },
      attrs: {
        name: 'testName',
      }
    });
    expect(wrapper.find('.cdr-input').attributes('name')).toBe('testName');
  });

  it('sets input disabled attribute correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        disabled: true,
      },
    });
    expect(wrapper.find('.cdr-input').attributes('disabled')).toBe('');
  });

  it('sets input readonly attribute correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      attrs: {
        readonly: true,
      },
    });
    expect(wrapper.find('.cdr-input').attributes('readonly')).toBe('');
  });

  it('sets input required attribute correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        required: true,
      },
    });
    expect(wrapper.find('.cdr-input').attributes('required')).toBe('');
  });

  // TODO a better test would be to validate what happens if value is set to foo123bar456 etc.
  it('sets attrs for numeric input', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        label: 'test',
        required: true,
        type: 'number',
        id: 'test',
      },
    });
    expect(wrapper.find('.cdr-input').attributes('novalidate')).toBe('');
    expect(wrapper.find('.cdr-input').attributes('pattern')).toBe('[0-9]*');
    expect(wrapper.find('.cdr-input').attributes('inputmode')).toBe('numeric');
  });

  it('sets input autofocus attribute correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      attrs: {
        autofocus: true,
      },
    });
    expect(wrapper.find('.cdr-input').attributes('autofocus')).toBe('');
  });

  it('sets input maxlength attribute correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      attrs: {
        maxlength: '20',
      },
    });
    expect(wrapper.find('.cdr-input').attributes('maxlength')).toBe('20');
  });

  it('sets input placeholder correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      attrs: {
        placeholder: 'test placeholder',
      },
    });
    expect(wrapper.find('.cdr-input').attributes('placeholder')).toBe('test placeholder');
  });

  it('sets multiline to textarea correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        rows: 2,
      },
    });
    expect(wrapper.find('textarea').element.tagName).toBe('TEXTAREA');
  });

  it('sets multiline rows correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        multiLine: true,
        rows: 10
      },
    });
    expect(wrapper.find('textarea').attributes('rows')).toBe('10');
  });

  it('sets default input type correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
    });
    expect(wrapper.find('.cdr-input').attributes('type')).toBe('text');
  });

  it('overrides input type correctly', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        type: 'url',
      },
    });
    expect(wrapper.find('.cdr-input').attributes('type')).toBe('url');
  });

  it('emits an input event', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        value: 'bar'
      },
    });
    const input = wrapper.find('.cdr-input');
    input.setValue('foo');
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('foo');
  });

  it('emits a blur event', () => {
    const spy = sinon.spy();
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      attrs: {
        onBlur: spy
      }
    });
    const input = wrapper.find('.cdr-input');
    input.trigger('blur')
    expect(spy.calledOnce).toBeTruthy();
  });

  it('emits a focus event', () => {
    const spy = sinon.spy();
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      attrs: {
        onFocus: spy
      }
    });
    const input = wrapper.find('.cdr-input');
    input.trigger('focus')
    expect(spy.calledOnce).toBeTruthy();
  });

  it('adds focused class to wrapper on input focus', async () => {
    const spy = sinon.spy();
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      attrs: {
        onFocus: spy
      }
    });
    const input = wrapper.find('.cdr-input');
    input.trigger('focus')
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.cdr-input--focus').exists()).toBeTruthy();
    input.trigger('blur')
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.cdr-input--focus').exists()).toBeFalsy();
  });

  it('emits a paste event', () => {
    const spy = sinon.spy();
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      attrs: {
        onPaste: spy
      }
    });
    const input = wrapper.find('.cdr-input');
    input.trigger('paste')
    expect(spy.calledOnce).toBeTruthy();
  });

  it('emits a keydown event', () => {
    const spy = sinon.spy();
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test'
      },
      attrs: {
        onKeydown: spy
      }
    });
    const input = wrapper.find('.cdr-input');
    input.trigger('keydown', {
      key: 'a'
    })
    expect(spy.called).toBeTruthy();
  });

  it('renders helper-text-bottom slot', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      slots: {
        'helper-text-bottom': 'very helpful',
      },
    });
    expect(wrapper.find('.cdr-input__helper-text').text()).toBe('very helpful');
  });

  it('renders pre-icon slot', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      slots: {
        'pre-icon': '🤠',
      },
    });
    expect(wrapper.find('.cdr-input__pre-icon').text()).toBe('🤠');
  });

  it('renders post-icon slot', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      slots: {
        'post-icon': '😎',
      },
    });
    expect(wrapper.find('.cdr-input__post-icon').text()).toBe('😎');
  });

  it('adds spacing class when post-icon slot is present', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      slots: {
        'post-icon': '😎',
      },
    });
    expect(wrapper.find('.cdr-input--posticon').exists()).toBe(true);
  });

// TODO: find way to check slot content in setup (probably a no) 
// OR do something on mount to detect this instead (probably most elegant option?)
// OR create a prop that user can use to signal number of post-icons (hammer solution)
  xit('adds spacing class when multiple elements are present in post-icon slot', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
      },
      slots: {
        'post-icon': '<div>😎</div><div>🤠</div>',
      },
    });
    expect(wrapper.find('.cdr-input--posticons').exists()).toBe(true);
  });

  it('renders info action slot', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        label: 'test',
        id: 'info-action'
      },
      slots: {
        'info-action': '🤠',
      },
    });
    expect(wrapper.find('.cdr-input__info-action').text()).toBe('🤠');
  });

  it('renders error slot when error state is active', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        error: true
      },
      slots: {
        'error': 'whoops',
      },
    });
    expect(wrapper.find('.cdr-form-error').text()).toBe('whoops');
  });

  it('renders text when passed as error', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        error: 'incorrect!'
      },
    });
    expect(wrapper.find('.cdr-form-error').text()).toBe('incorrect!');
  });

  it('does not render error slot when error state is inactive', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        error: false
      },
      slots: {
        'error': 'whoops',
      },
    });
    expect(wrapper.find('.cdr-form-error').exists()).toBe(false);
  });

  it('renders error slot instead of bottom helper slot when error is active', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        error: true,
      },
      slots: {
        'error': 'whoops',
        'helper-text-bottom': 'not me'
      },
    });
    expect(wrapper.find('.cdr-form-error').text()).toBe('whoops');
    expect(wrapper.find('.cdr-input__helper-text-bottom').exists()).toBe(false);
  });

  // NOTE - can't use v-model directly here, targeting the `data` prop instead
  it('updating v-model data updates the input', async () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        id: 'test',
        label: 'test',
        value: 'bar'
      },
    });
    const input = wrapper.find('.cdr-input');
    wrapper.setProps({value: ''});
    await wrapper.vm.$nextTick();
    expect(input.element.value).toBe('');
  });
});
