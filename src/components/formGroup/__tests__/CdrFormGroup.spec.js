import { mount } from '@vue/test-utils';
import CdrFormGroup from 'componentdir/formGroup/CdrFormGroup';

describe('CdrFormGroup', () => {
  test('renders correctly', () => {
    const wrapper = mount(CdrFormGroup);
    expect(wrapper.element).toMatchSnapshot();
  });
});
