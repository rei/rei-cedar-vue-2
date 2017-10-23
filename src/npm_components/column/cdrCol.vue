<template>
  <div v-if="!isRow && !isList" class="cdr-col" :class="columnClasses">
    <div class="cdr-col__content">
      <slot></slot>
    </div>
  </div>
  <li v-else-if="!isRow && isList" class="cdr-col" :class="columnClasses">
    <div class="cdr-col__content">
      <slot></slot>
    </div>
  </li>
  <li v-else-if="isRow && isList" class="cdr-row cdr-col" :class="columnClasses">
    <row class="cdr-col" v-bind="$attrs">
      <slot></slot>
    </row>
  </li>
  <row v-else class="cdr-col" :class="columnClasses" v-bind="$attrs">
    <slot></slot>
  </row>
</template>

<script>
import Row from './node_modules/@rei-co-op/cedar-row';

export default {
  name: 'cdr-col',
  components: { Row },
  inject: ['rowType'],
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
     * How the column should align (overrides cdr-row alignment).
     * {top, middle, bottom, stretch}.
     * See CSS flexbox align-self.
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
     * Control when column should be hidden. {up, down, only}.
     * 'up' hides at breakpoint and up.
     * 'down' hides at breakpoint and down.
     * 'only' hides only at breakpoint.
     */
    hide: {
      type: String,
      validator: value => (['up', 'down', 'only'].indexOf(value) >= 0) || false,
    },
    /** Sm breakpoint and above */
    hideSm: {
      type: String,
      validator: value => (['up', 'down', 'only'].indexOf(value) >= 0) || false,
    },
    /** Md breakpoint and above */
    hideMd: {
      type: String,
      validator: value => (['up', 'down', 'only'].indexOf(value) >= 0) || false,
    },
    /** Lg breakpoint and above */
    hideLg: {
      type: String,
      validator: value => (['up', 'down', 'only'].indexOf(value) >= 0) || false,
    },
    /**
     * Makes the column act as a new cdr-row.
     * Setting this to true exposes the same props as cdr-row.
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
      // hide
      classObj[`cdr-col--hide-${this.hide}`] = this.hide;
      classObj[`cdr-col--hide@sm-${this.hideSm}`] = this.hideSm;
      classObj[`cdr-col--hide@md-${this.hideMd}`] = this.hideMd;
      classObj[`cdr-col--hide@lg-${this.hideLg}`] = this.hideLg;
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
