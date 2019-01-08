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
        { 'full-scroll': fullScroll },
        { 'is-scrolling': isScrolling },
      ]"
      ref="scroll-container"
    >
      <table
        :class="$style['cdr-data-table__content']"
        :id="id"
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
              ref="row-colHeaders"
              :style="{ height: getRowHeight() }"
            >
              <th
                class="empty"
                v-show="hasRowHeaders"
                scope="col"
                :style="{ height: getRowHeight() }"
              >
                <span class="cdr-sr-only">
                  Empty first column header for table with both column and row headers.
                </span>
              </th>
              <th
                v-for="(header, index) in colHeaders"
                :key="id + '_col-head_' + index"
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
              :style="{ height: getRowHeight(index) }"
            >
              <th
                v-if="hasRowHeaders"
                scope="row"
                :ref="`row-${index}-th`"
                :style="{ height: getRowHeight(index) }"
              >
                {{ rowHeaders[index] }}
              </th>
              <td
                v-for="(key, index) in keyOrder"
                :key="id + '_' + index + '_' + key"
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
      required: true,
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
      required: false,
    },
    keyOrder: {
      type: Array,
      default: () => [],
    },
    caption: {
      type: String,
      required: false,
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
      rowColHeadersHeight: null,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-data-table';
    },
    fullScroll() {
      return this.cols <= 2 || !this.rowHeaders;
    },
    isScrolling() {
      return this.scrollWidth > this.clientWidth && !this.fullScroll;
    },
  },
  mounted() {
    this.hasColHeaders = typeof this.colHeaders === 'boolean' ?
      this.colHeaders : this.colHeaders.length > 0;

    this.hasRowHeaders = typeof this.rowHeaders === 'boolean' ?
      this.rowHeaders : this.rowHeaders.length > 0;

    this.cols = this.$refs['table-body'].querySelector('tr').children.length;

    this.checkScroll();

    window.addEventListener('resize', debounce(() => {
      this.rowHeights = null;
      this.rowColHeadersHeight = null;
      this.setRowsContentHeight();
      this.checkScroll();
    }, 250));

    this.$nextTick(() => {
      this.setRowsContentHeight();
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
      const rowHeights = [];

      if (this.hasColHeaders) {
        const headersRow = this.$refs['row-colHeaders'];
        this.rowColHeadersHeight = `${Math.max(headersRow.clientHeight, headersRow.children[0].clientHeight)}px`; /* eslint-disable-line */
      }

      for (let i = 0; i < this.rowData.length; i += 1) {
        const rowHeight = this.$refs[`row-${i}`][0].clientHeight;
        let thHeight = 0;

        if (this.hasRowHeaders) {
          thHeight = this.$refs[`row-${i}`][0].children[0].clientHeight;
        }

        rowHeights.push(Math.max(rowHeight, thHeight));
      }

      this.rowHeights = rowHeights;
    },
    getRowHeight(index) {
      if (index) {
        return this.rowHeights !== null ? `${this.rowHeights[index]}px` : null;
      }

      return this.rowColHeadersHeight !== null ? this.rowColHeadersHeight : null;
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrDataTable.pcss';
</style>
