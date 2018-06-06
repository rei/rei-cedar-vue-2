import { shallowMount } from '@vue/test-utils';
import CdrCta from 'componentsdir/cta/CdrCta';

describe('CdrCta.vue', () => {
  it('validates ctaStyle prop', () => {
    const wrapper = shallowMount(CdrCta);
    const ctaStyle = wrapper.vm.$options.props.ctaStyle;
    expect(ctaStyle.validator('test')).toBe(false);
    expect(ctaStyle.validator('dark')).toBe(true);
  });

  it('adds classes from ctaStyle prop', () => {
    const wrapper = shallowMount(CdrCta, {
      propsData: {
        ctaStyle: 'sale',
      },
    });

    // it's important that it add cta as a separate class because BEM!
    expect(wrapper.classes()).toContain('cdr-cta');
    expect(wrapper.classes()).toContain('cdr-cta--sale');
  });

  // this is actually testing the full-width prop in the buttonBase mixin
  it('adds full width class from mixin', () => {
    const wrapper = shallowMount(CdrCta, {
      propsData: {
        fullWidth: true,
      },
    });

    expect(wrapper.classes()).toContain('cdr-cta--full-width');
  });
});