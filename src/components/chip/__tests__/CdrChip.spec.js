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

  it('renders icon slots', () => {
    const wrapper = shallowMount(CdrChip, {
      slots: {
        default: 'tortilla chip',
        'icon-left': '🌮',
        'icon-right': '🍔'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
