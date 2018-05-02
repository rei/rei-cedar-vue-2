import { shallow } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import CdrLink from 'componentsdir/link/CdrLink';

describe('CdrLink.vue', () => {
  it('outputs the same HTML', () => {
    const wrapper = shallow(CdrLink);
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });

  it('renders an anchor', () => {
    const wrapper = shallow(CdrLink);
    expect(wrapper.is('a')).toBe(true);
  });

  it('sets target attr correctly', () => {
    const wrapper = shallow(CdrLink, {
      propsData: {
        target: '_self',
      },
    });
    expect(wrapper.attributes().target).toBe('_self');
  });

  it('sets a default href', () => {
    const wrapper = shallow(CdrLink);
    expect(wrapper.attributes().href).toBe('#');
  });

  it('sets a default link text', () => {
    const wrapper = shallow(CdrLink);
    expect(wrapper.contains('Link Text'));
  });

  it('sets rel attr correctly', () => {
    const wrapper = shallow(CdrLink, {
      propsData: {
        rel: 'nofollow',
      },
    });
    expect(wrapper.attributes().rel).toBe('nofollow');
  });

  it('computes target="_blank" rel attr correctly', () => {
    const wrapper = shallow(CdrLink, {
      propsData: {
        target: '_blank',
      },
    });
    expect(wrapper.attributes().rel).toBe('noopener noreferrer');
  });

  it('computes classes correctly for on-dark modifier', () => {
    const wrapper = shallow(CdrLink, {
      propsData: {
        modifier: 'on-dark',
      },
    });
    expect(wrapper.classes()).toContain('cdr-link--on-dark');
  });

  it('computes the base class correctly', () => {
    const wrapper = shallow(CdrLink);
    expect(wrapper.classes().length).toBe(1);
    expect(wrapper.classes()).toContain('cdr-link');
  });

  it('computes classes correctly for standalone modifier', () => {
    const wrapper = shallow(CdrLink, {
      propsData: {
        modifier: 'standalone',
      },
    });
    expect(wrapper.classes()).toContain('cdr-link--standalone');
  });

  it('renders a link with a button element and no href attribute', () => {
    const wrapper = shallow(CdrLink, {
      propsData: {
        tag: 'button',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.attributes().href).toBe(undefined);
  });
});
