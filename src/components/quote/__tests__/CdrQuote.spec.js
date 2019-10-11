import { mount } from '@vue/test-utils';
import CdrQuote from 'componentdir/quote/CdrQuote';

describe('CdrQuote', () => {
  it('renders correctly', () => {
    const wrapper = mount(CdrQuote, {
      propsData: {
        tag: 'aside',
        summary: 'This is the summary',
        citation: 'This is the citation'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
