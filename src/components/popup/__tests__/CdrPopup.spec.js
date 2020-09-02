import { shallowMount } from '@vue/test-utils';
import CdrPopup from 'componentdir/popup/CdrPopup';

describe('CdrPopup', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrPopup);
    expect(wrapper.element).toMatchSnapshot();
  });
});
