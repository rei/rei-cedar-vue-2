import { shallowMount } from '@vue/test-utils';
import CdrChip from 'componentdir/chip/CdrChip';

describe('CdrChip', () => {
  it('default matches snapshot', () => {
    const wrapper = shallowMount(CdrChip, {
      slots: {
        default: 'tortilla chip'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('emphasis matches snapshot', () => {
    const wrapper = shallowMount(CdrChip, {
      propsData: {
        modifier: 'emphasis'
      },
      slots: {
        default: 'tortilla chip'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
