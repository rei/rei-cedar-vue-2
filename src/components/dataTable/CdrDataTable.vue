<template>
  <div
    :class="[modifierClass]"
  >
    <span
      v-if="caption"
      :class="$style['cdr-data-table__caption']"
      aria-hidden="true"
    >
      {{ caption }}
    </span>
    <div
      :class="[
        $style['cdr-data-table__scroll-container'],
        { 'locked-col': lockedCol },
        { 'is-scrolling': isScrolling },
      ]"
      ref="scroll-container"
    >
      <table
        :class="[
          $style['cdr-data-table__content'],
          { 'constrain-width': constrainWidth },
        ]"
        :id="id ? id : null"
      >
        <caption
          class="cdr-sr-only"
          v-if="caption"
        >
          {{ caption }}
        </caption>
        <thead v-if="hasColHeaders">
          <slot name="thead">
            <tr
              ref="row-col-headers"
            >
              <th
                class="empty"
                v-show="hasRowHeaders"
                scope="col"
                :style="{ 'height': getRowsAlignHeight }"
              >
                {{ getRowsAlignHeight }}
              </th>
              <th
                v-for="(header, index) in colHeaders"
                :key="`header-row-col-${index}`"
                scope="col"
              >
                {{ header }}
              </th>
            </tr>
          </slot>
        </thead>

        <tbody ref="table-body">
          <slot name="tbody">
            <tr
              v-for="(row, index) in rowData"
              :key="id + '_row_' + index"
              :ref="`row-${index}`"
            >
              <th
                v-if="hasRowHeaders"
                scope="row"
                :ref="`row-${index}-th`"
                :class="$style['align-row-header-content']"
                :style="{ 'height': getRowHeight('th') }"
              >
                {{ rowHeaders[index] }}
              </th>
              <td
                v-for="(key, index) in keyOrder"
                :key="id + '_' + index + '_' + key"
                :style="{ 'height': getRowHeight('td', index) }"
              >
                {{ getCellContent(row, key) }}
              </td>
            </tr>
          </slot>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import debounce from 'lodash/debounce';

/**
 * Cedar 2 compfor for data table
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrDataTable',
  mixins: [modifier],
  props: {
    id: {
      type: String,
      required: false,
    },
    colHeaders: {
      type: [Array, Boolean],
      default: false,
    },
    rowHeaders: {
      type: [Array, Boolean],
      default: false,
    },
    rowData: {
      type: Array,
      default: () => [],
    },
    keyOrder: {
      type: Array,
      default: () => [],
    },
    caption: {
      type: String,
      required: false,
    },
    constrainWidth: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cols: 0,
      clientWidth: 0,
      scrollWidth: 0,
      hasColHeaders: false,
      hasRowHeaders: false,
      rowHeights: null,
      rowColHeadersHeight: 0,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-data-table';
    },
    lockedCol() {
      return this.rowData.length > 0 && this.cols > 2 && this.rowHeaders;
    },
    isScrolling() {
      return this.scrollWidth > this.clientWidth && this.lockedCol;
    },
    getRowsAlignHeight() {
      return this.rowColHeadersHeight ? `${this.rowColHeadersHeight + 1}px` : this.rowColHeadersHeight; /* eslint-disable-line */
    },
  },
  mounted() {
    this.hasColHeaders = typeof this.colHeaders === 'boolean' ?
      this.colHeaders : this.colHeaders.length > 0;

    this.hasRowHeaders = typeof this.rowHeaders === 'boolean' ?
      this.rowHeaders : this.rowHeaders.length > 0;

    this.cols = this.$refs['table-body'].querySelector('tr').children.length;

    window.addEventListener('resize', debounce(() => {
      // this.setRowsContentHeight();
      this.checkScroll();
    }, 250));

    // this.checkScroll();

    // this.$nextTick(())
    // if (this.lockedCol) {
    //   this.setRowsContentHeight();
    // }

    this.$nextTick(() => {
      if (this.lockedCol) {
        this.setRowsContentHeight();
      }
      this.checkScroll();
    });
  },
  methods: {
    checkScroll() {
      const scrollContainer = this.$refs['scroll-container'];

      if (scrollContainer !== undefined) {
        this.clientWidth = scrollContainer.clientWidth;
        this.scrollWidth = scrollContainer.scrollWidth;
      }
    },
    getCellContent(row, key) {
      return row[key] || '';
    },
    setRowsContentHeight() {
      const rowContentHeights = [];

      this.rowColHeadersHeight = this.$refs['row-col-headers'].children[1].offsetHeight;

      /* main table */
      for (let i = 0; i < this.rowData.length; i += 1) {
        const heights = {
          th: this.$refs[`row-${i}`][0].children[0].offsetHeight,
          td: this.$refs[`row-${i}`][0].children[1].offsetHeight,
        };

        rowContentHeights.push(heights);
      }

      this.rowHeights = rowContentHeights;
      console.log('rowContentHeights', rowContentHeights); /* eslint-disable-line */
    },
    getRowHeight(elem, index) {
      if (this.rowHeights === null) {
        // return null because we're waiting for values
        return null;
      }

      const { th, td } = index ? this.rowHeights[index] : this.rowColHeadersHeight;

      console.log('getRowHeight', elem, index, th, td); /* eslint-disable-line */

      return true;
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrDataTable.pcss';
</style>
