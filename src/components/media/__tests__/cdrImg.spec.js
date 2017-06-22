import { mount } from 'avoriaz';
import cdrImg from '@/components/media/cdrImg';

describe('cdrImg.vue', () => {
  it('renders an img', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
      }
    });
    expect(wrapper.is('img')).to.equal(true);
  });

  it('renders the media frame correctly', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
        ratio: 'square',
      }
    });
    expect(wrapper.is('div')).to.equal(true);
  });

  it('sets src prop correctly', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
      }
    });
    expect(wrapper.vm.$props.src).to.equal('test');
  });

  it('sets the src attr correctly', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
      }
    });
    expect(wrapper.hasAttribute('src', 'test')).to.equal(true);
  });

  it('sets the src attr correctly in a media frame', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
        ratio: 'square',
      }
    });
    expect(wrapper.find('.cdr-media-frame__image')[0].hasAttribute('src', 'test')).to.equal(true);
  });

  it('sets the alt attr correctly', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
        alt: 'test alt',
      }
    });
    expect(wrapper.hasAttribute('alt', 'test alt')).to.equal(true);
  });

  it('sets the alt attr correctly in a media frame', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
        ratio: 'square',
        alt: 'test alt',
      }
    });
    expect(wrapper.find('.cdr-media-frame__image')[0].hasAttribute('alt', 'test alt')).to.equal(true);
  });

  it('sets the ratio prop correctly', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
        ratio: 'square',
      }
    });
    expect(wrapper.vm.$props.ratio).to.equal('square');
  });

  it('sets the ratio class correctly', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
        ratio: 'square',
      }
    });
    expect(wrapper.hasClass('cdr-media-frame--square')).to.equal(true);
  });

  it('sets the crop prop correctly', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
        ratio: 'square',
        crop: 'top',
      }
    });
    expect(wrapper.vm.$props.crop).to.equal('top');
  });

  it('sets the crop class correctly', () => {
    const wrapper = mount(cdrImg, {
      propsData: {
        src: 'test',
        ratio: 'square',
        crop: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-media-frame--top')).to.equal(true);
  });

});