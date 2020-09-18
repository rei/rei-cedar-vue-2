import { mount } from '@vue/test-utils';
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
});
