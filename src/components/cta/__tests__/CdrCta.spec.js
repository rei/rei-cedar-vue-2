import { shallowMount } from '@vue/test-utils';
import CdrCta from 'componentsdir/cta/CdrCta';

describe('CdrCta.vue', () => {
  it('validates ctaStyle prop', () => {
    const wrapper = shallowMount(CdrCta);
    const ctaStyle = wrapper.vm.$options.props.ctaStyle;
    expect(ctaStyle.validator('test')).toBe(false);
    expect(ctaStyle.validator('dark')).toBe(true);
  });

  it('validates tag prop', () => {
    const wrapper = shallowMount(CdrCta);
    const tag = wrapper.vm.$options.props.tag;
    expect(tag.validator('input')).toBe(false);
    expect(tag.validator('a')).toBe(true);
    expect(tag.validator('button')).toBe(true);
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