import { shallow } from '@vue/test-utils';
import cdrButton from 'Components/button/cdrButton';

const clickHandler = jest.fn();

describe('cdrButton.vue', () => {
  // test for theme mixin
  it('sets theme correctly', () => {
    const wrapper = shallow(cdrButton, {
      propsData: {
        theme: 'red'
      },
    });
    expect(wrapper.classes()).toContain('theme-red-cdr-button');
  });

  it('renders a button', () => {
    const wrapper = shallow(cdrButton);
    expect(wrapper.is('button')).toBe(true);
  });

  it('sets default type prop correctly', () => {
    const wrapper = shallow(cdrButton);
    expect(wrapper.attributes().type).toBe('button');
  });

  it('sets type attr correctly', () => {
    const wrapper = shallow(cdrButton, {
      propsData: {
        type: 'reset',
      },
    });
    expect(wrapper.attributes().type).toBe('reset');
  });

  it('has default click', () => {
    const wrapper = shallow(cdrButton);
    const defaultFunc = wrapper.vm.$props.onClick();
    const result = defaultFunc();
    expect(result).toBe(null)
  });

  it('click function triggers correctly', () => {
    const wrapper = shallow(cdrButton, {
      propsData: {
        onClick: clickHandler
      },
    });
    wrapper.trigger('click');
    expect(clickHandler).toHaveBeenCalled();
  });

    it('computes base class correctly', () => {
    const wrapper = shallow(cdrButton, {
      propsData: {
        modifier: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('cdr-button');
  });

  it('computes button as link base class correctly', () => {
    const wrapper = shallow(cdrButton, {
      propsData: {
        modifier: 'primary, link',
      },
    });
    expect(wrapper.classes()).toContain('cdr-link');
  });

  
});