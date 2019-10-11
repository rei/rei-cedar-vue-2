import { shallowMount, mount } from '@vue/test-utils';
import CdrAccordion from 'componentdir/accordion/CdrAccordion';

const propsData = {
  id: 'test',
  label: 'A label',
  compact: false,
  borderAligned: false,
};

describe('CdrAccordion', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(CdrAccordion, {
      propsData: {
        id: 'test',
        label: 'label',
      },
      slots: {
        default: 'This is some slot text.'
      },
    });
    expect(wrapper.element).toMatchSnapshot()
  });

  describe('accordion data setup', () => {
    it('sets maxHeight when starting closed', () => {
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
      
      expect(wrapper.vm.maxHeight).toBe(0);
    });

    it('maxHeight is adjusted in created when starting open', () => {
      const wrapper = shallowMount(CdrAccordion, {
        propsData: {
          id: 'test',
          label: 'label',
          opened: true,
        },
        slots: {
          default: 'This is some slot text.'
        },
      });
      
      expect(wrapper.vm.maxHeight).toBe('0px');
    });
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

    it('updates maxHeight on prop update', () => {
      const wrapper = shallowMount(CdrAccordion, {
        propsData: {
          id: 'test',
          label: 'label',
          opened: true,
        },
        slots: {
          default: 'This is some slot text.'
        },
      });
      
      wrapper.setProps({ opened: false });
      expect(wrapper.vm.maxHeight).toBe(0);
    });    
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

  it('focused style', () => {
    const wrapper = shallowMount(CdrAccordion, {
      propsData: propsData,
      slots: {
        default: 'This is some slot text.'
      },
    });
    wrapper.find('button').trigger('focus');
    expect(wrapper.vm.focused).toBeTruthy();
    expect(wrapper.classes()).toContain('cdr-accordion--focused');
    wrapper.find('button').trigger('blur');
    expect(wrapper.vm.focused).toBeFalsy();
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
