import { shallowMount, mount } from '../../../../test/vue-jest-style-workaround.js';
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

  it('passes arbitrary HTML attrs through to image', () => {
    const wrapper = mount(CdrImg, {
      propsData: {
        src: 'http://via.placeholder.com/350x150',
        loading: 'lazy',
        ratio: 'square'
      }
    });
    expect(wrapper.find('img').attributes()['loading']).toBe('lazy');
  });


  it('emits error event for default image', () => {
    const spy = sinon.spy();

    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'localhost:8000/nothing-to-see-here.png',
        onError: spy,
      }
    });
    wrapper.find('img').trigger('error');
    expect(spy.calledOnce).toBeTruthy();
  })


  it('builds proper ratio object for auto ratio', () => {
    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'localhost:8000/nothing-to-see-here.png',
        ratio: 'auto'
      },
    });
    expect(wrapper.vm.ratioObject['--ratio']).toBe('0');
  });


  it('builds proper ratio object for mathematical aspect ratio', () => {
    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'localhost:8000/nothing-to-see-here.png',
        ratio: '3-2'
      },
    });
    expect(wrapper.vm.ratioObject['--ratio']).toBe('66.66666666666666%');
  });

  it('emits error event for ratio image', () => {
    const spy = sinon.spy();

    const wrapper = shallowMount(CdrImg, {
      propsData: {
        src: 'localhost:8000/nothing-to-see-here.png',
        ratio: 'square',
        onError: spy
      }
    });
    wrapper.find('img').trigger('error');
    expect(spy.calledOnce).toBeTruthy();
  })

});
