<template>
  <!-- !row && !list -->
  <div
    v-if="!isRow && !isList"
    :class="[$style['cdr-col'],columnClasses]"
  >
    <div :class="$style['cdr-col__content']">
      <!-- @slot innerHTML inside of the column component -->
      <slot/>
    </div>
  </div>

  <!-- !row && list -->
  <li
    v-else-if="!isRow && isList"
    :class="[$style['cdr-col'],columnClasses]"
  >
    <div :class="$style['cdr-col__content']">
      <!-- @slot innerHTML inside of the column component -->
      <slot/>
    </div>
  </li>

  <!-- row && list -->
  <li
    v-else-if="isRow && isList"
    :class="[$style['cdr-row'], $style['cdr-col'],columnClasses]"
  >
    <cdr-row
      :class="$style['cdr-col']"
      v-bind="$attrs"
    >
      <!-- @slot innerHTML inside of the column component -->
      <slot/>
    </cdr-row>
  </li>

  <!-- else -->
  <cdr-row
    v-else
    :class="[$style['cdr-col'],columnClasses]"
    v-bind="$attrs"
  >
    <!-- @slot innerHTML inside of the column component -->
    <slot/>
  </cdr-row>
</template>

<script>
import CdrRow from './CdrRow';

/**
 * Cedar 2 component for column
 * **Note**: immediate children of `cdr-col` are treated as flex items (due to a flex height bug in Safari). As a result, if you want to have more than one child element they should be wrapped in a single `div` element.
 * **NOTE**: anytime a `cdr-col` is nested within another `cdr-col` the parent needs `is-row` to function correctly
 * See cdr-row for complex example.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrCol',
  components: { CdrRow },
  inject: {
    rowType: { default: 'normal' },
  },
  inheritAttrs: false,
  props: {
    /**
     * Number of columns (1-12) the column should span.
     */
    span: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** Sm breakpoint and above */
    spanSm: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** Md breakpoint and above */
    spanMd: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** Lg breakpoint and above */
    spanLg: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /**
     * Number of columns (1-12) of empty space to add left of this column.
     */
    offsetLeft: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** Sm breakpoint and above */
    offsetLeftSm: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** Md breakpoint and above */
    offsetLeftMd: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** Lg breakpoint and above */
    offsetLeftLg: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /**
     * Number of columns (1-12) of empty space to add right of this column.
     */
    offsetRight: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** Sm breakpoint and above */
    offsetRightSm: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** Md breakpoint and above */
    offsetRightMd: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** Lg breakpoint and above */
    offsetRightLg: {
      type: [String, Number],
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /**
     * How the column should align (overrides cdr-row alignment). Possible values: {top, middle, bottom, stretch}. See CSS flexbox align-self.
     */
    alignSelf: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** Sm breakpoint and above */
    alignSelfSm: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** Md breakpoint and above */
    alignSelfMd: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** Lg breakpoint and above */
    alignSelfLg: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /**
     * Makes the column act as a new cdr-row. Setting this to true exposes the same props as cdr-row.
     */
    isRow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isList() {
      return this.rowType === 'list';
    },
    columnClasses() {
      const classObj = {};
      // span
      classObj[this.$style[`cdr-col_span${this.span}`]] = this.span;
      classObj[this.$style[`cdr-col_span${this.spanSm}@sm`]] = this.spanSm;
      classObj[this.$style[`cdr-col_span${this.spanMd}@md`]] = this.spanMd;
      classObj[this.$style[`cdr-col_span${this.spanLg}@lg`]] = this.spanLg;
      // offset left
      classObj[this.$style[`cdr-col--offsetLeft${this.offsetLeft}`]] = this.offsetLeft;
      classObj[this.$style[`cdr-col--offsetLeft${this.offsetLeftSm}@sm`]] = this.offsetLeftSm;
      classObj[this.$style[`cdr-col--offsetLeft${this.offsetLeftMd}@md`]] = this.offsetLeftMd;
      classObj[this.$style[`cdr-col--offsetLeft${this.offsetLeftLg}@lg`]] = this.offsetLeftLg;
      // offset right
      classObj[this.$style[`cdr-col--offsetRight${this.offsetRight}`]] = this.offsetRight;
      classObj[this.$style[`cdr-col--offsetRight${this.offsetRightSm}@sm`]] = this.offsetRightSm;
      classObj[this.$style[`cdr-col--offsetRight${this.offsetRightMd}@md`]] = this.offsetRightMd;
      classObj[this.$style[`cdr-col--offsetRight${this.offsetRightLg}@lg`]] = this.offsetRightLg;
      // align
      classObj[this.$style[`cdr-col--${this.alignSelf}`]] = this.alignSelf;
      classObj[this.$style[`cdr-col--${this.alignSelfSm}@sm`]] = this.alignSelfSm;
      classObj[this.$style[`cdr-col--${this.alignSelfMd}@md`]] = this.alignSelfMd;
      classObj[this.$style[`cdr-col--${this.alignSelfLg}@lg`]] = this.alignSelfLg;

      return classObj;
    },
  },
};
</script>

<style module>
@import 'cssdir/settings/_index.pcss';
@import "./styles/Grid.vars.pcss";
@import "./styles/CdrCol.pcss";
</style>
