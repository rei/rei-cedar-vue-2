import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import Vue from 'vue';

describe('CdrModal.vue', () => {
  it('sets up noScroll, handlers when initialized open', () => {
    const spyAddNoScroll = jest.fn();
    const spyAddHandlers = jest.fn();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: () => {},
        label: "My Modal Label",
      },
      methods: {
        addNoScroll: spyAddNoScroll,
        addHandlers: spyAddHandlers,
      },
    });

    expect(spyAddNoScroll).toHaveBeenCalled();
    expect(spyAddHandlers).toHaveBeenCalled();
  });

  it('calls correct function on opened prop update', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        closeModal: () => {},
        label: "My Modal Label",
      },
    });

    spyOn(wrapper.vm, 'handleOpened');
    spyOn(wrapper.vm, 'handleClosed');

    wrapper.setProps({ opened: true });
    expect(wrapper.vm.handleOpened).toHaveBeenCalled();
    
    wrapper.setProps({ opened: false });
    expect(wrapper.vm.handleClosed).toHaveBeenCalled();
  });

  it('handleKeyDown', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: jest.fn(),
        label: "My Modal Label",
      },
      attachToDocument: true,
    });

    wrapper.trigger('keydown', {
      key: 'a',
    });
    expect(wrapper.vm.closeModal).not.toHaveBeenCalled()

    wrapper.trigger('keydown', {
      key: 'Escape',
    });
    expect(wrapper.vm.closeModal).toHaveBeenCalled();
  });

  xit('handleFocus', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: () => {},
        label: "My Modal Label"
      },
      slots: {
        default: "Modal content in the slot",
      },
      attachToDocument: true,
    });

    for (let i = 0; i < 3; i++) {
      wrapper.trigger('keydown', {
        key: 'tab'
      });
    }

    expect(document.scrollTop).toBe(undefined);
    expect(document.scrollLeft).toBe(undefined);
  });

  it('handleOpened', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        closeModal: () => {},
        label: "My Modal Label",
      },
    });

    spyOn(wrapper.vm, 'addNoScroll');
    spyOn(wrapper.vm, 'addHandlers');

    wrapper.setProps({ opened: true });

    expect(wrapper.vm.addNoScroll).toHaveBeenCalled();
    expect(wrapper.vm.reallyClosed).toBeFalsy();
    expect(wrapper.vm.lastActive).not.toEqual(null);
    
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.addHandlers).toHaveBeenCalled();
    });
  });

  it('handleClosed', (done) => {
    spyOn(document, 'removeEventListener');
    global.scrollTo = jest.fn();
    
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true, 
        closeModal: () => {},
        label: "My Modal Label",
      },
    });

    wrapper.setProps({ opened: false });

    expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.anything());
    
    Vue.nextTick(() => {
      setTimeout(() => {
        expect(wrapper.vm.reallyClosed).toBe(true);
        expect(wrapper.vm.unsubscribe).toBe(null);
        expect(document.removeEventListener).nthCalledWith(2, 'focusin', expect.anything(), true);
        done();
      }, 1000);
    });
  });

  it('addNoScroll', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: () => {},
        label: "My Modal Label",
      },
    });
    const { documentElement, body } = document;

    expect(documentElement.classList.contains('noscroll')).toBeTruthy();
    expect(body.classList.contains('noscroll')).toBeTruthy()
  });

  it('removeNoScroll', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: () => {},
        label: "My Modal Label",
      },
    });
    const { documentElement, body } = document;
    wrapper.vm.removeNoScroll();

    expect(documentElement.classList.contains('noscroll')).toBeFalsy();
    expect(body.classList.contains('noscroll')).toBeFalsy()
  });

  it('addHandlers', () => {
    spyOn(document, 'addEventListener');
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: () => {},
        label: "My Modal Label",
      },
    });

    expect(document.addEventListener).toHaveBeenCalledWith('focusin', expect.anything(), true);
    expect(document.addEventListener).nthCalledWith(2, 'keydown', expect.anything());
  });
});