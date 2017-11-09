import { shallow, mount } from 'vue-test-utils';
import cdrCol from 'Components/column/cdrCol';
import cdrRow from 'Components/row/cdrRow';

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
    expect(wrapper.hasClass('cdr-col')).toBe(true);
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
    expect(wrapper.hasClass('cdr-col_span1')).toBe(true);
    expect(wrapper.hasClass('cdr-col_span2@md')).toBe(true);
    expect(wrapper.hasClass('cdr-col_span2@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-col_span2@sm')).toBe(true);
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
    expect(wrapper.hasClass('cdr-col--offsetLeft1')).toBe(true);
    expect(wrapper.hasClass('cdr-col--offsetLeft2@md')).toBe(true);
    expect(wrapper.hasClass('cdr-col--offsetLeft2@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-col--offsetLeft2@sm')).toBe(true);
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
    expect(wrapper.hasClass('cdr-col--offsetRight1')).toBe(true);
    expect(wrapper.hasClass('cdr-col--offsetRight2@md')).toBe(true);
    expect(wrapper.hasClass('cdr-col--offsetRight2@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-col--offsetRight2@sm')).toBe(true);
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
    expect(wrapper.hasClass('cdr-col--top')).toBe(true);
    expect(wrapper.hasClass('cdr-col--top@md')).toBe(true);
    expect(wrapper.hasClass('cdr-col--top@lg')).toBe(true);
    expect(wrapper.hasClass('cdr-col--top@sm')).toBe(true);
  });

  it('sets hide props correctly', () => {
    const wrapper = shallow(cdrCol, {
      propsData: {
        hide: 'down',
        hideMd: 'down',
        hideLg: 'down',
        hideSm: 'down',
      }
    });
    expect(wrapper.vm.$props.hide).toBe('down');
    expect(wrapper.vm.$props.hideMd).toBe('down');
    expect(wrapper.vm.$props.hideLg).toBe('down');
    expect(wrapper.vm.$props.hideSm).toBe('down');
  });

  it('computes hide classes correctly', () => {
    const wrapper = shallow(cdrCol, {
      propsData: {
        hide: 'down',
        hideMd: 'down',
        hideLg: 'down',
        hideSm: 'down',
      }
    });
    expect(wrapper.hasClass('cdr-col--hide-down')).toBe(true);
    expect(wrapper.hasClass('cdr-col--hide@md-down')).toBe(true);
    expect(wrapper.hasClass('cdr-col--hide@lg-down')).toBe(true);
    expect(wrapper.hasClass('cdr-col--hide@sm-down')).toBe(true);
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
    expect(wrapper.hasClass('cdr-row')).toBe(true);
  });
});