import { mount, shallowMount } from '@vue/test-utils';
import CdrPagination from 'componentsdir/pagination/CdrPagination';

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
        currentPage: 1,
      },
    });
    expect(wrapper.is('nav')).toBe(true);
  });

  it('sorts 20 pages correctly', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        currentPage: 1,
      },
    });
    let prev = wrapper.find({ref: 'prev-link'});
    let next = wrapper.find({ref: 'next-link'});

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();
    
    wrapper.setProps({ currentPage: 4 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();
    
    wrapper.setProps({ currentPage: 20 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();
    
    wrapper.setProps({ currentPage: 17 })
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
        currentPage: 1,
      },
    });
    let prev = wrapper.find({ref: 'prev-link'});
    let next = wrapper.find({ref: 'next-link'});
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();
    
    wrapper.setProps({ currentPage: 4 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();
    
    wrapper.setProps({ currentPage: 5 })
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
        currentPage: 5,
      },
    });
    
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([4, 5, 6]);
    let prev = wrapper.find({ ref: 'prev-link' });
    let next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();
    
    wrapper.setProps({
      currentPage: 4,
      pages: makePages(getPrevNextPages(4), 2),
    });
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([3, 4, 5]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();
  });

  it('sorts prev/next only pages correctly when at first/last', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(getPrevNextPages(1), -1),
        currentPage: 1,
      },
    });
    
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1, 2]);
    let prev = wrapper.find({ ref: 'prev-link' });
    let next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({
      pages: makePages(getPrevNextPages(10), 8),
      currentPage: 10,
    });
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([9, 10]);
    prev = wrapper.find({ ref: 'prev-link' });
    next = wrapper.find({ ref: 'next-link' });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();
  });

  it('emits events with correct values', () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        currentPage: 5,
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
    
    // use select
    let options = wrapper.find({ ref: 'select' }).findAll('option')
    options.at(1).setSelected();
    expect(wrapper.emitted()['select-change'][0][0]).toBe('?page=4');
    expect(wrapper.emitted()['select-change'][0][1] instanceof Event).toBeTruthy();

  });
  
});