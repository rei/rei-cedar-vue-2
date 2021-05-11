import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrTabPanel from 'componentdir/tabs/CdrTabPanel';
// import CdrTabs from 'componentdir/tabs/CdrTabs';
// import Vue from 'vue';


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
    const wrapper = mount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });
    expect(wrapper.vm.active).toBe(false);
  });

  it('is active when set', async () => {
    const wrapper = mount(CdrTabPanel, {
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
    const wrapper = mount(CdrTabPanel, {
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

  it('updates state after animationend', async () => {
    const wrapper = mount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });
    wrapper.vm.setActive(true);
    wrapper.vm.setAnimationDirection('exit-left');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.hidden).toBe(false);
    expect(wrapper.vm.animationDirection).toBe('exit-left');
    wrapper.trigger('animationend', {
      animationName: 'exit-left'
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.hidden).toBe(true);
    expect(wrapper.vm.animationDirection).toBe(null);
  });

  it('handleUpArrowNav', async (done) => {
    const wrapper = mount(CdrTabPanel, {
      propsData: {
        name: 'test',
        id: 'tab1',
        ariaLabelledby: 'tab1',
      },
    });

    wrapper.trigger('keydown', {key: 'up'});
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('tab-arrow-up')).toBeTruthy();
    done();
  })
});
