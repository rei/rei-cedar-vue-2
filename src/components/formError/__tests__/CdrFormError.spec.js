import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrFormError from 'componentdir/formError/CdrFormError';

describe('CdrFormError', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrFormError, {
      propsData: {
        error: 'yahoo!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders error slot', () => {
    const wrapper = mount(CdrFormError, {
      propsData: {
        error: true
      },
      slots: {
        'error': 'whoops',
      },
    });

    expect(wrapper.find('.cdr-form-error').text()).toBe('whoops');
  });

  it('renders error prop', () => {
    const wrapper = mount(CdrFormError, {
      propsData: {
        error: 'heyo!'
      },
    });

    expect(wrapper.find('.cdr-form-error').text()).toBe('heyo!');
  });
});
