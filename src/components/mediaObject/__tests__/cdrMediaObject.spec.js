import { shallow } from '@vue/test-utils';
import cdrMediaObject from 'componentsdir/mediaObject/cdrMediaObject';

describe('cdrMediaObject.vue', () => {
  it('adds media align class', () => {
    const wrapper = shallow(cdrMediaObject, {
      propsData: {
        mediaAlign: 'right',
        imgSrc: '',
      },
    });
    expect(wrapper.vm.alignClass).toBe('cdr-media-object__body--right');
  });

  it('defaults to no media align class', () => {
    const wrapper = shallow(cdrMediaObject, {
      propsData: {
        imgSrc: '',
      }
    });
    expect(wrapper.vm.alignClass).toBe('');
  });
});


