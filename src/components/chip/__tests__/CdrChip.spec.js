import { shallowMount } from '@vue/test-utils';
import CdrChip from 'componentdir/chip/CdrChip';

describe('CdrChip', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrChip, {
      slots: {
        default: 'tortilla chip'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  // it('has a failing test by default so you remember to do them', () => {
  //   expect(false).toBe(true);
  // });
});
