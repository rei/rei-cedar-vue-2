import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrAlert from 'componentdir/alert/CdrAlert';
// import IconCheckFill from 'componentdir/icon/comps/check-fill';
describe('CdrAlert', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrBanner, {
      propsData: {
        type: 'info',
      },
      slots: {
       default: "🤪 hey im a banner",
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
