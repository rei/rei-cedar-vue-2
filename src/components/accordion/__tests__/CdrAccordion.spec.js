import { shallowMount } from '@vue/test-utils';
import { CdrAccordion } from 'distdir/cedar.js';
import sinon from 'sinon';

const propsData = {
  id: 'test',
  label: 'A label',
  compact: false,
  borderAligned: false,
};

describe('CdrAccordion', () => {
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
