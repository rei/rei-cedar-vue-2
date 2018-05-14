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
    console.log(wrapper.vm.$style);
    console.log(wrapper.vm.alignClass);
    expect(wrapper.vm.alignClass).toBe('right');
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


