import { shallowMount } from '@vue/test-utils';
import { CdrRating } from 'distdir/cedar.js';

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

  it('renders normal placeholder stars when count is > 0', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
        count: 1,
      }
    });
    expect(wrapper.contains('.cdr-rating__placeholder')).toBe(true);
    expect(wrapper.contains('.cdr-rating__placeholder--no-reviews')).toBe(false);
  });

  it('renders custom placeholder stars when count is 0', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
        count: 0,
        href: 'rei.com'
      }
    });
    expect(wrapper.contains('.cdr-rating__placeholder')).toBe(false);
    expect(wrapper.contains('.cdr-rating__placeholder--no-reviews')).toBe(true);
  });

  it('renders custom placeholder stars when count is "0"', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
        count: "0",
        href: 'rei.com'
      }
    });
    expect(wrapper.contains('.cdr-rating__placeholder')).toBe(false);
    expect(wrapper.contains('.cdr-rating__placeholder--no-reviews')).toBe(true);
  });
});
