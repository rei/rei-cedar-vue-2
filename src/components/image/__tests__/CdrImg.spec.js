import { shallowMount, mount } from '@vue/test-utils';
import CdrImg from 'componentdir/image/CdrImg';
import sinon from 'sinon';

describe('CdrImg', () => {
  it('renders correctly', () => {
    const wrapper = mount(CdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        alt: 'test alt',
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders crop/ratio correctly', () => {
    const wrapper = mount(CdrImg, {
      propsData: {
        ratio: "square",
        cover: true,
        crop: "left",
        alt: "crop left",
        src: "http://placehold.it/1920x1080",
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

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


  it('emits error event for default image', () => {
    const spy = sinon.spy();

    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'localhost:8000/nothing-to-see-here.png',
      },
      listeners: {
        error: spy
      }
    });
    wrapper.find('img').trigger('error');
    expect(spy.calledOnce).toBeTruthy();
  })

  it('emits error event for ratio image', () => {
    const spy = sinon.spy();

    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'localhost:8000/nothing-to-see-here.png',
        ratio: 'square',
      },
      listeners: {
        error: spy
      }
    });
    wrapper.find('img').trigger('error');
    expect(spy.calledOnce).toBeTruthy();
  })

});
