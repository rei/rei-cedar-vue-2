import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import sinon from 'sinon';

describe('CdrModal.vue', () => {
  it('sets up noScroll, handlers when initialized open', () => {
    const spy = sinon.spy();
    const anotherSpy = sinon.spy();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: spy,
        label: "My Modal Label",
      },
      methods: {
        addNoScroll: spy,
        addHandlers: anotherSpy,
      },
    });

    expect(spy.called).toBeTruthy();
    expect(anotherSpy.called).toBeTruthy();    
  });

  it('calls correct function on opened prop update', () => {
    const spy = sinon.spy();
    const anotherSpy = sinon.spy();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        closeModal: spy,
        label: "My Modal Label",
      },
      methods: {
        handleOpened: spy,
        handleClosed: anotherSpy,
      },
    });

    wrapper.setProps({ opened: true });
    expect(spy.called).toBeTruthy();
    
    wrapper.setProps({ opened: false });
    expect(anotherSpy.called).toBeTruthy();
  });

  it('handleOpened', () => {
    const spy = sinon.spy();
    const anotherSpy = sinon.spy();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        closeModal: sinon.spy(),
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
    });
  });

  xit('handleClosed', () => {
    sinon.spy(document, 'removeEventListener');
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: sinon.spy(),
        label: "My Modal Label",
      },
    });

    console.log(wrapper.animationDuration);
    wrapper.setProps({ opened: false });
    expect(document.removeEventListener.calledWith('keydown'));
    wrapper.vm.$nextTick(() => {
      console.log('nextTick');
    });
  });

  it('addNoScroll', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: sinon.spy(),
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
        closeModal: sinon.spy(),
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
        closeModal: sinon.spy(),
        label: "My Modal Label",
      },
    });

    expect(document.addEventListener.calledWith('focusin'));
    expect(document.addEventListener.calledWith('keydown'));
  });

  xit('handleKeyDown', () => {
    const spy = sinon.spy();
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        closeModal: spy,
        label: "My Modal Label",
      },
    });

    // const modal = wrapper.find({ ref: 'modal' });
    // modal.trigger('keydown', {
    //   key: 'Escape'
    // })

    wrapper.trigger('keydown', {
      key: 'Escape'
    });

    console.log('')
    expect(spy.called).toBeTruthy();
  });
});