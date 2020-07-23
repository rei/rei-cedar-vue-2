import { shallowMount, mount } from '@vue/test-utils';
import sinon from 'sinon';
import CdrLink from 'componentdir/link/CdrLink';

describe('CdrLink', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrLink);
    expect(wrapper.element).toMatchSnapshot();
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
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        href: 'www.rei.com'
      }
    });
    expect(wrapper.attributes().href).toBe('www.rei.com');
  });

  it('sets a default link text', () => {
    const wrapper = shallowMount(CdrLink);
    expect(wrapper.text()).toBe('#');
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
    expect(wrapper.classes()).toContain('cdr-link');
  });

  it('computes classes correctly for standalone modifier', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        modifier: 'standalone',
      },
    });
    expect(wrapper.classes()).toContain('cdr-link--standalone');
  });

  it('renders a link with a button element and no href attribute', () => {
    const wrapper = mount(CdrLink, {
      propsData: {
        tag: 'button',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('emits a click', () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        tag: 'button',
      },
      listeners: {
        'click': spy
      },
    });
    wrapper.trigger('click');
    expect(spy.called).toBeTruthy();
  });

  it('renders inset with default medium size', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        inset: true,
      },
    });
    expect(wrapper.classes()).toContain('cdr-link--inset');
    expect(wrapper.classes()).toContain('cdr-link--medium');
  });

  it('renders inset with size prop passed', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        inset: true,
        size: 'large'
      },
    });
    expect(wrapper.classes()).toContain('cdr-link--inset');
    expect(wrapper.classes()).toContain('cdr-link--large');
  });


  it('does not add size class if inset is not present', () => {
    const wrapper = shallowMount(CdrLink, {
      propsData: {
        inset: false,
        size: 'large'
      },
    });
    expect(wrapper.classes()).not.toContain('cdr-link--inset');
    expect(wrapper.classes()).not.toContain('cdr-link--large');
  });
});
