import { shallowMount } from '@vue/test-utils';
import { CdrInput } from 'distdir/cedar.esm.js';

describe('CdrInput.vue', () => {
  it('renders a label element', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.tagName).toBe('LABEL');
  });

  it('renders label correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent.trim()).toBe('Label Test');
  });

  it('renders required label correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'Label Test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.label.children[0].textContent.trim()).toBe('Required');
  });

  it('maps input id to label for correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'testing',
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.input.id).toBe(wrapper.vm.$refs.label.htmlFor);
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

  it('hide-label sets aria-label correctly', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
        hideLabel: true,
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('aria-label', 'test')).toBe(true);
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
      },
    });
    const input = wrapper.find({ ref: 'input' });
    input.trigger('input')
    expect(wrapper.emitted().input).toBeTruthy();
  });

  it('emits a blur event', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
    });
    const input = wrapper.find({ ref: 'input' });
    input.trigger('blur')
    expect(wrapper.emitted().blur).toBeTruthy();
  });

  it('emits a focus event', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
    });
    const input = wrapper.find({ ref: 'input' });
    input.trigger('focus')
    expect(wrapper.emitted().focus).toBeTruthy();
  });

  it('emits a paste event', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
    });
    const input = wrapper.find({ ref: 'input' });
    input.trigger('paste')
    expect(wrapper.emitted().paste).toBeTruthy();
  });

  it('emits a keydown event', () => {
    const wrapper = shallowMount(CdrInput, {
      propsData: {
        label: 'test',
      },
    });
    const input = wrapper.find({ ref: 'input' });
    input.trigger('keydown')
    expect(wrapper.emitted().keydown).toBeTruthy();
  });
});
