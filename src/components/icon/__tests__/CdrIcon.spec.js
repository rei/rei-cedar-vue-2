import { shallow } from '@vue/test-utils';
import CdrIcon from 'componentsdir/icon/CdrIcon';

describe('CdrIcon.vue', () => {
  it('renders a wrapping svg', () => {
    const wrapper = shallow(CdrIcon, {
      propsData: {
        url: '',
      }
    });
    expect(wrapper.is('svg')).toBe(true);
  });
});