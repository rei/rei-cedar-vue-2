import { shallowMount, mount } from '@vue/test-utils';
import CdrTabs from 'componentsdir/tabs/CdrTabs';
import CdrTabPanel from 'componentsdir/tabs/CdrTab';

describe('CdrTabs.vue', () => {
  it('mounts tabs', () => {
    const wrapper = shallowMount(CdrTabs);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders child tabs properly', () => {
    const wrapper = mount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    expect(wrapper.vm.tabs.length).toBe(2);
  });

  it('calculates overflow properly', () => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    wrapper.vm.calculateOverflow();
    expect(wrapper.vm.overflowLeft).toBe(false);
  });

  it('handles right arrow key', (done) => {
    const wrapper = mount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    // Trigger right arrow keydown event
    wrapper.vm.$nextTick(() => {
      wrapper.vm.handleArrowNav({ which: 39 });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.activeTabIndex).toBe(1);
        done();
      });
    });
  });

  it('handles right arrow key when far right tab is active', (done) => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    const event = new KeyboardEvent("keydown", {
      which : 39
    });
    wrapper.vm.activeTabIndex = 1;
    // Trigger right arrow keydown event
    window.dispatchEvent(event);
    // Due to debounce, must wait for event handler to eventually run.
    setTimeout(() => {
      expect(wrapper.vm.activeTabIndex).toBe(1);
      done();
    }, 250);
  });

  it('handles left arrow key', (done) => {
    const wrapper = mount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    wrapper.vm.activeTabIndex = 1;
    // Trigger left arrow keypress event
    wrapper.vm.$nextTick(() => {
      wrapper.vm.handleArrowNav({ which: 37 });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.activeTabIndex).toBe(0);
        done();
      });
    })
  });

  it('handles left arrow key when far left is active', (done) => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    const event = new KeyboardEvent("keydown", {
      which : 37
    });
    // Trigger left arrow keypress event
    window.dispatchEvent(event);
    setTimeout(() => {
      expect(wrapper.vm.activeTabIndex).toBe(0);
      done();
    }, 250);
  });

  it('ignores non left and right arrow key', (done) => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    const event = new KeyboardEvent("keydown", {
      which : 36
    });
    // Trigger left arrow keypress event
    window.dispatchEvent(event);
    setTimeout(() => {
      expect(wrapper.vm.activeTabIndex).toBe(0);
      done();
    });
  });

  it('handles scroll event', (done) => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    // Trigger scroll event
    wrapper.vm.$refs.cdrTabsHeader.parentElement.dispatchEvent(new Event('scroll'));
    setTimeout(() => {
      expect(wrapper.vm.overflowLeft).toBe(false);
      done();
    }, 250);
  });

  it('resize event recalculates overflow', (done) => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    // Trigger resize event
    window.dispatchEvent(new Event('resize'));
    // Due to debounce function, must use timeout
    setTimeout(() => {
      expect(wrapper.vm.headerOverflow).toBe(false);
      done();
    }, 250);
  });

  it('click tab changes active tab', (done) => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    wrapper.vm.tabs[0].name = 'tab1';
    // Due to debounce function, must use timeout
    wrapper.vm.$nextTick(() => {
      wrapper.vm.$refs.cdrTabsHeader.children[1].children[0].dispatchEvent(new Event('click'));
      setTimeout(() => {
        expect(wrapper.vm.activeTabIndex).toBe(1);
        done();
      }, 250);
    });
  });

  it('click tab changes active tab lower index variation', (done) => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    wrapper.vm.activeTabIndex = 1;
    // Trigger resize event
    wrapper.vm.$nextTick(() => {
      wrapper.vm.$refs.cdrTabsHeader.children[0].children[0].dispatchEvent(new Event('click'));
      // Due to debounce function, must use timeout
      setTimeout(() => {
        expect(wrapper.vm.activeTabIndex).toBe(1);
        done();
      }, 250);
    });
  });

  it('calculateOverflow sets header overflow properly', () => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    wrapper.vm.headerWidth = 2000;
    wrapper.vm.calculateOverflow();
    expect(wrapper.vm.headerOverflow).toBe(true);
  });

  it('width is initialized only once', () => {
    const wrapper = shallowMount(CdrTabs, {
      slots: {
        default: [CdrTabPanel, CdrTabPanel]
      }
    });
    wrapper.vm.widthInitialized = true;
    wrapper.vm.underlineWidth = -1;
    wrapper.vm.initializeOffsets();
    expect(wrapper.vm.underlineWidth).toBe(-1);
  });
});