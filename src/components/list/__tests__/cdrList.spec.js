import { shallow } from '@vue/test-utils';
import cdrList from 'Components/list/cdrList';

describe('cdrList.vue', () => {
  it('renders a ul by default', () => {
    const wrapper = shallow(cdrList);
    expect(wrapper.is('ul')).toBe(true);
  });

  it('renders an ol', () => {
    const wrapper = shallow(cdrList, {
      propsData: {
        listType: 'ol',
      }
    });
    expect(wrapper.is('ol')).toBe(true);
  });
});