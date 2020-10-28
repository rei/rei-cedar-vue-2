import { mount } from '@vue/test-utils';
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

  test('renders error state', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        error: true
      },
      slots: {
        'error': 'whoops',
      },
    });

    expect(wrapper.find('.cdr-form-group--error').exists()).toBe(true);
    expect(wrapper.find('.cdr-form-group__error-message').text()).toBe('whoops');
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
    expect(wrapper.find('.cdr-form-group__error-message').exists()).toBe(false);
  });
});
