import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import Vue from 'vue';
// import packageJson from '../../../../package.json';
import CdrButton from 'componentdir/button/CdrButton';

describe('CdrModal.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        default: "Modal text content"
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('sets up noScroll, handlers when initialized open', () => {
    const spyAddNoScroll = jest.fn();
    const spyAddHandlers = jest.fn();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
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
        label: "My Modal Label",
      },
      attachToDocument: true,
    });
    spyOn(wrapper.vm, 'onClick');

    wrapper.trigger('keydown', {
      key: 'a',
    });
    expect(wrapper.vm.onClick).not.toHaveBeenCalled()

    wrapper.trigger('keydown', {
      key: 'Escape',
    });
    expect(wrapper.vm.onClick).toHaveBeenCalled();

    wrapper.destroy();
  });

  it('handleOpened', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
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
        label: "My Modal Label",
      },
      attachToDocument: true,
    });
    const { documentElement, body } = document;

    expect(documentElement.classList.contains('cdr-modal__noscroll')).toBeTruthy();
    expect(body.classList.contains('cdr-modal__noscroll')).toBeTruthy()
    wrapper.destroy();
  });

  it('removeNoScroll', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
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
        label: "My Modal Label",
      },
    });

    expect(document.addEventListener).toHaveBeenCalledWith('focusin', expect.anything(), true);
    expect(document.addEventListener).nthCalledWith(2, 'keydown', expect.anything());
  });

  it('beforeDestory', () => {
    spyOn(document, 'removeEventListener');
    const spyRemoveNoScroll = jest.fn();
    const spyUnsubscribe = jest.fn();
    
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
      },
      methods: {
        removeNoScroll: spyRemoveNoScroll,
      },
    });

    wrapper.setData({ unsubscribe: spyUnsubscribe });
    wrapper.destroy();

    expect(spyUnsubscribe).toHaveBeenCalled();
    expect(spyRemoveNoScroll).toHaveBeenCalled();
    expect(document.removeEventListener).toHaveBeenCalledWith('focusin', expect.anything(), true);
    expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.anything());
  });

  it('onClick', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
        showLabel: true,
      },
    });

    wrapper.find('#close-modal-button').trigger('click');
    expect(wrapper.emitted('closed'));
  });

  it('handleFocus', () => {
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
        showLabel: true,
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
});