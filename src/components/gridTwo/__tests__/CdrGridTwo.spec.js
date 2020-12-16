import { shallowMount } from '@vue/test-utils';
import CdrGridTwo from 'componentdir/gridTwo/CdrGridTwo';

describe('CdrGridTwo', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrGridTwo);
    expect(wrapper.element).toMatchSnapshot();
  });

  // it('has a failing test by default so you remember to do them', () => {
  //   expect(false).toBe(true);
  // });
});
