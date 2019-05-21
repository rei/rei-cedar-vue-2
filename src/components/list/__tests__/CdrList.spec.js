import { shallowMount } from '@vue/test-utils';
import { CdrList } from 'distdir/cedar.esm.js';

describe('CdrList.vue', () => {
  it('renders a ul by default', () => {
    const wrapper = shallowMount(CdrList);
    expect(wrapper.is('ul')).toBe(true);
  });

  it('renders an ol', () => {
    const wrapper = shallowMount(CdrList, {
      propsData: {
        tag: 'ol',
      }
    });
    expect(wrapper.is('ol')).toBe(true);
  });
});