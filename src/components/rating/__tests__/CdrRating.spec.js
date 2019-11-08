import { shallowMount, mount } from '@vue/test-utils';
import CdrRating from 'componentdir/rating/CdrRating';

describe('CdrRating', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrRating, {
      propsData: {
        rating: 3.2323,
        count: 100,
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

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

  it('renders custom placeholder stars when count is not passed', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
        href: 'rei.com'
      }
    });
    expect(wrapper.contains('.cdr-rating__placeholder')).toBe(false);
    expect(wrapper.contains('.cdr-rating__placeholder--no-reviews')).toBe(true);
  });

  it('renders review text when count is 0', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
        count: 0,
        href: 'rei.com'
      }
    });
    expect(wrapper.contains('.cdr-rating__count')).toBe(true);
    expect(wrapper.find('.cdr-display-sr-only').text()).toBe('rated 5 out of 5 with 0 reviews');
  });

  it('renders review text when count is "0"', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
        count: "0",
        href: 'rei.com'
      }
    });
    expect(wrapper.contains('.cdr-rating__count')).toBe(true);
    expect(wrapper.find('.cdr-display-sr-only').text()).toBe('rated 5 out of 5 with 0 reviews');
  });

  it('renders no review text if count is not passed', () => {
    const wrapper = shallowMount(CdrRating, {
      propsData: {
        rating: 5,
      }
    });
    expect(wrapper.contains('.cdr-rating__count')).toBe(false);
    expect(wrapper.find('.cdr-display-sr-only').text()).toBe('rated 5 out of 5');
  });
});
