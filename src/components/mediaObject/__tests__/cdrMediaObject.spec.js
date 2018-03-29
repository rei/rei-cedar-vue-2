import { shallow } from '@vue/test-utils';
import CdrMediaObject from 'componentsdir/mediaObject/CdrMediaObject';

describe('CdrMediaObject.vue', () => {
  it('adds media align class', () => {
    const wrapper = shallow(CdrMediaObject, {
      propsData: {
        mediaAlign: 'right',
        imgSrc: '',
      },
    });
    expect(wrapper.vm.alignClass).toBe('cdr-media-object__body--right');
  });

  it('defaults to no media align class', () => {
    const wrapper = shallow(CdrMediaObject, {
      propsData: {
        imgSrc: '',
      }
    });
    expect(wrapper.vm.alignClass).toBe('');
  });
});


