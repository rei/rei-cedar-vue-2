import { shallowMount } from '@vue/test-utils';
import CdrPopover from 'componentsdir/popover/CdrPopover';
import CdrButton from 'componentsdir/button/CdrButton';

describe('CdrPopover.vue', () => {
  describe('computed props', () => {
    it('defaultStylesClass', () => {
      const wrapper = shallowMount(CdrPopover, {
        propsData: {
          hasDefaultStyling: false
        }
      });
      expect(wrapper.vm.defaultStylesClass).toBe('');
    });
  });

  describe('methods', () => {
    it('open', () => {
      const wrapper = shallowMount(CdrPopover);
      wrapper.vm.open();
      expect(wrapper.vm.isOpen).toBe(true);
    });

    it('close', () => {
      const wrapper = shallowMount(CdrPopover);
      wrapper.vm.close();
      expect(wrapper.vm.isOpen).toBe(false);
    });

    it('delegateClickMethod', () => {
      const buttonWrapper = shallowMount(CdrButton, {
        attrs: {
          'js-data': 'popover-toggle-button'
        },
        attachToDocument: true
      });      

      const wrapper = shallowMount(CdrPopover, {
        propsData: {
          toggleButtonSelector: "[js-data='popover-toggle-button']"
        },
        attachToDocument: true
      });

      buttonWrapper.trigger('click');
      expect(wrapper.vm.isOpen).toBe(true);

      buttonWrapper.trigger('click');
      expect(wrapper.vm.isOpen).toBe(false);

      wrapper.destroy();
    });
  });
});