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
        cols: '1 2@breakpoint--sm 2@breakpoint--md 2@breakpoint--lg',
      }
    });
    expect(wrapper.classes()).toContain('cdr-row_row1');
    expect(wrapper.classes()).toContain('cdr-row_row2@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-row_row2@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-row_row2@breakpoint--sm');
  });

  it('computes justify classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        justify: 'center center@breakpoint--sm center@breakpoint--md center@breakpoint--lg',
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--center');
    expect(wrapper.classes()).toContain('cdr-row--center@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-row--center@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-row--center@breakpoint--sm');
  });

  it('computes align classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        align: 'top top@breakpoint--sm top@breakpoint--md top@breakpoint--lg',
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--top');
    expect(wrapper.classes()).toContain('cdr-row--top@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-row--top@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-row--top@breakpoint--sm');
  });

  it('computes gutter classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        gutter: 'none none@breakpoint--sm none@breakpoint--md none@breakpoint--lg',
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--gutter-none');
    expect(wrapper.classes()).toContain('cdr-row--gutter-none@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-row--gutter-none@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-row--gutter-none@breakpoint--sm');
  });

  it('computes vertical classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        vertical: "vertical vertical@breakpoint--sm vertical@breakpoint--md vertical@breakpoint--lg",
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--vertical');
    expect(wrapper.classes()).toContain('cdr-row--vertical@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-row--vertical@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-row--vertical@breakpoint--sm');
  });

  it('computes wrap classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        wrap: "wrap@breakpoint--sm wrap@breakpoint--md wrap@breakpoint--lg",
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--wrap@breakpoint--sm');
    expect(wrapper.classes()).toContain('cdr-row--wrap@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-row--wrap@breakpoint--lg');
  });

  it('computes nowrap classes correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        nowrap: "nowrap nowrap@breakpoint--sm nowrap@breakpoint--md nowrap@breakpoint--lg",
      }
    });
    expect(wrapper.classes()).toContain('cdr-row--nowrap');
    expect(wrapper.classes()).toContain('cdr-row--nowrap@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-row--nowrap@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-row--nowrap@breakpoint--sm');
  });
});