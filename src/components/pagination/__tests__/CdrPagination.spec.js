import { mount, shallowMount } from '@vue/test-utils';
import { CdrPagination } from 'distdir/cedar.js';

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

describe('CdrPagination.vue', () => {
  it('has a wrapping nav element for a11y', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });
    expect(wrapper.is('nav')).toBe(true);
  });

  it('sorts 20 pages correctly', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });
    let prev = wrapper.find({ref: 'prev-link'});
    let next = wrapper.find({ref: 'next-link'});

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 4 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 20 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();

    wrapper.setProps({ value: 17 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();
  });

  it('sorts 5 pages correctly', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(5),
        value: 1,
      },
    });
    let prev = wrapper.find({ref: 'prev-link'});
    let next = wrapper.find({ref: 'next-link'});
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 4 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 5 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
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
    let prev = wrapper.find({ ref: 'prev-link' });
    let next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();
  });

  it('shows next but not prev link when at first page', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(getPrevNextPages(1), -1),
        value: 1,
      },
    });

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1, 2]);
    const prev = wrapper.find({ ref: 'prev-link' });
    const next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();
  });

  it('shows prev but not next link when at last page', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(getPrevNextPages(10), 8),
        value: 10,
      },
    });

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([9, 10]);
    const prev = wrapper.find({ ref: 'prev-link' });
    const next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();
  });

  it('emits events with correct values', () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 5,
      },
    });
    let next = wrapper.find({ ref: 'next-link' });
    let prev = wrapper.find({ ref: 'prev-link' });

    // click next
    next.trigger('click');
    expect(wrapper.emitted().change[0][0]).toBe(6);
    expect(wrapper.emitted().change[0][1] instanceof Event).toBeTruthy();

    // click previous
    prev.trigger('click');
    expect(wrapper.emitted().change[1][0]).toBe(4);
    expect(wrapper.emitted().change[1][1] instanceof Event).toBeTruthy();

    // click a page link
    let link = wrapper.findAll('ul > li > a').at(1);
    link.trigger('click');
    expect(wrapper.emitted().change[2][0]).toBe(1);
    expect(wrapper.emitted().change[2][1] instanceof Event).toBeTruthy();

    // use select
    let options = wrapper.find({ ref: 'select' }).findAll('option')
    options.at(1).setSelected();
    expect(wrapper.emitted()['select-change'][0][0]).toBe('?page=4');
    expect(wrapper.emitted()['select-change'][0][1] instanceof Event).toBeTruthy();
  });

  it('adds "of x" when a total is provided', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });

    let option = wrapper.find({ ref: 'select' }).findAll('option').at(0);
    expect(option.text()).toBe('Page 1');

    wrapper.setProps({ totalPages: 20 });
    option = wrapper.find({ ref: 'select' }).findAll('option').at(0);
    expect(option.text()).toBe('Page 1 of 20');
  });

  it('alows links to be overriden with scoped slots', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(3),
        value: 2,
      },
      scopedSlots: {
        link: '<p slot-scope="link">{{link.href}} {{link.content}}</p>',
        prevLink: '<p slot-scope="link">{{link.href}} {{link.content}}</p>',
        nextLink: '<p slot-scope="link">{{link.href}} {{link.content}}</p>',
      }
    });
    expect(wrapper.text()).toBe('?page=1 Prev?page=1 1?page=2 2?page=3 3Page 1Page 2Page 3?page=3 Next');
  });
});
