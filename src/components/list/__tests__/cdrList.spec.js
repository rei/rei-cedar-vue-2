import { mount } from 'avoriaz';
import cdrList from 'Components/list/cdrList';

describe('cdrList.vue', () => {
  it('sets type prop correctly', () => {
    const wrapper = mount(cdrList, {
      propsData: {
        type: 'ol',
      }
    });
    expect(wrapper.vm.$props.type).to.equal('ol');
  });

  it('sets default type prop correctly', () => {
    const wrapper = mount(cdrList);
    expect(wrapper.vm.$props.type).to.equal('ul');
  });

  it('renders a ul', () => {
    const wrapper = mount(cdrList);
    expect(wrapper.is('ul')).to.equal(true);
  });

  it('renders an ol', () => {
    const wrapper = mount(cdrList, {
      propsData: {
        type: 'ol',
      }
    });
    expect(wrapper.is('ol')).to.equal(true);
  });
});