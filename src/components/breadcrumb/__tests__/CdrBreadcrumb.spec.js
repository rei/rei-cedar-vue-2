import { shallow } from '@vue/test-utils';
import CdrBreadcrumb from 'componentsdir/breadcrumb/CdrBreadcrumb';
import debounce from 'lodash/debounce';

//jest.unmock('lodash/debounce');
debounce = jest.fn((fn) => fn);

describe('CdrBreadcrumb.vue', () => {
  let wrapper = null;
  const BreadcrumbItems = [
    {
      url: 'http://google.com',
      displayText: 'Breadcrumb Step 1',
    },
    {
      url: 'http://rei.com',
      displayText: 'Long Breadcrumb Step 2',
    },
    {
      url: 'http://yahoo.com',
      displayText: 'Breadcrumb Step 3',
    },
    {
      url: 'http://bing.com',
      displayText: 'Really Really Long Breadcrumb Step 4',
    },
    {
      url: 'http://amazon.com',
      displayText: 'Last Step',
    },
  ];

  beforeEach(() => {
    wrapper = shallow(CdrBreadcrumb);
  });

  it('renders a div', () => {
    expect(wrapper.vm.$refs.container.tagName).toBe('DIV');
  });

  it('container the base class', () => {
    expect(wrapper.vm.$refs.container.classList.contains('cdr-breadcrumb')).toBe(true);
  });

  it('ruler element is rendered', () => {
    expect(wrapper.vm.$refs.ruler.tagName).toBe('SPAN');
  });

  it('breadcrumb container is rendered', () => {
    expect(wrapper.find('.breadcrumb-container').exists()).toBe(true);
  });

  it('breadcrumb item is NOT rendered', () => {
    expect(wrapper.find('.breadcrumb-item').exists()).toBe(false);
  });

  it('breadcrumb item is rendered', () => {
    wrapper.setProps({
      items: [
        {
          url: 'http://google.com',
          displayText: 'Breadcrumb Step 1',
        },
      ]
    });
    expect(wrapper.find('.breadcrumb-item').isVisible()).toBe(true);
  });

  it('trigger resize no truncation', () => {
    let props = wrapper.props();
    props.items = BreadcrumbItems;
    wrapper.setProps(props);
    window.dispatchEvent(new Event('resize'));
    expect(wrapper.vm.thresholdExceeded).toBe(false);
  });

  it('trigger resize should truncate', (done) => {
    wrapper = shallow(CdrBreadcrumb, {
      propsData: {
        truncationThreshold: -1,
        items: BreadcrumbItems,
      },
      attachToDocument: true,
    });
    window.dispatchEvent(new Event('resize'));
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.thresholdExceeded).toBe(true);
      done();
    });
  });

  it('breadcrumb should not truncate', () => {
    const shouldTruncate = wrapper.vm.calculateTruncation();
    expect(shouldTruncate).toBe(false);
  });

  it('breadcrumb should truncate', () => {
    let props = wrapper.props();
    props.truncationThreshold = -1;
    wrapper.setProps(props);
    const shouldTruncate = wrapper.vm.calculateTruncation();
    expect(shouldTruncate).toBe(true);
  });
});