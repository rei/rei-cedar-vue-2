import { shallowMount } from '@vue/test-utils';
import CdrIconOnlyButton from 'componentsdir/iconOnlyButton/CdrIconOnlyButton';

describe('CdrIconButton.vue', () => {
  it('adds on-dark class', () => {
    const wrapper = shallowMount(CdrIconOnlyButton, {
      propsData: {
        onDark: true,
      }
    });

    expect(wrapper.classes()).toContain('cdr-icon-only-button--on-dark');
  });
});