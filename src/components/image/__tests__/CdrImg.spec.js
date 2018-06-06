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

  // needed for 100% line coverage
  it('sets the ratio prop correctly', () => {
    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        ratio: 'square',
        ratioSm: 'square',
        ratioMd: 'square',
        ratioLg: 'square',
      }
    });
    expect(wrapper.vm.$props.ratio).toBe('square');
    expect(wrapper.vm.$props.ratioSm).toBe('square');
    expect(wrapper.vm.$props.ratioMd).toBe('square');
    expect(wrapper.vm.$props.ratioLg).toBe('square');
  });

  // needed for 100% line coverage
  it('sets the crop prop correctly', () => {
    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        ratio: 'square',
        crop: 'top',
      }
    });
    expect(wrapper.vm.$props.crop).toBe('top');
  });

  // needed for 100% line coverage
  it('sets the radius prop correctly', () => {
    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        radius: 'square',
      }
    });
    expect(wrapper.vm.$props.radius).toBe('square');
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