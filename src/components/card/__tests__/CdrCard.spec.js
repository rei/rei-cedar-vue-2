import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrCard from 'componentdir/card/CdrCard';

describe('CdrCard', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrCard);
    expect(wrapper.element).toMatchSnapshot();
  });
});
