import { shallow } from '@vue/test-utils';
import CdrButton from 'componentsdir/button/CdrButton';

const clickHandler = jest.fn();

describe('CdrButton.vue', () => {
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
        tag: 'a',
      }, 
    });
    expect(wrapper.is('a')).toBe(true);
  });

  it('validates el prop', () => {
    const wrapper = shallow(CdrButton);
    const tag = wrapper.vm.$options.props.tag;
    expect(tag.validator('button')).toBe(true);
    expect(tag.validator('link')).toBe(false);
  });

  it('validates size prop', () => {
    const wrapper = shallow(CdrButton);
    const size = wrapper.vm.$options.props.size;
    expect(size.validator('small')).toBe(true);
    expect(size.validator('extra-small')).toBe(false);
  });
});