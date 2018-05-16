import { shallowMount } from '@vue/test-utils';
import CdrLink from 'componentsdir/link/CdrLink';

describe('CdrLink.vue', () => {
  it('renders an anchor by default', () => {
    const wrapper = shallowMount(CdrLink);
    expect(wrapper.is('a')).toBeTruthy();
  });

  it('sets target attr correctly', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        target: '_self',
      },
    });
    expect(wrapper.attributes().target).toBe('_self');
  });

  it('sets a default href', () => {
    const wrapper = shallowMount(CdrLink);
    expect(wrapper.attributes().href).toBe('#');
  });

  it('sets a default link text', () => {
    const wrapper = shallowMount(CdrLink);
    expect(wrapper.contains('Link Text'));
  });

  it('sets rel attr correctly', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        rel: 'nofollow',
      },
    });
    expect(wrapper.attributes().rel).toBe('nofollow');
  });

  it('computes target="_blank" rel attr correctly', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        target: '_blank',
      },
    });
    expect(wrapper.attributes().rel).toBe('noopener noreferrer');
  });
  
  it('computes the base class correctly', () => {
    const wrapper = shallowMount(CdrLink);
    expect(wrapper.classes().length).toBe(1);
    expect(wrapper.vm.$style['cdr-link']).toContain('cdr-link');
  });
  
  it('computes classes correctly for standalone modifier', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        modifier: 'standalone',
      },
    });
    expect(wrapper.vm.$style['cdr-link--standalone']).toContain('cdr-link--standalone');
  });

  it('renders a link with a button element and no href attribute', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        tag: 'button',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.attributes().href).toBe(undefined);
  });
});
