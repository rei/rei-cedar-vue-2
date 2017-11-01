import { mount } from 'avoriaz';
import cdrHeading from 'Components/heading/cdrHeading';

describe('cdrHeading.vue', () => {
  it('renders an h1', () => {
    const wrapper = mount(cdrHeading, {
      propsData: {
        level: '1',
      }
    });
    expect(wrapper.is('h1')).to.equal(true);
  });

  it('renders an h2', () => {
    const wrapper = mount(cdrHeading, {
      propsData: {
        level: '2',
      }
    });
    expect(wrapper.is('h2')).to.equal(true);
  });

  it('renders an h3', () => {
    const wrapper = mount(cdrHeading, {
      propsData: {
        level: '3',
      }
    });
    expect(wrapper.is('h3')).to.equal(true);
  });

  it('renders an h4', () => {
    const wrapper = mount(cdrHeading, {
      propsData: {
        level: '4',
      }
    });
    expect(wrapper.is('h4')).to.equal(true);
  });

  it('renders an h5', () => {
    const wrapper = mount(cdrHeading, {
      propsData: {
        level: '5',
      }
    });
    expect(wrapper.is('h5')).to.equal(true);
  });

  it('renders an h6', () => {
    const wrapper = mount(cdrHeading, {
      propsData: {
        level: '6',
      }
    });
    expect(wrapper.is('h6')).to.equal(true);
  });

  it('sets level prop correctly', () => {
    const wrapper = mount(cdrHeading, {
      propsData: {
        level: '6',
      }
    });
    expect(wrapper.vm.$props.level).to.equal('6');
  });
});