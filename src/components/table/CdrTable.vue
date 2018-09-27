<template>
  <div
    :class="[modifierClass]"
  >
    <span
      v-show="caption"
      class="caption"
    >
      {{ caption }}
    </span>
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
            <!-- <td
              v-for="(col, key) in row"
              :key="id + '_col_' + key"
            >
              {{ col }}
            </td> -->
            <td
              v-for="(key, index) in keyOrder"
              :key="id + '_' + index + '_' + key"
            >
              {{ row[key] }}
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
    keyOrder: {
      type: Array,
      default: () => [],
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
      return this.scrollWidth > this.clientWidth && !this.fullScroll;
    },
  },
  mounted() {
    this.hasColHeaders = typeof this.colHeaders === 'boolean' ?
      this.colHeaders : this.colHeaders.length > 0;

    this.hasRowHeaders = typeof this.rowHeaders === 'boolean' ?
      this.rowHeaders : this.rowHeaders.length > 0;

    if (this.hasColHeaders && typeof this.colHeaders !== 'boolean') {
      this.cols = this.colHeaders.length;
    } else {
      this.cols = this.$el.querySelector('tr').children.length;
    }

    this.checkScroll();

    window.addEventListener('resize', debounce(() => {
      this.checkScroll();
    }, 250));

    console.log('mounted finished');
  },
  methods: {
    checkScroll() {
      console.log('checkScroll ran!');
      const scrollContainer = this.$el.children[1];
      this.clientWidth = scrollContainer.clientWidth;
      this.scrollWidth = scrollContainer.scrollWidth;
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/vars/CdrTable.vars.pcss';
  @import './styles/CdrTable.pcss';
</style>
