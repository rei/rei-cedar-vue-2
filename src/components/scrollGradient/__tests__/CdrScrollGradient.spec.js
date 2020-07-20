import { shallowMount } from '@vue/test-utils';
import CdrScrollGradient from 'componentdir/scrollGradient/CdrScrollGradient';

describe('CdrScrollGradient', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrScrollGradient);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has a failing test by default so you remember to do them', () => {
    expect(false).toBe(true);
  });
});
