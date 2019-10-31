import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import sinon from 'sinon';
import Vue from 'vue';

describe('CdrModal.vue', () => {
  it('sets up noScroll, handlers when initialized open', () => {
    const spyAddNoScroll = sinon.spy();
    const spyAddHandlers = sinon.spy();
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

    expect(spyAddNoScroll.called).toBeTruthy();
    expect(spyAddHandlers.called).toBeTruthy();
  });

  it('calls correct function on opened prop update', () => {
    const spyHandleOpened = sinon.spy();
    const spyHandleClosed = sinon.spy();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        closeModal: () => {},
        label: "My Modal Label",
      },
      methods: {
        handleOpened: spyHandleOpened,
        handleClosed: spyHandleClosed,
      },
    });

    wrapper.setProps({ opened: true });
    expect(spyHandleOpened.called).toBeTruthy();
    
    wrapper.setProps({ opened: false });
    expect(spyHandleClosed.called).toBeTruthy();
  });

  it('handleKeyDown', () => {
    const spyCloseModal = sinon.spy();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: spyCloseModal,
        label: "My Modal Label",
      },
      attachToDocument: true,
    });

    wrapper.trigger('keydown', {
      key: 'a',
    });
    expect(spyCloseModal.called).toBeFalsy()

    wrapper.trigger('keydown', {
      key: 'Escape',
    });
    expect(spyCloseModal.called).toBeTruthy();
  });

  it('handleOpened', () => {
    const addNoScroll = sinon.spy();
    const addHandlers = sinon.spy();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        closeModal: () => {},
        label: "My Modal Label",
      },
      methods: {
        addNoScroll: addNoScroll,
        addHandlers: addHandlers,
      },
    });

    wrapper.setProps({ opened: true });

    expect(addNoScroll.called).toBeTruthy();
    expect(wrapper.vm.reallyClosed).toBeFalsy();
    expect(wrapper.vm.lastActive).not.toEqual(null);
    
    wrapper.vm.$nextTick(() => {
      expect(addHandlers.called).toBeTruthy();
    });
  });

  fit('handleClosed', (done) => {
    jest.spyOn(document, 'removeEventListener');
    
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true, 
        closeModal: () => {},
        label: "My Modal Label",
      }
    });

    wrapper.setProps({ opened: false });

    expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.anything());
    
    Vue.nextTick(() => {
      setTimeout(() => {
        // these are the failing assertions
        expect(wrapper.vm.reallyClosed).toBe(true);
        expect(wrapper.vm.unsubscribe).toBe(null);
        expect(document.removeEventListener).toHaveBeenCalledWith('focusin', expect.anything());
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
    sinon.spy(document, 'addEventListener');
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: () => {},
        label: "My Modal Label",
      },
    });

    expect(document.addEventListener.calledWith('focusin'));
    expect(document.addEventListener.calledWith('keydown'));
  });
});