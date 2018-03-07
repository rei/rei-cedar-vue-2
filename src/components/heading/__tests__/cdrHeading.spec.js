import { shallow } from '@vue/test-utils';
import cdrHeading from 'Components/heading/cdrHeading';

describe('cdrHeading.vue', () => {
  it('renders an h1', () => {
    const wrapper = shallow(cdrHeading, {
      propsData: {
        level: '1',
      }
    });
    expect(wrapper.is('h1')).toBe(true);
  });

  it('renders an h2', () => {
    const wrapper = shallow(cdrHeading, {
      propsData: {
        level: '2',
      }
    });
    expect(wrapper.is('h2')).toBe(true);
  });

  it('renders an h3', () => {
    const wrapper = shallow(cdrHeading, {
      propsData: {
        level: '3',
      }
    });
    expect(wrapper.is('h3')).toBe(true);
  });

  it('renders an h4', () => {
    const wrapper = shallow(cdrHeading, {
      propsData: {
        level: '4',
      }
    });
    expect(wrapper.is('h4')).toBe(true);
  });

  it('renders an h5', () => {
    const wrapper = shallow(cdrHeading, {
      propsData: {
        level: '5',
      }
    });
    expect(wrapper.is('h5')).toBe(true);
  });

  it('renders an h6', () => {
    const wrapper = shallow(cdrHeading, {
      propsData: {
        level: '6',
      }
    });
    expect(wrapper.is('h6')).toBe(true);
  });

  it('sets level prop correctly', () => {
    const wrapper = shallow(cdrHeading, {
      propsData: {
        level: '6',
      }
    });
    expect(wrapper.vm.$props.level).toBe('6');
  });
});