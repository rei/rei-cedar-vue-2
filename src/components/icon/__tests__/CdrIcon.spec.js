import { shallowMount } from '@vue/test-utils';
import CdrIcon from 'componentsdir/icon/CdrIcon';

describe('CdrIcon.vue', () => {
  it('renders a wrapping svg', () => {
    const wrapper = shallowMount(CdrIcon, {});
    expect(wrapper.is('svg')).toBe(true);
  });
});