import { mount } from 'avoriaz';
import selectComp from '@/components/select/cdrSelect';

describe('cdrSelect.vue', () => {
  it('renders a label element', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.tagName).to.equal('LABEL');
  });

  it('renders label correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent).to.equal('Label Test');
  });

  it('renders required label correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'Label Test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.label.textContent).to.equal('Label Test*');
  });

  it('hide-label sets aria-label correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'test',
        hideLabel: true,
      },
    });
    expect(wrapper.vm.$refs.select.getAttribute('aria-label')).to.equal('test');
  });

  it('maps select id to label for correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'testing',
        id: 'test',
      },
    });
    expect(wrapper.vm.$refs.select.id).to.equal(wrapper.vm.$refs.label.htmlFor);
  });

  it('generates an id correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'testing',
      },
    });
    expect(wrapper.vm.$refs.select.id).to.equal(wrapper.vm._uid.toString());
  });

  it('renders a select element', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'Label Test',
      },
    });
    expect(wrapper.vm.$refs.select.tagName).to.equal('SELECT');
  });

  // it('sets select name attribute correctly', () => {
  //   const wrapper = mount(selectComp, {
  //     propsData: {
  //       label: 'Label Test',
  //       name: 'testing',
  //     },
  //   });
  //   expect(wrapper.vm.$refs.select.name).to.equal('testing');
  // });

  // it('sets select disabled attribute correctly', () => {
  //   const wrapper = mount(selectComp, {
  //     propsData: {
  //       label: 'test',
  //       disabled: true,
  //     },
  //   });
  //   expect(wrapper.vm.$refs.select.getAttribute('disabled')).to.equal('');
  // });

  it('sets select required attribute correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'test',
        required: true,
      },
    });
    expect(wrapper.vm.$refs.select.getAttribute('required')).to.equal('required');
  });

  // it('sets select autofocus attribute correctly', () => {
  //   const wrapper = mount(selectComp, {
  //     propsData: {
  //       label: 'test',
  //       autofocus: true,
  //     },
  //   });
  //   expect(wrapper.vm.$refs.select.getAttribute('autofocus')).to.equal('');
  // });

  it('sets select size attribute correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'test',
        size: '4',
      },
    });
    expect(wrapper.vm.$refs.select.getAttribute('size')).to.equal('4');
  });

  it('sets select multiple attribute correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'Label Test',
        multiple: true,
      },
    });
    expect(wrapper.vm.$refs.select.multiple).to.equal(true);
  });

  it('renders prompt value correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'test',
        prompt: 'test prompt'
      },
    });
    const opts = Array.from(wrapper.vm.$refs.select.options);
    expect(opts[0].value).to.equal('');
    expect(opts[0].text).to.equal('test prompt');
  });

  it('renders select value correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'test',
        value: '1',
        options: ['1', '2'],
      },
    });
    expect(wrapper.vm.$refs.select.value).to.equal('1');
  });

  it('renders multiple select values correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'test',
        multiple: true,
        value: ['1', '2'],
        options: ['1', '2', '3'],
      },
    });
    const optArr = Array.from(wrapper.vm.$refs.select.options);
    const selected = optArr.filter(o => o.selected === true).map(o => o.value);
    expect(selected).to.deep.equal(['1', '2']);
  });

  it('renders select value from object def correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'test',
        value: '1',
        options: [{
          value: '1',
          text: 'one',
        },
        {
          value: '2',
          text: 'two',
        }],
      },
    });
    expect(wrapper.vm.$refs.select.value).to.equal('1');
  });

  it('renders multiple select values from object def correctly', () => {
    const wrapper = mount(selectComp, {
      propsData: {
        label: 'test',
        multiple: true,
        value: ['1', '2'],
        options: [{
          value: '1',
          text: 'one',
        },
        {
          value: '2',
          text: 'two',
        },
        {
          value: '3',
          text: 'three',
        }],
      },
    });
    const optArr = Array.from(wrapper.vm.$refs.select.options);
    const selected = optArr.filter(o => o.selected === true).map(o => o.value);
    expect(selected).to.deep.equal(['1', '2']);
  });
});
