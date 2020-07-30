import { shallowMount } from '@vue/test-utils';
import CdrPopover from 'componentdir/popover/CdrPopover';

describe('CdrPopover', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrPopover);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('is not visible by default', () => {
    const wrapper = shallowMount(CdrPopover);
    expect(wrapper.html()).toBe('');
  });

  it('applies correct arrow class', () => {
    const wrapper = shallowMount(CdrPopover, {
      propsData: {
        arrowDirection: 'left',
        open: true
      },
    });
    expect(wrapper.classes()).toContain('cdr-popover__arrow--left');
  });
});
