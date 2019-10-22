import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import sinon from 'sinon';

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
    const spy = sinon.spy();
    const anotherSpy = sinon.spy();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        closeModal: () => {},
        label: "My Modal Label",
      },
      methods: {
        addNoScroll: spy,
        addHandlers: anotherSpy,
      },
    });

    wrapper.setProps({ opened: true });

    expect(spy.called).toBeTruthy();
    expect(wrapper.vm.reallyClosed).toBeFalsy();
    expect(wrapper.vm.lastActive).not.toEqual(null);
    
    wrapper.vm.$nextTick(() => {
      expect(anotherSpy.called).toBeTruthy();
      setTimeout(() => {
        const modal = wrapper.find({ ref: wrapper });
        console.log('scrollTop', modal.scrollTop);
      });
    });
  });

  it('handleClosed', () => {
    // jest.useFakeTimers();
    sinon.spy(document, 'removeEventListener');
    // sinon.spy(window, 'scrollTo');
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: sinon.spy(),
        label: "My Modal Label",
      },
      methods: {
        removeNoScroll: sinon.spy(),
      },
    });

    // wrapper.setProps({ opened: false });
    expect(document.removeEventListener.calledWith('keydown'));
    // expect(window.scrollTo).toHaveBeenCalled();
    // expect(removeNoScroll.called).toBeTruthy();
    // expect(wrapper.vm.reallyClosed).toBe(true);
    // console.log('reallyClosed', wrapper.vm.reallyClosed);
    expect(document.removeEventListener.calledWith('focusin'));
    
    wrapper.vm.$nextTick(() => {
      console.log('nextTick');
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