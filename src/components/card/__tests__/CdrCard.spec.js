import { shallowMount } from '@vue/test-utils';
import CdrCard from 'componentdir/card/CdrCard';

describe('CdrCard', () => {
  it('renders a nav', () => {
    const wrapper = shallowMount(CdrCard);
    expect(wrapper.is('article')).toBeTruthy();
  });
});
