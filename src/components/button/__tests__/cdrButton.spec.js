import { mount } from 'avoriaz';
import cdrButton from '@/components/button/cdrButton';

let testTotal = 1;
function addOne() {
  testTotal++;
}

describe('cdrButton.vue', () => {
  it('renders a button', () => {
    const wrapper = mount(cdrButton);
    expect(wrapper.is('button')).to.equal(true);
  });

  it('sets default type prop correctly', () => {
    const wrapper = mount(cdrButton);
    expect(wrapper.vm.type).to.equal('button');
  });

  it('sets type prop correctly', () => {
    const wrapper = mount(cdrButton, {
      propsData: {
        type: 'reset',
      },
    });
    expect(wrapper.vm.type).to.equal('reset');
  });

  it('renders type attr correctly', () => {
    const wrapper = mount(cdrButton, {
      propsData: {
        type: 'reset',
      },
    });
    expect(wrapper.hasAttribute('type', 'reset')).to.equal(true);
  });

  it('click function triggers correctly', () => {
    const wrapper = mount(cdrButton, {
      propsData: {
        onClick: addOne(),
      },
    });
    wrapper.trigger('click');
    expect(testTotal).to.equal(2);
  });

    it('computes base class correctly', () => {
    const wrapper = mount(cdrButton, {
      propsData: {
        modifier: 'primary',
      },
    });
    expect(wrapper.vm.baseClass).to.equal('cdr-button');
  });

  it('computes button base class correctly', () => {
    const wrapper = mount(cdrButton, {
      propsData: {
        modifier: 'primary, link',
      },
    });
    expect(wrapper.vm.baseClass).to.equal('cdr-link');
  });
});