import { shallowMount } from '@vue/test-utils';
import CdrCaption from 'componentdir/caption/CdrCaption';

describe('CdrCaption', () => {
  it('renders a nav', () => {
    const wrapper = shallowMount(CdrCaption, {
      propsData: {
        summary: 'This is a summary',
        credit: 'This is a credit',
      }
    });
    expect(wrapper.find('p').text()).toBe('This is a summary');
    expect(wrapper.find('cite').text()).toBe('This is a credit');
  });
});
