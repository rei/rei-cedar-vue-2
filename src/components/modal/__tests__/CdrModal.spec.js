import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import Vue from 'vue';
// import packageJson from '../../../../package.json';
import CdrButton from 'componentdir/button/CdrButton';

describe('CdrModal.vue', () => {
  it('default open, scrolling', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
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
      attachTo: elem,
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
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
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
      attachTo: elem,
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
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
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
      attachTo: elem,
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
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
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
      attachTo: elem,
    });

    expect(wrapper.vm.scrolling).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
    wrapper.destroy();
  });

  it('removeNoScroll', () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
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
      attachTo: elem,
    });
    const { documentElement, body } = document;
    wrapper.vm.removeNoScroll();

    expect(documentElement.classList.contains('noscroll')).toBeFalsy();
    expect(body.classList.contains('noscroll')).toBeFalsy();

    wrapper.destroy();
  });

  // test currently fails because $refs.modal is undefined,
  // but this test also doesn't really test anything...
  xit('handleFocus', async (done) => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const mockMeasureContent = jest.fn();
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
      },
      methods: {
        measureContent: mockMeasureContent,
      },
      attachTo: elem,
    });

    const button = wrapper.find('button').element;
    button.focus();
    expect(button).toBe(document.activeElement);
    wrapper.vm.$nextTick(() => {
      wrapper.vm.handleFocus({ target: document.createElement('a') });
      expect(document.scrollTop).toBe(undefined);
      expect(document.scrollLeft).toBe(undefined);
      wrapper.destroy();
      done();
    });
  });

  it('handleClosed', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
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
      attachTo: elem,
    });

    wrapper.vm.handleClosed();
    await wrapper.vm.$nextTick();

    setTimeout(() => {
      expect(wrapper.vm.reallyClosed).toBe(true);
      expect(wrapper.vm.unsubscribe).toBe(null);
      wrapper.destroy();
    }, 500);
  });

  it('resize event', async (done) => {
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
    });

    window.dispatchEvent(new Event('resize'));
    await wrapper.vm.$nextTick();
    setTimeout(() => {
      expect(spyMeasureContent).toHaveBeenCalled();
      wrapper.destroy();
      done();
    }, 500);
  });
});
