import { shallowMount } from '@vue/test-utils';
import { CdrBreadcrumb } from 'distdir/cedar.esm.js';

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

  it('breadcrumb breakpoints isXS returns true at extra small breakpoint', () => {
    window.outerWidth = 600; // Force xs screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const isXS = wrapper.vm.isXS();
    expect(isXS).toBe(true);
  });

  it('breadcrumb breakpoints isXS returns false when not at extra small breakpoint', () => {
    window.outerWidth = 900; // Force sm screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const isXS = wrapper.vm.isXS();
    expect(isXS).toBe(false);
  });

  it('breadcrumb breakpoints isSM returns true at sm breakpoint', () => {
    window.outerWidth = 800; // Force sm screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const isSM = wrapper.vm.isSM();
    expect(isSM).toBe(true);
  });

  it('breadcrumb breakpoints isSM returns false when not at sm breakpoint', () => {
    window.outerWidth = 500; // Force xs screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const isSM = wrapper.vm.isSM();
    expect(isSM).toBe(false);
  });

  it('breadcrumb breakpoints isMD returns true at md breakpoint', () => {
    window.outerWidth = 1000; // Force sm screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const isMD = wrapper.vm.isMD();
    expect(isMD).toBe(true);
  });

  it('breadcrumb breakpoints isMD returns false when not at md breakpoint', () => {
    window.outerWidth = 600; // Force xs screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const isMD = wrapper.vm.isMD();
    expect(isMD).toBe(false);
  });

  it('breadcrumb breakpoints isLG returns true at lg breakpoint', () => {
    window.outerWidth = 1233; // Force lg screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const isLG = wrapper.vm.isLG();
    expect(isLG).toBe(true);
  });

  it('breadcrumb breakpoints isLG returns false when not at lg breakpoint', () => {
    window.outerWidth = 500; // Force xs screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const isLG = wrapper.vm.isLG();
    expect(isLG).toBe(false);
  });

  it('breadcrumb breakpoints properly detect xs breakpoint', () => {
    window.outerWidth = 600; // Force xs screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const breakpoint = wrapper.vm.getCurrentBreakpoint();
    expect(breakpoint).toBe('XS');
  });

  it('breadcrumb breakpoints properly detect sm breakpoint', () => {
    window.outerWidth = 900; // Force sm screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const breakpoint = wrapper.vm.getCurrentBreakpoint();
    expect(breakpoint).toBe('SM');
  });

  it('breadcrumb breakpoints properly detect md breakpoint', () => {
    window.outerWidth = 1000; // Force md screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const breakpoint = wrapper.vm.getCurrentBreakpoint();
    expect(breakpoint).toBe('MD');
  });

  it('breadcrumb breakpoints properly detect md breakpoint', () => {
    window.outerWidth = 1400; // Force lg screen size
    const wrapper = shallowMount(CdrBreadcrumb);
    const breakpoint = wrapper.vm.getCurrentBreakpoint();
    expect(breakpoint).toBe('LG');
  });
});