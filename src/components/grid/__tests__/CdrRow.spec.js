import { shallowMount } from '@vue/test-utils';
import { CdrRow } from 'distdir/cedar.esm.js';

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
        cols: '1 2@sm 2@md 2@lg',
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
        justify: 'center center@sm center@md center@lg',
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
        align: 'top top@sm top@md top@lg',
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
        gutter: 'none none@sm none@md none@lg',
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
        vertical: "vertical vertical@sm vertical@md vertical@lg",
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--vertical');
    expect(wrapper.classes()).toContain('cdr-row--vertical@md');
    expect(wrapper.classes()).toContain('cdr-row--vertical@lg');
    expect(wrapper.classes()).toContain('cdr-row--vertical@sm');
  });

  it('computes wrap classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        wrap: "wrap@sm wrap@md wrap@lg",
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--wrap@sm');
    expect(wrapper.classes()).toContain('cdr-row--wrap@md');
    expect(wrapper.classes()).toContain('cdr-row--wrap@lg');
  });

  it('computes nowrap classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        nowrap: "nowrap nowrap@sm nowrap@md nowrap@lg",
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--nowrap');
    expect(wrapper.classes()).toContain('cdr-row--nowrap@md');
    expect(wrapper.classes()).toContain('cdr-row--nowrap@lg');
    expect(wrapper.classes()).toContain('cdr-row--nowrap@sm');
  });
});