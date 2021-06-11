import { shallowMount } from '@vue/test-utils';
import CdrContainer from 'componentdir/container/CdrContainer';

describe('CdrContainer', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrContainer, {
      slots: {
        default: 'foo'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('overrides default modifier', () => {
    const wrapper = shallowMount(CdrContainer, {
      props: {
        modifier: 'fluid'
      },
      slots: {
        default: 'foo'
      }
    });
    // cdr-container base class corresponds to "fluid"
    // default is "static" which adds an addition class
    expect(wrapper.classes()).not.toContain('cdr-container--fluid');
    expect(wrapper.classes()).not.toContain('cdr-container--static');
    expect(wrapper.classes()).toContain('cdr-container');
  });
});
