import { shallow } from '@vue/test-utils';
import CdrList from 'componentsdir/list/CdrList';

describe('CdrList.vue', () => {
  it('renders a ul by default', () => {
    const wrapper = shallow(CdrList);
    expect(wrapper.is('ul')).toBe(true);
  });

  it('renders an ol', () => {
    const wrapper = shallow(CdrList, {
      propsData: {
        listType: 'ol',
      }
    });
    expect(wrapper.is('ol')).toBe(true);
  });
});