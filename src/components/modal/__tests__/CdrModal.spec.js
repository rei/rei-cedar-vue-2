import { mount } from '../../../../test/vue-jest-style-workaround.js';
import CdrModal from 'componentdir/modal/CdrModal';

describe('CdrModal.vue', () => {
  it('default open', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        default: 'Sticky content',
      },
      attachTo: elem,
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  it('leaves optional slots empty, handleOpened', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: false,
        label: "Label is the modal title"
      },
      slots: {
        default: 'Main content',
      },
      attachTo: elem,
    });

    const spyMeasureContent = spyOn(wrapper.vm, 'measureContent');
    wrapper.setProps({ opened: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();

    setTimeout(() => {
      expect(spyMeasureContent).toHaveBeenCalled();
      wrapper.destroy();
    }, 300);
  });

  it('handleKeyDown', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const mockMeasureContent = jest.fn();
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        default: 'Main content',
      },
      methods: {
        measureContent: mockMeasureContent,
      },
      attachTo: elem,
    });

    wrapper.trigger('keydown', {
      key: 'a'
    });
    await wrapper.vm.$nextTick();

    wrapper.trigger('keydown', {
      key: 'Esc',
    });
    await wrapper.vm.$nextTick();

    wrapper.trigger('keydown', {
      key: 'Escape',
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().closed.length).toBe(2);
  });

  it('fullscreen snapshot', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const mockMeasureContent = jest.fn();
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      data() {
        return {
          fullscreen: true,
        };
      },
      methods: {
        measureContent: mockMeasureContent,
      },
      slots: {
        scrollingContentSlot: 'Main content',
      },
      attachTo: elem,
    });


    await wrapper.vm.$nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  it('removeNoScroll', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
      },
      slots: {
        scrollingContentSlot: 'Main content',
      },
      attachTo: elem,
    });
    const { documentElement, body } = document;
    expect(documentElement.classList.contains('cdr-modal__noscroll')).toBe(true);
    wrapper.vm.removeNoScroll();

    expect(documentElement.classList.contains('cdr-modal__noscroll')).toBeFalsy();
    expect(body.classList.contains('cdr-modal__noscroll')).toBeFalsy();

  });

  // test currently fails because $refs.modal is undefined,
  // TODO but this test also doesn't really test anything...
  xit('handleFocus', async (done) => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }

    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
      },
      attachTo: elem,
    });

    const button = wrapper.find('button').element;
    button.focus();
    expect(button).toBe(document.activeElement);
    wrapper.vm.$nextTick(() => {
      wrapper.vm.handleFocus({ target: document.createElement('a') });
      // TODO: hrmmm what?
      expect(document.scrollTop).toBe(undefined);
      expect(document.scrollLeft).toBe(undefined);
      done();
    });
  });
// TODO: test does not test anything lol
  xit('handleClosed', async () => {
    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }
    global.scrollTo = jest.fn();
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "My Modal Label",
      },
      // data() {
      //   return {
      //     offset: { x: 0, y: 0 }
      //   };
      // },
      attachTo: elem,
    });

    wrapper.vm.handleClosed();
    await wrapper.vm.$nextTick();

    setTimeout(() => {
      // TODO: this does nothing
      expect(wrapper.vm.unsubscribe).toBe(null);
      wrapper.destroy();
    }, 500);
  });
// TODO: resize event no longer triggering resize handler?
  xit('resize event', async (done) => {
    const wrapper = mount(CdrModal, {
      propsData: {
        opened: true,
        label: "Label is the modal title"
      },
      slots: {
        default: 'Sticky content',
      },
    });
    const spyMeasureContent = spyOn(wrapper.vm, 'measureContent');

    await wrapper.vm.$nextTick();
    window.dispatchEvent(new Event('resize'));
    await wrapper.vm.$nextTick();
    setTimeout(() => {
      expect(spyMeasureContent).toHaveBeenCalled();
      done();
    }, 500);
  });
});
