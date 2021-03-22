import { mount } from '@vue/test-utils';

import AutocompleteList from '../src/AutocompleteList.vue';

describe('Autocomplete List Component', () => {
  it('renders array of string matches', () => {
    const wrapper = mount(AutocompleteList, {
      sync: false,
      propsData: {
        focused: true,
        matches: ['foo'],
        activeIndex: 0,
      },
    });
    expect(wrapper.find('button').text()).to.equal('foo');
  });

  it('renders array of objects based on matchProperty', () => {
    const wrapper = mount(AutocompleteList, {
      sync: false,
      propsData: {
        focused: true,
        matches: [{ name: 'bar', data: 'wow' }],
        matchProperty: 'name',
        activeIndex: 0,
      },
    });
    expect(wrapper.find('button').text()).to.equal('bar');
  });

  it('emits selected event', () => {
    const wrapper = mount(AutocompleteList, {
      sync: false,
      propsData: {
        focused: true,
        matches: [{ name: 'bar', data: 'wow' }],
        matchProperty: 'name',
        activeIndex: 0,
      },
    });
    wrapper.vm.setActiveIndex(9000);
    expect(wrapper.emitted()['mouse-selected-index']).to.eql([[9000]]);
  });

  it('accepts a slot for overriding autocomplete item content', () => {
    const wrapper = mount(AutocompleteList, {
      sync: false,
      propsData: {
        focused: true,
        matches: [{ name: 'foo', data: 'wow' }],
        activeIndex: 0,
      },
      scopedSlots: {
        match: '<template slot-scope="matchScope">{{matchScope.match.data}}, {{matchScope.match.name}}</template>',
      },
    });
    expect(wrapper.find('button').text()).to.equal('wow, foo');
  });
});
