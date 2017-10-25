import { mount } from 'avoriaz';
import testText from '../examples/testText.vue';
import cdrRadio from '@/components/radio/cdrRadio';

describe('cdrRadio.vue', () => {
  it('renders an input', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.tagName).to.equal('INPUT');
  });

  it('is type radio', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.hasAttribute('type', 'radio')).to.equal(true);
  });

  it('renders a label element', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.label.tagName).to.equal('LABEL');
  });

  it('renders label text correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      },
      slots: {
        default: testText,
      }
    });
    expect(wrapper.vm.$refs.label.textContent).to.equal('Label Test');
  });

  it('maps input id to label for correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.radio.id).to.equal(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    expect(wrapper.vm.$refs.radio.id).to.equal(wrapper.vm._uid.toString());
  });

  it('sets name attribute correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
      }
    });
    const radio = wrapper.find('.cdr-radio')[0];
    expect(radio.hasAttribute('name', 'testName')).to.equal(true);
  });

  it('evaluates simple not checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'AA',
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates simple checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });

  it('evaluates group not checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'B',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates group checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });

  it('evaluates complex group not checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        modelValue: {test: 'B'},
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates complex group checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        name: 'testName',
        modelValue: {test: 'B', arr: [1,2,3]},
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });

  it('emits a change event with correct value', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        name: 'testName',
        modelValue: '',
      },
    });
    const spy = sinon.spy(wrapper.vm, '$emit');
    const radio = wrapper.find('.cdr-radio')[0];
    radio.trigger('change');

    expect(spy.args[0][0]).to.equal('change');
    expect(spy.args[0][1]).to.equal('A');
  });
});
