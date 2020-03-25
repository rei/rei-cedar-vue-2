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
        title: 'Terms and Conditions',
        stickyContentSlot: 'Sticky content',
        scrollingContentSlot: 'Main content',
        footer: 'Footer content'
      },
      attachToDocument: true,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});