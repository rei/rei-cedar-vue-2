import { shallowMount, mount } from '@vue/test-utils';
import CdrTab from 'componentsdir/tabs/CdrTab';

describe('CdrTab.vue', () => {
  it('renders tab', () => {
    const wrapper = shallowMount(CdrTab);
    expect(wrapper.is('button')).toBe(false);
  });
});