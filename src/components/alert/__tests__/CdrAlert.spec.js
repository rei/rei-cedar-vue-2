import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrAlert from 'componentdir/alert/CdrAlert';
// TODO: pass array to h function to test proper usage?
// import { h } from 'vue';
// import IconCheckFill from 'componentdir/icon/comps/check-fill';
describe('CdrAlert', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrAlert, {
      propsData: {
        type: 'info',
      },
      slots: {
       default: "🤪 hey im an alert",
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
