import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer'
import cdrA from 'Components/anchor/cdrA';

describe('cdrA.vue', () => {
  it('outputs the same HTML', () => {
    const wrapper = shallow(cdrA);
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    });
  });

  it('renders an anchor', () => {
    const wrapper = shallow(cdrA);
    expect(wrapper.is('a')).toBe(true);
  });

  it('sets target attr correctly', () => {
    const wrapper = shallow(cdrA, {
      propsData: {
        target: '_self',
      },
    });
    expect(wrapper.hasAttribute('target', '_self')).toBe(true);
  });

  it('sets rel attr correctly', () => {
    const wrapper = shallow(cdrA, {
      propsData: {
        rel: 'nofollow',
      },
    });
    expect(wrapper.hasAttribute('rel', 'nofollow')).toBe(true);
  });

  it('computes target="_blank" rel attr correctly', () => {
    const wrapper = shallow(cdrA, {
      propsData: {
        target: '_blank',
      },
    });
    expect(wrapper.hasAttribute('rel', 'noopener noreferrer')).toBe(true);
  });

  it('computes base class correctly', () => {
    const wrapper = shallow(cdrA, {
      propsData: {
        modifier: 'primary',
      },
    });
    expect(wrapper.hasClass('cdr-link')).toBe(true);
  });

  it('computes link as button base class correctly', () => {
    const wrapper = shallow(cdrA, {
      propsData: {
        modifier: 'primary, button',
      },
    });
    expect(wrapper.hasClass('cdr-button')).toBe(true);
  });
});