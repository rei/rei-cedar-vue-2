import { shallow } from '@vue/test-utils';
import CdrButton from 'componentsdir/button/CdrButton';

const clickHandler = jest.fn();

describe('CdrButton.vue', () => {
  // test for theme mixin
  it('sets theme correctly', () => {
    const wrapper = shallow(CdrButton, {
      propsData: {
        theme: 'red'
      },
    });
    expect(wrapper.classes()).toContain('theme-red-cdr-button');
  });

  it('renders a button', () => {
    const wrapper = shallow(CdrButton);
    expect(wrapper.is('button')).toBe(true);
  });

  it('sets default type prop correctly', () => {
    const wrapper = shallow(CdrButton);
    expect(wrapper.attributes().type).toBe('button');
  });

  it('validates type prop', () => {
    const wrapper = shallow(CdrButton);
    const type = wrapper.vm.$options.props.type;
    expect(type.validator('test')).toBe(false);
    expect(type.validator('reset')).toBe(true);
  });

  it('sets type attr correctly', () => {
    const wrapper = shallow(CdrButton, {
      propsData: {
        type: 'reset',
      },
    });
    expect(wrapper.attributes().type).toBe('reset');
  });

  it('has default click', () => {
    const wrapper = shallow(CdrButton);
    const defaultFunc = wrapper.vm.$props.onClick();
    const result = defaultFunc();
    expect(result).toBe(null)
  });

  it('click function triggers correctly', () => {
    const wrapper = shallow(CdrButton, {
      propsData: {
        onClick: clickHandler
      },
    });
    wrapper.trigger('click');
    expect(clickHandler).toHaveBeenCalled();
  });

  it('computes base class correctly', () => {
    const wrapper = shallow(CdrButton, {
      propsData: {
        el: 'a',
      },
    });
    
    expect(wrapper.classes()).toContain('cdr-button');
  });

  it('CTA overrides responsive', () => {
    const wrapper = shallow(CdrButton, {
      propsData: {
        responsiveSize: ['large@extra-small'],
        styleModifiers: ['cta-dark'],
        fullWidth: true,
      }
    });
    
    expect(wrapper.classes()).not.toContain('cdr-button--large@extra-small');
    expect(wrapper.classes()).toContain('cdr-button--full-width');
  });

  it('adds responsive classes', () => {
    const wrapper = shallow(CdrButton, {
      propsData: {
        staticSize: 'medium',
        responsiveSize: ['large@extra-small'],
      }
    });

    expect(wrapper.classes()).toContain('cdr-button--large@extra-small');
  })

  it('renders a link', () => {
    const wrapper = shallow(CdrButton, {
      propsData: {
        el: 'a',
      }, 
    });
    expect(wrapper.is('a')).toBe(true);
  });

  it('validates el prop', () => {
    const wrapper = shallow(CdrButton);
    const el = wrapper.vm.$options.props.el;
    expect(el.validator('button')).toBe(true);
    expect(el.validator('link')).toBe(false);
  });

  it('validates staticSize prop', () => {
    const wrapper = shallow(CdrButton);
    const staticSize = wrapper.vm.$options.props.staticSize;
    expect(staticSize.validator('small')).toBe(true);
    expect(staticSize.validator('extra-small')).toBe(false);
  });
});