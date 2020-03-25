import { shallowMount, mount } from '@vue/test-utils';
import CdrModal from 'componentdir/modal/CdrModal';
import Vue from 'vue';
// import packageJson from '../../../../package.json';
import CdrButton from 'componentdir/button/CdrButton';

describe('CdrModal.vue', () => {
  it('renders all slots', () => {
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
    // console.log('things', wrapper.vm.totalHeight, wrapper.vm.fullScreen);

  });

  it('leaves optional slots empty', () => {
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
      // setTimeout(() => {
      //   expect(wrapper.find({ ref: wrapper }).scrollTop).toBe(0);
      // }, 500);
    });
  });
});