import { mount } from '@vue/test-utils';
import CdrAlert from 'componentdir/alert/CdrAlert';
import IconCheckFill from 'componentdir/icon/comps/check-fill';
describe('CdrAlert', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrAlert, {
      propsData: {
        type: 'info',
      },
      slots: {
       default: [IconCheckFill, 'hey im an alert'],
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
