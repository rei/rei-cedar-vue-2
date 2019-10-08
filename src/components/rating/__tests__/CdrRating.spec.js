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

    wrapper.setProps({rating: 3.122227});
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('00');
    expect(wrapper.vm.rounded).toBe(3);

    wrapper.setProps({rating: 3.222227});
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('25');
    expect(wrapper.vm.rounded).toBe(3.25);

    wrapper.setProps({rating: 3.673323});
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('75');
    expect(wrapper.vm.rounded).toBe(3.75);
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
