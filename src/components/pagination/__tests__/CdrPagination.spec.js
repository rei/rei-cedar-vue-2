import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils';
import CdrPagination from 'componentdir/pagination/CdrPagination';
import IconCaretLeft from 'componentdir/icon/comps/caret-left';
import IconCaretRight from 'componentdir/icon/comps/caret-right';

function makePages(total, startingAt = 0) {
  const arg = 'page';
  const adjuster = startingAt > 0 ? startingAt : 0;
  const result = [];
  const arr = Array(total).fill().map((_, i) => i + adjuster + 1);
  arr.forEach((n) => {
    const obj = {};
    obj.page = n;
    obj.url = `?${arg}=${n}`;
    result.push(obj);
  });
  return result;
}

function getPageNumArray(input) {
  return input.map((x) => {
    return x === '&hellip;' ? '...' : x.page;
  });
}

function getPrevNextPages(p) {
  if (p === 1 || p === 10) {
    return 2;
  }
  return 3;
}

describe('CdrPagination', () => {
  it('renders correctly', async () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });
    wrapper.setData({ componentID: 'test1' });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders button pagination correctly', async () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
        linkTag: 'button',
      },
    });
    wrapper.setData({ componentID: 'test1' });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has a wrapping nav element for a11y', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });
    expect(wrapper.element.tagName).toBe('NAV');
  });

  it('sets default pagination aria-label', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });
    expect(wrapper.attributes('aria-label')).toBe('Pagination');
  });

  it('allows for aria-label override', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
        forLabel: 'Pagination for reviews'
      },
    });
    expect(wrapper.attributes('aria-label')).toBe('Pagination for reviews');
  });

  it('can render buttons instead of links', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
        linkTag: 'button',
      },
    });
    expect(wrapper.findAll('li a').length).toBe(0);
    expect(wrapper.findAll('li button').length).toBe(7);
  });

  it('sorts 20 pages correctly', async () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });
    let prev = wrapper.findComponent({ref: `prev-link-${wrapper.vm.componentID}`});
    let next = wrapper.findComponent({ref: `next-link-${wrapper.vm.componentID}`});

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 4 });
    await wrapper.vm.$nextTick();
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 20 });
    await wrapper.vm.$nextTick();
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
    prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();

    wrapper.setProps({ value: 17 });
    await wrapper.vm.$nextTick();
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
    prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();
  });

  it('sorts 5 pages correctly', async () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(5),
        value: 1,
      },
    });
    let prev = wrapper.findComponent({ref: `prev-link-${wrapper.vm.componentID}`});
    let next = wrapper.findComponent({ref: `next-link-${wrapper.vm.componentID}`});
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 4 });
    await wrapper.vm.$nextTick();
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 5 });
    await wrapper.vm.$nextTick();
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();
  });

  it('sorts prev/next only pages correctly', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(getPrevNextPages(5), 3),
        value: 5,
      },
    });

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([4, 5, 6]);
    let prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });
    let next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();
  });

  it('shows next and disabled prev when at first page', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(getPrevNextPages(1), -1),
        value: 1,
      },
    });

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1, 2]);
    const prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });
    const next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    const disabledPrev = wrapper.find('li');
    expect(disabledPrev.text()).toBe('Prev');
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();
  });

  it('shows prev and disabled next link when at last page', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(getPrevNextPages(10), 8),
        value: 10,
      },
    });

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([9, 10]);
    const prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });
    const next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    const allLinks = wrapper.findAll('li');
    const disabledNext = allLinks.at(allLinks.length-1);
    expect(disabledNext.text()).toBe('Next');
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();
  });

  it('pagination emits events with correct values', async () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 5,
      },
      listeners: {
        'update-pagination': async (newVal) => { // simulate v-model update
          wrapper.setProps({ value: newVal });
          await wrapper.vm.$nextTick();
        }
      }
    });
    let next = wrapper.findComponent({ ref: `next-link-${wrapper.vm.componentID}` });
    let prev = wrapper.findComponent({ ref: `prev-link-${wrapper.vm.componentID}` });

    // next clicks
    next.trigger('click'); // 5 -> 6
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().navigate[0][0]).toBe(6);
    expect(wrapper.emitted().navigate[0][1]).toBe('?page=6');
    expect(wrapper.emitted().navigate[0][2] instanceof Event).toBeTruthy();
    next.trigger('click'); // 6 -> 7
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().navigate[1][0]).toBe(7);
    expect(wrapper.emitted().navigate[1][1]).toBe('?page=7');
    expect(wrapper.emitted().navigate[1][2] instanceof Event).toBeTruthy();

    // previous clicks
    prev.trigger('click'); // 7 -> 6
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().navigate[2][0]).toBe(6);
    expect(wrapper.emitted().navigate[2][1]).toBe('?page=6');
    expect(wrapper.emitted().navigate[2][2] instanceof Event).toBeTruthy();
    prev.trigger('click'); // 6 -> 5
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().navigate[3][0]).toBe(5);
    expect(wrapper.emitted().navigate[3][1]).toBe('?page=5');
    expect(wrapper.emitted().navigate[3][2] instanceof Event).toBeTruthy();

    // individual links
    let link = wrapper.findAll('ol > li > a').at(1);
    link.trigger('click'); // 5 -> 1
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().navigate[4][0]).toBe(1);
    expect(wrapper.emitted().navigate[4][1]).toBe('?page=1');
    expect(wrapper.emitted().navigate[4][2] instanceof Event).toBeTruthy();
    let link2 = wrapper.findAll('ol > li > a').at(1);
    link2.trigger('click'); // 1 -> 2
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().navigate[5][0]).toBe(2);
    expect(wrapper.emitted().navigate[5][1]).toBe('?page=2');
    expect(wrapper.emitted().navigate[5][2] instanceof Event).toBeTruthy();
    // Do nothing when clicking current page link
    link2.trigger('click'); // 2 -> 2
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().navigate[6]).toBeUndefined();

    // use select
    let options = wrapper.findComponent({ ref: `select-${wrapper.vm.componentID}` }).findAll('option')
    options.at(2).setSelected(); // 2 -> 3
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().navigate[6][0]).toBe(3);
    expect(wrapper.emitted().navigate[6][1]).toBe('?page=3');
    expect(wrapper.emitted().navigate[6][2] instanceof Event).toBeTruthy();
  });

  it('adds "of x" when a total is provided', async () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });

    let option = wrapper.findComponent({ ref: `select-${wrapper.vm.componentID}` }).findAll('option').at(0);
    expect(option.text()).toBe('Page 1');

    wrapper.setProps({ totalPages: 20 });
    await wrapper.vm.$nextTick();
    option = wrapper.findComponent({ ref: `select-${wrapper.vm.componentID}` }).findAll('option').at(0);
    expect(option.text()).toBe('Page 1 of 20');
  });

});
