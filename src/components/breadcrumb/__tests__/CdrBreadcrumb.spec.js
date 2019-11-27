import { shallowMount, mount } from '@vue/test-utils';
import CdrBreadcrumb from 'componentdir/breadcrumb/CdrBreadcrumb';

describe('CdrBreadcrumb', () => {
  const BreadcrumbItems = [
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
        name: 'Breadcrumb Step 3',
      },
    },
    {
      item:{
        url: 'http://bing.com',
        name: 'Really Really Long Breadcrumb Step 4',
      },
    },
    {
      item:{
        url: 'http://amazon.com',
        name: 'Last Step',
      },
    },
  ];

  test('renders correctly', () => {
    const wrapper = mount(CdrBreadcrumb);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('breadcrumb should not truncate with fewer than 3 items', () => {
    const items = [
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
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: items,
      }
    });
    expect(wrapper.vm.truncate).toBe(false);
  });

  it('breadcrumb should truncate with 3 or more items', () => {
    const items = [
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
          name: 'Breadcrumb Step 3',
        },
      },
    ];
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: items,
      }
    });
    expect(wrapper.vm.truncate).toBe(true);
    wrapper.find({ref: 'ellipse'}).trigger('click');
    expect(wrapper.vm.truncate).toBeFalsy();

  });

  it('breadcrumb should evaluate truncation when items are updated', () => {
    const items = [
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
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: items,
      }
    });
    expect(wrapper.vm.truncate).toBe(false);
    wrapper.setProps({items: items.concat(items)})
    expect(wrapper.vm.truncate).toBe(true);

  });

  it('breadcrumb link can be overridden with link scopedSlot', () => {
    const items = [
      {
        item: {
          url: 'http://rei.com',
          name: 'Scoped',
        },
      },
    ];
    const wrapper = shallowMount(CdrBreadcrumb, {
      propsData: {
        items: items,
      },
      scopedSlots: {
        link: '<p slot-scope="link">{{link.href}} TEST {{link.content}} {{link.class}}</p>'
      }
    });
    expect(wrapper.text()).toBe('http://rei.com TEST Scoped cdr-breadcrumb__link');
  });

});
