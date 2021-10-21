import { mount } from '@vue/test-utils';
import CdrBanner from 'componentdir/banner/CdrBanner';
import IconCheckFill from 'componentdir/icon/comps/check-fill';
describe('CdrBanner', () => {
  it('renders correctly', () => {
    const wrapper = mount(CdrBanner, {
      propsData: {
        type: 'info',
      },
      slots: {
       default: 'hey im a banner',
       'icon-left': IconCheckFill
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('renders a right-icon', () => {
    const wrapper = mount(CdrBanner, {
      propsData: {
        type: 'warning',
      },
      slots: {
       default: 'hey im a banner',
       'icon-left': IconCheckFill,
       'icon-right': IconCheckFill,
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('renders the info-action slot', () => {
    const wrapper = mount(CdrBanner, {
      propsData: {
        type: 'warning',
      },
      slots: {
       default: 'hey im a banner',
       'icon-left': IconCheckFill,
       'icon-right': IconCheckFill,
       'info-action': IconCheckFill,
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('renders the message-body slot', () => {
    const wrapper = mount(CdrBanner, {
      propsData: {
        type: 'success',
      },
      slots: {
       default: 'hey im a banner',
       'icon-left': IconCheckFill,
       'message-body': 'and I am some extra information'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
