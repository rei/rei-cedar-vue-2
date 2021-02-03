import { shallowMount } from '../../../../test/vue-jest-style-workaround.js';
import CdrLabelWrapper from 'componentdir/labelWrapper/CdrLabelWrapper';

describe('CdrLabelWrapper', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrLabelWrapper, {
      propsData: {
        labelClass: 'custom-label-class',
        contentClass: 'custom-content-class',
        name: 'testName',
        modifier: 'hide-figure',
        size: 'medium'
      },
      slots: {
        default: 'Label Wrapper Test',
        input: '<input type="checkbox"/>'
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
