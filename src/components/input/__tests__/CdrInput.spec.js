import { shallowMount, mount } from '@vue/test-utils';
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

  it('generates an id correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'testing',
      },
    });
    expect(wrapper.vm.$refs.input.id).toBe(wrapper.vm._uid.toString());
  });

  it('renders an input element', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.input.tagName).toBe('INPUT');
  });

  it('sets input name attribute correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'Label Test',
      },
      attrs: {
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.input.hasAttribute('name', 'testName')).toBe(true);
  });

  it('sets input disabled attribute correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
        disabled: true,
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('disabled')).toBe(true);
  });

  it('sets input readonly attribute correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      attrs: {
        readonly: true,
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('readonly')).toBe(true);
  });

  it('sets input required attribute correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('required')).toBe(true);
  });

  it('sets input autofocus attribute correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      attrs: {
        autofocus: true,
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('autofocus')).toBe(true);
  });

  it('sets input maxlength attribute correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      attrs: {
        maxlength: '20',
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('maxlength', '20')).toBe(true);
  });

  it('sets input placeholder correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      attrs: {
        placeholder: 'test placeholder',
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('placeholder', 'test placeholder')).toBe(true);
  });

  it('sets multiline to textarea correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
        rows: 2,
      },
    });
    expect(wrapper.vm.$refs.input.tagName).toBe('TEXTAREA');
  });

  it('sets multiline rows correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
        multiLine: true,
        rows: 10
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('rows', '10')).toBe(true);
  });

  it('sets default input type correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('type', 'text')).toBe(true);
  });

  it('overrides input type correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
        type: 'url',
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('type', 'url')).toBe(true);
  });

  it('auto generates an id', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.vm.inputId).toBe(wrapper.vm._uid); // eslint-disable-line no-underscore-dangle
  });

  it('emits an input event', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
        value: 'bar'
      },
    });
    const input = wrapper.findComponent({ ref: 'input' });
    input.setValue('foo');
    expect(wrapper.emitted().input[0][0]).toBe('foo');
  });

  it('emits a blur event', () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      listeners: {
        'blur': spy
      }
    });
    const input = wrapper.findComponent({ ref: 'input' });
    input.trigger('blur')
    expect(spy.calledOnce).toBeTruthy();
  });

  it('emits a focus event', () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      listeners: {
        'focus': spy
      }
    });
    const input = wrapper.findComponent({ ref: 'input' });
    input.trigger('focus')
    expect(spy.calledOnce).toBeTruthy();
  });

  it('adds focused class to wrapper on input focus', async () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      listeners: {
        'focus': spy
      }
    });
    const input = wrapper.findComponent({ ref: 'input' });
    input.trigger('focus')
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.cdr-input--focus').exists()).toBeTruthy();
    input.trigger('blur')
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.cdr-input--focus').exists()).toBeFalsy();
  });

  it('emits a paste event', () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      listeners: {
        'paste': spy
      }
    });
    const input = wrapper.findComponent({ ref: 'input' });
    input.trigger('paste')
    expect(spy.calledOnce).toBeTruthy();
  });

  it('emits a keydown event', () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test'
      },
      listeners: {
        'keydown': spy
      }
    });
    const input = wrapper.findComponent({ ref: 'input' });
    input.trigger('keydown', {
      key: 'a'
    })
    expect(spy.called).toBeTruthy();
  });

  it('renders deprecated helper-text slot', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      slots: {
        'helper-text': 'very helpful',
      },
    });
    expect(wrapper.find('.cdr-input__helper-text').text()).toBe('very helpful');
  });

  it('renders helper-text-bottom slot', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      slots: {
        'helper-text-bottom': 'very helpful',
      },
    });
    expect(wrapper.find('.cdr-input__helper-text').text()).toBe('very helpful');
  });

  it('renders pre-icon slot', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      slots: {
        'pre-icon': '🤠',
      },
    });
    expect(wrapper.find('.cdr-input__pre-icon').text()).toBe('🤠');
  });

  it('renders post-icon slot', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      slots: {
        'post-icon': '😎',
      },
    });
    expect(wrapper.find('.cdr-input__post-icon').text()).toBe('😎');
  });

  it('adds spacing class when post-icon slot is present', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      slots: {
        'post-icon': '😎',
      },
    });
    expect(wrapper.find('.cdr-input--posticon').exists()).toBe(true);
  });


  it('adds spacing class when multiple elements are present in post-icon slot', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
      slots: {
        'post-icon': '<div>😎</div><div>🤠</div>',
      },
    });
    expect(wrapper.find('.cdr-input--posticons').exists()).toBe(true);
  });

  it('renders info action slot', () => {
    const wrapper = shallowMount(CdrInput, {
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
        label: 'test',
        error: 'incorrect!'
      },
    });
    expect(wrapper.find('.cdr-form-error').text()).toBe('incorrect!');
  });

  it('does not render error slot when error state is inactive', () => {
    const wrapper = mount(CdrInput, {
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

  it('renders error slot instead of bottom helper slot when error is active', () => {
    const wrapper = mount(CdrInput, {
      propsData: {
        label: 'test',
        error: true,
        helperPosition: 'bottom'
      },
      slots: {
        'error': 'whoops',
        'helper-text': 'not me'
      },
    });
    expect(wrapper.find('.cdr-form-error').text()).toBe('whoops');
    expect(wrapper.find('.cdr-input__helper-text-bottom').exists()).toBe(false);
  });

  // NOTE - can't use v-model directly here, targeting the `data` prop instead
  it('updating v-model data updates the input', async () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
        value: 'bar'
      },
    });
    const input = wrapper.findComponent({ ref: 'input' });
    wrapper.setProps({value: ''});
    await wrapper.vm.$nextTick();
    expect(input.element.value).toBe('');
  });
});
