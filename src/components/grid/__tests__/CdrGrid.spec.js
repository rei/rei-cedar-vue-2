import { shallowMount } from '@vue/test-utils';
import CdrGrid from 'componentdir/grid/CdrGrid';

describe('CdrGrid', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrGrid);
    expect(wrapper.element).toMatchSnapshot();
  });


  it('complex example matches snapshot', () => {
    const wrapper = shallowMount(CdrGrid, {
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
