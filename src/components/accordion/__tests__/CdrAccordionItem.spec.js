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

      /* Dupe call to parent $emit because using shallowMount */
      wrapper.vm.$parent = {
        $emit: function() {
          return true;
        }
      };
  
      expect(wrapper.vm.maxHeight).toBe(0);
      wrapper.vm.toggle();
      expect(wrapper.vm.isOpen).toBe(true);
      
      setTimeout(() => {
        expect(wrapper.vm.maxHeight).toBe('none');
      }, 300);
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

      wrapper.vm.$parent = {
        $emit: function() {
          return true;
        }
      };

      expect(wrapper.vm.maxHeight).toBe('none');
      wrapper.vm.toggle();
      expect(wrapper.vm.isOpen).toBe(false);
      setTimeout(() => {
        expect(wrapper.vm.maxHeight).toBe(0);
      }, 500);
    });
  });

  it('focused style', () => {
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
    wrapper.setData({ focused: true });
    expect(wrapper.classes()).toContain('cdr-accordion-item--focused');
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
});
