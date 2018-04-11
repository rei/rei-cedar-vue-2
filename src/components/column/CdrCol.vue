<template>
  <div
    v-if="!isRow && !isList"
    class="cdr-col"
    :class="columnClasses"
  >
    <div class="cdr-col__content">
      <!-- @slot innerHTML inside of the column component -->
      <slot/>
    </div>
  </div>
  <li
    v-else-if="!isRow && isList"
    class="cdr-col"
    :class="columnClasses"
  >
    <div class="cdr-col__content">
      <!-- @slot innerHTML inside of the column component -->
      <slot/>
    </div>
  </li>
  <li
    v-else-if="isRow && isList"
    class="cdr-row cdr-col"
    :class="columnClasses"
  >
    <cdr-row
      class="cdr-col"
      v-bind="$attrs"
    >
      <!-- @slot innerHTML inside of the column component -->
      <slot/>
    </cdr-row>
  </li>
  <cdr-row
    v-else
    class="cdr-col"
    :class="columnClasses"
    v-bind="$attrs"
  >
    <!-- @slot innerHTML inside of the column component -->
    <slot/>
  </cdr-row>
</template>

<script>
import { CdrRow } from '@rei/cdr-row';

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
      classObj[`cdr-col_span${this.span}`] = this.span;
      classObj[`cdr-col_span${this.spanSm}@sm`] = this.spanSm;
      classObj[`cdr-col_span${this.spanMd}@md`] = this.spanMd;
      classObj[`cdr-col_span${this.spanLg}@lg`] = this.spanLg;
      // offset left
      classObj[`cdr-col--offsetLeft${this.offsetLeft}`] = this.offsetLeft;
      classObj[`cdr-col--offsetLeft${this.offsetLeftSm}@sm`] = this.offsetLeftSm;
      classObj[`cdr-col--offsetLeft${this.offsetLeftMd}@md`] = this.offsetLeftMd;
      classObj[`cdr-col--offsetLeft${this.offsetLeftLg}@lg`] = this.offsetLeftLg;
      // offset right
      classObj[`cdr-col--offsetRight${this.offsetRight}`] = this.offsetRight;
      classObj[`cdr-col--offsetRight${this.offsetRightSm}@sm`] = this.offsetRightSm;
      classObj[`cdr-col--offsetRight${this.offsetRightMd}@md`] = this.offsetRightMd;
      classObj[`cdr-col--offsetRight${this.offsetRightLg}@lg`] = this.offsetRightLg;
      // align
      classObj[`cdr-col--${this.alignSelf}`] = this.alignSelf;
      classObj[`cdr-col--${this.alignSelfSm}@sm`] = this.alignSelfSm;
      classObj[`cdr-col--${this.alignSelfMd}@md`] = this.alignSelfMd;
      classObj[`cdr-col--${this.alignSelfLg}@lg`] = this.alignSelfLg;

      return classObj;
    },
  },
};
</script>
