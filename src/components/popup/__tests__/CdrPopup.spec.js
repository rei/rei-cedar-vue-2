import { shallowMount } from '@vue/test-utils';
import CdrPopup from 'componentdir/popup/CdrPopup';

describe('CdrPopup', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrPopup);
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('autoPosition', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CdrPopup, {
        propsData: {
          position: 'top',
          autoPosition: true,
        }
      });
    });
    it('Uses selected position if it is valid', () => {
      wrapper.vm.calculatePlacement({
        top: 90,
        bottom: 95,
        left: 45,
        right: 55,
        height: 5,
        width: 10,
      }, {
        width: 100,
        height: 50,
      }, 100, 100);
      expect(wrapper.vm.pos).toBe('top');
    });

    it('Uses inverted position if selected is invalid', () => {
      wrapper.vm.calculatePlacement({
        top: 5,
        bottom: 10,
        left: 45,
        right: 55,
        height: 5,
        width: 10,
      }, {
        width: 200,
        height: 50,
      }, 100, 100);
      expect(wrapper.vm.pos).toBe('bottom');
    });

    it('Uses angled position if selected and inverted is invalid', () => {
      wrapper.vm.calculatePlacement({
        top: 40,
        bottom: 50,
        left: 80,
        right: 90,
        height: 10,
        width: 10,
      }, {
        width: 55,
        height: 55,
      }, 100, 100);
      expect(wrapper.vm.pos).toBe('left');
    });

    it('Uses position with most space if all are invalid', () => {
      wrapper.vm.calculatePlacement({
        top: 45,
        bottom: 55,
        left: 30,
        right: 40,
        height: 10,
        width: 10,
      }, {
        width: 45,
        height: 50,
      }, 100, 100);
      expect(wrapper.vm.pos).toBe('right');
    });

    it('emits closed event on esc key press', () => {
      wrapper.vm.handleKeyDown({ key: 'Esc' });
      expect(wrapper.emitted('closed')).toBeTruthy();
    });

    it('emits closed event on click outside', async (done) => {
      const randomElement = document.createElement('div');
      document.body.appendChild(randomElement);
      wrapper.vm.handleClick({ target: randomElement });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.emitted('closed')).toBeTruthy();
        done();
      })
    });
  });
});
