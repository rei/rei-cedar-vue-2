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
  it('handles close triggers', async () => {
    const spyCloseToast = jest.spyOn(wrapper.vm, 'closeToast');
    wrapper.setProps({ open: true });
    await wrapper.vm.$nextTick(() => {
      wrapper.find('button').trigger('click');
      expect(spyCloseToast).toBeCalled();
    });
  });
  it('closes after 5 seconds', async () => {
    jest.useFakeTimers();
    const spyCloseToastWithDelay = jest.spyOn(wrapper.vm, 'closeToastWithDelay');
    wrapper.setProps({ open: true });
    jest.runTimersToTime(5000),
    await wrapper.vm.$nextTick(() => {
      expect(spyCloseToastWithDelay).toBeCalled();
    });
  });
});