import { shallowMount, mount } from '@vue/test-utils';
import CdrTabPanel from 'componentdir/tabs/CdrTabPanel';
import CdrTabs from 'componentdir/tabs/CdrTabs';
import Vue from 'vue';


describe('CdrTabPanel', () => {
  it('renders tab', () => {
    const wrapper = mount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('is not active by default', () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
      },
    });
    expect(wrapper.vm.active).toBe(false);
  });

  it('is active when set', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
      },
    });
    wrapper.vm.setActive(true);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.active).toBe(true);
      done();
    });
  });

  it('set animation direction functions correctly', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
      },
    });
    wrapper.vm.setActive(true);

    wrapper.vm.$nextTick(() => {
      wrapper.vm.setAnimationDirection('flyLeft');
      expect(wrapper.vm.animationDirection).toBe('flyLeft');
      done();
    });
  });

  it('set animation direction functions correctly', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
      },
    });
    wrapper.vm.setActive(true);

    wrapper.vm.$nextTick(() => {
      wrapper.vm.setOffsetX(1234);
      expect(wrapper.vm.offsetX).toBe(1234);
      done();
    });
  });

  it('updates state after animationend', () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
      },
    });

    wrapper.setData({ active: true, hidden: false, animationDirection: 'exit-left' });
    wrapper.vm.$nextTick(() => {
      wrapper.trigger('animationend', {
        animationName: 'exit-left'
      });
      expect(wrapper.vm.hidden).toBe(true);
      expect(wrapper.vm.animationDirection).toBe(null);
    });

  });

  it('handleUpArrowNav', () => {
    const spyUpdateUnderline = jest.fn();
    const spySetFocusToActiveTabHeader = jest.fn();
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1" id="tab1" />', '<cdr-tab-panel name="tab2" id="tab2" />']
      },
      methods: {
        updateUnderline: spyUpdateUnderline,
        setFocusToActiveTabHeader: spySetFocusToActiveTabHeader,
      },
      attachToDocument: true,
    });

    Vue.nextTick(() => {
      wrapper.find(CdrTabPanel).trigger('keydown.up');
      expect(spySetFocusToActiveTabHeader).toHaveBeenCalled();
    });
  })
});