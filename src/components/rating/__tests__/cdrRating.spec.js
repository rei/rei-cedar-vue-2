import { mount } from 'avoriaz';
import cdrRating from '@/components/rating/cdrRating';

describe('cdrRating.vue', () => {
  it('computes and rounds rating stars correctly', () => {
    const wrapper = mount(cdrRating, {
      propsData: {
        rating: 3.4,
        count: 1,
      }
    });
    expect(wrapper.vm.whole).to.equal(3);
    expect(wrapper.vm.remainder).to.equal('50');
  });
});
