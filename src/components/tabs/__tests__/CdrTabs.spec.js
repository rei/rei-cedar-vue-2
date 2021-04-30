import { mount } from '../../../../test/vue-jest-style-workaround.js';
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

    it('mounts with cdr-tab-panel children', async (done) => {

      const wrapper = mount(h(CdrTabs, { activeTab: 1 }, {default: () => [
        h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
        h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
      ]}));

      const spyGetHeaderWidth = spyOn(wrapper.vm, 'getHeaderWidth');
      const spyCalculateOverflow = spyOn(wrapper.vm, 'calculateOverflow');
      const spyUpdateUnderline = spyOn(wrapper.vm, 'updateUnderline');

      await wrapper.vm.$nextTick();

      expect(wrapper.element).toMatchSnapshot();

      expect(wrapper.vm.tabs.length).toBe(2);
      expect(wrapper.findAll('button').length).toBe(2);
      expect(wrapper.vm.activeTabIndex).toBe(1);
      setTimeout(() => { // for debounce
        expect(spyGetHeaderWidth).toHaveBeenCalled();
        expect(spyCalculateOverflow).toHaveBeenCalled();
        expect(spyUpdateUnderline).toHaveBeenCalled();
        wrapper.destroy();
        done();
      }, 600);
    });
  });

  describe('event listeners', () => {
    it('handles scroll event', async () => {
      const elem = document.createElement('div')
      if (document.body) {
        document.body.appendChild(elem)
      }
      
      const wrapper = mount(h(CdrTabs, {}, {default: () => [
        h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
        h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
      ]}), { attachTo: elem });

      const spyCalculateOverflow = spyOn(wrapper.vm, 'calculateOverflow');
      const spyUpdateUnderline = spyOn(wrapper.vm, 'updateUnderline');

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
      const elem = document.createElement('div')
      if (document.body) {
        document.body.appendChild(elem)
      }

      const wrapper = mount(h(CdrTabs, {}, {default: () => [
        h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
        h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
      ]}), { attachTo: elem });

      const spyCalculateOverflow = spyOn(wrapper.vm, 'calculateOverflow');
      const spyUpdateUnderline = spyOn(wrapper.vm, 'updateUnderline');
      const spyGetHeaderWidth = spyOn(wrapper.vm, 'getHeaderWidth');
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
    const wrapper = mount(h(CdrTabs, {}, {default: () => [
      h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
      h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
      h(CdrTabPanel, {id: 'tab-panel-3', name: 'tab3', 'aria-labelledby': 'tab-3', disabled: true}),
    ]}));

    expect(wrapper.vm.getNextTab(0)).toBe(0);
    expect(wrapper.vm.getNextTab(1)).toBe(1);
    expect(wrapper.vm.getNextTab(3)).toBe(0);

    expect(wrapper.vm.getPreviousTab(0)).toBe(0);
    expect(wrapper.vm.getPreviousTab(1)).toBe(1);
    expect(wrapper.vm.getPreviousTab(-1)).toBe(1);
  });

  describe('handleClick', () => {
    it('left to right', async () => {
      const wrapper = mount(h(CdrTabs, {}, {default: () => [
        h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
        h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
      ]}));

      await wrapper.vm.$nextTick();
      wrapper.findAll('button').at(1).trigger('click');
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.activeTabIndex).toBe(1);
    });

    it('right to left', async () => {
      const wrapper = mount(h(CdrTabs, { activeTab: 1 }, {default: () => [
        h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
        h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
        h(CdrTabPanel, {id: 'tab-panel-3', name: 'tab3', 'aria-labelledby': 'tab-3'}),
      ]}));

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
    const wrapper = mount(h(CdrTabs, {}, {default: () => [
      h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
      h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
    ]}));

    await wrapper.vm.$nextTick();
    // Trigger right arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.right');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeTabIndex).toBe(1);
  });

  it('handles left arrow key', async () => {
    const wrapper = mount(h(CdrTabs, {}, {default: () => [
      h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
      h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
    ]}));

    wrapper.setData({ activeTabIndex: 1 });
    await wrapper.vm.$nextTick();
    // Trigger left arrow keyup event
    wrapper.findAll('div').at(1).trigger('keyup.left');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeTabIndex).toBe(0);
  });

  describe('overflow classes', () => {
    it('adds gradient-left class', async () => {
      const elem = document.createElement('div')
      if (document.body) {
        document.body.appendChild(elem)
      }
      const wrapper = mount(h(CdrTabs, {}, {default: () => [
        h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
        h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
      ]}), { attachTo: elem });

      await wrapper.vm.$nextTick();
      wrapper.setData({ overflowLeft: true });
      await wrapper.vm.$nextTick();
      expect(wrapper.find('.cdr-tabs__gradient--left.cdr-tabs__gradient--active').exists()).toBe(true);
      wrapper.destroy();
    });

    it('adds gradient-right class', async () => {
      const elem = document.createElement('div')
      if (document.body) {
        document.body.appendChild(elem)
      }
      const wrapper = mount(h(CdrTabs, {}, {default: () => [
        h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
        h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
      ]}), { attachTo: elem });

      await wrapper.vm.$nextTick();
      wrapper.setData({ overflowRight: true });
      await wrapper.vm.$nextTick();
      expect(wrapper.find('.cdr-tabs__gradient--right.cdr-tabs__gradient--active').exists()).toBe(true);
      wrapper.destroy();
    });
  });

  it('accessibility', async () => {
    const wrapper = mount(h(CdrTabs, {}, {default: () => [
      h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
      h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
      h(CdrTabPanel, {id: 'tab-panel-3', name: 'tab3', 'aria-labelledby': 'tab-3', disabled: true}),
    ]}));

    await wrapper.vm.$nextTick();

    const tab1 = wrapper.find('#tab-1');

    expect(tab1.attributes()['aria-selected']).toBe('true');
    expect(tab1.attributes()['role']).toBe('tab');

    // tablist role
    expect(wrapper.findComponent({ref: 'cdrTabsHeader'}).attributes()['role']).toBe('tablist');
  });

  it('handleDownArrowNav', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(h(CdrTabs, {}, {default: () => [
      h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
      h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
    ]}), { attachTo: elem });

    await wrapper.vm.$nextTick();
    wrapper.vm.handleDownArrowNav();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el.lastElementChild.children[wrapper.vm.activeTabIndex]).toBe(document.activeElement);
    wrapper.destroy();
  });

  it('setFocusToActiveTabHeader', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(h(CdrTabs, {}, {default: () => [
      h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
      h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
    ]}), { attachTo: elem });

    await wrapper.vm.$nextTick();
    wrapper.vm.setFocusToActiveTabHeader();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$refs.cdrTabsHeader.children[wrapper.vm.activeTabIndex]).toBe(document.activeElement);
    wrapper.destroy();
  });

  it('scrollbar is hidden properly', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(h(CdrTabs, {}, {default: () => [
      h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
      h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
    ]}), { attachTo: elem });

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
    const wrapper = mount(h(CdrTabs, {}, {default: () => [
      h(CdrTabPanel, {id: 'tab-panel-1', name: 'tab1', 'aria-labelledby': 'tab-1'}),
      h(CdrTabPanel, {id: 'tab-panel-2', name: 'tab2', 'aria-labelledby': 'tab-2'}),
    ]}));
    await wrapper.vm.$nextTick();
    wrapper.setData({ headerWidth: 2000 });
    await wrapper.vm.$nextTick();
    wrapper.vm.calculateOverflow();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.headerOverflow).toBe(true);
  });
});
