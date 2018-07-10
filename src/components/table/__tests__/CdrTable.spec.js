import { shallowMount } from '@vue/test-utils';
import CdrTable from 'componentsdir/table/CdrTable';

describe('CdrTable.vue', () => {
  it('has a table', () => {
    const wrapper = shallowMount(CdrTable);
    expect(wrapper.contains('table')).toBe(true);
  });
});