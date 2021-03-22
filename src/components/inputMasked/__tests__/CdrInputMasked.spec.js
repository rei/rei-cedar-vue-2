import { shallowMount } from '@vue/test-utils';
import CdrInputMasked from 'componentdir/inputMasked/CdrInputMasked';

describe('CdrInputMasked', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrInputMasked);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has a failing test by default so you remember to do them', () => {
    expect(false).toBe(true);
  });
});
