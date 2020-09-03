import { shallowMount } from '@vue/test-utils';
import CdrTooltip from 'componentdir/tooltip/CdrTooltip';

describe('CdrTooltip', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrTooltip);
    expect(wrapper.element).toMatchSnapshot();
  });
});
