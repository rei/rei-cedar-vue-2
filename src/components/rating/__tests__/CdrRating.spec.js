import { shallowMount, mount } from '@vue/test-utils';
import CdrRating from 'componentdir/rating/CdrRating';

describe('CdrRating', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrRating, {
      propsData: {
        rating: 3.2323,
        count: 100,
        href: 'rei.com'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('computes and rounds rating stars correctly', async () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 3.4441231,
        count: 1,
      }
    });
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('50');
    expect(wrapper.vm.rounded).toBe(3.5);
    expect(wrapper.vm.displayRating).toBe(3.4);
    expect(wrapper.vm.empties).toBe(1);

    wrapper.setProps({rating: 3.122227});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('00');
    expect(wrapper.vm.rounded).toBe(3);
    expect(wrapper.vm.displayRating).toBe(3.1);
    expect(wrapper.vm.empties).toBe(2);

    wrapper.setProps({rating: 3.222227});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('25');
    expect(wrapper.vm.rounded).toBe(3.25);
    expect(wrapper.vm.displayRating).toBe(3.2);
    expect(wrapper.vm.empties).toBe(1);

    wrapper.setProps({rating: 3.673323});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('75');
    expect(wrapper.vm.rounded).toBe(3.75);
    expect(wrapper.vm.displayRating).toBe(3.7);
    expect(wrapper.vm.empties).toBe(1);
  });

  it('computes and rounds rating stars correctly with string input', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: '3.4441231',
        count: '1',
      }
    });
    expect(wrapper.vm.whole).toBe(3);
    expect(wrapper.vm.remainder).toBe('50');
    expect(wrapper.vm.rounded).toBe(3.5);
    expect(wrapper.vm.displayRating).toBe(3.4);
  });

  it('renders an anchor when given an href', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
        href: 'rei.com'
      }
    });
    expect(wrapper.element.tagName).toBe('A');
  });

  it('has correct screen reader text when linked', async () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 3,
        href: 'rei.com'
      }
    });
    // no count
    expect(wrapper.vm.srText).toBe('View the reviews with an average rating of 3 out of 5 stars');
    // 0 count
    wrapper.setProps({count: 0});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.srText).toBe('No reviews yet; be the first!');
    wrapper.setProps({count: '0'});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.srText).toBe('No reviews yet; be the first!');
    // normal count
    wrapper.setProps({count: '100'});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.srText).toBe('View the 100 reviews with an average rating of 3 out of 5 stars');
    wrapper.setProps({count: 100});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.srText).toBe('View the 100 reviews with an average rating of 3 out of 5 stars');
  });

  it('has correct screen reader text', async () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 3,
      }
    });
    // no count
    expect(wrapper.vm.srText).toBe('Rated 3 out of 5 stars');
    // 0 count
    wrapper.setProps({count: 0});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.srText).toBe('0 reviews');
    wrapper.setProps({count: '0'});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.srText).toBe('0 reviews');
    // normal count
    wrapper.setProps({count: '100'});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.srText).toBe('100 reviews with an average rating of 3 out of 5 stars');
    wrapper.setProps({count: 100});
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.srText).toBe('100 reviews with an average rating of 3 out of 5 stars');
  });
});
