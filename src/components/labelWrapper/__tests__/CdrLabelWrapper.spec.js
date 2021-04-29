import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrLabelWrapper from 'componentdir/labelWrapper/CdrLabelWrapper';
import { h } from '@vue/runtime-core';

describe('CdrLabelWrapper', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrLabelWrapper, {
      propsData: {
        labelClass: 'custom-label-class',
        contentClass: 'custom-content-class',
        name: 'testName',
        modifier: 'hide-figure',
        size: 'medium'
      },
      attrs: {
        class: 'foo',
        'data-ui': 'wrapper',

      },
      slots: {
        default: 'Label Wrapper Test',
        input: h('input', { type: 'checkbox' })
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
