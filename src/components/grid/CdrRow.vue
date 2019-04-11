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
    <slot />
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import propValidator from 'srcdir/utils/propValidator';

export default {
  name: 'CdrRow',
  mixins: [modifier],
  props: {
    /**
     * Number of equal-width columns in the row. A value of ‘auto’ will size columns as wide as their content.
     * Possible values: {1-12, auto}
     * Also accepts responsive values with `@breakpoint`: "2 4@breakpoint--md"
     */
    cols: {
      type: String,
      validator: value => propValidator(
        value,
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
      ),
    },
    /**
     * Justify columns within a row. See CSS flexbox justify-content.
     * Possible values: {left, center, right, around, between}.
     * Also accepts responsive values with `@breakpoint`: "center right@breakpoint--lg"
     */
    justify: {
      type: String,
      validator: value => propValidator(
        value,
        ['left', 'center', 'right', 'around', 'between'],
      ),
    },
    /**
     * Align columns of different heights. See CSS flexbox align-items.
     * Possible values: {top, middle, bottom, stretch}.
     * Also accepts responsive values with `@breakpoint`: "top middle@breakpoint--sm"
     */
    align: {
      type: String,
      validator: value => propValidator(
        value,
        ['top', 'middle', 'bottom', 'stretch'],
      ),
    },
    /**
     * Defines gutter size. Default gutter size is 16px @breakpoint--xs and @breakpoint--sm and 32px @breakpoint--md and @breakpoint--lg.
     * Possible values: {none, xxs}.
     * Also accepts responsive values with `@breakpoint`: "none@breakpoint--md"
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
     * Possible values: {vertical}.
     * Also accepts responsive values with `@breakpoint`: "vertical@breakpoint--md"
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
     * Possible values: {wrap}.
     * Also accepts responsive values with `@breakpoint`: "wrap@breakpoint--md"
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
     * Possible values: {nowrap}.
     * Also accepts responsive values with `@breakpoint`: "nowrap@breakpoint--md"
     */
    nowrap: {
      type: String,
      validator: value => propValidator(
        value,
        ['nowrap'],
      ),
    },
    /**
     * Sets grid to use `ul` and `li` or `div`.
     * Possible values: {normal, list}.
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
