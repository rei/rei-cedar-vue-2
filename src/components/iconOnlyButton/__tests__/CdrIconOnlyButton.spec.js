import { shallow } from '@vue/test-utils';
import CdrIconOnlyButton from 'componentsdir/iconOnlyButton/CdrIconOnlyButton';

describe('CdrIconButton.vue', () => {
  it('adds on-dark class', () => {
    const wrapper = shallow(CdrIconOnlyButton, {
      propsData: {
        onDark: true,
      }
    });

    expect(wrapper.classes()).toContain('cdr-icon-only-button--on-dark');
  });
});