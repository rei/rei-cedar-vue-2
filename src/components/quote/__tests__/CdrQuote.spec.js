import { shallowMount } from '@vue/test-utils';
import CdrQuote from 'componentdir/quote/CdrQuote';

describe('CdrQuote', () => {
  it('renders a nav', () => {
    const wrapper = shallowMount(CdrQuote, {
      propsData: {
        tag: 'aside',
        summary: 'This is the summary',
        citation: 'This is the citation'
      }
    });
    expect(wrapper.is('aside')).toBeTruthy();
  });
});
