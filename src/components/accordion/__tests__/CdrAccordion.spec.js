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
  it('maxHeight set if isOpen on mount', () => {
    const wrapper = shallowMount(CdrAccordion, {
      propsData: {
        id: 'test',
        label: 'a label',
        opened: true
      },
    });

    expect(wrapper.vm.maxHeight).toBe('none');
  });

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

    it('toggles when opened prop updates', () => {
      const wrapper = shallowMount(CdrAccordion, {
        propsData: {
          id: 'test',
          label: 'label',
        },
        slots: {
          default: 'this is some default slot text. it should take up some space'
        }
      });

      expect(wrapper.vm.maxHeight).toBe(0);

      // this is throwing a console error, but shouldn't be. Covered in this thread
      // https://github.com/vuejs/vue-test-utils/issues/631
      wrapper.setData({ opened: true });

      setTimeout(() => {
        expect(wrapper.vm.maxHeight).toBe('none');
      }, 500);
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
