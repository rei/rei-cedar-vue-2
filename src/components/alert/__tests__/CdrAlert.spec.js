import { mount } from '@vue/test-utils';
import { h } from 'vue';
import CdrAlert from 'componentdir/alert/CdrAlert';
import IconCheckFill from 'componentdir/icon/comps/check-fill';
describe('CdrAlert', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrAlert, {
      propsData: {
        type: 'info',
      },
      slots: {
       default: h(IconCheckFill, 'hey im an alert'),
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
