import { mount } from '@vue/test-utils';
import CdrToast from 'componentdir/toast/CdrToast';
import IconCheckFill from 'componentdir/icon/comps/check-fill';

describe('CdrToast', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CdrToast, {
      slots: {
        default: 'toast content',
        'icon-left': IconCheckFill,
      },
    });
  });
  it('matches snapshot', async () => {
    wrapper.setProps({ open: true });
    wrapper.setData({ opened: true });
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.element).toMatchSnapshot();
    })
  });
  it('watches for close triggers', async () => {
    wrapper.setProps({ open: false });
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.closeToast).toBeCalled();
    });
  });
});