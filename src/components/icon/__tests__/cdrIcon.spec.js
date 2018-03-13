import { shallow } from '@vue/test-utils';
import cdrIcon from 'Components/icon/cdrIcon';

describe('cdrIcon.vue', () => {
  it('renders an svg', () => {
    const wrapper = shallow(cdrIcon, {
      propsData: {
        url: '',
      }
    });
    expect(wrapper.element.tagName).toBe('svg');
  });
});