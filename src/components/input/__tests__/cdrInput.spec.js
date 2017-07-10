import { mount } from 'avoriaz';
import inputComp from '@/components/input/cdrInput';

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
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.tagName).to.equal('LABEL');
  });

  it('renders label correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent).to.equal('Label Test');
  });

  it('renders required label correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'Label Test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.label.textContent).to.equal('Label Test*');
  });

  it('maps input id to label for correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'testing',
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.input.id).to.equal(wrapper.vm.$refs.label.htmlFor);
  });
  
  it('generates an id correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'testing',
      },
    });
    expect(wrapper.vm.$refs.input.id).to.equal(wrapper.vm._uid.toString());
  });

  it('renders an input element', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.input.tagName).to.equal('INPUT');
  });

  it('sets input name attribute correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'Label Test',
        name: 'testing',
      },
    });
    expect(wrapper.vm.$refs.input.name).to.equal('testing');
  });

  it('renders input value correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: 'testing',
      },
    });
    expect(wrapper.vm.$refs.input.value).to.equal('testing');
  });

  it('sets input disabled attribute correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        disabled: true,
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('disabled')).to.equal('');
  });

  it('sets input readonly attribute correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        readonly: true,
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('readonly')).to.equal('readonly');
  });

  it('sets input required attribute correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('required')).to.equal('');
  });

  it('sets input autofocus attribute correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        autofocus: true,
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('autofocus')).to.equal('');
  });

  it('sets input maxlength attribute correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        maxlength: '20',
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('maxlength')).to.equal('20');
  });

  it('sets input placeholder correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        placeholder: 'test placeholder',
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('placeholder')).to.equal('test placeholder');
  });

  it('sets multiline to textarea correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        multiLine: true,
      },
    });
    expect(wrapper.vm.$refs.input.tagName).to.equal('TEXTAREA');
  });

  it('sets multiline rows correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        multiLine: true,
        rows: '10',
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('rows')).to.equal('10');
  });

  it('sets default input type correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('type')).to.equal('text');
  });

  it('overrides input type correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        type: 'url',
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('type')).to.equal('url');
  });

  it('sets input tabindex correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        tabindex: 2,
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('tabindex')).to.equal('2');
  });

  it('hide-label sets aria-label correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        hideLabel: true,
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('aria-label')).to.equal('test');
  });

  it('debounce 0 when not defined', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.vm.debounceVal).to.equal(0);
  });

  it('sets default debounce', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        debounce: true,
      },
    });
    expect(wrapper.vm.debounceVal).to.equal(500);
  });

  it('sets override debounce', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        debounce: 1000,
      },
    });
    expect(wrapper.vm.debounceVal).to.equal(1000);
  });

  it('auto generates an id', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.vm.inputId)
      .to.equal(wrapper.vm._uid); // eslint-disable-line no-underscore-dangle
  });

  it('validates errors', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: 4,
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isErr).to.equal(true);
      done();
    }, 0);
  });

  it('renders error messages correctly', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: 4,
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.$refs.error.textContent).to.equal('Error Message');
      done();
    }, 0);
  });

  it('sets a11y for error messages correctly', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: 4,
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.$refs.messages.$el.getAttribute('id')).to.equal(wrapper.vm.$refs.input.getAttribute('aria-describedby'));
      done();
    }, 0);
  });

  it('validates warnings', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: '',
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isWarn).to.equal(true);
      done();
    }, 0);
  });

  it('renders warning messages correctly', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: '',
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.$refs.error.textContent).to.equal('Warning Message');
      done();
    }, 0);
  });

  it('validates successfully', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: 'hi',
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isValid).to.equal(true);
      done();
    }, 0);
  });

  it('validates pattern successfully', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: 'hi2',
        pattern: '[a-zA-Z0-9]+',
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isValid).to.equal(true);
      done();
    }, 0);
  });

  it('errors on pattern correctly', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: '!',
        pattern: '[a-zA-Z0-9]+',
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isErr).to.equal(true);
      done();
    }, 0);
  });

  it('displays pattern errors correctly', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: '!',
        pattern: '[a-zA-Z0-9]+',
        patternError: 'pattern error',
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.$refs.error.textContent).to.equal('pattern error');
      done();
    }, 0);
  });
});
