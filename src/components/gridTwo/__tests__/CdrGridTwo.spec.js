import { shallowMount } from '../../../../test/vue-jest-style-workaround.js';
import CdrGridTwo from 'componentdir/gridTwo/CdrGridTwo';

describe('CdrGridTwo', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrGridTwo);
    expect(wrapper.element).toMatchSnapshot();
  });


  it('complex example matches snapshot', () => {
    const wrapper = shallowMount(CdrGridTwo, {
      propsData: {
        gutter: 'none@xs large@sm medium@md small@sm',
        tag: 'ul'
      },
      slots: {
        default: '<li>hey</li>'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
