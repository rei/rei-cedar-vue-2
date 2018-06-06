import { shallowMount } from '@vue/test-utils';
import CdrRow from 'componentsdir/grid/CdrRow';

describe('CdrRow.vue', () => {
  it('sets type prop correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        type: 'normal',
      }
    });
    expect(wrapper.vm.$props.type).toBe('normal');
  });

  it('renders as list type correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        type: 'list',
      },
    });
    expect(wrapper.is('ul')).toBe(true);
  });

  it('renders default type correctly', () => {
    const wrapper = shallowMount(CdrRow);
    expect(wrapper.is('div')).toBe(true);
  });

  it('computes cols classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        cols: '1',
        colsMd: '2',
        colsLg: '2',
        colsSm: '2',
      }
    });
    expect(wrapper.classes()).toContain('cdr-row_row1');
    expect(wrapper.classes()).toContain('cdr-row_row2@md');
    expect(wrapper.classes()).toContain('cdr-row_row2@lg');
    expect(wrapper.classes()).toContain('cdr-row_row2@sm');
  });

  it('computes justify classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        justify: 'center',
        justifyMd: 'center',
        justifyLg: 'center',
        justifySm: 'center',
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--center');
    expect(wrapper.classes()).toContain('cdr-row--center@md');
    expect(wrapper.classes()).toContain('cdr-row--center@lg');
    expect(wrapper.classes()).toContain('cdr-row--center@sm');
  });

  it('computes align classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        align: 'top',
        alignMd: 'top',
        alignLg: 'top',
        alignSm: 'top',
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--top');
    expect(wrapper.classes()).toContain('cdr-row--top@md');
    expect(wrapper.classes()).toContain('cdr-row--top@lg');
    expect(wrapper.classes()).toContain('cdr-row--top@sm');
  });

  it('computes gutter classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        gutter: 'none',
        gutterMd: 'none',
        gutterLg: 'none',
        gutterSm: 'none',
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--gutter-none');
    expect(wrapper.classes()).toContain('cdr-row--gutter-none@md');
    expect(wrapper.classes()).toContain('cdr-row--gutter-none@lg');
    expect(wrapper.classes()).toContain('cdr-row--gutter-none@sm');
  });

  it('computes vertical classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        vertical: true,
        verticalMd: true,
        verticalLg: true,
        verticalSm: true,
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--column');
    expect(wrapper.classes()).toContain('cdr-row--column@md');
    expect(wrapper.classes()).toContain('cdr-row--column@lg');
    expect(wrapper.classes()).toContain('cdr-row--column@sm');
  });

  it('computes wrap classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        wrapMd: true,
        wrapLg: true,
        wrapSm: true,
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--wrap@md');
    expect(wrapper.classes()).toContain('cdr-row--wrap@lg');
    expect(wrapper.classes()).toContain('cdr-row--wrap@sm');
  });

  it('computes nowrap classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        nowrap: true,
        nowrapMd: true,
        nowrapLg: true,
        nowrapSm: true,
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--noWrap');
    expect(wrapper.classes()).toContain('cdr-row--noWrap@md');
    expect(wrapper.classes()).toContain('cdr-row--noWrap@lg');
    expect(wrapper.classes()).toContain('cdr-row--noWrap@sm');
  });
});