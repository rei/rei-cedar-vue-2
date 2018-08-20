<template>
  <div
    :class="[
      $style['cdr-table__wrapper'],
      scrollClass,
    ]"
  >
    <div :class="$style['cdr-table__scroll-container']">
      <table
        :class="[
          $style[baseClass],
          modifierClass,
        ]"
        :summary="summary ? summary : null"
      >
        <caption v-if="caption">
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
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';

/* eslint-disable no-console */

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
    };
  },
  computed: {
    baseClass() {
      return 'cdr-table';
    },
    scrollClass() {
      const classes = [];
      if (this.cols > 2) {
        classes.push(this.modifyClassName(this.baseClass, 'scroll-small'));
      }
      if (this.cols > 7) {
        classes.push(this.modifyClassName(this.baseClass, 'scroll-large'));
      }
      return classes.join(' ');
    },
  },
  mounted() {
    this.cols = this.$el.querySelector('tr').children.length;
    console.log('cols', this.cols);
  },
  /**
   * Attach required modules for using media queries.
   * Attach event handler for resizing of the screen to recalulate media queries
   */
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/vars/CdrTable.vars.pcss';
  @import './styles/CdrTable.pcss';
</style>
