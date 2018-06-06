import { shallowMount } from '@vue/test-utils';
import CdrMediaObject from 'componentsdir/mediaObject/CdrMediaObject';

describe('CdrMediaObject.vue', () => {
  it('adds media align class', () => {
    const wrapper = shallowMount(CdrMediaObject, {
      propsData: {
        mediaAlign: 'right',
        imgSrc: '',
      },
    });
    expect(wrapper.vm.$style['cdr-media-object__body--right']).toContain('--right');
  });

  it('defaults to no media align class', () => {
    const wrapper = shallowMount(CdrMediaObject, {
      propsData: {
        imgSrc: '',
      }
    });
    expect(wrapper.vm.alignClass).toBe('');
  });
});


