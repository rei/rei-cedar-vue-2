import { shallowMount } from '@vue/test-utils';
import { CdrText } from '@rei/cedar';

describe('CdrText.vue', () => {
  it('renders as p by default', () => {
    const wrapper = shallowMount(CdrText);
    expect(wrapper.is('p')).toBe(true);
  });

  it('renders as h1 correctly', () => {
    const wrapper = shallowMount(CdrText, {
      propsData: {
        tag: 'h1',
      },
    });
    expect(wrapper.is('h1')).toBe(true);
  });
});