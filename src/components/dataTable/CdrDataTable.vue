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
                :style="{ height: headerRowAlignHeight }"
              />
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
                :style="{ 'height': getRowAlignHeight('th', index) }"
              >
                {{ rowHeaders[index] }}
              </th>
              <td
                v-for="(key, index) in keyOrder"
                :key="id + '_' + index + '_' + key"
                :style="{ 'height': getRowAlignHeight('td', index) }"
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
      headerRowHeight: 0,
      rowHeights: null,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-data-table';
    },
    lockedCol() {
      return this.rowData.length > 0 && this.cols > 2 && this.hasRowHeaders;
    },
    isScrolling() {
      return this.scrollWidth > this.clientWidth && this.lockedCol;
    },
    headerRowAlignHeight() {
      return this.headerRowHeight ? `${this.headerRowHeight + 1}px` : this.headerRowHeight; /* eslint-disable-line */
    },
  },
  mounted() {
    this.hasColHeaders = typeof this.colHeaders === 'boolean' ?
      this.colHeaders : this.colHeaders.length > 0;

    this.hasRowHeaders = typeof this.rowHeaders === 'boolean' ?
      this.rowHeaders : this.rowHeaders.length > 0;

    this.cols = this.$refs['table-body'].querySelector('tr').children.length;

    // we don't always need this event listener == make this code better.
    window.addEventListener('resize', debounce(() => {
      // this.setRowsContentHeight();
      this.checkScroll();
    }, 250));

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

      this.headerRowHeight = this.$refs['row-col-headers'].children[1].offsetHeight;

      /* main table */
      for (let i = 0; i < this.rowData.length; i += 1) {
        const heights = {
          th: this.$refs[`row-${i}`][0].children[0].offsetHeight,
          td: this.$refs[`row-${i}`][0].children[1].offsetHeight,
        };

        rowContentHeights.push(heights);
      }

      this.rowHeights = rowContentHeights;
      console.log('setRowsContentHeight done'); /* eslint-disable-line */
    },
    getRowAlignHeight(elem, index) {
      console.log('getRowAlignHeight', elem, index); /* eslint-disable-line */
      if (this.rowHeights === null) {
        // return null while we're waiting for values
        console.log('rowHeights is null, return null'); /* eslint-dsiable-line */
        return null;
      }

      const row = this.rowHeights[index];
      const alreadyAligned = row.th - row.td === 1; // th should be one pixel larger than td for everything to align correctly....

      if (alreadyAligned) {
        return null;
      }

      const elemToChange = row.th > row.td ? 'td' : 'th';

      if (elem !== elemToChange) {
        return null;
      }

      // elemToChange is the smaller value
      return elemToChange === 'td' ? `${row.th - 1}px` : `${row.td + 1}px`;
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrDataTable.pcss';
</style>
