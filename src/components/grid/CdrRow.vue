<template>
  <component
    :is="type === 'list' ? 'ul' : 'div'"
    :class="[
      $style['cdr-row'],
      colsClass,
      justifyClass,
      alignClass,
      gutterClass,
      verticalClass,
      wrapClass,
      nowrapClass,
    ]"
  >
    <!-- @slot innerHTML inside the row component -->
    <slot/>
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import propValidator from 'srcdir/utils/propValidator';

/**
 * Cedar 2 component for row
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrRow',
  mixins: [modifier],
  props: {
    /**
     * Number of columns in the row (1-12, auto).
     * Also accepts responsive values with `@breakpoint`: "2 4@md"
     */
    cols: {
      type: String,
      validator: value => propValidator(
        value,
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
      ),
    },
    /**
     * How columns should be justified within empty space of the row.
     * Possible values: {left, center, right, around, between}. See CSS flexbox justify-content.
     * Also accepts responsive values with `@breakpoint`: "center right@lg"
     */
    justify: {
      type: String,
      validator: value => propValidator(
        value,
        ['left', 'center', 'right', 'around', 'between'],
      ),
    },
    /**
     * How columns of different heights should align. {top, middle, bottom, stretch}.
     * Also accepts responsive values with `@breakpoint`: "top middle@sm"
     * See CSS flexbox align-items.
     */
    align: {
      type: String,
      validator: value => propValidator(
        value,
        ['top', 'middle', 'bottom', 'stretch'],
      ),
    },
    /**
     * Overrides default gutter spacing. {none, xxs}.
     * Also accepts responsive values with `@breakpoint`: "none@md"
     */
    gutter: {
      type: String,
      validator: value => propValidator(
        value,
        ['none', 'xxs'],
      ),
    },
    /**
     * Changes row to a column layout. See CSS flexbox flex-direction.
     * Also accepts responsive values with `@breakpoint`: "vertical@md"
     */
    vertical: {
      type: String,
      validator: value => propValidator(
        value,
        ['vertical'],
      ),
    },
    /**
     * Enables row wrapping. Only needs to be changed if overriding `nowrap`. See CSS flexbox flex-wrap.
     * Also accepts responsive values with `@breakpoint`: "wrap@md"
     */
    wrap: {
      type: String,
      validator: value => propValidator(
        value,
        ['wrap'],
      ),
    },
    /**
     * Disables row wrapping and enables overflow scrolling. See CSS flexbox flex-wrap.
     * Also accepts responsive values with `@breakpoint`: "nowrap@md"
     */
    nowrap: {
      type: String,
      validator: value => propValidator(
        value,
        ['nowrap'],
      ),
    },
    /**
     * Changes grid to built with ul>li rather than divs. {normal, list}
     */
    type: {
      type: String,
      default: 'normal',
      validator: value => propValidator(
        value,
        ['normal', 'list'],
        false,
      ),
    },
  },
  provide() {
    return {
      rowType: this.type,
    };
  },
  computed: {
    colsClass() {
      const classStr = [];

      if (this.cols) {
        this.cols.split(' ').forEach((val) => {
          classStr.push(this.$style[`cdr-row_row${val}`]);
        });
      }

      return classStr.join(' ');
    },
    justifyClass() {
      const classStr = [];

      if (this.justify) {
        this.justify.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-row', val));
        });
      }

      return classStr.join(' ');
    },
    alignClass() {
      const classStr = [];

      if (this.align) {
        this.align.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-row', val));
        });
      }

      return classStr.join(' ');
    },
    gutterClass() {
      const classStr = [];

      if (this.gutter) {
        this.gutter.split(' ').forEach((val) => {
          classStr.push(this.$style[`cdr-row--gutter-${val}`]);
        });
      }

      return classStr.join(' ');
    },
    verticalClass() {
      const classStr = [];

      if (this.vertical) {
        this.vertical.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-row', val));
        });
      }

      return classStr.join(' ');
    },
    wrapClass() {
      const classStr = [];

      if (this.wrap) {
        this.wrap.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-row', val));
        });
      }

      return classStr.join(' ');
    },
    nowrapClass() {
      const classStr = [];

      if (this.nowrap) {
        this.nowrap.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-row', val));
        });
      }

      return classStr.join(' ');
    },
  },
};
</script>

<style module>
@import 'cssdir/settings/_index.pcss';
@import "./styles/Grid.vars.pcss";
@import "./styles/CdrRow.pcss";
</style>
