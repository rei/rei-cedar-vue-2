import { mount, shallow } from 'avoriaz';
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

  // TODO: revisit next update
  // it('sets input name attribute correctly', () => {
  //   const wrapper = shallow(inputComp, {
  //     propsData: {
  //       label: 'Label Test',
  //     },
  //     attrs: {
  //       name: 'yoyo',
  //     }
  //   });
  //   expect(wrapper.vm.$refs.input.hasAttribute('name', 'testing')).to.equal(true);
  // });

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
    expect(wrapper.vm.$refs.input.hasAttribute('disabled', '')).to.equal(true);
  });

  // TODO: revisit next update
  // it('sets input readonly attribute correctly', () => {
  //   const wrapper = mount(inputComp, {
  //     propsData: {
  //       label: 'test',
  //     },
  //     attrs: {
  //       readonly: true,
  //     },
  //   });
  //   expect(wrapper.vm.$refs.input.getAttribute('readonly')).to.equal('readonly');
  // });

  it('sets input required attribute correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('required')).to.equal('required');
  });

  // TODO: revisit next update
  // it('sets input autofocus attribute correctly', () => {
  //   const wrapper = mount(inputComp, {
  //     propsData: {
  //       label: 'test',
  //     },
  //     attrs: {
  //       autofocus: true,
  //     },
  //   });
  //   expect(wrapper.vm.$refs.input.getAttribute('autofocus')).to.equal('');
  // });

  it('sets input maxlength attribute correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
      },
      attrs: {
        maxlength: '20',
      },
    });
    expect(wrapper.vm.$refs.input.getAttribute('maxlength')).to.equal('20');
  });

  it('sets input placeholder correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
      },
      attrs: {
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
      },
      attrs: {
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
    const wrapper = shallow(inputComp, {
      propsData: {
        label: 'test',
        value: 4,
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.$refs.error[0].textContent).to.equal('Error Message');
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
      expect(wrapper.vm.$refs.error[0].textContent).to.equal('Warning Message');
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
      expect(wrapper.vm.$refs.error[0].textContent).to.equal('pattern error');
      done();
    }, 0);
  });

  it('adds feedback icon', (done) => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: '',
        rules: [validateFn],
        feedback: true,
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      const icon = wrapper.find('.cdr-input-wrap__icon')[0];
      expect(icon.contains('svg')).to.equal(true);
      done();
    }, 0);
  });

  // TODO: revisit next update
  // it('emits an input event with correct value', () => {
  //   const wrapper = mount(inputComp, {
  //     propsData: {
  //       label: 'test',
  //       value: 'a',
  //     },
  //     attachToDocument: true,
  //   });
  //   const spy = sinon.spy(wrapper.vm, '$emit');
  //   const input = wrapper.find('.cdr-input')[0];
  //   input.element.value = 'b';
  //   input.trigger('input');
  //   expect(spy.args[0][0]).to.equal('input');
  //   expect(spy.args[0][1]).to.equal('b');
  // });
  
  it('emits a focus event with correct value', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: 'a',
      },
      attachToDocument: true,
    });
    const spy = sinon.spy(wrapper.vm, '$emit');
    const input = wrapper.find('.cdr-input')[0];
    input.trigger('focus');
    expect(spy.args[0][0]).to.equal('focus');
    expect(spy.args[0][1].target.value).to.equal('a');
  });
  
  it('emits a blur event with correct value', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        label: 'test',
        value: 'a',
      },
      attachToDocument: true,
    });
    const spy = sinon.spy(wrapper.vm, '$emit');
    const input = wrapper.find('.cdr-input')[0];
    input.trigger('blur');
    expect(spy.args[0][0]).to.equal('blur');
    expect(spy.args[0][1].target.value).to.equal('a');
  });
  
  // TODO: revisit next update
  // it('emits a paste event with correct value', () => {
  //   const wrapper = mount(inputComp, {
  //     propsData: {
  //       label: 'test',
  //       value: 'a',
  //     },
  //     attachToDocument: true,
  //   });
  //   const spy = sinon.spy(wrapper.vm, '$emit');
  //   const input = wrapper.find('.cdr-input')[0];
  //   input.element.value = 'b';
  //   input.trigger('paste');
  //   expect(spy.args[0][0]).to.equal('paste');
  //   expect(spy.args[0][1].target.value).to.equal('b');
  // });
});
