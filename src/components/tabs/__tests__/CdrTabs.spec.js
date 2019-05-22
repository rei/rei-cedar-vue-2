import { shallowMount, mount } from '@vue/test-utils';
import { CdrTabs } from 'distdir/cedar.esm.js';
import { CdrTabPanel } from 'distdir/cedar.esm.js';
import sinon from 'sinon';
import Vue from 'vue';

describe('CdrTabs.vue', () => {
  it('mounts tabs', () => {
    const wrapper = shallowMount(CdrTabs);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders child tabs properly', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    expect(wrapper.vm.tabs.length).toBe(2);
  });

  it('calculates overflow properly', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
      attachToDocument: true,
    });
    window.dispatchEvent(new Event('resize'));
    expect(wrapper.vm.overflowLeft).toBe(false);
    wrapper.destroy();
  });

  it('handles right arrow key', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    // Trigger right arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.right');
    expect(wrapper.vm.activeTabIndex).toBe(1);
  });

  it('handles right arrow key when far right tab is active', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    wrapper.setData({ activeTabIndex: 1 });
    // Trigger right arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.right');
    expect(wrapper.vm.activeTabIndex).toBe(1);
  });

  it('handles left arrow key', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    wrapper.setData({ activeTabIndex: 1 });
    // Trigger left arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.left');
    expect(wrapper.vm.activeTabIndex).toBe(0);
  });

  it('handles left arrow key when far left is active', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    // Trigger left arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.left');
    expect(wrapper.vm.activeTabIndex).toBe(0);
  });

  it('ignores non left and right arrow key', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    // Trigger down arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.down');
    expect(wrapper.vm.activeTabIndex).toBe(0);
  });

  it('handles scroll event', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
      attachToDocument:true,
    });
    // Trigger scroll event
    wrapper.vm.$refs.cdrTabsHeader.parentElement.dispatchEvent(new Event('scroll'));
    setTimeout(() => {
      expect(wrapper.vm.overflowLeft).toBe(false);
      wrapper.destroy();
      done();
    }, 250);
  });

  it('resize event recalculates overflow', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
      attachToDocument: true,
    });
    // Trigger resize event
    window.dispatchEvent(new Event('resize'));
    // Due to debounce function, must use timeout
    setTimeout(() => {
      expect(wrapper.vm.headerOverflow).toBe(false);
      wrapper.destroy();
      done();
    }, 250);
  });

  it('click tab changes active tab', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
    });
    // TODO use trigger
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
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
    });

    Vue.nextTick(() => {
      const list = wrapper.find({ ref: 'cdrTabsHeader' });
      const tabLink1 = list.findAll('a').at(0);
      tabLink1.trigger('click');
      expect(wrapper.vm.activeTabIndex).toBe(0);

      const tabLink2 = list.findAll('a').at(1);
      tabLink2.trigger('click');
      expect(wrapper.vm.activeTabIndex).toBe(1);

      done()
    })
  });

  it('calculateOverflow sets header overflow properly', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    wrapper.vm.headerWidth = 2000;
    wrapper.vm.calculateOverflow();
    expect(wrapper.vm.headerOverflow).toBe(true);
  });

  it('width is initialized only once', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    wrapper.vm.widthInitialized = true;
    wrapper.vm.underlineWidth = -1;
    wrapper.vm.initializeOffsets();
    expect(wrapper.vm.underlineWidth).toBe(-1);
  });

  it('scrollbar is hidden properly', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    wrapper.vm.widthInitialized = true;
    wrapper.vm.underlineWidth = -1;
    wrapper.vm.hideScrollBar();
    expect(wrapper.vm.$refs.cdrTabsContainer.style.getPropertyValue('overflow-x')).toBe('hidden');
    window.dispatchEvent(new Event('transitionend'));
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$refs.cdrTabsContainer.style.getPropertyValue('overflow-x')).toBe('unset');
      done();
    });
  });

  it('handles down arrow', (done) => {
    const spy = sinon.spy(CdrTabs.methods, 'handleDownArrowNav');
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });

    wrapper.vm.handleDownArrowNav();
    wrapper.vm.$nextTick(() => {
      sinon.assert.called(spy);
      done()
    });
  });

  it('handles up arrow', (done) => {
    const spy = sinon.spy(CdrTabs.methods, 'setFocusToActiveTabHeader');
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    wrapper.vm.activeTabIndex = 0;
    wrapper.vm.$nextTick(() => {
      wrapper.vm.$children[0].handleUpArrowNav();
      wrapper.vm.$nextTick(() => {
        sinon.assert.called(spy);
        done()
      });
    });
  });
});