import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrTooltip from 'componentdir/tooltip/CdrTooltip';

describe('CdrTooltip', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrTooltip, {
      propsData: {
        id: 'tooltip-test',
      },
      slots: {
        trigger: '<button id="tooltip-trigger"></button>',
        default: 'tooltip content',
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });


  it('emits event when opened', () => {
    const wrapper = mount(CdrTooltip, {
      propsData: {
        id: 'tooltip-test',
      },
      slots: {
        trigger: '<button id="tooltip-trigger"></button>'
      }
    });
    wrapper.vm.openTooltip(true);
    expect(wrapper.emitted('opened')).toBeTruthy();
  });

  it('emits event when closed', async (done) => {
    const wrapper = mount(CdrTooltip, {
      propsData: {
        id: 'tooltip-test',
      },
      slots: {
        trigger: '<button id="tooltip-trigger"></button>'
      }
    });
    wrapper.vm.closeTooltip(true);
    setTimeout(() => {
      expect(wrapper.emitted('closed')).toBeTruthy();
      done();
    }, 251)
  });

  it('sets aria properties on trigger', () => {
    const wrapper = mount(CdrTooltip, {
      propsData: {
        id: 'tooltip-test',
      },
      slots: {
        trigger: '<button id="tooltip-trigger"></button>'
      }
    });
    expect(wrapper.find('#tooltip-trigger').attributes('aria-describedby')).toBe('tooltip-test');
  });

  it('binds contentClass to content', () => {
    const wrapper = mount(CdrTooltip, {
      propsData: {
        id: 'tooltip-test',
        contentClass: 'tooltip-override',
      },
      slots: {
        trigger: '<button id="tooltip-trigger"></button>'
      }
    });
    expect(wrapper.find('.tooltip-override').exists()).toBe(true);
  });
});
