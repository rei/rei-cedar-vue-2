import { shallow } from 'vue-test-utils';
import cdrRow from 'Components/row/cdrRow';

describe('cdrRow.vue', () => {
  it('sets type prop correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        type: 'normal',
      }
    });
    expect(wrapper.vm.$props.type).toBe('normal');
  });

  it('renders as list type correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        type: 'list',
      },
    });
    expect(wrapper.is('ul')).toBe(true);
  });

  it('renders default type correctly', () => {
    const wrapper = shallow(cdrRow);
    expect(wrapper.is('div')).toBe(true);
  });

  it('computes cols classes correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        cols: '1',
        colsMd: '2',
        colsLg: '2',
        colsSm: '2',
      }
    });
    expect(wrapper.hasClass('cdr-row_row1')).toBe(true);
    expect(wrapper.hasClass('cdr-row_row2@md')).toBe(true);
    expect(wrapper.hasClass('cdr-row_row2@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-row_row2@sm')).toBe(true);
  });

  it('computes justify classes correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        justify: 'center',
        justifyMd: 'center',
        justifyLg: 'center',
        justifySm: 'center',
      }
    });
    expect(wrapper.hasClass('cdr-row--center')).toBe(true);
    expect(wrapper.hasClass('cdr-row--center@md')).toBe(true);
    expect(wrapper.hasClass('cdr-row--center@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-row--center@sm')).toBe(true);
  });

  it('computes align classes correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        align: 'top',
        alignMd: 'top',
        alignLg: 'top',
        alignSm: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-row--top')).toBe(true);
    expect(wrapper.hasClass('cdr-row--top@md')).toBe(true);
    expect(wrapper.hasClass('cdr-row--top@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-row--top@sm')).toBe(true);
  });

  it('computes gutter classes correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        gutter: 'none',
        gutterMd: 'none',
        gutterLg: 'none',
        gutterSm: 'none',
      }
    });
    expect(wrapper.hasClass('cdr-row--gutter-none')).toBe(true);
    expect(wrapper.hasClass('cdr-row--gutter-none@md')).toBe(true);
    expect(wrapper.hasClass('cdr-row--gutter-none@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-row--gutter-none@sm')).toBe(true);
  });

  it('computes vertical classes correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        vertical: true,
        verticalMd: true,
        verticalLg: true,
        verticalSm: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--column')).toBe(true);
    expect(wrapper.hasClass('cdr-row--column@md')).toBe(true);
    expect(wrapper.hasClass('cdr-row--column@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-row--column@sm')).toBe(true);
  });

  it('computes wrap classes correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        wrapMd: true,
        wrapLg: true,
        wrapSm: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--wrap@md')).toBe(true);
    expect(wrapper.hasClass('cdr-row--wrap@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-row--wrap@sm')).toBe(true);
  });

  it('computes nowrap classes correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        nowrap: true,
        nowrapMd: true,
        nowrapLg: true,
        nowrapSm: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--noWrap')).toBe(true);
    expect(wrapper.hasClass('cdr-row--noWrap@md')).toBe(true);
    expect(wrapper.hasClass('cdr-row--noWrap@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-row--noWrap@sm')).toBe(true);
  });
});