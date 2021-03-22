import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import nock from 'nock';
import * as debounce from '../src/lib/debounce';

import AutocompleteInput from '../src/AutocompleteInput.vue';

const mockData = [
  {
    description: 'Party',
    data: 'wow',
  },
  {
    description: 'Papa',
    data: 'cool',
  },
  {
    description: 'Patricia',
    data: 'awesome',
  },
];

function setupNock(nockData, url, path, query) {
  return nock(url || 'http://example.com')
    .get(path || '/Pa')
    .query(query || {})
    .reply(200, nockData);
}

describe('Autocomplete Input Component', () => {
  it('renders a text input', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        label: 'name',
        value: 'x',
      },
    });
    expect(wrapper.contains('input[type="text"]')).to.equal(true);
  });

  it('renders placeholder text', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        label: 'name',
        value: 'x',
        placeholder: 'Autocomplete Input',
      },
    });
    expect(wrapper.contains('input[placeholder="Autocomplete Input"]')).to.equal(true);
  });

  it('computes matches based on input value', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        label: 'name',
        value: 'P',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    expect(wrapper.vm.matches.length).to.equal(2);
    expect(wrapper.vm.matches[0]).to.equal('Peter');
    expect(wrapper.vm.matches[1]).to.equal('Paul');
  });

  it('Renders an autocomplete option for each match', async () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        label: 'name',
        value: 'P',
        inputId: 'name-input',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    const input = wrapper.find('#name-input');
    input.trigger('keydown.down');
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('.autocomplete-list button').length).to.equal(2);
  });

  it('Can limit max number of autocomplete suggestions', async () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        label: 'name',
        value: 'P',
        inputId: 'name-input',
        suggestions: ['Peter', 'Paul', 'Papa', 'Party', 'Paaaaaaaaaaaaaaaaaaaa'],
        maxSuggestions: 3,
      },
    });
    const input = wrapper.find('#name-input');
    input.trigger('keydown.down');
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('.autocomplete-list button').length).to.equal(3);
  });

  it('Key down picks first suggestion', async () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'P',
        label: 'Names',
        placeholder: 'Autocomplete Input',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    const input = wrapper.find('#name-input');
    input.trigger('keydown', { key: 'Down' });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.autocomplete-list button').classes()).to.contain('active');
    expect(wrapper.vm.activeIndex).to.equal(0);
  });

  it('Key up selects previous option', async () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'P',
        label: 'Names',
        placeholder: 'Autocomplete Input',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    const input = wrapper.find('#name-input');
    input.trigger('keydown', { key: 'Down' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeIndex).to.equal(0);
    input.trigger('keydown', { key: 'Down' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeIndex).to.equal(1);
    input.trigger('keydown', { key: 'Up' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeIndex).to.equal(0);
    expect(wrapper.find('.autocomplete-list button').classes()).to.contain('active');
    expect(wrapper.vm.activeIndex).to.equal(0);
  });

  it('Enter key selects suggestion', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'P',
        label: 'Names',
        placeholder: 'Autocomplete Input',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    const input = wrapper.find('#name-input');
    input.trigger('keydown', { key: 'Down' });
    input.trigger('keydown', { key: 'Enter' });
    expect(wrapper.emitted()['autocomplete-change'][0]).to.eql(['Peter']);
  });

  it('Pressing enter key while focused on input emits submit event', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'P',
        label: 'Names',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    const input = wrapper.find('#name-input');
    input.trigger('keydown', { key: 'Enter' });

    expect(wrapper.emitted()['autocomplete-submit'][0]).to.eql([]);
  });

  it('Pressing enter key while focused on autocomplete option does not emit submit event', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'P',
        label: 'Names',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    const input = wrapper.find('#name-input');
    input.trigger('keydown', { key: 'Down' });
    input.trigger('keydown', { key: 'Enter' });

    expect(wrapper.emitted()['autocomplete-submit']).to.equal(undefined);
  });

  it('Selecting autocomplete option with mouse click emits selectedData object', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'P',
        label: 'Names',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    wrapper.vm.onMouseSelectIndex(0);
    expect(wrapper.emitted()['autocomplete-change'][0]).to.eql(['Peter']);
    expect(wrapper.emitted()['autocomplete-selected-data'][0]).to.eql(['Peter']);
  });

  it('Deleting input value wipes out autocomplete suggestions', async () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'P',
        label: 'Names',
        suggestions: ['Peter', 'Paul', 'Mary', 'John', 'Ringo'],
      },
    });
    expect(wrapper.vm.matches).to.eql(['Peter', 'Paul']);
    wrapper.setProps({ value: '' });
    await wrapper.vm.$nextTick();
    wrapper.vm.onFocus();
    expect(wrapper.vm.matches).to.eql([]);
  });

  it('Allows passing a url string to fetch autocomplete results from', async () => {
    setupNock(mockData);

    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'Pa',
        label: 'cool stuff',
        fetchUrl: 'http://example.com',
      },
    });

    await wrapper.vm.fetchSuggestions('Pa');
    expect(wrapper.vm.matches.length).to.equal(3);
    expect(wrapper.vm.matches[0].description).to.equal('Party');
    nock.isDone();
  });

  it('does not fetch for blank term', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'Pa',
        label: 'cool stuff',
        fetchUrl: 'http://example.com',
      },
    });
    wrapper.setData({ matches: ['a'], matchesFetch: () => {} });

    expect(wrapper.vm.fetchSuggestions('')).to.equal(undefined);
    expect(wrapper.vm.matches).to.eql([]);
    expect(wrapper.vm.matchesFetch).to.equal(null);
  });

  it('Only gets new matches when input value changes', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'Pa',
        label: 'cool stuff',
        suggestions: ['Pat', 'Pad'],
      },
    });
    const getMatchesSpy = sinon.spy();
    wrapper.setMethods({
      getMatches: getMatchesSpy,
    });
    wrapper.vm.handleInput('Pa');
    expect(getMatchesSpy.callCount).to.equal(0);
  });

  it('emits events on new input', async () => {
    setupNock(mockData, 'http://example.com', '/api', { term: 'Pa' });
    const fakeDebounceModule = sinon.stub(debounce, 'default').callsFake((callback) => callback);

    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: '',
        label: 'cool stuff',
        fetchUrl: term => `http://example.com/api?term=${term}`,
      },
    });
    wrapper.setData({ inputValue: 'Pa' });
    await wrapper.vm.handleInput('Pa');
    expect(wrapper.emitted()['autocomplete-change']).to.eql([['Pa']]);
    expect(wrapper.emitted()['clear-autocomplete-selection']).to.eql([[]]);
    nock.isDone();
    fakeDebounceModule.restore();
  });

  it('Allows passing a url function to fetch autocomplete results from', async () => {
    setupNock(mockData, 'http://example.com', '/api', { term: 'Pa' });

    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'Pa',
        label: 'cool stuff',
        fetchUrl: term => `http://example.com/api?term=${term}`,
      },
    });

    await wrapper.vm.fetchSuggestions('Pa');
    expect(wrapper.vm.matches.length).to.equal(3);
    expect(wrapper.vm.matches[0].description).to.equal('Party');
    nock.isDone();
  });

  it('Does not flatten matches unless matchProperty is passed', async () => {
    setupNock(mockData);

    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'Pa',
        label: 'cool stuff',
        fetchUrl: 'http://example.com',
      },
    });

    await wrapper.vm.fetchSuggestions('Pa');
    expect(wrapper.vm.flattenedMatches.length).to.equal(3);
    expect(wrapper.vm.flattenedMatches[0].description).to.equal('Party');
    nock.isDone();
  });

  it('Allows overriding the property used for matches', async () => {
    const overrideData = mockData.map(obj => ({
      name: obj.description,
      data: obj.data,
    }));
    setupNock(overrideData);

    const wrapper = mount(AutocompleteInput, {
      sync: false,
      propsData: {
        inputId: 'name-input',
        value: 'Pa',
        label: 'cool stuff',
        fetchUrl: 'http://example.com',
        matchProperty: 'name',
      },
    });

    await wrapper.vm.fetchSuggestions('Pa');
    expect(wrapper.vm.flattenedMatches.length).to.equal(3);
    expect(wrapper.vm.flattenedMatches[0]).to.equal('Party');
    nock.isDone();
  });

  it('emits event on blur', () => {
    const wrapper = mount(AutocompleteInput, { sync: false, propsData: { label: 'name', value: 'x' } });
    wrapper.setData({ focused: true });
    expect(wrapper.vm.focused).to.equal(true);
    wrapper.vm.handleBlur();
    expect(wrapper.vm.focused).to.equal(false);
    expect(wrapper.emitted()['autocomplete-focus']).to.eql([[false]]);
  });

  it('sets currentValue if it is new', () => {
    const wrapper = mount(AutocompleteInput, { sync: false, propsData: { label: 'name', value: 'x' } });
    wrapper.vm.setCurrentValue('y');
    expect(wrapper.vm.inputValue).to.equal('y');
  });

  it('does not set currentValue if it did not change', () => {
    const wrapper = mount(AutocompleteInput, { sync: false, propsData: { label: 'name', value: 'x' } });
    wrapper.vm.setCurrentValue('x');
    expect(wrapper.vm.inputValue).to.equal('x');
  });

  it('passes pre-icon and post-icon slots through', () => {
    const wrapper = mount(AutocompleteInput, {
      sync: false,
      slots: {
        'pre-icon': 'hello',
        'post-icon': 'world'
      },
      propsData: { label: 'name', value: 'x'}
    });
    const spans = wrapper.findAll('.autocomplete-input span');
    expect(spans.length).to.equal(2);
    expect(spans.at(0).text()).to.equal('hello');
    expect(spans.at(1).text()).to.equal('world');
  });
});
