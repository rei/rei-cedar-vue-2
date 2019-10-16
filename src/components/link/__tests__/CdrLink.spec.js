import { shallowMount, mount } from '@vue/test-utils';
import sinon from 'sinon';
import CdrLink from 'componentdir/link/CdrLink';
// import CdrThemer from 'componentdir/themer/CdrThemer';

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

  xit('inherits theme correctly', () => {
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

  xit('sets theme correctly', () => {
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
