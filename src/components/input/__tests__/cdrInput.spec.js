import { shallow } from 'vue-test-utils';
import inputComp from 'Components/input/cdrInput';

function validateFn(inputText) {
  const obj = {};
  if (inputText === 'hi') {
    obj.state = 'valid';
  } else if (inputText === '') {
    obj.state = 'warn';
    obj.message = 'Warning Message';
  } else if (!isNaN(inputText) && inputText !== '') {
    obj.state = 'error';
    obj.message = 'Error Message';
  } else {
    obj.state = 'error';
    obj.message = 'Error Message 2';
  }
  return obj;
}

describe('cdrInput.vue', () => {
  it('renders a label element', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.tagName).toBe('LABEL');
  });

  it('renders label correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test');
  });

  it('renders required label correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'Label Test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test*');
  });

  it('maps input id to label for correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'testing',
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.input.id).toBe(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'testing',
      },
    });
    expect(wrapper.vm.$refs.input.id).toBe(wrapper.vm._uid.toString());
  });

  it('renders an input element', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.input.tagName).toBe('INPUT');
  });

  it('sets input name attribute correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'Label Test',
      },
      attrs: {
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.input.hasAttribute('name', 'testName')).toBe(true);
  });

  it('renders input value correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        value: 'testing',
      },
    });
    expect(wrapper.vm.$refs.input.value).toBe('testing');
  });

  it('sets input disabled attribute correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        disabled: true,
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('disabled')).toBe(true);
  });

  it('sets input readonly attribute correctly', () => {
    const wrapper = shallow(inputComp, {
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
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('required')).toBe(true);
  });

  it('sets input autofocus attribute correctly', () => {
    const wrapper = shallow(inputComp, {
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
    const wrapper = shallow(inputComp, {
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
    const wrapper = shallow(inputComp, {
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
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        multiLine: true,
      },
    });
    expect(wrapper.vm.$refs.input.tagName).toBe('TEXTAREA');
  });

  it('sets multiline rows correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        multiLine: true,
      },
      attrs: {
        rows: '10',
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('rows', '10')).toBe(true);
  });

  it('sets default input type correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('type', 'text')).toBe(true);
  });

  it('overrides input type correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        type: 'url',
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('type', 'url')).toBe(true);
  });

  it('hide-label sets aria-label correctly', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        hideLabel: true,
      },
    });
    expect(wrapper.vm.$refs.input.hasAttribute('aria-label', 'test')).toBe(true);
  });

  it('debounce 0 when not defined', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.vm.debounceVal).toBe(0);
  });

  it('sets default debounce', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        debounce: true,
      },
    });
    expect(wrapper.vm.debounceVal).toBe(500);
  });

  it('sets override debounce', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        debounce: 1000,
      },
    });
    expect(wrapper.vm.debounceVal).toBe(1000);
  });

  it('auto generates an id', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.vm.inputId).toBe(wrapper.vm._uid); // eslint-disable-line no-underscore-dangle
  });

  it('validates errors', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        rules: [validateFn],
        debounce: 0,
      },
    });
    wrapper.setProps({ value: 4 });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.isErr).toBe(true);
      done();
    }, 100);
  });

  it('renders error messages correctly', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        rules: [validateFn],
        debounce: 0,
      },
    });
    wrapper.setProps({ value: 4 });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.$refs.error[0].textContent).toBe('Error Message');
      done();
    }, 100);
  });
  
  it('sets a11y for error messages correctly', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        rules: [validateFn],
        debounce: 0,
      },
    });
    wrapper.setProps({ value: 4 });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.$refs.messages.$el.getAttribute('id')).toBe(wrapper.vm.$refs.input.getAttribute('aria-describedby'));
      done();
    }, 100);
  });

  it('validates warnings', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        rules: [validateFn],
        debounce: 0,
      },
    });
    wrapper.setProps({ value: '' });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.isWarn).toBe(true);
      done();
    }, 100);
  });

  it('renders warning messages correctly', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        rules: [validateFn],
        debounce: 0,
      },
    });
    wrapper.setProps({ value: '' });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.$refs.error[0].textContent).toBe('Warning Message');
      done();
    }, 100);
  });

  it('validates successfully', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        rules: [validateFn],
        debounce: 0,
      },
    });
    wrapper.setProps({ value: 'hi' });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.isValid).toBe(true);
      done();
    }, 100);
  });

  it('validates pattern successfully', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        pattern: '[a-zA-Z0-9]+',
        debounce: 0,
      },
    });
    wrapper.setProps({ value: 'hi2' });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.isValid).toBe(true);
      done();
    }, 100);
  });

  it('errors on pattern correctly', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        pattern: '[a-zA-Z0-9]+',
        debounce: 0,
      },
    });
    wrapper.setProps({ value: '!' });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.isErr).toBe(true);
      done();
    }, 100);
  });

  it('displays pattern errors correctly', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        pattern: '[a-zA-Z0-9]+',
        patternError: 'pattern error',
        debounce: 0,
      },
    });
    wrapper.setProps({ value: '!' });
    setTimeout(() => { // for debounced validation
      expect(wrapper.vm.$refs.error[0].textContent).toBe('pattern error');
      done();
    }, 100);
  });

  it('emits an input event with correct value', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    wrapper.vm.onInput({target: {value: 'b'}});
    expect(wrapper.emitted().input[0][0]).toBe('b');
    expect(wrapper.vm.currentValue).toBe('b');
  });
  
  it('emits a blur event with correct value', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    wrapper.vm.onBlur(123);
    expect(wrapper.emitted().blur[0][0]).toBe(123);
  });
  
  it('emits a focus event with correct value', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    wrapper.vm.onFocus(123);
    expect(wrapper.emitted().focus[0][0]).toBe(123);
  });

  it('emits a paste event with correct value', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    wrapper.vm.onPaste(123);
    expect(wrapper.emitted().paste[0][0]).toBe(123);
  });

  it('default validation when required works', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        required: true,
        debounce: 0,
      }
    });
    expect(wrapper.vm.rules.length).toBe(1);
    wrapper.setData({ 
      touched: true,
      focused: false,
    });
    wrapper.setProps({
      value: '',
    });
    setTimeout(() => {
      expect(wrapper.vm.state).toBe('warn');
      expect(wrapper.vm.errors[0]).toBe('This field is required');
      done();
    }, 100);
  });

  it('renders feedback', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        feedback: true,
      },
    });
    wrapper.setData({ state: 'error' });
    expect(wrapper.vm.$refs.icon.textContent).toBe('test-file-stub');
  });

  it('returns an icon for error', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    wrapper.setData({ state: 'error' });
    expect(wrapper.vm.getIcon).toBe('test-file-stub');
  });
  
  it('returns an icon for warn', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    wrapper.setData({ state: 'warn' });
    expect(wrapper.vm.getIcon).toBe('test-file-stub');
  });
  
  it('returns an icon for valid', () => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    wrapper.setData({ state: 'valid' });
    expect(wrapper.vm.getIcon).toBe('test-file-stub');
  });

  it('immediately validates', (done) => {
    const wrapper = shallow(inputComp, {
      propsData: {
        label: '',
        required: true,
        debounce: 0,
        immediateValidate: true,
        value: '',
      },
      data: {
        touched: true,
        focused: false,
      }
    });
    setTimeout(() => {
      expect(wrapper.vm.state).toBe('warn');
      expect(wrapper.vm.errors[0]).toBe('This field is required');
      done();
    }, 100);
  });
});
