import { shallowMount } from '@vue/test-utils';
import CdrBreadcrumb from 'componentsdir/breadcrumb/CdrBreadcrumb';

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
    wrapper = shallowMount(CdrBreadcrumb);
  });

  it('renders a div', () => {
    expect(wrapper.vm.$refs.container.tagName).toBe('DIV');
  });

  it('container the base class', () => {
    expect(wrapper.vm.$refs.container.classList.contains('cdr-breadcrumb')).toBe(true);
  });

  it('breadcrumb container is rendered', () => {
    expect(wrapper.find('.cdr-breadcrumb-container').exists()).toBe(true);
  });

  it('breadcrumb item is NOT rendered', () => {
    expect(wrapper.find('.cdr-breadcrumb__item').exists()).toBe(false);
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
    expect(wrapper.find('.cdr-breadcrumb__item').isVisible()).toBe(true);
  });

  it('trigger resize no truncation', () => {
    let props = wrapper.props();
    props.items = BreadcrumbItems;
    wrapper.setProps(props);
    window.dispatchEvent(new Event('resize'));
    expect(wrapper.vm.thresholdExceeded).toBe(false);
  });

  // TODO: Need to update lodash/debounce dependency after
  // switch to mocha from Jest
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