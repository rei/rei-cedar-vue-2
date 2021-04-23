import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrBreadcrumb from 'componentdir/breadcrumb/CdrBreadcrumb';

const itemsA = [
  {
    item: {
      url: 'http://google.com',
      name: 'Long Breadcrumb Step 1',
    },
  },
  {
    item:{
      url: 'http://rei.com',
      name: 'Long Breadcrumb Step 2',
    },
  },
  {
    item:{
      url: 'http://yahoo.com',
      name: 'Long Breadcrumb Step 3',
    },
  },
];

const itemsB = [
  {
    item: {
      url: 'http://google.com',
      name: 'Breadcrumb Step 1',
    },
  },
  {
    item:{
      url: 'http://rei.com',
      name: 'Breadcrumb Step 2',
    },
  },
];

const itemsB2 = [
  {
    item: {
      url: 'http://google.com',
      name: 'Breadcrumb Step 3',
    },
  },
  {
    item:{
      url: 'http://rei.com',
      name: 'Breadcrumb Step 4',
    },
  },
];

describe('CdrBreadcrumb', () => {
  it('renders correctly', async () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        id: 'bc-test',
        items: itemsA,
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('meets basic a11y requirements', () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        id: 'bc-test',
        items: itemsA,
      }
    });
    const ellipse = wrapper.find('.cdr-breadcrumb__ellipses');
    expect(ellipse.attributes()['aria-label']).toBe('show 1 more navigation level');
    expect(ellipse.attributes()['aria-controls']).toBe('bc-testList');
    expect(ellipse.attributes()['aria-expanded']).toBe('false');
    expect(wrapper.element.tagName).toBe('NAV');
    expect(wrapper.attributes()['aria-label']).toBe('breadcrumbs');
  });

  it('breadcrumb should not truncate with fewer than 3 items', () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        id: 'bc-test',
        items: itemsB,
      }
    });
    expect(wrapper.find('.cdr-breadcrumb__ellipses').exists()).toBe(false);
  });

  it('breadcrumb should truncate with 3 or more items', async () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        id: 'bc-test',
        items: itemsA
      }
    });


    expect(wrapper.find('.cdr-breadcrumb__ellipses').exists()).toBe(true);
    wrapper.find('.cdr-breadcrumb__ellipses').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.cdr-breadcrumb__ellipses').exists()).toBeFalsy();
  });

  it('breadcrumb should evaluate truncation when items are updated', async () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        id: 'bc-test',
        items: itemsB
      }
    });
    expect(wrapper.find('.cdr-breadcrumb__ellipses').exists()).toBe(false);
    await wrapper.setProps({items: itemsB.concat(itemsB2)});
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.cdr-breadcrumb__ellipses').exists()).toBe(true);
  });

  it('breadcrumb link can be overridden with link slot', () => {
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        id: 'bc-test',
        items: [
          {
            item: {
              url: 'http://rei.com',
              name: 'Scoped',
            },
          },
        ],
      },
      slots: {
        // TODO: use h() to resolve `[Vue warn]: Property undefined was accessed during render but is not defined on instance.` ?
        link: '<template v-slot:default="link"><p>{{link.href}} TEST {{link.content}} {{link.class}}</p></template>'
      }
    });
    expect(wrapper.text()).toBe('http://rei.com TEST Scoped cdr-breadcrumb__link');
  });

  // TODO: ref does not seem to update?
  xit('applies focus to first breadcrumb on ellipsis click', async (done) => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(CdrBreadcrumb, {
      propsData: {
        id: 'bc-test',
        items: itemsA
      },
      attachTo: elem, // enables focus testing
    });
    wrapper.find('.cdr-breadcrumb__ellipses').trigger('click');
    await wrapper.vm.$nextTick();
    return setTimeout(function() {
      expect(document.activeElement.textContent).toBe(itemsA[0].item.name);
      wrapper.destroy();
      done();
    }, 1050)
  });

});
