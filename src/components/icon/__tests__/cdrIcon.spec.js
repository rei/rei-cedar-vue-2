import { shallow } from '@vue/test-utils';
import cdrIcon from 'componentsdir/icon/cdrIcon';

describe('cdrIcon.vue', () => {
  it('renders a wrapping span', () => {
    const wrapper = shallow(cdrIcon, {
      propsData: {
        url: '',
      }
    });
    expect(wrapper.is('span')).toBe(true);
  });

  it('renders an svg with url', () => {
    const wrapper = shallow(cdrIcon, {
      propsData: {
        url: '',
      }
    });
    expect(wrapper.contains('svg')).toBe(true);
  });

  it('renders svg with name', () => {
    const wrapper = shallow(cdrIcon, {
      propsData: {
        name: 'test',
      }
    });
    expect(wrapper.contains('svg')).toBe(true);
  });

  it('renders svg with raw', () => {
    const wrapper = shallow(cdrIcon, {
      propsData: {
        raw: '<svg><path></path></svg>',
      }
    });
    expect(wrapper.contains('svg')).toBe(true);
  });
});