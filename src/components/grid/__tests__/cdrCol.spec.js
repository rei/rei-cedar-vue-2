import { mount, shallow } from 'avoriaz';
import cdrCol from '@/components/grid/cdrCol';
import cdrRow from '@/components/grid/cdrRow';

describe('cdrCol.vue', () => {
  it('renders as list type correctly', () => {
    const wrapper = mount(cdrRow, {
      propsData: {
        type: 'list',
      },
      slots: {
        default: cdrCol
      }
    });
    expect(wrapper.vm.$slots.default[0].elm.tagName).to.equal('LI');
  });

  it('renders default correctly', () => {
    const wrapper = mount(cdrCol);
    expect(wrapper.is('div')).to.equal(true);
  });

  it('has the correct block class', () => {
    const wrapper = mount(cdrCol);
    expect(wrapper.hasClass('cdr-col')).to.equal(true);
  });

  it('sets span props correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        span: '1',
        spanMd: '2',
        spanLg: '2',
        spanSm: '2',
      }
    });
    expect(wrapper.vm.$props.span).to.equal('1');
    expect(wrapper.vm.$props.spanMd).to.equal('2');
    expect(wrapper.vm.$props.spanLg).to.equal('2');
    expect(wrapper.vm.$props.spanSm).to.equal('2');
  });

  it('computes span classes correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        span: '1',
        spanMd: '2',
        spanLg: '2',
        spanSm: '2',
      }
    });
    expect(wrapper.hasClass('cdr-col_span1')).to.equal(true);
    expect(wrapper.hasClass('cdr-col_span2@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-col_span2@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-col_span2@sm')).to.equal(true);
  });

  it('sets offsetLeft props correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetLeft: '1',
        offsetLeftMd: '2',
        offsetLeftLg: '2',
        offsetLeftSm: '2',
      }
    });
    expect(wrapper.vm.$props.offsetLeft).to.equal('1');
    expect(wrapper.vm.$props.offsetLeftMd).to.equal('2');
    expect(wrapper.vm.$props.offsetLeftLg).to.equal('2');
    expect(wrapper.vm.$props.offsetLeftSm).to.equal('2');
  });

  it('computes offsetLeft classes correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetLeft: '1',
        offsetLeftMd: '2',
        offsetLeftLg: '2',
        offsetLeftSm: '2',
      }
    });
    expect(wrapper.hasClass('cdr-col--offsetLeft1')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--offsetLeft2@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--offsetLeft2@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--offsetLeft2@sm')).to.equal(true);
  });

  it('sets offsetRight props correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetRight: '1',
        offsetRightMd: '2',
        offsetRightLg: '2',
        offsetRightSm: '2',
      }
    });
    expect(wrapper.vm.$props.offsetRight).to.equal('1');
    expect(wrapper.vm.$props.offsetRightMd).to.equal('2');
    expect(wrapper.vm.$props.offsetRightLg).to.equal('2');
    expect(wrapper.vm.$props.offsetRightSm).to.equal('2');
  });

  it('computes offsetRight classes correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetRight: '1',
        offsetRightMd: '2',
        offsetRightLg: '2',
        offsetRightSm: '2',
      }
    });
    expect(wrapper.hasClass('cdr-col--offsetRight1')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--offsetRight2@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--offsetRight2@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--offsetRight2@sm')).to.equal(true);
  });

  it('sets alignSelf props correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        alignSelf: 'top',
        alignSelfMd: 'top',
        alignSelfLg: 'top',
        alignSelfSm: 'top',
      }
    });
    expect(wrapper.vm.$props.alignSelf).to.equal('top');
    expect(wrapper.vm.$props.alignSelfMd).to.equal('top');
    expect(wrapper.vm.$props.alignSelfLg).to.equal('top');
    expect(wrapper.vm.$props.alignSelfSm).to.equal('top');
  });

  it('computes alignSelf classes correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        alignSelf: 'top',
        alignSelfMd: 'top',
        alignSelfLg: 'top',
        alignSelfSm: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-col--top')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--top@md')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--top@lg')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--top@sm')).to.equal(true);
  });

  it('sets hide props correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        hide: 'down',
        hideMd: 'down',
        hideLg: 'down',
        hideSm: 'down',
      }
    });
    expect(wrapper.vm.$props.hide).to.equal('down');
    expect(wrapper.vm.$props.hideMd).to.equal('down');
    expect(wrapper.vm.$props.hideLg).to.equal('down');
    expect(wrapper.vm.$props.hideSm).to.equal('down');
  });

  it('computes hide classes correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        hide: 'down',
        hideMd: 'down',
        hideLg: 'down',
        hideSm: 'down',
      }
    });
    expect(wrapper.hasClass('cdr-col--hide-down')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--hide@md-down')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--hide@lg-down')).to.equal(true);
    expect(wrapper.hasClass('cdr-col--hide@sm-down')).to.equal(true);
  });

  it('sets isRow prop correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        isRow: true,
      }
    });
    expect(wrapper.vm.$props.isRow).to.equal(true);
  });

  it('computes isRow class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        isRow: true,
      }
    });
    expect(wrapper.hasClass('cdr-row')).to.equal(true);
  });
});