import { shallowMount, mount } from '@vue/test-utils';
import CdrAccordionGroup from 'componentdir/accordion/CdrAccordionGroup';
import CdrAccordion from '../CdrAccordion';

const propsData = {
  id: 'test',
  label: 'A label',
  compact: false,
  borderAligned: false,
};

describe('CdrAccordionGroup', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(CdrAccordionGroup, {
      stubs: {
        'cdr-accordion': CdrAccordion,
      },
      slots: {
        default: [
          '<cdr-accordion id="tab1" label="label1" level="2"/>',
          '<cdr-accordion id="tab2" label="label2" level="2"/>'
        ]
      },
    });
    expect(wrapper.element).toMatchSnapshot()
  });
  
  it('has correct a11y', () => {
    const wrapper = mount(CdrAccordionGroup, {
      stubs: {
        'cdr-accordion': CdrAccordion,
      },
      slots: {
        default: [
          '<cdr-accordion id="tab1" label="label1" level="2"/>',
          '<cdr-accordion id="tab2" label="label2" level="2"/>',
          '<cdr-accordion id="tab3" label="label3" level="2"/>',
        ]
      },
      attachToDocument: true,
    });

    expect(wrapper.is('ul')).toBe(true);
    /* keyboard nav tests
      `focusin` doesn't fire outside of the browser environment so it's faked by just doing the logic
      manually instead with setData. The proper focus logic is still checked via document.activeElement
    */
    const buttons = wrapper.vm.accordionButtons;
    // Up (first to last)
    wrapper.trigger('keydown', { key: 'ArrowUp' });
    wrapper.setData({ currentIdx: 2 });
    expect(buttons[2]).toBe(document.activeElement);
    // Down (last to first)
    wrapper.trigger('keydown', { key: 'ArrowDown' });
    wrapper.setData({ currentIdx: 0 });
    expect(buttons[0]).toBe(document.activeElement);
    // Down
    wrapper.trigger('keydown', { key: 'ArrowDown' });
    wrapper.setData({ currentIdx: 1 });
    expect(buttons[1]).toBe(document.activeElement);
    // Up
    wrapper.trigger('keydown', { key: 'ArrowUp' });
    wrapper.setData({ currentIdx: 0 });
    expect(buttons[0]).toBe(document.activeElement);
    // End
    wrapper.trigger('keydown', { key: 'End' });
    wrapper.setData({ currentIdx: 2 });
    expect(buttons[2]).toBe(document.activeElement);
    // Home
    wrapper.trigger('keydown', { key: 'Home' });
    wrapper.setData({ currentIdx: 0 });
    expect(buttons[0]).toBe(document.activeElement);
  });
});