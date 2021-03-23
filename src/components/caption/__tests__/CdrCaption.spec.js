import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrCaption from 'componentdir/caption/CdrCaption';

describe('CdrCaption', () => {
  it('renders correctly', () => {
    const wrapper = mount(CdrCaption, {
      propsData: {
        summary: 'This is a summary',
        credit: 'This is a credit',
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
