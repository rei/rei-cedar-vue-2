import { shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer'
import CdrA from 'componentsdir/anchor/CdrA';

describe('CdrA.vue', () => {
  it('outputs the same HTML', () => {
    const wrapper = shallowMount(CdrA);
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    });
  });

  it('renders an anchor', () => {
    const wrapper = shallowMount(CdrA);
    expect(wrapper.is('a')).toBe(true);
  });

  it('sets target attr correctly', () => {
    const wrapper = shallowMount(CdrA, {
      propsData: {
        target: '_self',
      },
    });
    expect(wrapper.attributes().target).toBe('_self');
  });

  it('sets rel attr correctly', () => {
    const wrapper = shallowMount(CdrA, {
      propsData: {
        rel: 'nofollow',
      },
    });
    expect(wrapper.attributes().rel).toBe('nofollow');
  });

  it('computes target="_blank" rel attr correctly', () => {
    const wrapper = shallowMount(CdrA, {
      propsData: {
        target: '_blank',
      },
    });
    expect(wrapper.attributes().rel).toBe('noopener noreferrer');
  });

  it('computes base class correctly', () => {
    const wrapper = shallowMount(CdrA, {
      propsData: {
        modifier: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('cdr-link');
  });

  it('computes link as button base class correctly', () => {
    const wrapper = shallowMount(CdrA, {
      propsData: {
        modifier: 'primary, button',
      },
    });
    expect(wrapper.classes()).toContain('cdr-button');
  });
});