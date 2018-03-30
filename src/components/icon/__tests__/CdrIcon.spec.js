import { shallow } from '@vue/test-utils';
import CdrIcon from 'componentsdir/icon/CdrIcon';

describe('CdrIcon.vue', () => {
  it('renders a wrapping span', () => {
    const wrapper = shallow(CdrIcon, {
      propsData: {
        url: '',
      }
    });
    expect(wrapper.is('span')).toBe(true);
  });

  it('renders an svg with url', () => {
    const wrapper = shallow(CdrIcon, {
      propsData: {
        url: '',
      }
    });
    expect(wrapper.contains('svg')).toBe(true);
  });

  it('renders svg with name', () => {
    const wrapper = shallow(CdrIcon, {
      propsData: {
        name: 'test',
      }
    });
    expect(wrapper.contains('svg')).toBe(true);
  });

  it('renders svg with raw', () => {
    const wrapper = shallow(CdrIcon, {
      propsData: {
        raw: '<svg><path></path></svg>',
      }
    });
    expect(wrapper.contains('svg')).toBe(true);
  });
});