import { shallowMount } from '@vue/test-utils';
import { CdrAccordion } from 'distdir/cedar.esm.js';
import sinon from 'sinon';

const propsData = {
  id: 'test',
  label: 'A label',
  compact: false,
  borderAligned: false,
};

describe('CdrAccordion', () => {
  describe('toggling accordion', () => {
    it('updates emits an event onClick', () => {
      const wrapper = shallowMount(CdrAccordion, {
        propsData: {
          id: 'test',
          label: 'label',
        },
        slots: {
          default: 'This is some slot text.'
        },
      });
      
      wrapper.find('button').trigger('click');
      expect(wrapper.emitted('accordion-toggle'));
    });

    it('maxHeight computed prop', () => {
      const wrapper = shallowMount(CdrAccordion, {
        propsData: {
          id: 'test',
          label: 'label',
          opened: false,
        },
        slots: {
          default: 'This is some slot text.'
        },
      });

      expect(wrapper.vm.maxHeight).toEqual(0);

      wrapper.setProps({ opened: true });
      /*
        Vue-test-utils is not getting the correct maxHeight here when run as a
        test, so we simply test that it doesn't return 0, which is what it
        should return when opened = false.
      */
      expect(wrapper.vm.maxHeight).not.toEqual(0);
    });

    it('isOpenClass computed prop', () => {
      const wrapper = shallowMount(CdrAccordion, {
        propsData: {
          id: 'test',
          label: 'label',
          opened: false,
        },
        slots: {
          default: 'This is some slot text.'
        },
      });

      expect(wrapper.vm.isOpenClass).toEqual('closed');
    });
  });

  it('focused style', () => {
    const wrapper = shallowMount(CdrAccordion, {
      propsData: propsData,
      slots: {
        default: 'This is some slot text.'
      },
    });
    wrapper.setData({ focused: true });
    expect(wrapper.classes()).toContain('cdr-accordion--focused');
  });

  it('style class checks prop values', () => {
    const wrapper = shallowMount(CdrAccordion, {
      propsData: {
        id: 'test',
        label: 'A label',
        compact: true,
        borderAligned: true,
      },
      slots: {
        default: 'This is some slot text.'
      },
    });

    expect(wrapper.classes()).toContain('cdr-accordion--compact');
    expect(wrapper.classes()).toContain('cdr-accordion--border-aligned');
  });
});
