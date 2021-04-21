import { h } from 'vue'
import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrGrid from 'componentdir/grid/CdrGrid';


describe('CdrGrid', () => {
  it('matches snapshot', () => {
    const wrapper = mount(CdrGrid, {
      slots: {
        // TODO: plain HTML in VTU slots raise a warning for "Property undefined was accessed during render but is not defined on instance."
        default: h('div', 'griddy'),
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });


  it('complex example matches snapshot', () => {
    const wrapper = mount(CdrGrid, {
      propsData: {
        gutter: 'none@xs large@sm medium@md small@sm',
        tag: 'ul'
      },
      slots: {
        default: h('li', 'list')
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
