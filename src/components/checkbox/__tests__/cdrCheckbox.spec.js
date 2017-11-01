import { mount } from 'avoriaz';
import testText from '../examples/testText.vue';
import cdrCheckbox from 'Components/checkbox/cdrCheckbox';


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

  it('emits change events with correct values for default checkbox', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        value: false,
      },
      attachToDocument: true,
    });
    const spy = sinon.spy(wrapper.vm, '$emit');
    const cb = wrapper.vm.$el.querySelector('.cdr-checkbox');
    
    cb.click();
    expect(spy.args[0][0]).to.equal('change');
    expect(spy.args[0][1]).to.equal(true);
    expect(wrapper.vm.newValue).to.equal(true);
    
    cb.click();
    expect(spy.args[1][0]).to.equal('change');
    expect(spy.args[1][1]).to.equal(false);
    expect(wrapper.vm.newValue).to.equal(false);
  });

  it('emits change events with correct values for custom checkbox', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        trueValue: 'checked',
        falseValue: 'unchecked',
        value: '',
      },
      attachToDocument: true,
    });
    const spy = sinon.spy(wrapper.vm, '$emit');
    const cb = wrapper.vm.$el.querySelector('.cdr-checkbox');
    
    cb.click();
    expect(spy.args[0][0]).to.equal('change');
    expect(spy.args[0][1]).to.equal('checked');
    expect(wrapper.vm.newValue).to.equal('checked');
    
    cb.click();
    expect(spy.args[1][0]).to.equal('change');
    expect(spy.args[1][1]).to.equal('unchecked');
    expect(wrapper.vm.newValue).to.equal('unchecked');
  });

  it('emits change events with correct values for group checkbox', () => {
    const wrapper = mount(cdrCheckbox, {
      propsData: {
        customValue: 'b',
        value: ['a'],
      },
      attachToDocument: true,
    });
    const spy = sinon.spy(wrapper.vm, '$emit');
    const cb = wrapper.vm.$el.querySelector('.cdr-checkbox');
    
    cb.click();
    expect(spy.args[0][0]).to.equal('change');
    expect(spy.args[0][1]).to.deep.equal(['a', 'b']);
    expect(wrapper.vm.newValue).to.deep.equal(['a', 'b']);
    
    cb.click();
    expect(spy.args[1][0]).to.equal('change');
    expect(spy.args[1][1]).to.deep.equal(['a']);
    expect(wrapper.vm.newValue).to.deep.equal(['a']);
  });
});
