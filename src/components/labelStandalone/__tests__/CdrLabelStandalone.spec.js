import { shallowMount } from '../../../../test/vue-jest-style-workaround.js';
import CdrLabelStandalone from 'componentdir/labelStandalone/CdrLabelStandalone';

describe('CdrFormLabelStandalone', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'Label Test',
        forId: 'test',
        required: true,
      },
      slots: {
        helper: 'very helpful',
        info: 'very informative',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders a label element', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'Label Test',
        forId: 'test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('Label Test');
  });

  it('does not render label if hideLabel is passed', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'Label Test',
        forId: 'test',
        hideLabel: true,
      },
    });
    expect(wrapper.find('label').exists()).toBe(false);
  });

  it('maps input id to label for correctly', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'testing',
        forId: 'test',
      },
    });
    expect(wrapper.vm.$refs.label.htmlFor).toBe('test');
  });

  it('renders required label', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'test',
        required: true,
        forId: 'test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('test *');
  });

  it('does not render both required and optional labels simultaneously', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'test',
        required: true,
        optional: true,
        forId: 'test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('test *');
  });

  it('renders optional messaging', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'test',
        optional: true,
        forId: 'test',
      },
    });
    expect(wrapper.vm.$refs.label.textContent).toBe('test (optional)');
  });

  it('renders helper slot', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'test',
        forId: 'test',
      },
      slots: {
        'helper': 'very helpful',
      },
    });
    expect(wrapper.find('.cdr-label-standalone__helper').text()).toBe('very helpful');
  });

  it('renders break between label and helper if both are present', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'test',
        forId: 'test',
      },
      slots: {
        'helper': 'very helpful',
      },
    });
    expect(wrapper.find('br').exists()).toBe(true);
  });

  it('does not render break between label and helper if label is hidden', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'test',
        hideLabel: true,
        forId: 'test',
      },
      slots: {
        'helper': 'very helpful',
      },
    });
    expect(wrapper.find('br').exists()).toBe(false);
  });

  it('renders info slot', () => {
    const wrapper = shallowMount(CdrLabelStandalone, {
      propsData: {
        label: 'test',
        forId: 'test',
      },
      slots: {
        info: 'very informative',
      },
    });
    expect(wrapper.find('.cdr-label-standalone__info').text()).toBe('very informative');
  });
});
