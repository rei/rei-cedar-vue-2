import { shallowMount, mount } from '@vue/test-utils';
import CdrCol from 'componentdir/grid/CdrCol';
import CdrRow from 'componentdir/grid/CdrRow';

describe('CdrCol', () => {
  it('renders as list type correctly', () => {
    const wrapper = mount(CdrRow, {
      propsData: {
        type: 'list',
      },
      slots: {
        default: CdrCol
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders as list type correctly when isRow', () => {
    const wrapper = mount(CdrRow, {
      propsData: {
        type: 'list',
      },
      stubs: {
        'cdr-col': CdrCol,
      },
      slots: {
        default: ['<cdr-col is-row>column</cdr-col>']
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders default correctly', () => {
    const wrapper = mount(CdrCol);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has the correct block class', () => {
    const wrapper = shallowMount(CdrCol);
    expect(wrapper.classes()).toContain('cdr-col');
  });

  it('computes span classes correctly', () => {
    const wrapper = shallowMount(CdrCol, {
      propsData: {
        span: '1 2@sm 2@md 2@lg',
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
        offsetLeft: '1 2@sm 2@md 2@lg',
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
        offsetRight: '1 2@sm 2@md 2@lg',
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
        alignSelf: 'top top@sm top@md top@lg',
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