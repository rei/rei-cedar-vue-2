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
        modifier: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('cdr-button');
  });

  it('computes button as link base class correctly', () => {
    const wrapper = shallow(CdrButton, {
      propsData: {
        modifier: 'primary, link',
      },
    });
    expect(wrapper.classes()).toContain('cdr-link');
  });

  
});