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
        span: '1',
        spanMd: '2',
        spanLg: '2',
        spanSm: '2',
      }
    });
    expect(wrapper.classes()).toContain('cdr-col_span1');
    expect(wrapper.classes()).toContain('cdr-col_span2@md');
    expect(wrapper.classes()).toContain('cdr-col_span2@lg');
    expect(wrapper.classes()).toContain('cdr-col_span2@sm');
  });

  it('computes offsetLeft classes correctly', () => {
    const wrapper = shallowMount(CdrCol, {
      propsData: {
        offsetLeft: '1',
        offsetLeftMd: '2',
        offsetLeftLg: '2',
        offsetLeftSm: '2',
      }
    });
    expect(wrapper.classes()).toContain('cdr-col--offsetLeft1');
    expect(wrapper.classes()).toContain('cdr-col--offsetLeft2@md');
    expect(wrapper.classes()).toContain('cdr-col--offsetLeft2@lg');
    expect(wrapper.classes()).toContain('cdr-col--offsetLeft2@sm');
  });

  it('computes offsetRight classes correctly', () => {
    const wrapper = shallowMount(CdrCol, {
      propsData: {
        offsetRight: '1',
        offsetRightMd: '2',
        offsetRightLg: '2',
        offsetRightSm: '2',
      }
    });
    expect(wrapper.classes()).toContain('cdr-col--offsetRight1');
    expect(wrapper.classes()).toContain('cdr-col--offsetRight2@md');
    expect(wrapper.classes()).toContain('cdr-col--offsetRight2@lg');
    expect(wrapper.classes()).toContain('cdr-col--offsetRight2@sm');
  });

  it('computes alignSelf classes correctly', () => {
    const wrapper = shallowMount(CdrCol, {
      propsData: {
        alignSelf: 'top',
        alignSelfMd: 'top',
        alignSelfLg: 'top',
        alignSelfSm: 'top',
      }
    });
    expect(wrapper.classes()).toContain('cdr-col--top');
    expect(wrapper.classes()).toContain('cdr-col--top@md');
    expect(wrapper.classes()).toContain('cdr-col--top@lg');
    expect(wrapper.classes()).toContain('cdr-col--top@sm');
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