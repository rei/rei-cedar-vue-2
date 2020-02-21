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
          window.dispatchEvent(new Event('resize'));

          setTimeout(() => { // for debounce
            expect(spyGetHeaderWidth).toHaveBeenCalled();
            expect(spyCalculateOverflow).toHaveBeenCalled();
            expect(spyUpdateUnderline).toHaveBeenCalled();
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

  describe('handleClick', () => {
    it('left to right', (done) => {
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

    xit('right to left', (done) => {
      const wrapper = mount(CdrTabs, {
        stubs: {
          'cdr-tab-panel': CdrTabPanel,
        },
        slots: {
          default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
        },
        propsData: {
          activateTab: 1,
        },
      });
      
      Vue.nextTick(() => {
        const test = wrapper.findAll('a').at(0);
        console.log('test', test);
        // wrapper.findAll('a').at(0).trigger('click');
        // expect(wrapper.vm.activeTabIndex).toBe(1);
        done();
      });
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

  xit('resize calculates overflow properly', (done) => {
    const spyCalculateOverflow = jest.fn();
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
      },
      methods: {
        calculateOverflow: spyCalculateOverflow,
      },
      attachToDocument: true,
    });
    
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

  


  // xit('handles right arrow key when far right tab is active', (done) => {
  //   const wrapper = mount(CdrTabs, {
  //     stubs: {
  //       'cdr-tab-panel': CdrTabPanel,
  //     },
  //     slots: {
  //       default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
  //     }
  //   });
  //   Vue.config.errorHandler = done
  //   Vue.nextTick(() => {
  //     wrapper.setData({ activeTabIndex: 1 });
  //     // Trigger right arrow keyup event
  //     wrapper.findAll('div').at(1).trigger('keyup.right');
  //     expect(wrapper.vm.activeTabIndex).toBe(1);
  //     done();
  //   });
  // });



  // xit('handles left arrow key when far left is active', (done) => {
  //   const wrapper = mount(CdrTabs, {
  //     stubs: {
  //       'cdr-tab-panel': CdrTabPanel,
  //     },
  //     slots: {
  //       default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
  //     }
  //   });
  //   Vue.config.errorHandler = done
  //   Vue.nextTick(() => {
  //     // Trigger left arrow keyup event
  //     wrapper.findAll('div').at(1).trigger('keyup.left');
  //     expect(wrapper.vm.activeTabIndex).toBe(0);
  //     done();
  //   });
  // });

  // xit('ignores non left and right arrow key', (done) => {
  //   const wrapper = mount(CdrTabs, {
  //     stubs: {
  //       'cdr-tab-panel': CdrTabPanel,
  //     },
  //     slots: {
  //       default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
  //     }
  //   });
  //   Vue.config.errorHandler = done
  //   Vue.nextTick(() => {
  //     // Trigger down arrow keyup event
  //     wrapper.findAll('div').at(1).trigger('keyup.down');
  //     expect(wrapper.vm.activeTabIndex).toBe(0);
  //     done();
  //   });
  // });




  // it('click tab changes active tab lower index variation', (done) => {
  //   const wrapper = mount(CdrTabs, {
  //     stubs: {
  //       'cdr-tab-panel': CdrTabPanel,
  //     },
  //     slots: {
  //       default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
  //     },
  //   });
  //   Vue.config.errorHandler = done;

  //   wrapper.setData({ activeTabIndex: 1 });

  //   Vue.nextTick(() => {
  //     setTimeout(() => {
  //       wrapper.findAll('a').at(0).trigger('click');
  //       expect(wrapper.vm.activeTabIndex).toBe(0);

  //       wrapper.findAll('a').at(1).trigger('click');
  //       expect(wrapper.vm.activeTabIndex).toBe(1);
  //     }, 500);

  //     done()
  //   })
  // });

  // xit('calculateOverflow sets header overflow properly', () => {
  //   const wrapper = mount(CdrTabs, {
  //     stubs: {
  //       'cdr-tab-panel': CdrTabPanel,
  //     },
  //     slots: {
  //       default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
  //     }
  //   });
  //   wrapper.setData({ headerWidth: 2000 });
  //   wrapper.vm.calculateOverflow();
  //   expect(wrapper.vm.headerOverflow).toBe(true);
  // });

  // xit('scrollbar is hidden properly', (done) => {
  //   const wrapper = mount(CdrTabs, {
  //     stubs: {
  //       'cdr-tab-panel': CdrTabPanel,
  //     },
  //     slots: {
  //       default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
  //     },
  //     attachToDocument: true,
  //   });
  //   Vue.config.errorHandler = done;
  //   wrapper.setData({ widthInitialized: true});
  //   wrapper.setData({ underlineWidth: -1});
  //   wrapper.vm.hideScrollBar();
  //   expect(wrapper.vm.$refs.cdrTabsContainer.style.getPropertyValue('overflow-x')).toBe('hidden');
  //   window.dispatchEvent(new Event('transitionend'));
  //   Vue.nextTick(() => {
  //     expect(wrapper.vm.$refs.cdrTabsContainer.style.getPropertyValue('overflow-x')).toBe('unset');
  //     wrapper.destroy();
  //     done();
  //   });
  // });

  // xit('handles down arrow', (done) => {
  //   const wrapper = mount(CdrTabs, {
  //     stubs: {
  //       'cdr-tab-panel': CdrTabPanel,
  //     },
  //     slots: {
  //       default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
  //     }
  //   });
  //   Vue.config.errorHandler = done;

  //   const spy = spyOn(wrapper.vm, 'handleDownArrowNav')
  //   Vue.nextTick(() => {
  //     // Trigger right arrow keyup event
  //     wrapper.findAll('div').at(1).trigger('keydown.down');
  //     expect(spy).toHaveBeenCalled();
  //     done();
  //   });
  // });

  // xit('handles up arrow', (done) => {
  //   const wrapper = mount(CdrTabs, {
  //     stubs: {
  //       'cdr-tab-panel': CdrTabPanel,
  //     },
  //     slots: {
  //       default: ['<cdr-tab-panel name="tab1"/>', '<cdr-tab-panel name="tab2"/>']
  //     }
  //   });
  //   Vue.config.errorHandler = done;

  //   const spy = spyOn(wrapper.vm, 'setFocusToActiveTabHeader');
  //   Vue.nextTick(() => {
  //     wrapper.find({ ref: 'slotWrapper' }).findAll('div').at(1).trigger('keydown.up');
  //     expect(spy).toHaveBeenCalled();
  //     done();
  //   });
  // });

});
