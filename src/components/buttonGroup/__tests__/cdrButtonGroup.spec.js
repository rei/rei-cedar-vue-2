import { mount } from 'vue-test-utils';
import cdrButtonGroup from 'Components/buttonGroup/cdrButtonGroup';

describe('cdrButtonGroup.vue', () => {
  it('has the right class', () => {
    const wrapper = mount(cdrButtonGroup);
    expect(wrapper.hasClass('cdr-button-group')).to.equal(true);
  });
});