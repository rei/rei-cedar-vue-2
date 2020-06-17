import { shallowMount } from '@vue/test-utils';
import CdrAlert from 'componentdir/alert/CdrAlert';

describe('CdrAlert', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrAlert, {
      propsData: {
        type: 'info',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
