import { shallowMount } from '@vue/test-utils';
import { CdrIcon } from 'distdir/cedar.esm.js';

describe('CdrIcon.vue', () => {
  it('renders a wrapping svg', () => {
    const wrapper = shallowMount(CdrIcon, {});
    expect(wrapper.is('svg')).toBe(true);
  });

  it('adds inherit color class correctly', () => {
    const wrapper = shallowMount(CdrIcon, {
      propsData: {
        inheritColor: true,
      },
    });
    expect(wrapper.classes()).toContain('cdr-icon--inherit-color');
  });

  it('adds size class correctly', () => {
    const wrapper = shallowMount(CdrIcon, {
      propsData: {
        size: 'small large@lg',
      },
    });
    expect(wrapper.classes()).toContain('cdr-icon--small');
    expect(wrapper.classes()).toContain('cdr-icon--large@lg');
  });
});
