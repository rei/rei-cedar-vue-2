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

  it('sets span prop correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        span: '1',
      }
    });
    expect(wrapper.vm.$props.span).to.equal('1');
  });

  it('computes span class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        span: '1',
      }
    });
    expect(wrapper.hasClass('cdr-col_span1')).to.equal(true);
  });

  it('computes responsive span class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        spanMd: '1',
      }
    });
    expect(wrapper.hasClass('cdr-col_span1@md')).to.equal(true);
  });

  it('sets offsetLeft prop correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetLeft: '1',
      }
    });
    expect(wrapper.vm.$props.offsetLeft).to.equal('1');
  });

  it('computes offsetLeft class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetLeft: '1',
      }
    });
    expect(wrapper.hasClass('cdr-col--offsetLeft1')).to.equal(true);
  });

  it('computes responsive offsetLeft class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetLeftLg: '1',
      }
    });
    expect(wrapper.hasClass('cdr-col--offsetLeft1@lg')).to.equal(true);
  });

  it('sets offsetRight prop correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetRight: '1',
      }
    });
    expect(wrapper.vm.$props.offsetRight).to.equal('1');
  });

  it('computes offsetRight class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetRight: '1',
      }
    });
    expect(wrapper.hasClass('cdr-col--offsetRight1')).to.equal(true);
  });

  it('computes responsive offsetRight class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        offsetRightLg: '1',
      }
    });
    expect(wrapper.hasClass('cdr-col--offsetRight1@lg')).to.equal(true);
  });

  it('sets alignSelf prop correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        alignSelf: 'top',
      }
    });
    expect(wrapper.vm.$props.alignSelf).to.equal('top');
  });

  it('computes alignSelf class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        alignSelf: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-col--top')).to.equal(true);
  });

  it('computes responsive alignSelf class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        alignSelfLg: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-col--top@lg')).to.equal(true);
  });

  it('sets hide prop correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        hide: 'up',
      }
    });
    expect(wrapper.vm.$props.hide).to.equal('up');
  });

  it('computes hide class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        hide: 'up',
      }
    });
    expect(wrapper.hasClass('cdr-col--hide-up')).to.equal(true);
  });

  it('computes responsive hide class correctly', () => {
    const wrapper = mount(cdrCol, {
      propsData: {
        hideLg: 'up',
      }
    });
    expect(wrapper.hasClass('cdr-col--hide@lg-up')).to.equal(true);
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