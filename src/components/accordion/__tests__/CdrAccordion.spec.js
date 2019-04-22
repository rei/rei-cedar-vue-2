import { shallowMount } from '@vue/test-utils';
import CdrAccordion from '../CdrAccordion.vue';

describe('CdrAccordion.vue', () => {
  it('renders accordion container', () => {
    const wrapper = shallowMount(CdrAccordion);
    expect(wrapper.classes()).toContain('cdr-accordion');
  });
});
