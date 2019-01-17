import { shallowMount, mount } from '@vue/test-utils';
import CdrTabPanel from 'componentsdir/tabs/CdrTabPanel';


describe('CdrTabPanel.vue', () => {
  it('renders tab', () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('is not active by default', () => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
      },
    });
    expect(wrapper.vm.active).toBe(false);
  });

  it('is active when set', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
      },
    });
    wrapper.vm.setActive(true);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.active).toBe(true);
      done();
    });
  });

  it('enter start function properly sets transition', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
      },
    });
    wrapper.vm.setActive(true);

    wrapper.vm.$nextTick(() => {
      wrapper.vm.setEnterStart(wrapper.vm.$el);
      expect(wrapper.vm.$el.style.animationTimingFunction).toBe('cubic-bezier(0.4, 0, 0.68, .06)');
      done();
    });
  });

  it('enter end function properly clears transition', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
      },
    });
    wrapper.vm.setActive(true);

    wrapper.vm.$nextTick(() => {
      wrapper.vm.setEnterEnd(wrapper.vm.$el);
      expect(wrapper.vm.$el.style.animationDirection).toBe('');
      done();
    });
  });

  it('leave start function properly sets transition', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
      },
    });
    wrapper.vm.setActive(true);

    wrapper.vm.$nextTick(() => {
      wrapper.vm.setLeaveStart(wrapper.vm.$el);
      expect(wrapper.vm.$el.style.animationTimingFunction).toBe('cubic-bezier(0.32, 0.94, 0.6, 1)');
      done();
    });
  });

  it('leave end function properly clears transition', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
      },
    });
    wrapper.vm.setActive(true);

    wrapper.vm.$nextTick(() => {
      wrapper.vm.setLeaveEnd(wrapper.vm.$el);
      expect(wrapper.vm.$el.classList.contains('flyRight')).toBe(false);
      done();
    });
  });

  it('set animation direction functions correctly', (done) => {
    const wrapper = shallowMount(CdrTabPanel, {
      propsData: {
        name: 'test',
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
      },
    });
    wrapper.vm.setActive(true);

    wrapper.vm.$nextTick(() => {
      wrapper.vm.setOffsetX(1234);
      expect(wrapper.vm.offsetX).toBe(1234);
      done();
    });
  });
});