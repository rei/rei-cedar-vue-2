import { mount } from '@vue/test-utils';
import CdrBanner from 'componentdir/banner/CdrBanner';
import IconCheckFill from 'componentdir/icon/comps/check-fill';
describe('CdrBanner', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrBanner, {
      propsData: {
        type: 'info',
      },
      slots: {
       default: [IconCheckFill, 'hey im a banner'],
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
