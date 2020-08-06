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
        position: 'left',
        opened: true
      },
    });
    expect(wrapper.classes()).toContain('cdr-popover__wrapper--left');
  });

  it('applies tooltip class if trigger prop is set', () => {
    const wrapper = shallowMount(CdrPopover, {
      propsData: {
        position: 'left',
        opened: true,
        trigger: 'tooltip'
      },
    });
    expect(wrapper.classes()).toContain('cdr-popover--tooltip');
  });
});
