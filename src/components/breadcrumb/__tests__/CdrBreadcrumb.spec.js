import { shallowMount, mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrBreadcrumb from 'componentdir/breadcrumb/CdrBreadcrumb';

const itemsA = [
  {
    item: {
      url: 'http://google.com',
      name: 'Long Breadcrumb Step 1',
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
      name: 'Breadcrumb Step 2',
    },
  },
];

const itemsB2 = [
  {
    item: {
      url: 'http://google.com',
      name: 'Breadcrumb Step 3',
    },
  },
  {
    item:{
      url: 'http://rei.com',
      name: 'Breadcrumb Step 4',
    },
  },
];

describe('CdrBreadcrumb', () => {
  it('renders correctly', async () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        items: itemsA,
      }
    });
    wrapper.setData({ componentID: 'example' });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('meets basic a11y requirements', () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        items: itemsA,
      }
    });

    const ellipse = wrapper.findComponent({ref: 'ellipse'});
    expect(ellipse.attributes()['aria-label']).toBe('show 1 more navigation level');
    expect(ellipse.attributes()['aria-controls']).toBe(`${wrapper.vm.$data.componentID}List`);
    expect(ellipse.attributes()['aria-expanded']).toBe('false');
    expect(wrapper.element.tagName).toBe('NAV');
    expect(wrapper.attributes()['aria-label']).toBe('breadcrumbs');
  });

  it('breadcrumb should not truncate with fewer than 3 items', () => {
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: itemsB,
      }
    });
    expect(wrapper.vm.truncate).toBe(false);
  });

  it('breadcrumb should truncate with 3 or more items', async () => {
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: itemsA
      }
    });


    expect(wrapper.vm.truncate).toBe(true);
    wrapper.findComponent({ref: 'ellipse'}).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.truncate).toBeFalsy();
  });

  it('breadcrumb should evaluate truncation when items are updated', async () => {
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: itemsB
      }
    });
    expect(wrapper.vm.truncate).toBe(false);
    wrapper.setProps({items: itemsB.concat(itemsB2)});
    await wrapper.vm.$nextTick();
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
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        items: itemsA
      },
      attachTo: elem, // enables focus testing
    });
    wrapper.vm.handleEllipsisClick();
    await wrapper.vm.$nextTick();
    expect(document.activeElement.textContent).toBe(itemsA[0].item.name);
    wrapper.destroy();
  });

});
