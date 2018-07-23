<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="$style['cdr-table__wrapper']">
    <div :class="$style['cdr-table__scrollable']">
      <table :class="[modifierClass]">
        <!-- @slot table head and/or body placed into data table component -->
        <slot v-if="records.length == 0" />
        <template v-else>
          <thead v-if="headers.length > 0">
            <th
              class="empty"
              v-if="rowHeaders" />
            <slot name="headers">
              <th
                v-for="(header, index) in headers"
                :key="index"
                scope="col">
                {{ header }}
              </th>
            </slot>
          </thead>
          <tbody>
            <tr
              v-for="(record, index) in records"
              :key="index">
              <th
                class="row-header"
                scope="row"
                v-if="rowHeaders">
                {{ recordValue(record, 'rowheader') }}
              </th>
              <slot
                :row="record"
                v-for="(header, index) in headers">
                <td
                  v-if="hasValue(record, header)"
                  :key="index">
                  {{ recordValue(record, header) }}
                </td>
              </slot>
            </tr>
          </tbody>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import CdrTokens from '@rei/cdr-tokens';
import matchmedia from 'matchmedia-polyfill';
import matchMediaAddListener from 'matchmedia-polyfill/matchMedia.addListener';

/**
 * Cedar 2 compfor for data table
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrTable',
  mixins: [modifier],
  props: {
    /**
     * Provides array of objects representing table records. Each object property value
     * corresponds to a column in the table record.
     */
    records: {
      type: Array,
      required: false,
      default: () => [],
    },
    /**
     * Provides array of strings representing titles of each column in the table
     */
    headers: {
      type: Array,
      required: false,
      default: () => [],
    },
    /**
     * Boolean value indicating that data fed into the component has row headers
     */
    rowHeaders: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-table';
    },
  },
  /**
   * Attach required modules for using media queries.
   * Attach event handler for resizing of the screen to recalulate media queries
   */
  mounted() {
    window.matchMedia = window.matchMedia || matchmedia;
    window.matchMedia.addListener = window.matchMedia.addListener || matchMediaAddListener;

    const mq = window.matchMedia(`(min-width: ${CdrTokens.breakpointMd})`);

    mq.addListener(this.screenResize);

    this.screenResize(mq);
  },
  methods: {
    /**
     * Recalculate table properties whenever screen is resized
     */
    screenResize(mediaQuery) {
      const cdrTableWrapper = this.$el;
      const cdrTableScrollable =
        this.$el.getElementsByClassName(this.$style['cdr-table__scrollable'])[0];
      const cdrTable = this.$el.getElementsByTagName('table')[0];
      // const cdrTableHead = cdrTable.getElementsByTagName('thead')[0];
      const cdrTableBody = cdrTable.getElementsByTagName('tbody')[0];
      const cdrTableRowHeader = cdrTable.querySelector('th.row-header');
      let numberOfCells;

      // If data has been fed in count number of columns in table
      if (this.headers.length > 0) {
        numberOfCells = this.headers.length;
      } else if (cdrTableBody) {
      // Otherwise use has defined their own table, count the columns
        numberOfCells = cdrTableBody.getElementsByTagName('tr')[0].cells.length;
      } else {
        numberOfCells = 0;
      }

      // For screens medium and larger
      if (mediaQuery.matches) {
        // more than 7 cells and there are row headers mean scrollable
        if (numberOfCells > 7) {
          if (cdrTableRowHeader || this.rowHeaders) {
            // make table scroll under row headers
            cdrTableScrollable.classList.add(this.$style['scrolling']); //eslint-disable-line
          } else {
            // make entire table scrollable
            cdrTableWrapper.classList.add(this.$style['scrolling']); //eslint-disable-line
          }
        } else {
        // 7 or less cells or no row headers means non-scrollable
          cdrTableScrollable.classList.remove(this.$style['scrolling']); //eslint-disable-line
          cdrTableWrapper.classList.add(this.$style['scrolling']); //eslint-disable-line
        }
      // For xs and sm screens
      } else if (window.matchMedia(`(max-width: ${CdrTokens.breakpointMd}`).matches) {
        // more than 2 cells and there are row headers means scrollable
        if (numberOfCells > 2) {
          if (cdrTableRowHeader || this.rowHeaders) {
            cdrTableScrollable.classList.add(this.$style['scrolling']); //eslint-disable-line
          } else {
            cdrTableWrapper.classList.add(this.$style['scrolling']); //eslint-disable-line
          }
          // cdrTable.classList.remove(this.$style['single-column']);
        } else {
          // 2 or less cells or no row headers means non-scrollable
          cdrTableScrollable.classList.remove(this.$style['scrolling']); //eslint-disable-line
          cdrTableWrapper.classList.add(this.$style['scrolling']); //eslint-disable-line
          // cdrTable.classList.add(this.$style['single-column']);
        }
      }
    },
    hasValue(record, column) {
      return record[column.toLowerCase()] !== 'undefined';
    },
    recordValue(record, column) {
      return record[column.toLowerCase()];
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/vars/CdrTable.vars.pcss';
  @import './styles/CdrTable.pcss';
</style>
