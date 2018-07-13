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

  it('adds full width class', () => {
    const wrapper = shallowMount(CdrCta, {
      propsData: {
        fullWidth: true,
      },
    });

    expect(wrapper.classes()).toContain('cdr-cta--full-width');
  });

  it('sets target attr correctly', () => {
    const wrapper = shallowMount(CdrCta, {
      propsData: {
        target: '_self',
      },
    });
    expect(wrapper.attributes().target).toBe('_self');
  });

  it('sets a default href', () => {
    const wrapper = shallowMount(CdrCta);
    expect(wrapper.attributes().href).toBe('#');
  });

  it('sets rel attr correctly', () => {
    const wrapper = shallowMount(CdrCta, {
      propsData: {
        rel: 'nofollow',
      },
    });
    expect(wrapper.attributes().rel).toBe('nofollow');
  });

  it('computes target="_blank" rel attr correctly', () => {
    const wrapper = shallowMount(CdrCta, {
      propsData: {
        target: '_blank',
      },
    });
    expect(wrapper.attributes().rel).toBe('noopener noreferrer');
  });
});