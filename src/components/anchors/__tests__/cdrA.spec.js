import { mount } from 'avoriaz';
import cdrA from '@/components/anchors/cdrA';

describe('cdrA.vue', () => {
  it('renders an anchor', () => {
    const wrapper = mount(cdrA);
    expect(wrapper.is('a')).to.equal(true);
  });

  it('sets target prop correctly', () => {
    const wrapper = mount(cdrA, {
      propsData: {
        target: '_self',
      },
    });
    expect(wrapper.vm.target).to.equal('_self');
  });

  it('renders target attr correctly', () => {
    const wrapper = mount(cdrA, {
      propsData: {
        target: '_self',
      },
    });
    expect(wrapper.hasAttribute('target', '_self')).to.equal(true);
  });

  it('sets rel prop correctly', () => {
    const wrapper = mount(cdrA, {
      propsData: {
        rel: 'nofollow',
      },
    });
    expect(wrapper.vm.rel).to.equal('nofollow');
  });

  it('renders rel attr correctly', () => {
    const wrapper = mount(cdrA, {
      propsData: {
        rel: 'nofollow',
      },
    });
    expect(wrapper.hasAttribute('rel', 'nofollow')).to.equal(true);
  });

  it('computes target="_blank" rel attr correctly', () => {
    const wrapper = mount(cdrA, {
      propsData: {
        target: '_blank',
      },
    });
    expect(wrapper.hasAttribute('rel', 'noopener noreferrer')).to.equal(true);
  });
});