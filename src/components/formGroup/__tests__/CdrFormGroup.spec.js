import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrFormGroup from 'componentdir/formGroup/CdrFormGroup';

describe('CdrFormGroup', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        label: 'hey'
      },
      slots: {
        'default': 'form elements!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders error slot', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        error: true
      },
      slots: {
        'error': 'whoops',
      },
    });

    expect(wrapper.find('.cdr-form-group--error').exists()).toBe(true);
    expect(wrapper.find('.cdr-form-error').text()).toBe('whoops');
  });

  test('renders disabled state', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        disabled: true
      },
    });

    expect(wrapper.find('.cdr-form-group--disabled').exists()).toBe(true);
  });

  test('renders text when passed as error prop', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        error: 'false!'
      },
    });

    expect(wrapper.find('.cdr-form-group--error').exists()).toBe(true);
    expect(wrapper.find('.cdr-form-error').text()).toBe('false!');
  });

  test('does not render error slot if error state is inactive', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        error: false
      },
      slots: {
        'error': 'whoops',
      },
    });
    expect(wrapper.find('.cdr-form-group--error').exists()).toBe(false);
    expect(wrapper.find('.cdr-form-error').exists()).toBe(false);
  });
});
