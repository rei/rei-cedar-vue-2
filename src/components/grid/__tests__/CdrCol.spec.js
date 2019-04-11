import { shallowMount, mount } from '@vue/test-utils';
import CdrCol from 'componentsdir/grid/CdrCol';
import CdrRow from 'componentsdir/grid/CdrRow';

describe('CdrCol.vue', () => {
  it('renders as list type correctly', () => {
    const wrapper = shallowMount(CdrRow, {
      propsData: {
        type: 'list',
      },
      slots: {
        default: CdrCol
      }
    });
    expect(wrapper.vm.$slots.default[0].elm.tagName).toBe('LI');
  });

  it('renders default correctly', () => {
    const wrapper = shallowMount(CdrCol);
    expect(wrapper.is('div')).toBe(true);
  });

  it('has the correct block class', () => {
    const wrapper = shallowMount(CdrCol);
    expect(wrapper.classes()).toContain('cdr-col');
  });

  it('computes span classes correctly', () => {
    const wrapper = shallowMount(CdrCol, {
      propsData: {
        span: '1 2@breakpoint--sm 2@breakpoint--md 2@breakpoint--lg',
      }
    });
    expect(wrapper.classes()).toContain('cdr-col_span1');
    expect(wrapper.classes()).toContain('cdr-col_span2@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-col_span2@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-col_span2@breakpoint--sm');
  });

  it('computes offsetLeft classes correctly', () => {
    const wrapper = shallowMount(CdrCol, {
      propsData: {
        offsetLeft: '1 2@breakpoint--sm 2@breakpoint--md 2@breakpoint--lg',
      }
    });
    expect(wrapper.classes()).toContain('cdr-col--offsetLeft1');
    expect(wrapper.classes()).toContain('cdr-col--offsetLeft2@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-col--offsetLeft2@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-col--offsetLeft2@breakpoint--sm');
  });

  it('computes offsetRight classes correctly', () => {
    const wrapper = shallowMount(CdrCol, {
      propsData: {
        offsetRight: '1 2@breakpoint--sm 2@breakpoint--md 2@breakpoint--lg',
      }
    });
    expect(wrapper.classes()).toContain('cdr-col--offsetRight1');
    expect(wrapper.classes()).toContain('cdr-col--offsetRight2@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-col--offsetRight2@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-col--offsetRight2@breakpoint--sm');
  });

  it('computes alignSelf classes correctly', () => {
    const wrapper = shallowMount(CdrCol, {
      propsData: {
        alignSelf: 'top top@breakpoint--sm top@breakpoint--md top@breakpoint--lg',
      }
    });
    expect(wrapper.classes()).toContain('cdr-col--top');
    expect(wrapper.classes()).toContain('cdr-col--top@breakpoint--md');
    expect(wrapper.classes()).toContain('cdr-col--top@breakpoint--lg');
    expect(wrapper.classes()).toContain('cdr-col--top@breakpoint--sm');
  });

  it('computes isRow class correctly', () => {
    const wrapper = mount(CdrCol, {
      propsData: {
        isRow: true,
      }
    });
    expect(wrapper.classes()).toContain('cdr-row');
  });
});