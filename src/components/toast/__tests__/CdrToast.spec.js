import { shallowMount } from '@vue/test-utils';
import CdrToast from 'componentdir/toast/CdrToast';

describe('CdrToast', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrToast);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has a failing test by default so you remember to do them', () => {
    expect(false).toBe(true);
  });
});
