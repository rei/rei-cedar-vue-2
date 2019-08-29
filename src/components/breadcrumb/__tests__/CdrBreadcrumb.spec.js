import { shallowMount } from '@vue/test-utils';
import { CdrBreadcrumb } from 'distdir/cedar.js';

describe('CdrBreadcrumb.vue', () => {
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

  it('renders a nav', () => {
    const wrapper = shallowMount(CdrBreadcrumb);
    expect(wrapper.vm.$refs.container.tagName).toBe('NAV');
  });

  it('breadcrumb items validator should return true for valid items prop', () => {
    const wrapper = shallowMount(CdrBreadcrumb);
    let validItems = BreadcrumbItems;
    expect(wrapper.vm.$options.props.items.validator(validItems)).toBe(true);
  });

  it('breadcrumb items validator should return false if item not an object', () => {
    const wrapper = shallowMount(CdrBreadcrumb);
    let invalidItems = [{badItem:''},{item:{noname:''}}];
    expect(wrapper.vm.$options.props.items.validator(invalidItems)).toBe(false);
  });

  it('breadcrumb items validator should return false if item does not contain name', () => {
    const wrapper = shallowMount(CdrBreadcrumb);
    let invalidItems = [{item:{noname:''}}];
    expect(wrapper.vm.$options.props.items.validator(invalidItems)).toBe(false);
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
