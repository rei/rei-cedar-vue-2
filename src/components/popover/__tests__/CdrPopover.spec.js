import { mount } from '@vue/test-utils';
import CdrPopover from 'componentdir/popover/CdrPopover';

describe('CdrPopover', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrPopover, {
      propsData: {
        id: 'popover-test',
      },
      slots: {
        trigger: '<button id="popover-trigger"></button>',
        default: 'popover content',
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('sets aria properties on trigger', () => {
    const wrapper = mount(CdrPopover, {
      propsData: {
        id: 'popover-test',
      },
      slots: {
        trigger: '<button id="popover-trigger"></button>'
      }
    });
    expect(wrapper.find('#popover-trigger').attributes('aria-controls')).toBe('popover-test');
  });

  it('sets aria expanded on popup', async (done) => {
    const wrapper = mount(CdrPopover, {
      propsData: {
        id: 'popover-test',
      },
      slots: {
        trigger: '<button id="popover-trigger"></button>'
      }
    });
    expect(wrapper.find('#popover-test').attributes('aria-expanded')).toBe('false');
    wrapper.find('#popover-trigger').trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('#popover-test').attributes('aria-expanded')).toBe('true');
      done();
    });
  });
});
