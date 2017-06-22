import { mount } from 'avoriaz';
import cdrIcon from '@/components/icons/cdrIcon';

describe('cdrIcon.vue', () => {
  it('renders an svg', () => {
    const wrapper = mount(cdrIcon, {
      propsData: {
        url: '',
      }
    });
    expect(wrapper.element.tagName).to.equal('svg');
  });
});