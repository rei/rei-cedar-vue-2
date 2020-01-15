import { mount } from '@vue/test-utils';
import CdrTabs from 'componentdir/tabs/CdrTabs';
import CdrTabPanel from 'componentdir/tabs/CdrTabPanel';
import Vue from 'vue';

// Tests use nextTick because of the nextTick in mounted hook of tabs

describe('CdrTabs', () => {
  it('mounts tabs', () => {
    const wrapper = mount(CdrTabs);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders child tabs properly', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      expect(wrapper.vm.tabs.length).toBe(2);
      expect(wrapper.findAll('li').length).toBe(2);
      expect(wrapper.element).toMatchSnapshot();
      done();
    });
  });

  it('resize calculates overflow properly', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
      attachToDocument: true,
    });
    Vue.config.errorHandler = done
    const spy = spyOn(wrapper.vm, 'calculateOverflow');
    Vue.nextTick(() => {
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => { // for debounce
        expect(wrapper.vm.overflowLeft).toBe(false);
        expect(spy).toHaveBeenCalled();
        wrapper.destroy();
        done();
      }, 600);
    });
  });

  it('handles right arrow key', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      // Trigger right arrow keyup event
      wrapper.findAll('div').at(1).trigger('keyup.right');
      expect(wrapper.vm.activeTabIndex).toBe(1);
      done();
    });
  });

  it('handles right arrow key when far right tab is active', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      wrapper.setData({ activeTabIndex: 1 });
      // Trigger right arrow keyup event
      wrapper.findAll('div').at(1).trigger('keyup.right');
      expect(wrapper.vm.activeTabIndex).toBe(1);
      done();
    });
  });

  it('handles left arrow key', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      wrapper.setData({ activeTabIndex: 1 });
      // Trigger left arrow keyup event
      wrapper.findAll('div').at(1).trigger('keyup.left');
      expect(wrapper.vm.activeTabIndex).toBe(0);
      done();
    });
  });

  it('handles left arrow key when far left is active', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      // Trigger left arrow keyup event
      wrapper.findAll('div').at(1).trigger('keyup.left');
      expect(wrapper.vm.activeTabIndex).toBe(0);
      done();
    });
  });

  it('ignores non left and right arrow key', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      // Trigger down arrow keyup event
      wrapper.findAll('div').at(1).trigger('keyup.down');
      expect(wrapper.vm.activeTabIndex).toBe(0);
      done();
    });
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
    Vue.config.errorHandler = done
    const spy = spyOn(wrapper.vm, 'calculateOverflow');
    Vue.nextTick(() => {
      wrapper.vm.$refs.cdrTabsHeader.parentElement.dispatchEvent(new Event('scroll'));
      setTimeout(() => { // for debounce
        expect(wrapper.vm.overflowLeft).toBe(false);
        expect(spy).toHaveBeenCalled(); // maker sure something is actually run as a result of scroll
        wrapper.destroy();
        done();
      }, 600);
    });
  });

  it('click tab changes active tab', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
    });
    Vue.config.errorHandler = done;
    Vue.nextTick(() => {
      wrapper.findAll('a').at(1).trigger('click');
      expect(wrapper.vm.activeTabIndex).toBe(1);
      done();
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
    Vue.config.errorHandler = done;

    wrapper.setData({ activeTabIndex: 1 });

    Vue.nextTick(() => {
      wrapper.findAll('a').at(0).trigger('click');
      expect(wrapper.vm.activeTabIndex).toBe(0);

      wrapper.findAll('a').at(1).trigger('click');
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
    wrapper.setData({ headerWidth: 2000 });
    wrapper.vm.calculateOverflow();
    expect(wrapper.vm.headerOverflow).toBe(true);
  });

  it('scrollbar is hidden properly', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
      attachToDocument: true,
    });
    Vue.config.errorHandler = done;
    wrapper.setData({ widthInitialized: true});
    wrapper.setData({ underlineWidth: -1});
    wrapper.vm.hideScrollBar();
    expect(wrapper.vm.$refs.cdrTabsContainer.style.getPropertyValue('overflow-x')).toBe('hidden');
    window.dispatchEvent(new Event('transitionend'));
    Vue.nextTick(() => {
      expect(wrapper.vm.$refs.cdrTabsContainer.style.getPropertyValue('overflow-x')).toBe('unset');
      wrapper.destroy();
      done();
    });
  });

  it('handles down arrow', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    Vue.config.errorHandler = done;

    const spy = spyOn(wrapper.vm, 'handleDownArrowNav')
    Vue.nextTick(() => {
      // Trigger right arrow keyup event
      wrapper.findAll('div').at(1).trigger('keydown.down');
      expect(spy).toHaveBeenCalled();
      done();
    });
  });

  it('handles up arrow', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      }
    });
    Vue.config.errorHandler = done;

    const spy = spyOn(wrapper.vm, 'setFocusToActiveTabHeader');
    Vue.nextTick(() => {
      wrapper.find({ ref: 'slotWrapper' }).findAll('div').at(1).trigger('keydown.up');
      expect(spy).toHaveBeenCalled();
      done();
    });
  });
});
