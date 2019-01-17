import { shallowMount } from '@vue/test-utils';
import CdrThemer from 'componentsdir/themer/CdrThemer';

describe('CdrThemer.vue', () => {
  it('computes classes correctly', () => {
    const wrapper = shallowMount(CdrThemer, {
      propsData: {
        theme: 'dark',
        background: 'dark',
      }
    });
    expect(wrapper.classes()).toContain('cdr-bg--dark');
  });
});