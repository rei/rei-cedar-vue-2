import { mount } from '../../../../test/vue-jest-style-workaround.js';
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

  it('renders pullquote correctly', () => {
    const wrapper = mount(CdrQuote, {
      propsData: {
        summary: 'This is the pull summary',
        citation: 'This is the pull citation',
        modifier: 'pull'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
