import { shallowMount } from '@vue/test-utils';
import CdrTable from 'componentsdir/table/CdrTable';

const bookHeaders = [
  'Title',
  'Year',
  'Author',
];

const bookRecords = [
  {
    title: 'Book A',
    year: 1823,
    author: 'Mikey',
    rowheader: 'row 1',
  },
  {
    title: 'Book C',
    year: 1532,
    author: 'Joey',
    rowheader: 'row 2',
  },
  {
    title: 'Book E',
    year: 1253,
    author: 'Scotty',
    rowheader: 'row 3',
  }];

describe('CdrTable.vue', () => {
  it('has a table by default', () => {
    const wrapper = shallowMount(CdrTable);
    expect(wrapper.contains('table')).toBe(true);
  });

  it('has a thead when headers property provided', () => {
    const wrapper = shallowMount(CdrTable, {
      propsData: {
        headers: bookHeaders,
        records: bookRecords
      }
    });
    expect(wrapper.contains('thead')).toBe(true);
  });

  it('has a tbody when records property provided', () => {
    const wrapper = shallowMount(CdrTable, {
      propsData: {
        records: bookRecords
      }
    });
    expect(wrapper.contains('tbody')).toBe(true);
  });

  it('has row headers when rowHeaders property set to true', () => {
    const wrapper = shallowMount(CdrTable, {
      propsData: {
        records: bookRecords,
        rowHeaders: true,
      }
    });
    expect(wrapper.contains('th.row-header')).toBe(true)
  });
});