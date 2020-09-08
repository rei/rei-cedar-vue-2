import { shallowMount } from '@vue/test-utils';
import CdrPopover from 'componentdir/popover/CdrPopover';

describe('CdrPopover', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrPopover);
    expect(wrapper.element).toMatchSnapshot();
  });
});
