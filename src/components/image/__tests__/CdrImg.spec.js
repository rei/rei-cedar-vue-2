import { shallowMount } from '@vue/test-utils';
import CdrImg from 'componentsdir/image/CdrImg';

describe('CdrImg.vue', () => {
  it('sets the alt attr correctly', () => {
    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        alt: 'test alt',
      }
    });
    expect(wrapper.attributes().alt).toBe('test alt');
  });

  it('sets the alt attr correctly in a media frame', () => {
    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        ratio: 'square',
        alt: 'test alt',
      }
    });
    expect(wrapper.find('img').attributes().alt).toBe('test alt');
  });

  it('adds lazy class and attrs', () => {
    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        lazy: true,
        lazyOpts: {
          'src-lazy': 'http://via.placeholder.com/350',
        },
      }
    });
    expect(wrapper.classes()).toContain('lazy-image');
    expect(wrapper.attributes()['data-src-lazy']).toBe('http://via.placeholder.com/350');
  });

});