import { shallow } from '@vue/test-utils';
import CdrText from 'componentsdir/text/CdrText';

describe('CdrText.vue', () => {
  it('renders as p by default', () => {
    const wrapper = shallow(CdrText);
    expect(wrapper.is('p')).toBe(true);
  });

  it('renders as h1 correctly', () => {
    const wrapper = shallow(CdrText, {
      propsData: {
        tag: 'h1',
      },
    });
    expect(wrapper.is('h1')).toBe(true);
  });
});