import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrFormGroup from 'componentdir/formGroup/CdrFormGroup';

describe('CdrFormGroup', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        label: 'hey'
      },
      slots: {
        default: 'form elements!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders error state correctly', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        id: 'renders',
        label: 'hey',
        error: 'Something is happening?'
      },
      slots: {
        'default': 'form elements!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders required state correctly', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        label: 'hey',
        required: true,
      },
      slots: {
        default: 'form elements!',
      },
    });
    expect(wrapper.find('legend').text()).toBe('hey *');
  });

  test('renders optional state correctly', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        label: 'hey',
        optional: true,
      },
      slots: {
        default: 'form elements!',
      },
    });
    expect(wrapper.find('legend').text()).toBe('hey (optional)');
  });

  test('renders required state correctly when optional is also set', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        label: 'hey',
        required: true,
        optional: true,
      },
      slots: {
        default: 'form elements!',
      },
    });
    expect(wrapper.find('legend').text()).toBe('hey *');
  });

  test('renders error slot', () => {
    const wrapper = mount(CdrFormGroup, {
      propsData: {
        error: true
      },
      slots: {
        error: 'whoops',
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
        error: 'whoops',
      },
    });
    expect(wrapper.find('.cdr-form-group--error').exists()).toBe(false);
    expect(wrapper.find('.cdr-form-error').exists()).toBe(false);
  });
});
