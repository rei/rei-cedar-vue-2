import { shallow } from 'vue-test-utils';
import cdrImg from 'Components/image/cdrImg';

describe('cdrImg.vue', () => {
  it('renders an img', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
      }
    });
    expect(wrapper.is('img')).toBe(true);
  });

  it('renders the media frame correctly', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        ratio: 'square',
      }
    });
    expect(wrapper.is('div')).toBe(true);
  });

  // it('sets src prop correctly', () => {
  //   const wrapper = shallow(cdrImg, {
  //     propsData: {
  //       src: 'http://via.placeholder.com/350x150',
  //     }
  //   });
  //   expect(wrapper.vm.$props.src).toBe('http://via.placeholder.com/350x150');
  // });

  it('sets the src attr correctly', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
      }
    });
    expect(wrapper.hasAttribute('src', 'http://via.placeholder.com/350x150')).toBe(true);
  });

  it('sets the src attr correctly in a media frame', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        ratio: 'square',
      }
    });
    expect(wrapper.find('.cdr-media-frame__image').hasAttribute('src', 'http://via.placeholder.com/350x150')).toBe(true);
  });

  it('sets the alt attr correctly', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        alt: 'test alt',
      }
    });
    expect(wrapper.hasAttribute('alt', 'test alt')).toBe(true);
  });

  it('sets the alt attr correctly in a media frame', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        ratio: 'square',
        alt: 'test alt',
      }
    });
    expect(wrapper.find('.cdr-media-frame__image').hasAttribute('alt', 'test alt')).toBe(true);
  });

  it('sets the ratio prop correctly', () => {
    const wrapper = shallow(cdrImg, {
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

  it('sets the crop prop correctly', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        ratio: 'square',
        crop: 'top',
      }
    });
    expect(wrapper.vm.$props.crop).toBe('top');
  });

  it('sets the radius prop correctly', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        radius: 'square',
      }
    });
    expect(wrapper.vm.$props.radius).toBe('square');
  });

  it('adds lazy class and attrs', () => {
    const wrapper = shallow(cdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        lazy: true,
        lazyOpts: {
          'src-lazy': 'http://via.placeholder.com/350',
        },
      }
    });
    expect(wrapper.hasClass('lazy-image')).toBe(true);
    expect(wrapper.hasAttribute('data-src-lazy', 'http://via.placeholder.com/350')).toBe(true);
  });

});