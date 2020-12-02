import { mount } from '@vue/test-utils';
import CdrText from 'componentdir/text/CdrText';

describe('CdrText', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrText, {
      slots: {
        default: 'paragraph'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders as h1 correctly', () => {
    const wrapper = mount(CdrText, {
      propsData: {
        tag: 'h1',
      },
      slots: {
        default: 'header'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
