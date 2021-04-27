import { shallowMount } from '../../../../test/vue-jest-style-workaround.js';
import CdrPopup from 'componentdir/popup/CdrPopup';
import calculatePlacement from 'componentdir/popup/calculatePlacement';

describe('CdrPopup', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(CdrPopup);
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('events', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CdrPopup, {
        propsData: {
          position: 'top',
          autoPosition: true,
        }
      });
    });

    it('emits closed event on esc key press', () => {
      wrapper.trigger('keydown', { key: 'Esc' });
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

  describe('calculatePlacement', () => {
    // TODO: add corner tests here
    it('Uses selected position if it is valid', () => {
      const res = calculatePlacement({
        top: 90,
        bottom: 95,
        left: 45,
        right: 55,
        height: 5,
        width: 10,
      }, {
        width: 100,
        height: 50,
      }, 100, 100, 'top');
      expect(res.pos).toBe('top');
    });

    it('Uses inverted position if selected is invalid', () => {
      const res = calculatePlacement({
        top: 5,
        bottom: 10,
        left: 45,
        right: 55,
        height: 5,
        width: 10,
      }, {
        width: 200,
        height: 50,
      }, 100, 100, 'top');
      expect(res.pos).toBe('bottom');
    });

    it('Uses angled position if selected and inverted is invalid', () => {
      const res = calculatePlacement({
        top: 40,
        bottom: 50,
        left: 80,
        right: 90,
        height: 10,
        width: 10,
      }, {
        width: 55,
        height: 55,
      }, 100, 100, 'top');
      expect(res.pos).toBe('left');
    });

    it('Uses position with most space if all are invalid', () => {
      const res = calculatePlacement({
        top: 45,
        bottom: 55,
        left: 30,
        right: 40,
        height: 10,
        width: 10,
      }, {
        width: 45,
        height: 50,
      }, 100, 100, 'top');
      expect(res.pos).toBe('right');
    });
  })
});
