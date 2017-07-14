import { mount, shallow } from 'avoriaz';
import testText from '../examples/testText.vue';
import cdrCheckbox from '@/components/checkbox/cdrCheckbox';


describe('cdrCheckbox.vue', () => {
  it('renders an input', () => {
    const wrapper = mount(cdrCheckbox);
    expect(wrapper.vm.$refs.checkbox.tagName).to.equal('INPUT');
  });

  it('is type checkbox', () => {
    const wrapper = mount(cdrCheckbox);
    expect(wrapper.vm.$refs.checkbox.hasAttribute('type', 'checkbox')).to.equal(true);
  });

  it('renders a label element', () => {
    const wrapper = mount(cdrCheckbox);
    expect(wrapper.vm.$refs.label.tagName).to.equal('LABEL');
  });

  it('renders label text correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      slots: {
        default: testText,
      },
    });
    expect(wrapper.vm.$refs.label.textContent).to.equal('Label Test');
  });

  it('maps input id to label for correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.checkbox.id).to.equal(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = mount(cdrCheckbox);
    expect(wrapper.vm.$refs.checkbox.id).to.equal(wrapper.vm._uid.toString());
  });

  it('sets checkbox name attribute correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        name: 'testing',
      },
    });
    expect(wrapper.vm.$refs.checkbox.name).to.equal('testing');
  });

  it('sets input disabled attribute correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.vm.$refs.checkbox.getAttribute('disabled')).to.equal('disabled');
  });

  it('sets checkbox required attribute correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        required: true,
      },
    });
    expect(wrapper.vm.$refs.checkbox.getAttribute('required')).to.equal('required');
  });

  it('sets checkbox autofocus attribute correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        autofocus: true,
      },
    });
    expect(wrapper.vm.$refs.checkbox.getAttribute('autofocus')).to.equal('autofocus');
  });

  it('evaluates simple not checked state correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        modelValue: false,
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates simple checked state correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        modelValue: true,
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });

  it('evaluates group not checked state correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        value: 'B',
        modelValue: ['A'],
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates group checked state correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        value: 'A',
        modelValue: ['A'],
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });

  it('evaluates complex group not checked state correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        modelValue: ['A', {test: 'B'}],
      },
    });
    expect(wrapper.vm.isChecked).to.equal(false);
  });

  it('evaluates complex group checked state correctly', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        value: {test: 'B', arr: [1,2,3]},
        modelValue: ['A', {test: 'B', arr: [1,2,3]}],
      },
    });
    expect(wrapper.vm.isChecked).to.equal(true);
  });
});
