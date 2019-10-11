import { mount } from '@vue/test-utils';
import CdrCard from 'componentdir/card/CdrCard';

describe('CdrCard', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrCard);
    expect(wrapper.element).toMatchSnapshot();
  });
});
