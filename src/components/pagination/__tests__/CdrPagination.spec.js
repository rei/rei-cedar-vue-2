import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils';
import CdrPagination from 'componentdir/pagination/CdrPagination';
import IconCaretLeft from 'componentdir/icon/comps/caret-left';
import IconCaretRight from 'componentdir/icon/comps/caret-right';

const waitRAF = () => new Promise(resolve => requestAnimationFrame(resolve))

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
  it('renders correctly', () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });
    wrapper.setData({ componentID: 'test1' });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders scoped slot correctly', () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 4,
      },
      stubs: {
        'icon-caret-left': IconCaretLeft,
        'icon-caret-right': IconCaretRight,
      },
      scopedSlots: {
        prevLink(prevLink) {
          return <span
            {...{ attrs: prevLink.attrs } }
            vOn:click={prevLink.click}
          >
            <prevLink.iconComponent
              { ...{ class: prevLink.iconClass } }
            />
            { prevLink.content }
          </span>
        },
        link(link) {
          return <span
            {...{ attrs: link.attrs } }
            vOn:click={link.click}
          >
            { link.page }
          </span>
        },
        nextLink(nextLink) {
          return <span
            {...{ attrs: nextLink.attrs }}
            vOn:click={nextLink.click}
          >
            {nextLink.content}
            <nextLink.iconComponent
              {...{ class: nextLink.iconClass }}
            />
          </span>
        },
      }
    });
    wrapper.setData({ componentID: 'test2' });
    expect(wrapper.element).toMatchSnapshot();
  });

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
    let prev = wrapper.find({ref: `prev-link-${wrapper.vm.componentID}`});
    let next = wrapper.find({ref: `next-link-${wrapper.vm.componentID}`});

    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 4 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5,'...',20]);
    prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 20 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
    prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();

    wrapper.setProps({ value: 17 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,'...',16,17,18,19,20]);
    prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
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
    let prev = wrapper.find({ref: `prev-link-${wrapper.vm.componentID}`});
    let next = wrapper.find({ref: `next-link-${wrapper.vm.componentID}`});
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    expect(prev.exists()).toBeFalsy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 4 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeTruthy();

    wrapper.setProps({ value: 5 })
    expect(getPageNumArray(wrapper.vm.paginationData)).toEqual([1,2,3,4,5]);
    prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });
    next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
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
    let prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });
    let next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
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
    const prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });
    const next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
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
    const prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });
    const next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
    const allLinks = wrapper.findAll('li');
    const disabledNext = allLinks.at(allLinks.length-1);
    expect(disabledNext.text()).toBe('Next');
    expect(prev.exists()).toBeTruthy();
    expect(next.exists()).toBeFalsy();
  });

  it('emits events with correct values', async () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 5,
      },
      listeners: {
        input: (newVal) => { // simulate v-model update
          wrapper.setProps({ value: newVal });
        }
      }
    });
    let next = wrapper.find({ ref: `next-link-${wrapper.vm.componentID}` });
    let prev = wrapper.find({ ref: `prev-link-${wrapper.vm.componentID}` });

    // click next
    next.trigger('click');
    await waitRAF();
    expect(wrapper.emitted().navigate[0][0]).toBe(6);
    expect(wrapper.emitted().navigate[0][1]).toBe('?page=6');
    expect(wrapper.emitted().navigate[0][2] instanceof Event).toBeTruthy();
    
    // click previous
    prev.trigger('click');
    await waitRAF();
    expect(wrapper.emitted().navigate[1][0]).toBe(5);
    expect(wrapper.emitted().navigate[1][1]).toBe('?page=5');
    expect(wrapper.emitted().navigate[1][2] instanceof Event).toBeTruthy();
    
    // click a page link
    let link = wrapper.findAll('ul > li > a').at(1);
    link.trigger('click');
    await waitRAF();
    expect(wrapper.emitted().navigate[2][0]).toBe(1);
    expect(wrapper.emitted().navigate[2][1]).toBe('?page=1');
    expect(wrapper.emitted().navigate[2][2] instanceof Event).toBeTruthy();
    
    // Do nothing when clicking current page link
    link.trigger('click');
    await waitRAF();
    expect(wrapper.emitted().navigate[3]).toBeUndefined();

    // use select
    let options = wrapper.find({ ref: `select-${wrapper.vm.componentID}` }).findAll('option')
    options.at(1).setSelected();
    await waitRAF();
    expect(wrapper.emitted().navigate[3][0]).toBe(2);
    expect(wrapper.emitted().navigate[3][1]).toBe('?page=2');
    expect(wrapper.emitted().navigate[3][2] instanceof Event).toBeTruthy();
  });

  it('binds refs and emits events with scoped slots', async () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 5,
      },
      listeners: {
        input: (newVal) => { // simulate v-model update
          wrapper.setProps({ value: newVal });
        }
      },
      scopedSlots: {
        link: '<p v-bind="props.attrs" @click="props.click">{{props.content}}</p>',
        nextLink: '<p v-bind="props.attrs" @click="props.click">{{props.content}}</p>',
        prevLink: '<p v-bind="props.attrs" @click="props.click">{{props.content}}</p>',
      }
    });

    // click next
    let next = wrapper.vm.$scopedSlots.nextLink()[0].context.$refs[`next-link-${wrapper.vm.componentID}`];
    next.click();
    await waitRAF();
    expect(wrapper.emitted().navigate[0][0]).toBe(6);
    expect(wrapper.emitted().navigate[0][1]).toBe('?page=6');
    expect(wrapper.emitted().navigate[0][2] instanceof Event).toBeTruthy();
    
    // click previous
    let prev = wrapper.vm.$scopedSlots.prevLink()[0].context.$refs[`prev-link-${wrapper.vm.componentID}`];
    prev.click();
    await waitRAF();
    expect(wrapper.emitted().navigate[1][0]).toBe(5);
    expect(wrapper.emitted().navigate[1][1]).toBe('?page=5');
    expect(wrapper.emitted().navigate[1][2] instanceof Event).toBeTruthy();
    
    // click a page link
    let link = wrapper.vm.$scopedSlots.link()[0].context.$refs[`page-link-1-${wrapper.vm.componentID}`];
    link.click();
    await waitRAF();
    expect(wrapper.emitted().navigate[2][0]).toBe(1);
    expect(wrapper.emitted().navigate[2][1]).toBe('?page=1');
    expect(wrapper.emitted().navigate[2][2] instanceof Event).toBeTruthy();
    
    // use select
    let options = wrapper.find({ ref: `select-${wrapper.vm.componentID}` }).findAll('option')
    options.at(1).setSelected();
    await waitRAF();
    expect(wrapper.emitted().navigate[3][0]).toBe(2);
    expect(wrapper.emitted().navigate[3][1]).toBe('?page=2');
    expect(wrapper.emitted().navigate[3][2] instanceof Event).toBeTruthy();
  });

  it('works with vue-router', async () => {
    const wrapper = mount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 5,
      },
      listeners: {
        input: (newVal) => { // simulate v-model update
          wrapper.setProps({ value: newVal });
        }
      },
      stubs: {
        'router-link': RouterLinkStub,
      },
      scopedSlots: {
        link: '<router-link v-bind="props.attrs" @click.native="props.click" to="{ query: { \'router-page\': props.page } }">{{props.content}}</router-link>',
        nextLink: '<router-link v-bind="props.attrs" @click.native="props.click" to="{ query: { \'router-page\': props.page } }">{{props.content}}</router-link>',
        prevLink: '<router-link v-bind="props.attrs" @click.native="props.click" to="{ query: { \'router-page\': props.page } }">{{props.content}}</router-link>',
      }
    });

    // click next
    let next = wrapper.vm.$scopedSlots.nextLink()[0].context.$refs[`next-link-${wrapper.vm.componentID}`].$el;
    next.click();
    await waitRAF();
    expect(wrapper.emitted().navigate[0][0]).toBe(6);
    expect(wrapper.emitted().navigate[0][1]).toBe('?page=6');
    expect(wrapper.emitted().navigate[0][2] instanceof Event).toBeTruthy();
    
    // click previous
    let prev = wrapper.vm.$scopedSlots.prevLink()[0].context.$refs[`prev-link-${wrapper.vm.componentID}`].$el;
    prev.click();
    await waitRAF();
    expect(wrapper.emitted().navigate[1][0]).toBe(5);
    expect(wrapper.emitted().navigate[1][1]).toBe('?page=5');
    expect(wrapper.emitted().navigate[1][2] instanceof Event).toBeTruthy();
    
    // click a page link
    let link = wrapper.vm.$scopedSlots.link()[0].context.$refs[`page-link-1-${wrapper.vm.componentID}`].$el;
    link.click();
    await waitRAF();
    expect(wrapper.emitted().navigate[2][0]).toBe(1);
    expect(wrapper.emitted().navigate[2][1]).toBe('?page=1');
    expect(wrapper.emitted().navigate[2][2] instanceof Event).toBeTruthy();
    
    // use select
    let options = wrapper.find({ ref: `select-${wrapper.vm.componentID}` }).findAll('option')
    options.at(1).setSelected();
    await waitRAF();
    expect(wrapper.emitted().navigate[3][0]).toBe(2);
    expect(wrapper.emitted().navigate[3][1]).toBe('?page=2');
    expect(wrapper.emitted().navigate[3][2] instanceof Event).toBeTruthy();
  });

  it('adds "of x" when a total is provided', () => {
    const wrapper = shallowMount(CdrPagination, {
      propsData: {
        pages: makePages(20),
        value: 1,
      },
    });

    let option = wrapper.find({ ref: `select-${wrapper.vm.componentID}` }).findAll('option').at(0);
    expect(option.text()).toBe('Page 1');

    wrapper.setProps({ totalPages: 20 });
    option = wrapper.find({ ref: `select-${wrapper.vm.componentID}` }).findAll('option').at(0);
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
