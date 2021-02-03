import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrList from 'componentdir/list/CdrList';

describe('CdrList', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrList);
    expect(wrapper.element).toMatchSnapshot();
  });
  
  it('renders an ol', () => {
    const wrapper = mount(CdrList, {
      propsData: {
        tag: 'ol',
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});