import { mount } from 'avoriaz';
import testText from '../examples/testText.vue';
import cdrRadio from '@/components/radio/cdrRadio';

describe('cdrRadio.vue', () => {
  it('renders an input', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
      }
    });
    expect(wrapper.vm.$refs.radio.tagName).to.equal('INPUT');
  });

  it('is type radio', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
      }
    });
    expect(wrapper.vm.$refs.radio.hasAttribute('type', 'radio')).to.equal(true);
  });

  it('renders a label element', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
      }
    });
    expect(wrapper.vm.$refs.label.tagName).to.equal('LABEL');
  });

  it('renders label text correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
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
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.radio.id).to.equal(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
      }
    });
    expect(wrapper.vm.$refs.radio.id).to.equal(wrapper.vm._uid.toString());
  });

  it('evaluates simple not checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        modelValue: 'AA',
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates simple checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });

  it('evaluates group not checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'B',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates group checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: 'A',
        modelValue: 'A',
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });

  it('evaluates complex group not checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        modelValue: {test: 'B'},
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates complex group checked state correctly', () => {
    const wrapper = mount(cdrRadio, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        modelValue: {test: 'B', arr: [1,2,3]},
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });
});
