import { shallowMount } from '@vue/test-utils';
import CdrPagination from 'componentsdir/pagination/CdrPagination';

function makePages(total, arg = 'page', startingAt = 0) {
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

  it.only('sorts 20 pages correctly', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        currentPage: 1,
      },
    });
    const prev = wrapper.find({ref: 'prev-link'});
    console.log(prev.html());

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    
    wrapper.setProps({ currentPage: 4 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    
    wrapper.setProps({ currentPage: 20 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
    
    wrapper.setProps({ currentPage: 17 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
  });
});