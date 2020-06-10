import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import Vue from 'vue';
// import packageJson from '../../../../package.json';
import CdrButton from 'componentdir/button/CdrButton';

describe('CdrModal.vue', () => {
  it('default open, scrolling', async () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        default: 'Sticky content',
      },
      computed: {
        scrolling: () => true,
      },
      attachToDocument: true,
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find('.cdr-modal__text-fade').exists()).toBe(true);

    wrapper.setProps({ opened: false });
    await wrapper.vm.$nextTick();

    setTimeout(() => {
      expect(wrapper.vm.reallyClosed).toBe(true);
      wrapper.destroy();
    }, 500);
  });

  it('leaves optional slots empty, handleOpened', async () => {
    const mockMeasureContent = jest.fn();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        label: "Label is the modal title"
      },
      slots: {
        default: 'Main content',
      },
      methods: {
        measureContent: mockMeasureContent
      },
      attachToDocument: true,
    });

    wrapper.setProps({ opened: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
    
    setTimeout(() => {
      expect(mockMeasureContent).toHaveBeenCalled();
      wrapper.destroy();
    }, 300);
  });

  it('handleKeyDown', async () => {
    const mockMeasureContent = jest.fn();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        default: 'Main content',
      },
      methods: {
        measureContent: mockMeasureContent,
      },
      attachToDocument: true,
    });

    wrapper.trigger('keydown', {
      key: 'a'
    });
    await wrapper.vm.$nextTick();

    wrapper.trigger('keydown', {
      key: 'Esc',
    });
    await wrapper.vm.$nextTick();

    wrapper.trigger('keydown', {
      key: 'Escape',
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().closed.length).toBe(2);
    wrapper.destroy();
  });

  it('scrolling and fullscreen snapshot', () => {
    const mockMeasureContent = jest.fn();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      data() {
        return {
          offsetHeight: 400,
          scrollHeight: 500,
          fullscreen: true,
        };
      },
      methods: {
        measureContent: mockMeasureContent,
      },
      slots: {
        scrollingContentSlot: 'Main content',
      },
      attachToDocument: true,
    });

    expect(wrapper.vm.scrolling).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
    wrapper.destroy();
  });

  it('removeNoScroll', () => {
    const mockMeasureContent = jest.fn();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
      },
      methods: {
        measureContent: mockMeasureContent,
      },
      slots: {
        scrollingContentSlot: 'Main content',
      },
      attachToDocument: true,
    });
    const { documentElement, body } = document;
    wrapper.vm.removeNoScroll();

    expect(documentElement.classList.contains('noscroll')).toBeFalsy();
    expect(body.classList.contains('noscroll')).toBeFalsy();

    wrapper.destroy();
  });

  it('handleFocus', () => {
    const mockMeasureContent = jest.fn();
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
      },
      methods: {
        measureContent: mockMeasureContent,
      },
      attachToDocument: true,
    });

    const button = wrapper.find('button').element;
    button.focus();
    expect(button).toBe(document.activeElement);

    wrapper.vm.handleFocus({ target: document.createElement('a') });
    expect(document.scrollTop).toBe(undefined);
    expect(document.scrollLeft).toBe(undefined);
    wrapper.destroy();
  });

  it('handleClosed', async () => {
    global.scrollTo = jest.fn();
    const spyMeasureContent = jest.fn();
    const spyHandleOpened = jest.fn();
    
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true, 
        label: "My Modal Label",
      },
      data() {
        return {
          offset: { x: 0, y: 0 }
        };
      },
      methods: {
        measureContent: spyMeasureContent,
        handleOpened: spyHandleOpened,
      },
      attachToDocument: true,
    });

    wrapper.vm.handleClosed();
    await wrapper.vm.$nextTick();

    setTimeout(() => {
      expect(wrapper.vm.reallyClosed).toBe(true);
      expect(wrapper.vm.unsubscribe).toBe(null);
    }, 500);
  });

  it('resize event', async () => {
    const spyMeasureContent = jest.fn();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        default: 'Sticky content',
      },
      methods: {
        measureContent: spyMeasureContent,
      },
      attachToDocument: true,
    });

    window.dispatchEvent(new Event('resize'));
    await wrapper.vm.$nextTick();

    setTimeout(() => {
      expect(spyMeasureContent).toHaveBeenCalled();
      wrapper.destroy();
    }, 500);
  });
});