import { shallow, mount } from '@vue/test-utils';
import cdrCol from 'componentsdir/column/cdrCol';
import cdrRow from 'componentsdir/row/cdrRow';

describe('cdrCol.vue', () => {
  it('renders as list type correctly', () => {
    const wrapper = shallow(cdrRow, {
      propsData: {
        type: 'list',
      },
      slots: {
        default: cdrCol
      }
    });
    expect(wrapper.vm.$slots.default[0].elm.tagName).toBe('LI');
  });

  it('renders default correctly', () => {
    const wrapper = shallow(cdrCol);
    expect(wrapper.is('div')).toBe(true);
  });

  it('has the correct block class', () => {
    const wrapper = shallow(cdrCol);
    expect(wrapper.classes()).toContain('cdr-col');
  });

  it('sets span props correctly', () => {
    const wrapper = shallow(cdrCol, {
      propsData: {
        span: '1',
        spanMd: '2',
        spanLg: '2',
        spanSm: '2',
      }
    });
    expect(wrapper.vm.$props.span).toBe('1');
    expect(wrapper.vm.$props.spanMd).toBe('2');
    expect(wrapper.vm.$props.spanLg).toBe('2');
    expect(wrapper.vm.$props.spanSm).toBe('2');
  });

  it('computes span classes correctly', () => {
    const wrapper = shallow(cdrCol, {
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

  it('sets offsetLeft props correctly', () => {
    const wrapper = shallow(cdrCol, {
      propsData: {
        offsetLeft: '1',
        offsetLeftMd: '2',
        offsetLeftLg: '2',
        offsetLeftSm: '2',
      }
    });
    expect(wrapper.vm.$props.offsetLeft).toBe('1');
    expect(wrapper.vm.$props.offsetLeftMd).toBe('2');
    expect(wrapper.vm.$props.offsetLeftLg).toBe('2');
    expect(wrapper.vm.$props.offsetLeftSm).toBe('2');
  });

  it('computes offsetLeft classes correctly', () => {
    const wrapper = shallow(cdrCol, {
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

  it('sets offsetRight props correctly', () => {
    const wrapper = shallow(cdrCol, {
      propsData: {
        offsetRight: '1',
        offsetRightMd: '2',
        offsetRightLg: '2',
        offsetRightSm: '2',
      }
    });
    expect(wrapper.vm.$props.offsetRight).toBe('1');
    expect(wrapper.vm.$props.offsetRightMd).toBe('2');
    expect(wrapper.vm.$props.offsetRightLg).toBe('2');
    expect(wrapper.vm.$props.offsetRightSm).toBe('2');
  });

  it('computes offsetRight classes correctly', () => {
    const wrapper = shallow(cdrCol, {
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

  it('sets alignSelf props correctly', () => {
    const wrapper = shallow(cdrCol, {
      propsData: {
        alignSelf: 'top',
        alignSelfMd: 'top',
        alignSelfLg: 'top',
        alignSelfSm: 'top',
      }
    });
    expect(wrapper.vm.$props.alignSelf).toBe('top');
    expect(wrapper.vm.$props.alignSelfMd).toBe('top');
    expect(wrapper.vm.$props.alignSelfLg).toBe('top');
    expect(wrapper.vm.$props.alignSelfSm).toBe('top');
  });

  it('computes alignSelf classes correctly', () => {
    const wrapper = shallow(cdrCol, {
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

  it('sets isRow prop correctly', () => {
    const wrapper = shallow(cdrCol, {
      propsData: {
        isRow: true,
      }
    });
    expect(wrapper.vm.$props.isRow).toBe(true);
  });

  it('computes isRow class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        isRow: true,
      }
    });
    expect(wrapper.classes()).toContain('cdr-row');
  });
});