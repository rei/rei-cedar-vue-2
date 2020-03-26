import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import Vue from 'vue';
// import packageJson from '../../../../package.json';
import CdrButton from 'componentdir/button/CdrButton';

describe('CdrModal.vue', () => {
  it('renders all slots, handleClosed', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        title: 'Terms and Conditions',
        stickyContentSlot: 'Sticky content',
        scrollingContentSlot: 'Main content',
        footer: 'Footer content'
      },
      attachToDocument: true,
    });
    /*
      - begins opened
      - renders all slots for screenshots
      - close modal
    */

   expect(wrapper.element).toMatchSnapshot();
    Vue.nextTick(() => {
      wrapper.setProps({ opened: false });

      setTimeout(() => {
        expect(wrapper.vm.reallyClosed).toBe(true);
        wrapper.destroy();
      }, 300);
    });
  });

  it('leaves optional slots empty, handleOpened', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: false,
        label: "Label is the modal title"
      },
      slots: {
        scrollingContentSlot: 'Main content',
      },
      attachToDocument: true,
    });

    wrapper.setProps({ opened: true });
    Vue.nextTick(() => {
      expect(wrapper.element).toMatchSnapshot();
      wrapper.destroy();
    });
  });

  it('handleKeyDown', () => {
    const spyOnClick = jest.fn();
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        scrollingContentSlot: 'Main content',
      },
      methods: {
        onClick: spyOnClick
      },
      attachToDocument: true,
    });

    wrapper.trigger('keydown', {
      key: 'a'
    });
    expect(spyOnClick).not.toHaveBeenCalled();

    wrapper.trigger('keydown', {
      key: 'Esc',
    });

    wrapper.trigger('keydown', {
      key: 'Escape',
    });

    expect(spyOnClick).toHaveBeenCalledTimes(2);
    wrapper.destroy();
  });

  it('scrolling and fullscreen snapshot', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        scrollingContentSlot: 'Main content',
      },
      attachToDocument: true,
    });

    Vue.nextTick(() => {
      wrapper.setProps({ fullscreen: true, scrollHeight: 500, offsetHeight: 400 });
      setTimeout(() => {
        expect(wrapper.vm.scrolling).toBe(true);
        expect(wrapper.element).toMatchSnapshot();
        wrapper.destroy();
      }, 300);
    })
  });

  it('removeNoScroll', () => {
    const wrapper = shallowMount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
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
    const spyMeasureContent = jest.fn();
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
      },
      attachToDocument: true,
      methods: {
        measureContent: spyMeasureContent,
      },
    });

    const button = wrapper.find('button').element;
    button.focus();
    expect(button).toBe(document.activeElement);

    wrapper.vm.handleFocus({ target: document.createElement('a') });
    expect(document.scrollTop).toBe(undefined);
    expect(document.scrollLeft).toBe(undefined);
    wrapper.destroy();
  });

  // it('handleClosed', (done) => {
  //   spyOn(document, 'removeEventListener');
  //   global.scrollTo = jest.fn();
  //   const spyMeasureContent = jest.fn();
  //   const spyHandleOpened = jest.fn();
    
  //   const wrapper = shallowMount(CdrModal, {
  //     propsData: {
  //       opened: true, 
  //       label: "My Modal Label",
  //     },
  //     methods: {
  //       measureContent: spyMeasureContent,
  //       handleOpened: spyHandleOpened,
  //     },
  //     attachToDocument: true,
  //   });

    

  //   expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.anything());
    
  //   Vue.nextTick(() => {
  //     setTimeout(() => {
  //       expect(wrapper.vm.reallyClosed).toBe(true);
  //       expect(wrapper.vm.unsubscribe).toBe(null);
  //       expect(document.removeEventListener).nthCalledWith(2, 'focusin', expect.anything(), true);
  //       done();
  //     }, 1000);
  //   });
  // });

});