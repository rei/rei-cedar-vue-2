import { shallowMount } from '@vue/test-utils';
import CdrAccordionItem from 'componentsdir/accordion/CdrAccordionItem';

const propsData = {
  id: 'test',
  label: 'A label',
};

const provided = {
  showAll: false,
  compact: false,
  borderAligned: false,
};

describe('CdrAccordionItem', () => {
  it('renders an accordion item', () => {
    const wrapper = shallowMount(CdrAccordionItem, {
      propsData: propsData,
      provide: provided,
    });
    expect(wrapper.classes()).toContain('cdr-accordion-item');
  });

  it('maxHeight set if isOpen on mount', () => {
    const wrapper = shallowMount(CdrAccordionItem, {
      propsData: propsData,
      provide: {
        showAll: true,
        borderAligned: false,
        compact: false,
      },
    });

    expect(wrapper.vm.maxHeight).toBe('none');
  });

  describe('toggle method', () => {
    it('toggles when !isOpen', () => {
      const wrapper = shallowMount(CdrAccordionItem, {
        propsData: propsData,
        provide: provided,
        slots: {
          default: 'This is some slot text.'
        },
      });
  
      expect(wrapper.vm.maxHeight).toBe(0);
      wrapper.vm.toggle();
      expect(wrapper.vm.isOpen).toBe(true);
      
      setTimeout(() => {
        expect(wrapper.vm.maxHeight).toBe('none');
      }, 300);
    });

    it('style class checks provided values', () => {
      const wrapper = shallowMount(CdrAccordionItem, {
        propsData: propsData,
        provide: {
          showAll: false,
          borderAligned: true,
          compact: true,
        },
        slots: {
          default: 'This is some slot text.'
        },
      });

      expect(wrapper.classes()).toContain('cdr-accordion-item--compact');
      expect(wrapper.classes()).toContain('cdr-accordion-item--border-aligned');
    });

    it('toggles when isOpen', () => {
      const wrapper = shallowMount(CdrAccordionItem, {
        propsData: propsData,
        provide: {
          showAll: true,
          borderAligned: false,
          compact: false,
        },
        slots: {
          default: 'This is some slot text.'
        },
      });

      expect(wrapper.vm.maxHeight).toBe('none');
      wrapper.vm.toggle();
      expect(wrapper.vm.isOpen).toBe(false);
      setTimeout(() => {
        expect(wrapper.vm.maxHeight).toBe(0);
      }, 500);
    });
  });
});