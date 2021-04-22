import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrChip from 'componentdir/chip/CdrChip';

describe('CdrChip', () => {
  it('default matches snapshot', () => {
    const wrapper = mount(CdrChip, {
      slots: {
        default: 'tortilla chip'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders icon slots', () => {
    const wrapper = mount(CdrChip, {
      slots: {
        default: 'tortilla chip',
        'icon-left': '🌮',
        'icon-right': '🍔'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
