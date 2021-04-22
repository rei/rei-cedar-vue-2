import { h } from 'vue';
import { mount } from '../../../../test/vue-jest-style-workaround.js';

import CdrChipGroup from 'componentdir/chip/CdrChipGroup';
import CdrChip from 'componentdir/chip/CdrChip';

// TODO: VTU currently doesn't allow array passed into slots

describe('CdrChipGroup', () => {
  xit('renders correctly', () => {
    const wrapper = mount(CdrChipGroup, {
      props: {
        label: 'test',
      },
      slots: {
        default: [
          h(CdrChip, 'chip 1', {attrs: {'aria-checked': true, tabindex: 0}}),
          h(CdrChip, 'chip 2', {attrs: {'aria-checked': true, tabindex: -1}}),
        ]
      },
    });
    expect(wrapper.element).toMatchSnapshot()
  });

  xit('renders correctly with label visible', () => {
    const wrapper = mount(CdrChipGroup, {
      stubs: {
        'cdr-chip': CdrChip,
      },
      props: {
        label: 'test',
        hideLabel: false,
      },
      slots: {
        default: [
          '<cdr-chip aria-checked="true" tabindex="0" role="radio">chip 1</cdr-chip>',
          '<cdr-chip aria-checked="false" tabindex="-1" role="radio">chip 2</cdr-chip>'
        ]
      },
    });
    expect(wrapper.element).toMatchSnapshot()
  });

  xit('renders label slot', () => {
    const wrapper = mount(CdrChipGroup, {
      stubs: {
        'cdr-chip': CdrChip,
      },
      props: {
        label: 'test',
        hideLabel: false,
      },
      slots: {
        default: [
          '<cdr-chip aria-checked="true" tabindex="0" role="radio">chip 1</cdr-chip>',
          '<cdr-chip aria-checked="false" tabindex="-1" role="radio">chip 2</cdr-chip>'
        ],
        label: '<div>hey im overriding here!!!</div>'
      },
    });
    expect(wrapper.element).toMatchSnapshot()
  });

  xit('sets current index on mount', () => {
    const wrapper = mount(CdrChipGroup, {
      stubs: {
        'cdr-chip': CdrChip,
      },
      props: {
        label: 'test',
      },
      slots: {
        default: [
          '<cdr-chip aria-checked="false" tabindex="-1" role="radio">chip 1</cdr-chip>',
          '<cdr-chip aria-checked="true" tabindex="0" role="radio">chip 2</cdr-chip>'
        ]
      },
    });
    expect(wrapper.vm.currentIdx).toBe(1);
  });

  xit('has correct a11y', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(CdrChipGroup, {
      stubs: {
        'cdr-chip': CdrChip,
      },
      props: {
        label: 'test',
      },
      slots: {
        default: [
          '<cdr-chip aria-checked="true" tabindex="0" role="radio">chip 1</cdr-chip>',
          '<cdr-chip aria-checked="false" tabindex="-1" role="radio">chip 2</cdr-chip>',
          '<cdr-chip aria-checked="false" tabindex="-1" role="radio">chip 3</cdr-chip>'
        ]
      },
      attachTo: elem,
    });

    /* keyboard nav tests
      `focusin` doesn't fire outside of the browser environment so it's faked by just doing the logic
      manually instead with setData. The proper focus logic is still checked via document.activeElement
    */
  //  TODO: can no longer set data on component, can we trigger focusin on specific elements?
    const chips = wrapper.vm.chips;
    // Up (first to last)
    wrapper.trigger('keydown', { key: 'ArrowUp' });
    // wrapper.setData({ currentIdx: 2 });
    await wrapper.vm.$nextTick();
    expect(chips[2]).toBe(document.activeElement);
    // Down (last to first)
    wrapper.trigger('keydown', { key: 'ArrowDown' });
    // wrapper.setData({ currentIdx: 0 });
    await wrapper.vm.$nextTick();
    expect(chips[0]).toBe(document.activeElement);
    // Down
    wrapper.trigger('keydown', { key: 'ArrowDown' });
    // wrapper.setData({ currentIdx: 1 });
    await wrapper.vm.$nextTick();
    expect(chips[1]).toBe(document.activeElement);
    // Up
    wrapper.trigger('keydown', { key: 'ArrowUp' });
    // wrapper.setData({ currentIdx: 0 });
    await wrapper.vm.$nextTick();
    expect(chips[0]).toBe(document.activeElement);
    // End
    wrapper.trigger('keydown', { key: 'End' });
    // wrapper.setData({ currentIdx: 2 });
    await wrapper.vm.$nextTick();
    expect(chips[2]).toBe(document.activeElement);
    // Home
    wrapper.trigger('keydown', { key: 'Home' });
    // wrapper.setData({ currentIdx: 0 });
    await wrapper.vm.$nextTick();
    expect(chips[0]).toBe(document.activeElement);
    wrapper.destroy();
  });
});
