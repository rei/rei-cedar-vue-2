import { shallowMount } from '@vue/test-utils';
import CdrAutocomplete from 'componentdir/autocomplete/CdrAutocomplete';

describe('CdrAutocomplete', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrAutocomplete);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has a failing test by default so you remember to do them', () => {
    expect(false).toBe(true);
  });
});
