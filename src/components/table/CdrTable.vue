<template>
  <div
    :class="[
      $style['cdr-table__wrapper'],
    ]"
  >
    <span class="caption">{{ caption }}</span>
    <div
      :class="[
        $style['cdr-table__scroll-container'],
        { 'no-row-headers': !rowHeaders },
        { 'cdr-table--scroll': scrolling },
      ]"
    >
      <table
        :class="[
          modifierClass,
        ]"
        :summary="summary ? summary : null"
      >
        <caption
          v-if="caption"
          class="sr-only"
        >
          {{ caption }}
        </caption>
        <thead v-if="colHeaders">
          <tr>
            <th class="empty" />
            <slot name="col-headers" />
          </tr>
        </thead>
        <tbody>
          <slot />
        </tbody>
      </table>
    </div>
    <!-- <ul>
      <li>clientWidth: {{ clientWidth }}</li>
      <li>scrollWidth: {{ scrollWidth }}</li>
      <li>scrolling: {{ scrolling }}</li>
      <li>scrollClass: {{ scrollClass || 'fucking broken' }}</li>
    </ul> -->
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import debounce from 'lodash/debounce';

/* eslint-disable */

/**
 * Cedar 2 compfor for data table
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrTable',
  mixins: [modifier],
  props: {
    colHeaders: {
      type: Boolean,
      default: false,
    },
    /**
     * Boolean value indicating that data fed into the component has row headers. For each
     * table record object in the data, row header column must have 'rowheader' as the
     * property key.
     */
    rowHeaders: {
      type: Boolean,
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
    };
  },
  computed: {
    baseClass() {
      return 'cdr-table';
    },
    scrolling() {
      return this.scrollWidth > this.clientWidth && this.cols > 2;
    },
  },
  mounted() {
    this.clientWidth = this.$el.children[0].clientWidth;
    this.scrollWidth = this.$el.children[0].scrollWidth;
    this.cols = this.$el.querySelector('tr').children.length;

    window.addEventListener('resize', debounce(() => {
      this.clientWidth = this.$el.children[0].clientWidth;
      this.scrollWidth = this.$el.children[0].scrollWidth;
    }, 250));
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/vars/CdrTable.vars.pcss';
  @import './styles/CdrTable.pcss';
</style>
