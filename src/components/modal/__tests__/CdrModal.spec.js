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
    wrapper.setProps({ opened: false });
    setTimeout(() => {
      expect(wrapper.vm.reallyClosed).toBe(true);
    }, 300);
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
  });

  xit('scrolling and fullscreen snapshot', () => {
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
      expect(wrapper.vm.scrolling).toBe(true);
      expect(wrapper.element).toMatchSnapshot();
    })
  });
});