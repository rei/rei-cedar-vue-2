<template>
  <div
    :class="[modifierClass]"
  >
    <span class="caption">{{ caption }}</span>
    <div
      :class="[
        $style['cdr-table__scroll-container'],
        { 'full-scroll': fullScroll },
        { 'is-scrolling': isScrolling },
      ]"
    >
      <table
        :class="$style['cdr-table__content']"
        :summary="summary ? summary : null"
      >
        <!-- <caption
          v-if="caption"
          class="sr-only"
        >
          {{ caption }}
        </caption> -->

        <thead v-if="hasColHeaders">
          <tr v-if="rowData.length > 0">
            <th
              class="empty"
              v-show="hasRowHeaders"
            />
            <th
              v-for="(header, index) in colHeaders"
              :key="id + '_col-head_' + index"
            >
              {{ header }}
            </th>
          </tr>
          <tr v-else>
            <th
              class="empty"
              v-show="hasRowHeaders"
            />
            <slot name="col-headers" />
          </tr>
        </thead>

        <tbody v-if="rowData.length > 0">
          <tr
            v-for="(row, index) in rowData"
            :key="id + '_row_' + index"
          >
            <!-- ROW HEADERS -->
            <th v-if="hasRowHeaders">
              {{ rowHeaders[index] }}
            </th>
            <td
              v-for="(col, key) in row"
              :key="id + '_col_' + key"
            >
              {{ col }}
            </td>
          </tr>
        </tbody>

        <tbody v-else>
          <slot />
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
  name: 'CdrTable',
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
    /**
     * Boolean value indicating that data fed into the component has row headers. For each
     * table record object in the data, row header column must have 'rowheader' as the
     * property key.
     */
    rowHeaders: {
      type: [Array, Boolean],
      default: false,
    },
    rowData: {
      type: [Array, Boolean],
      default: false,
    },
    summary: {
      type: String,
      required: false,
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
    };
  },
  computed: {
    baseClass() {
      return 'cdr-table';
    },
    fullScroll() {
      return this.cols <= 2 || !this.rowHeaders;
    },
    isScrolling() {
      return !this.fullScroll && this.scrollWidth > this.clientWidth;
    },
  },
  mounted() {
    this.hasColHeaders = typeof this.colHeaders === 'boolean' ?
      this.colHeaders : this.colHeaders.length > 0;

    this.hasRowHeaders = typeof this.rowHeaders === 'boolean' ?
      this.rowHeaders : this.rowHeaders.length > 0;

    /* count the columns */
    this.cols = this.hasColHeaders ?
      this.colHeaders.length : this.$el.querySelector('tr').children.length;

    /* select correct child element */
    const scrollContainer = this.caption ? this.$el.children[1] : this.$el.children[0];
    this.clientWidth = scrollContainer.clientWidth;
    this.scrollWidth = scrollContainer.scrollWidth;

    window.addEventListener('resize', debounce(() => {
      this.clientWidth = scrollContainer.clientWidth;
      this.scrollWidth = scrollContainer.scrollWidth;
    }, 250));
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/vars/CdrTable.vars.pcss';
  @import './styles/CdrTable.pcss';
</style>
