import { mount, shallow } from 'avoriaz';
import cdrRow from '@/components/layouts/cdrRow';

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

  it('has the correct block class', () => {
    const wrapper = mount(cdrRow);
    expect(wrapper.hasClass('cdr-row')).to.equal(true);
  });

  it('sets cols prop correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        cols: '1',
      }
    });
    expect(wrapper.vm.$props.cols).to.equal('1');
  });

  it('computes cols class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        cols: '1',
      }
    });
    expect(wrapper.hasClass('cdr-row_row1')).to.equal(true);
  });

  it('computes responsive cols class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        colsMd: '1',
      }
    });
    expect(wrapper.hasClass('cdr-row_row1@md')).to.equal(true);
  });

  it('sets justify prop correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        justify: 'center',
      }
    });
    expect(wrapper.vm.$props.justify).to.equal('center');
  });

  it('computes justify class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        justify: 'center',
      }
    });
    expect(wrapper.hasClass('cdr-row--center')).to.equal(true);
  });

  it('computes responsive justify class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        justifyMd: 'center',
      }
    });
    expect(wrapper.hasClass('cdr-row--center@md')).to.equal(true);
  });

  it('sets align prop correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        align: 'top',
      }
    });
    expect(wrapper.vm.$props.align).to.equal('top');
  });

  it('computes align class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        align: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-row--top')).to.equal(true);
  });

  it('computes responsive align class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        alignMd: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-row--top@md')).to.equal(true);
  });

  it('sets gutter prop correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        gutter: 'none',
      }
    });
    expect(wrapper.vm.$props.gutter).to.equal('none');
  });

  it('computes gutter class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        gutter: 'none',
      }
    });
    expect(wrapper.hasClass('cdr-row--gutter-none')).to.equal(true);
  });

  it('computes responsive gutter class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        gutterMd: 'none',
      }
    });
    expect(wrapper.hasClass('cdr-row--gutter-none@md')).to.equal(true);
  });

  it('sets vertical prop correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        vertical: true,
      }
    });
    expect(wrapper.vm.$props.vertical).to.equal(true);
  });

  it('computes vertical class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        vertical: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--column')).to.equal(true);
  });

  it('computes responsive vertical class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        verticalMd: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--column@md')).to.equal(true);
  });

  it('sets wrap prop correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        wrap: true,
      }
    });
    expect(wrapper.vm.$props.wrap).to.equal(true);
  });

  it('computes responsive wrap class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        wrapMd: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--wrap@md')).to.equal(true);
  });

  it('sets nowrap prop correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        nowrap: true,
      }
    });
    expect(wrapper.vm.$props.nowrap).to.equal(true);
  });

  it('computes nowrap class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        nowrap: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--noWrap')).to.equal(true);
  });

  it('computes responsive nowrap class correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        nowrapMd: true,
      }
    });
    expect(wrapper.hasClass('cdr-row--noWrap@md')).to.equal(true);
  });
});