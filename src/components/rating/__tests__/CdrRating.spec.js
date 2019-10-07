import { shallowMount } from '@vue/test-utils';
import CdrRating from 'componentdir/rating/CdrRating';

describe('CdrRating', () => {
  it('computes and rounds rating stars correctly', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 3.4441231,
        count: 1,
      }
    });
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('50');
    expect(wrapper.vm.rounded).toBe(3.5);
  });
  
  it('renders an anchor when given an href', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
        href: 'rei.com'
      }
    });
    expect(wrapper.is('a')).toBeTruthy();
  });
});
