import { mount, shallow } from 'avoriaz';
import cdrRow from '@/components/grid/cdrRow';

describe('cdrRow.vue', () => {
  it('sets type prop correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        type: 'normal',
      }
    });
    expect(wrapper.vm.$props.type).to.equal('normal');
  });

  it('renders as list type correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        type: 'list',
      },
    });
    expect(wrapper.is('ul')).to.equal(true);
  });

  it('renders default type correctly', () => {
    const wrapper = mount(cdrRow);
    expect(wrapper.is('div')).to.equal(true);
  });

  it('sets cols props correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        cols: '1',
        colsMd: '2',
        colsLg: '2',
        colsXl: '2',
        colsXxl: '2',
      }
    });
    expect(wrapper.vm.$props.cols).to.equal('1');
    expect(wrapper.vm.$props.colsMd).to.equal('2');
    expect(wrapper.vm.$props.colsLg).to.equal('2');
    expect(wrapper.vm.$props.colsXl).to.equal('2');
    expect(wrapper.vm.$props.colsXxl).to.equal('2');
  });

  it('computes cols classes correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        cols: '1',
        colsMd: '2',
        colsLg: '2',
        colsXl: '2',
        colsXxl: '2',
      }
    });
    expect(wrapper.hasClass('cdr-row_row1')).to.equal(true);
    expect(wrapper.hasClass('cdr-row_row2@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-row_row2@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-row_row2@xl')).to.equal(true);
    expect(wrapper.hasClass('cdr-row_row2@xxl')).to.equal(true);
  });

  it('sets justify props correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        justify: 'center',
        justifyMd: 'center',
        justifyLg: 'center',
        justifyXl: 'center',
        justifyXxl: 'center',
      }
    });
    expect(wrapper.vm.$props.justify).to.equal('center');
    expect(wrapper.vm.$props.justifyMd).to.equal('center');
    expect(wrapper.vm.$props.justifyLg).to.equal('center');
    expect(wrapper.vm.$props.justifyXl).to.equal('center');
    expect(wrapper.vm.$props.justifyXxl).to.equal('center');
  });

  it('computes justify classes correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        justify: 'center',
        justifyMd: 'center',
        justifyLg: 'center',
        justifyXl: 'center',
        justifyXxl: 'center',
      }
    });
    expect(wrapper.hasClass('cdr-row--center')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--center@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--center@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--center@xl')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--center@xxl')).to.equal(true);
  });

  it('sets align props correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        align: 'top',
        alignMd: 'top',
        alignLg: 'top',
        alignXl: 'top',
        alignXxl: 'top',
      }
    });
    expect(wrapper.vm.$props.align).to.equal('top');
    expect(wrapper.vm.$props.alignMd).to.equal('top');
    expect(wrapper.vm.$props.alignLg).to.equal('top');
    expect(wrapper.vm.$props.alignXl).to.equal('top');
    expect(wrapper.vm.$props.alignXxl).to.equal('top');
  });

  it('computes align classes correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        align: 'top',
        alignMd: 'top',
        alignLg: 'top',
        alignXl: 'top',
        alignXxl: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-row--top')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--top@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--top@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--top@xl')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--top@xxl')).to.equal(true);
  });

  it('sets gutter props correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        gutter: 'none',
        gutterMd: 'none',
        gutterLg: 'none',
        gutterXl: 'none',
        gutterXxl: 'none',
      }
    });
    expect(wrapper.vm.$props.gutter).to.equal('none');
    expect(wrapper.vm.$props.gutterMd).to.equal('none');
    expect(wrapper.vm.$props.gutterLg).to.equal('none');
    expect(wrapper.vm.$props.gutterXl).to.equal('none');
    expect(wrapper.vm.$props.gutterXxl).to.equal('none');
  });

  it('computes gutter classes correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        gutter: 'none',
        gutterMd: 'none',
        gutterLg: 'none',
        gutterXl: 'none',
        gutterXxl: 'none',
      }
    });
    expect(wrapper.hasClass('cdr-row--gutter-none')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--gutter-none@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--gutter-none@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--gutter-none@xl')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--gutter-none@xxl')).to.equal(true);
  });

  it('sets vertical props correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        vertical: true,
        verticalMd: true,
        verticalLg: true,
        verticalXl: true,
        verticalXxl: true,
      }
    });
    expect(wrapper.vm.$props.vertical).to.equal(true);
    expect(wrapper.vm.$props.verticalMd).to.equal(true);
    expect(wrapper.vm.$props.verticalLg).to.equal(true);
    expect(wrapper.vm.$props.verticalXl).to.equal(true);
    expect(wrapper.vm.$props.verticalXxl).to.equal(true);
  });

  it('computes vertical classes correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        vertical: true,
        verticalMd: true,
        verticalLg: true,
        verticalXl: true,
        verticalXxl: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--column')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--column@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--column@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--column@xl')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--column@xxl')).to.equal(true);
  });

  it('sets wrap props correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        wrap: true,
        wrapMd: true,
        wrapLg: true,
        wrapXl: true,
        wrapXxl: true,
      }
    });
    expect(wrapper.vm.$props.wrap).to.equal(true);
    expect(wrapper.vm.$props.wrapMd).to.equal(true);
    expect(wrapper.vm.$props.wrapLg).to.equal(true);
    expect(wrapper.vm.$props.wrapXl).to.equal(true);
    expect(wrapper.vm.$props.wrapXxl).to.equal(true);
  });

  it('computes wrap classes correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        wrapMd: true,
        wrapLg: true,
        wrapXl: true,
        wrapXxl: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--wrap@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--wrap@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--wrap@xl')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--wrap@xxl')).to.equal(true);
  });

  it('sets nowrap props correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        nowrap: true,
        nowrapMd: true,
        nowrapLg: true,
        nowrapXl: true,
        nowrapXxl: true,
      }
    });
    expect(wrapper.vm.$props.nowrap).to.equal(true);
    expect(wrapper.vm.$props.nowrapMd).to.equal(true);
    expect(wrapper.vm.$props.nowrapLg).to.equal(true);
    expect(wrapper.vm.$props.nowrapXl).to.equal(true);
    expect(wrapper.vm.$props.nowrapXxl).to.equal(true);
  });

  it('computes nowrap classes correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        nowrap: true,
        nowrapMd: true,
        nowrapLg: true,
        nowrapXl: true,
        nowrapXxl: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--noWrap')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--noWrap@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--noWrap@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--noWrap@xl')).to.equal(true);
    expect(wrapper.hasClass('cdr-row--noWrap@xxl')).to.equal(true);
  });
});