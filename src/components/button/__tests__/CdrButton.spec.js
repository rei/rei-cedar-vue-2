import { shallowMount } from '@vue/test-utils';
import CdrButton from 'componentdir/button/CdrButton';
import sinon from 'sinon'

describe('CdrButton', () => {
  it('renders a button', () => {
    const wrapper = shallowMount(CdrButton);
    expect(wrapper.is('button')).toBe(true);
  });

  it('sets default type prop correctly', () => {
    const wrapper = shallowMount(CdrButton);
    expect(wrapper.attributes().type).toBe('button');
  });

  it('sets type attr correctly', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        type: 'reset',
      },
    });
    expect(wrapper.attributes().type).toBe('reset');
  });

  it('click function triggers correctly', () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrButton, {
      listeners: {
        click: spy
      },
    });
    wrapper.trigger('click');
    expect(spy.calledOnce).toBeTruthy();
  });

  it('computes base class correctly', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        el: 'a',
      },
    });

    expect(wrapper.classes()).toContain('cdr-button');
  });

  it('does not add size class when icon only', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        size: 'large',
        iconOnly: true,
      },
    });
    expect(wrapper.vm.buttonSizeClass).toBe(null);
  })

  it('does not add icon class when slot is unused', () => {
    const wrapper = shallowMount(CdrButton);
    expect(wrapper.vm.iconClass).toBe('');
  });

  it('adds classes for icon only and on-dark', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        iconOnly: true,
        onDark: true,
      }
    });
    expect(wrapper.classes()).toContain('cdr-button--on-dark');
    expect(wrapper.classes()).toContain('cdr-button--icon-only');
  });

  it('adds icon class when slot is used', () => {
    const wrapper = shallowMount(CdrButton, {
      slots: {
        default: [ 'default slot for text' ],
        icon: '<div />',
      },
    });

    expect(wrapper.classes()).toContain('cdr-button--has-icon');
  });

  it('renders a link', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        tag: 'a',
      },
    });
    expect(wrapper.is('a')).toBe(true);
  });
});
