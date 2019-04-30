import { shallowMount } from '@vue/test-utils';
import { CdrLink } from 'distdir/cedar.esm.js';
import CdrThemer from 'componentsdir/themer/CdrThemer';

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
    // expect(wrapper.classes().length).toBe(1);
    expect(wrapper.vm.$style).toHaveProperty('cdr-link');
  });
  
  it('computes classes correctly for standalone modifier', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        modifier: 'standalone',
      },
    });
    expect(wrapper.vm.$style).toHaveProperty('cdr-link--standalone');
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

  it('inherits theme correctly', () => {
    const wrapper = shallowMount(CdrThemer, {
      stubs: {
        'cdr-link': CdrLink,
      },
      slots: {
        default: ['<cdr-link/>']
      },
      propsData: {
        theme: 'dark',
      },
    });

    const link = wrapper.find(CdrLink)

    expect(link.classes()).toContain('on-dark');
  });

  it('sets theme correctly', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        theme: 'dark',
      },
    });
    expect(wrapper.classes()).toContain('on-dark');
  });

  it('does nothing if no theme provided', () => {
    const wrapper = shallowMount(CdrLink);
    expect(wrapper.vm.computedTheme).toBeFalsy();
  });
});
