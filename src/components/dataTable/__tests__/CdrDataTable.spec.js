import { shallowMount, mount } from '@vue/test-utils';
import CdrDataTable from 'componentsdir/dataTable/CdrDataTable';
import sinon from 'sinon';

const data = {
  colHeaders: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  rowHeaders: ['Chest', 'Sleeve Length', 'Waist', 'Hip', 'Inseam'],
  rowData: [
    {
      xs: '31.5 - 33',
      s: '35 - 38',
      m: '38 - 41',
      l: '42 - 45',
      xl: '46 - 49',
      xxl: '50 - 53',
      xxxl: '54-57',
    },
    {
      s: '33',
      m: '34',
      l: '35',
      xl: '35.5',
      xxl: '36',
      xxxl: '36.6',
      xs: 'N/A',
    },
    {
      xs: '26.5 - 27.5',
      s: '28 - 30',
      m: '32 - 34',
      l: '36 - 38',
      xl: '40 - 42',
      xxl: '44 - 46',
      xxxl: '48 - 50',
    },
    {
      xs: 'N/A',
      s: '35 - 37',
      m: '38 - 40',
      l: '41 - 43',
      xl: '44 - 46',
      xxl: '47 - 49',
      xxxl: '51 - 54',
    },
    {
      xs: '31',
      s: '32',
      m: '32',
      l: '32',
      xl: '32',
      xxl: '32',
      xxxl: '32',
    },
  ],
};

describe('CdrDataTable.vue', () => {

  describe('mounted hook', () => {
    it('sets hasColHeaders, hasRowHeaders with boolean', () => {
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: true,
          rowHeaders: true,
          rowData: data.rowData,
          id: "test",
        }
      });

      expect(wrapper.vm.hasColHeaders).toBe(true);
      expect(wrapper.vm.hasRowHeaders).toBe(true);
    });

    it ('sets hasColHeaders, hasRowHeaders with data array', () => {
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: ['test', 'test2'],
          rowHeaders: ['test', 'test2'],
          rowData: data.rowData,
          id: "test",
        }
      });

      expect(wrapper.vm.hasColHeaders).toBe(true);
      expect(wrapper.vm.hasRowHeaders).toBe(true);
    });

    it('adds resize event watcher', (done) => {
      const spy = sinon.spy(CdrDataTable.methods, 'checkScroll');
      
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: data.colHeaders,
          rowHeaders: data.rowHeaders,
          rowData: data.rowData,
          id: "test",
          caption: "Test"
        }
      });
      
      window.dispatchEvent(new Event('resize'));
      wrapper.vm.$nextTick(() => {
        sinon.assert.called(spy);
        done()
      });
    });

    describe('computed properties', () => {
      it('fullScroll checks number of columns', () => {
        const wrapper = shallowMount(CdrDataTable, {
          propsData: {
            colHeaders: ['col1', 'col2'],
            rowHeaders: ['row1', 'row2'],
            rowData: data.rowData,
            keyOrder: ["xs", "sm"],
            id: "test",
          }
        });

        expect(wrapper.vm.fullScroll).toBe(true);
      });

      it('fullScroll checks hasRowHeaders', () => {
        const wrapper = shallowMount(CdrDataTable, {
          propsData: {
            colHeaders: ['col1', 'col2', 'col3'],
            rowHeaders: false,
            rowData: data.rowData,
            keyOrder: ["xs", "sm", "m"],
            id: "test",
          }
        });

        expect(wrapper.vm.fullScroll).toBe(true);
      });

      it('isScrolling checks fullScroll', () => {
        const wrapper = shallowMount(CdrDataTable, {
          propsData: {
            colHeaders: ['col1', 'col2', 'col3'],
            rowHeaders: ['row1', 'row2', 'row3'],
            rowData: data.rowData,
            keyOrder: ["xs", "sm", "m"],
            id: "test",
          }
        });

        expect(wrapper.vm.isScrolling).toBe(false);
      });
    });

    describe('methods', () => {
      it('checkScroll sets clientWidth and scrollWidth', () => {
        const wrapper = shallowMount(CdrDataTable, {
          propsData: {
            colHeaders: ['col1', 'col2', 'col3'],
            rowHeaders: ['row1', 'row2', 'row3'],
            rowData: data.rowData,
            keyOrder: ["xs", "sm", "m"],
            id: "test",
          }
        });

        wrapper.setData({
          clientWidth: 500,
          scrollWidth: 500,
        });

        wrapper.vm.checkScroll();
        expect(wrapper.vm.clientWidth).not.toBe(500);
        expect(wrapper.vm.scrollWidth).not.toBe(500);
      });
    });
  });
});