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

    it('mounts with cdr-tab-panel children', async () => {
      const spyGetNextTab = jest.fn();
      const spyGetHeaderWidth = jest.fn();
      const spyCalculateOverflow = jest.fn();
      const spyUpdateUnderline = jest.fn();

      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: [
            '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
            '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
          ],
        },
        methods: {
          getNextTab: spyGetNextTab,
          getHeaderWidth: spyGetHeaderWidth,
          calculateOverflow: spyCalculateOverflow,
          updateUnderline: spyUpdateUnderline,
        },
      });

      await wrapper.vm.$nextTick();

      expect(wrapper.vm.tabs.length).toBe(2);
      expect(wrapper.findAll('li').length).toBe(2);
      expect(wrapper.element).toMatchSnapshot();
      expect(spyGetNextTab).toHaveBeenCalled();
      expect(spyGetHeaderWidth).toHaveBeenCalled();
      expect(spyCalculateOverflow).toHaveBeenCalled();
      setTimeout(() => { // for debounce
        expect(spyUpdateUnderline).toHaveBeenCalled();
        wrapper.destroy();
      }, 600);
    });
  });

  describe('event listeners', () => {
    it('handles scroll event', async () => {
      const spyCalculateOverflow = jest.fn();
      const spyUpdateUnderline = jest.fn();

      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: [
            '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
            '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
          ],
        },
        methods: {
          calculateOverflow: spyCalculateOverflow,
          updateUnderline: spyUpdateUnderline,
        },
        attachToDocument: true,
      });

        wrapper.vm.$refs.cdrTabsHeader.parentElement.dispatchEvent(new Event('scroll'));
        await wrapper.vm.$nextTick();

        setTimeout(() => { // for debounce
          expect(wrapper.vm.overflowLeft).toBe(false);
          expect(spyCalculateOverflow).toHaveBeenCalled();
          expect(spyUpdateUnderline).toHaveBeenCalled();
          wrapper.destroy();
        }, 600);
    });

    it('handles resize event', async () => {
      const spyCalculateOverflow = jest.fn();
      const spyUpdateUnderline = jest.fn();
      const spyGetHeaderWidth = jest.fn();

      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: [
            '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
            '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
          ],
        },
        methods: {
          calculateOverflow: spyCalculateOverflow,
          updateUnderline: spyUpdateUnderline,
          getHeaderWidth: spyGetHeaderWidth,
        },
        attachToDocument: true,
      });

      window.dispatchEvent(new Event('resize'));
      await wrapper.vm.$nextTick();

      setTimeout(() => { // for debounce
        expect(spyGetHeaderWidth).toHaveBeenCalledTimes(2);
        expect(spyCalculateOverflow).toHaveBeenCalledTimes(2);
        expect(spyUpdateUnderline).toHaveBeenCalledTimes(2);
        wrapper.destroy();
      }, 600);
    });
  });

  it('getNextTab and getPreviousTab', () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
          '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />',
          '<cdr-tab-panel name="tab3" id="tab-panel-3" :disabled="true" aria-labelledby="tab-3"  />',
        ]
      }
    });

    expect(wrapper.vm.getNextTab(0)).toBe(0);
    expect(wrapper.vm.getNextTab(1)).toBe(1);
    expect(wrapper.vm.getNextTab(3)).toBe(0);

    expect(wrapper.vm.getPreviousTab(0)).toBe(0);
    expect(wrapper.vm.getPreviousTab(1)).toBe(1);
    expect(wrapper.vm.getPreviousTab(-1)).toBe(1);
  });

  describe('handleClick', () => {
    it('left to right', async () => {
      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: [
            '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
            '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
          ],
        },
      });

      await wrapper.vm.$nextTick();
      wrapper.findAll('a').at(1).trigger('click');
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.activeTabIndex).toBe(1);
    });

    it('right to left', async () => {
      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: [
            '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
            '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />',
            '<cdr-tab-panel name="tab2" id="tab-panel-3" aria-labelledby="tab-3" />'
          ],
        },
        propsData: {
          activeTab: 1,
        },
      });

      await wrapper.vm.$nextTick();
      expect(wrapper.vm.activeTabIndex).toBe(1);
      wrapper.vm.changeTab(0);
      await wrapper.vm.$nextTick();
      setTimeout(() => {
        expect(wrapper.vm.activeTabIndex).toBe(0)
      }, 300);
    });
  });

  it('handles right arrow key', async () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
          '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
        ],
      }
    });
    
    await wrapper.vm.$nextTick();
    // Trigger right arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.right');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeTabIndex).toBe(1);
  });

  it('handles left arrow key', async () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
          '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
        ],
      }
    });
    
    wrapper.setData({ activeTabIndex: 1 });
    await wrapper.vm.$nextTick();
    // Trigger left arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.left');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeTabIndex).toBe(0);
  });

  describe('overflow classes', () => {
    it('adds gradient-left class', async () => {
      const spyUpdateUnderline = jest.fn();
      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: [
            '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
            '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
          ],
        },
        methods: {
          updateUnderline: spyUpdateUnderline,
        },
        attachToDocument: true,
      });

      await wrapper.vm.$nextTick();
      wrapper.setData({ overflowLeft: true });
      await wrapper.vm.$nextTick();
      expect(wrapper.find('.cdr-tabs__header-gradient-left').exists()).toBe(true);
    });

    it('adds gradient-right class', async () => {
      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: [
            '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
            '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
          ]
        },
        attachToDocument: true,
      });

      await wrapper.vm.$nextTick();
      wrapper.setData({ overflowRight: true });
      await wrapper.vm.$nextTick();
      expect(wrapper.find('.cdr-tabs__header-gradient-right').exists()).toBe(true);
    });
  });

  it('accessibility', async () => {
    const spyUpdateUnderline = jest.fn();
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1" id="tab-panel-1"  aria-labelledby="tab-1" />',
          '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />',
          '<cdr-tab-panel name="tab3" :disabled="true" id="tab-panel-3" aria-labelledby="tab-3" />']
      },
      methods: {
        updateUnderline: spyUpdateUnderline,
      },
    });

    await wrapper.vm.$nextTick();

    const tab1 = wrapper.find('#tab-1');

    expect(tab1.attributes()['aria-selected']).toBe('true');
    expect(tab1.attributes()['role']).toBe('tab');
    expect(tab1.attributes()['aria-disabled']).toBe('false');

    // tablist role
    expect(wrapper.findComponent({ref: 'cdrTabsHeader'}).attributes()['role']).toBe('tablist');
  });

  it('handleDownArrowNav', async () => {
    const spyUpdateUnderline = jest.fn();
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
          '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
        ],
      },
      methods: {
        updateUnderline: spyUpdateUnderline,
      },
      attachToDocument: true,
    });

    await wrapper.vm.$nextTick();
    wrapper.vm.handleDownArrowNav();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el.lastElementChild.children[wrapper.vm.activeTabIndex]).toBe(document.activeElement);
  });

  it('setFocusToActiveTabHeader', async () => {
    const spyUpdateUnderline = jest.fn();
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
          '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
        ],
      },
      methods: {
        updateUnderline: spyUpdateUnderline,
      },
      attachToDocument: true,
    });

    await wrapper.vm.$nextTick();
    wrapper.vm.setFocusToActiveTabHeader();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$refs.cdrTabsHeader.children[wrapper.vm.activeTabIndex].children[0]).toBe(document.activeElement);
  });

  it('scrollbar is hidden properly', async () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
          '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
        ],
      },
      attachToDocument: true,
    });
    
    wrapper.setData({ widthInitialized: true});
    await wrapper.vm.$nextTick();
    wrapper.setData({ underlineWidth: -1});
    await wrapper.vm.$nextTick();
    wrapper.vm.hideScrollBar();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$refs.cdrTabsContainer.style.getPropertyValue('overflow-x')).toBe('hidden');
    window.dispatchEvent(new Event('transitionend'));
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$refs.cdrTabsContainer.style.getPropertyValue('overflow-x')).toBe('unset');
    wrapper.destroy();
  });

  it('calculateOverflow', async () => {
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: [
          '<cdr-tab-panel name="tab1" id="tab-panel-1" aria-labelledby="tab-1" />',
          '<cdr-tab-panel name="tab2" id="tab-panel-2" aria-labelledby="tab-2" />'
        ],
      }
    });
    await wrapper.vm.$nextTick();
    wrapper.setData({ headerWidth: 2000 });
    await wrapper.vm.$nextTick();
    wrapper.vm.calculateOverflow();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.headerOverflow).toBe(true);
  });
});
