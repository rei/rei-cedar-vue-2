import { shallowMount } from '@vue/test-utils';
import CdrRating from 'componentsdir/rating/CdrRating';

describe('CdrRating.vue', () => {
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
});
