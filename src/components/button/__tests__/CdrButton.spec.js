import { shallowMount } from '@vue/test-utils';
import CdrButton from 'componentsdir/button/CdrButton';
import sinon from 'sinon'

describe('CdrButton.vue', () => {
  it('renders a button', () => {
    const wrapper = shallowMount(CdrButton);
    expect(wrapper.is('button')).toBe(true);
  });

  it('sets default type prop correctly', () => {
    const wrapper = shallowMount(CdrButton);
    expect(wrapper.attributes().type).toBe('button');
  });

  it('validates type prop', () => {
    const wrapper = shallowMount(CdrButton);
    const type = wrapper.vm.$options.props.type;
    expect(type.validator('test')).toBe(false);
    expect(type.validator('reset')).toBe(true);
  });

  it('sets type attr correctly', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        type: 'reset',
      },
    });
    expect(wrapper.attributes().type).toBe('reset');
  });

  it('has default click', () => {
    const wrapper = shallowMount(CdrButton);
    const defaultFunc = wrapper.vm.$props.onClick();
    const result = defaultFunc();
    expect(result).toBe(null)
  });

  it('click function triggers correctly', () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        onClick: spy
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

  it('adds responsive classes', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        staticSize: 'medium',
        responsiveSize: ['large@xs'],
      }
    });

    expect(wrapper.vm.$style).toHaveProperty(`cdr-button--large@xs`);
  })

  it('does not add size class when icon only', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        size: 'large',
        iconOnly: true,
      },
    });
    expect(wrapper.vm.sizeClass).toBe(null);
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
        default: [
          'named slot icon',
          'default slot for text'
        ],
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

  it('validates el prop', () => {
    const wrapper = shallowMount(CdrButton);
    const tag = wrapper.vm.$options.props.tag;
    expect(tag.validator('button')).toBe(true);
    expect(tag.validator('link')).toBe(false);
  });

  it('validates size prop', () => {
    const wrapper = shallowMount(CdrButton);
    const size = wrapper.vm.$options.props.size;
    expect(size.validator('small')).toBe(true);
    expect(size.validator('extra-small')).toBe(false);
  });
});