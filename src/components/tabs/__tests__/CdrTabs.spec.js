import { mount } from '@vue/test-utils';
import CdrTabs from 'componentdir/tabs/CdrTabs';
import CdrTabPanel from 'componentdir/tabs/CdrTabPanel';
import Vue from 'vue';

// Tests use nextTick because of the nextTick in mounted hook of tabs

describe('CdrTabs', () => {
  describe('mounted', () => {
    it('mounts tabs', () => {
      const wrapper = mount(CdrTabs);
      expect(wrapper.element).toMatchSnapshot();
    });

    it('mounts with cdr-tab-panel children', (done) => {
      const spyInitActiveTabIndex = jest.fn();
      const spyGetHeaderWidth = jest.fn();
      const spyCalculateOverflow = jest.fn();
      const spyUpdateUnderline = jest.fn();

      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
        },
        methods: {
          initActiveTabIndex: spyInitActiveTabIndex,
          getHeaderWidth: spyGetHeaderWidth,
          calculateOverflow: spyCalculateOverflow,
          updateUnderline: spyUpdateUnderline,
        },
      });

      Vue.nextTick(() => {
        expect(wrapper.vm.tabs.length).toBe(2);
        expect(wrapper.findAll('li').length).toBe(2);
        expect(wrapper.element).toMatchSnapshot();
        expect(spyInitActiveTabIndex).toHaveBeenCalled();
        expect(spyGetHeaderWidth).toHaveBeenCalled();
        expect(spyCalculateOverflow).toHaveBeenCalled();
        
        setTimeout(() => {
          expect(spyUpdateUnderline).toHaveBeenCalled();
          done();
        }, 200)
      });
    });
  });

  describe('event listeners', () => {    
    it('handles scroll event', (done) => {
      const spyCalculateOverflow = jest.fn();
      const spyUpdateUnderline = jest.fn();

      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>'],
        },
        methods: {
          calculateOverflow: spyCalculateOverflow,
          updateUnderline: spyUpdateUnderline,
        },
        attachToDocument: true,
      });

      Vue.nextTick(() => {
        wrapper.vm.$refs.cdrTabsHeader.parentElement.dispatchEvent(new Event('scroll'));

        setTimeout(() => { // for debounce
          expect(wrapper.vm.overflowLeft).toBe(false);
          expect(spyCalculateOverflow).toHaveBeenCalled();
          expect(spyUpdateUnderline).toHaveBeenCalled();
          wrapper.destroy();
          done();
        }, 600);
      });
    });

    it('handles resize event', () => {
      const spyCalculateOverflow = jest.fn();
      const spyUpdateUnderline = jest.fn();
      const spyGetHeaderWidth = jest.fn();

      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>'],
        },
        methods: {
          calculateOverflow: spyCalculateOverflow,
          updateUnderline: spyUpdateUnderline,
          getHeaderWidth: spyGetHeaderWidth,
        },
        attachToDocument: true,
      });

      Vue.nextTick(() => {
        setTimeout(() => {
          console.log('resize dispatchEvent');
          window.dispatchEvent(new Event('resize'));

          setTimeout(() => { // for debounce
            expect(spyGetHeaderWidth).toHaveBeenCalledTimes(2);
            expect(spyCalculateOverflow).toHaveBeenCalledTimes(2);
            expect(spyUpdateUnderline).toHaveBeenCalledTimes(2);
            wrapper.destroy();
            done();
          }, 600);
        }, 800);
      });
    });
  });

  describe('initActiveTabIndex', () => {
    it('sets activeTabIndex to activateTab', (done) => {
      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2" />'],
        },
        propsData: {
          activateTab: 1,
        },
      });

      Vue.nextTick(() => {
        expect(wrapper.vm.activeTabIndex).toBe(1);
        done();
      });
    }); 

    it('calls getNextTab', () => {
      const spyGetNextTab = jest.fn();

      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2" />'],
        },
        methods: {
          getNextTab: spyGetNextTab,
        }
      });

      expect(spyGetNextTab).toHaveBeenCalled();
    });
  });

  it('getNextTab and getPreviousTab', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1"/>',
          '<cdr-tab-panel name="tab2" :disabled="true" />',
          '<cdr-tab-panel name="tab3" />',
        ]
      }
    });

    expect(wrapper.vm.getNextTab(0)).toBe(0);
    expect(wrapper.vm.getNextTab(1)).toBe(2);
    expect(wrapper.vm.getNextTab(3)).toBe(-1);

    expect(wrapper.vm.getPreviousTab(0)).toBe(0);
    expect(wrapper.vm.getPreviousTab(1)).toBe(0);
    expect(wrapper.vm.getPreviousTab(-1)).toBe(-1);
  });


  it('handleClick', (done) => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
    });
    
    Vue.nextTick(() => {
      wrapper.findAll('a').at(1).trigger('click');
      expect(wrapper.vm.activeTabIndex).toBe(1);
      done();
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
    
    Vue.nextTick(() => {
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
    
    Vue.nextTick(() => {
      wrapper.setData({ activeTabIndex: 1 });
      // Trigger left arrow keyup event
      wrapper.findAll('div').at(1).trigger('keyup.left');
      expect(wrapper.vm.activeTabIndex).toBe(0);
      done();
    });
  });

  describe('overflow classes', () => {
    it('adds gradient-left class', (done) => {
      const spyUpdateUnderline = jest.fn();
      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: ['<cdr-tab-panel name="tab1"/> id="tab-1"', '<cdr-tab-panel name="tab2" id="tab-2"/>']
        },
        methods: {
          updateUnderline: spyUpdateUnderline,
        },
        attachToDocument: true,
      });

      Vue.nextTick(() => {
        wrapper.setData({ overflowLeft: true });
        expect(wrapper.find('.cdr-tabs__header-gradient-left').exists()).toBe(true);
        done();
      });
    });

    it('adds gradient-right class', (done) => {
      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
        },
        attachToDocument: true,
      });

      Vue.nextTick(() => {
        wrapper.setData({ overflowRight: true });
        expect(wrapper.find('.cdr-tabs__header-gradient-right').exists()).toBe(true);
        done();
      });
    });
  });

  it('accesibility', (done) => {
    const spyUpdateUnderline = jest.fn();
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>', '<cdr-tab-panel name="tab3" :disabled="true" />']
      },
      methods: {
        updateUnderline: spyUpdateUnderline,
      },
    });

    Vue.nextTick(() => {
      const tab1 = wrapper.vm.getTabEl(wrapper.vm.tabs[0]);
      const tab2 = wrapper.vm.getTabEl(wrapper.vm.tabs[1]);
      const tab3 = wrapper.vm.getTabEl(wrapper.vm.tabs[2]);
      
      // aria-selected
      expect(tab1.data.attrs['aria-selected']).toBe(true);
      expect(tab2.data.attrs['aria-selected']).toBe(false);
      expect(tab3.data.attrs['aria-selected']).toBe('false');

      // tabIndex
      expect(tab1.data.attrs.tabIndex).toBe(0);
      expect(tab2.data.attrs.tabIndex).toBe(-1);

      // tab role
      expect(tab1.data.attrs.role).toBe('tab');
      expect(tab2.data.attrs.role).toBe('tab');

      // aria-disabled
      expect(tab1.data.attrs['aria-disabled']).toBe('false');
      expect(tab2.data.attrs['aria-disabled']).toBe('false');
      expect(tab3.data.attrs['aria-disabled']).toBe('true');

      // tablist role
      expect(wrapper.vm.$refs.cdrTabsHeader.hasAttribute('role', 'tablist')).toBe(true);
      
      done();
    });

  });

  it('handleDownArrowNav', () => {
    const spyUpdateUnderline = jest.fn();
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
      methods: {
        updateUnderline: spyUpdateUnderline,
      },
      attachToDocument: true,
    });

    Vue.nextTick(() => {
      wrapper.vm.handleDownArrowNav();
      expect(wrapper.vm.$el.lastElementChild.children[wrapper.vm.activeTabIndex]).toBe(document.activeElement);
    });
  });

  it('setFocusToActiveTabHeader', () => {
    const spyUpdateUnderline = jest.fn();
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
      methods: {
        updateUnderline: spyUpdateUnderline,
      },
      attachToDocument: true,
    });

    Vue.nextTick(() => {
      wrapper.vm.setFocusToActiveTabHeader();
      expect(wrapper.vm.$refs.cdrTabsHeader.children[wrapper.vm.activeTabIndex].children[0]).toBe(document.activeElement);
    });
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

  it('calculateOverflow', () => {
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
});
