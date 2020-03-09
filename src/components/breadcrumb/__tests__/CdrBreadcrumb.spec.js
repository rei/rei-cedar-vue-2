import { shallowMount, mount } from '@vue/test-utils';
import CdrBreadcrumb from 'componentdir/breadcrumb/CdrBreadcrumb';

const itemsA = [
  {
    item: {
      url: 'http://google.com',
      name: 'Breadcrumb Step 1',
    },
  },
  {
    item:{
      url: 'http://rei.com',
      name: 'Long Breadcrumb Step 2',
    },
  },
  {
    item:{
      url: 'http://yahoo.com',
      name: 'Long Breadcrumb Step 3',
    },
  },
];

const itemsB = [
  {
    item: {
      url: 'http://google.com',
      name: 'Breadcrumb Step 1',
    },
  },
  {
    item:{
      url: 'http://rei.com',
      name: 'Long Breadcrumb Step 2',
    },
  },
];

describe('CdrBreadcrumb', () => {
  it('renders correctly', () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        items: itemsA,
      }
    });
    wrapper.setData({ componentID: 'example' });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('meets basic a11y requirements', () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        items: itemsA,
      }
    });

    const ellipse = wrapper.find({ref: 'ellipse'});
    expect(ellipse.attributes()['aria-label']).toBe('show 1 more navigation level');
    expect(ellipse.attributes()['aria-controls']).toBe(`${wrapper.vm.$data.componentID}List`);
    expect(ellipse.attributes()['aria-expanded']).toBe('false');
    expect(wrapper.is('nav')).toBe(true);
    expect(wrapper.attributes()['aria-label']).toBe('breadcrumbs');
    expect(wrapper.find('li:last-of-type > strong').attributes()['aria-current']).toBe('page');
  });

  it('breadcrumb should not truncate with fewer than 3 items', () => {
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: itemsB,
      }
    });
    expect(wrapper.vm.truncate).toBe(false);
  });

  it('breadcrumb should truncate with 3 or more items', () => {
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: itemsA,
      }
    });

    
    expect(wrapper.vm.truncate).toBe(true);
    wrapper.find({ref: 'ellipse'}).trigger('click');
    expect(wrapper.vm.truncate).toBeFalsy();

  });

  it('breadcrumb should evaluate truncation when items are updated', () => {
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: itemsB,
      }
    });
    expect(wrapper.vm.truncate).toBe(false);
    wrapper.setProps({items: itemsB.concat(itemsB)})
    expect(wrapper.vm.truncate).toBe(true);
  });

  it('breadcrumb link can be overridden with link scopedSlot', () => {
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: [
          {
            item: {
              url: 'http://rei.com',
              name: 'Scoped',
            },
          },
        ],
      },
      scopedSlots: {
        link: '<p slot-scope="link">{{link.href}} TEST {{link.content}} {{link.class}}</p>'
      }
    });
    expect(wrapper.text()).toBe('http://rei.com TEST Scoped cdr-breadcrumb__link');
  });

  it('applies focus to first breadcrumb on ellipsis click', async () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        items: itemsA,
      },
      attachToDocument: true, // enables focus testing
    });
    wrapper.vm.handleEllipsisClick()
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$refs.firstBreadcrumb).toBe(document.activeElement);
    });
  });

});
