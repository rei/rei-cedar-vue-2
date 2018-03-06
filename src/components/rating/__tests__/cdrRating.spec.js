import { shallow } from '@vue/test-utils';
import cdrRating from 'Components/rating/cdrRating';

describe('cdrRating.vue', () => {
  it('computes and rounds rating stars correctly', () => {
    const wrapper = shallow(cdrRating, {
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
