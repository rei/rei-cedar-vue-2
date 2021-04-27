import { shallowMount, mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrTabPanel from 'componentdir/tabs/CdrTabPanel';
import CdrTabs from 'componentdir/tabs/CdrTabs';
import Vue from 'vue';


describe('CdrTabPanel', () => {
  it('renders tab', () => {
    const wrapper = mount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('is not active by default', () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });
    expect(wrapper.vm.active).toBe(false);
  });

  it('is active when set', async () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });
    wrapper.vm.setActive(true);
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.active).toBe(true);
  });

  it('set animation direction functions correctly', async () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });
    wrapper.vm.setActive(true);
    await wrapper.vm.$nextTick();

    wrapper.vm.setAnimationDirection('flyLeft');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.animationDirection).toBe('flyLeft');
  });

  it('set animation direction functions correctly', async () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });
    wrapper.vm.setActive(true);
    await wrapper.vm.$nextTick();

    wrapper.vm.setOffsetX(1234);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.offsetX).toBe(1234);
  });

  it('updates state after animationend', async () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });

    wrapper.setData({ active: true, hidden: false, animationDirection: 'exit-left' });
    await wrapper.vm.$nextTick();
    wrapper.trigger('animationend', {
      animationName: 'exit-left'
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.hidden).toBe(true);
    expect(wrapper.vm.animationDirection).toBe(null);
  });

  it('handleUpArrowNav', async (done) => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(CdrTabs, {
      stubs: {
        'cdr-tab-panel': CdrTabPanel,
      },
      slots: {
        default: ['<cdr-tab-panel name="tab1" id="tab1" aria-labelledby="tab1" />', '<cdr-tab-panel name="tab2" id="tab2" aria-labelledby="tab2" />']
      },
      attachTo: elem,
    });

    const spyUpdateUnderline = spyOn(wrapper.vm, 'updateUnderline');
    const spySetFocusToActiveTabHeader = spyOn(wrapper.vm, 'setFocusToActiveTabHeader');
    await wrapper.vm.$nextTick();

    wrapper.findComponent(CdrTabPanel).trigger('keydown.up');
    expect(spySetFocusToActiveTabHeader).toHaveBeenCalled();
    setTimeout(() => {
      expect(spyUpdateUnderline).toHaveBeenCalled();
      wrapper.destroy();
      done();
    }, 550)
  })
});
