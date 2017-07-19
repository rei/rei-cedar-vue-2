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
import Row from './cdrRow';

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
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** md breakpoint and above */
    spanMd: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** lg breakpoint and above */
    spanLg: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** xl breakpoint and above */
    spanXl: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** xxl breakpoint and above */
    spanXxl: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /**
     * Number of columns (1-12) of empty space to add left of this column.
     */
    offsetLeft: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** md breakpoint and above */
    offsetLeftMd: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** lg breakpoint and above */
    offsetLeftLg: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** xl breakpoint and above */
    offsetLeftXl: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** xxl breakpoint and above */
    offsetLeftXxl: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /**
     * Number of columns (1-12) of empty space to add right of this column.
     */
    offsetRight: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** md breakpoint and above */
    offsetRightMd: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** lg breakpoint and above */
    offsetRightLg: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** xl breakpoint and above */
    offsetRightXl: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num >= 0 && num <= 12) || false;
      },
    },
    /** xxl breakpoint and above */
    offsetRightXxl: {
      type: String,
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
    /** md breakpoint and above */
    alignSelfMd: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** lg breakpoint and above */
    alignSelfLg: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** xl breakpoint and above */
    alignSelfXl: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** xxl breakpoint and above */
    alignSelfXxl: {
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
    /** md breakpoint and above */
    hideMd: {
      type: String,
      validator: value => (['up', 'down', 'only'].indexOf(value) >= 0) || false,
    },
    /** lg breakpoint and above */
    hideLg: {
      type: String,
      validator: value => (['up', 'down', 'only'].indexOf(value) >= 0) || false,
    },
    /** xl breakpoint and above */
    hideXl: {
      type: String,
      validator: value => (['up', 'down', 'only'].indexOf(value) >= 0) || false,
    },
    /** xxl breakpoint and above */
    hideXxl: {
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
      classObj[`cdr-col_span${this.spanMd}@md`] = this.spanMd;
      classObj[`cdr-col_span${this.spanLg}@lg`] = this.spanLg;
      classObj[`cdr-col_span${this.spanXl}@xl`] = this.spanXl;
      classObj[`cdr-col_span${this.spanXxl}@xxl`] = this.spanXxl;
      // hide
      classObj[`cdr-col--hide-${this.hide}`] = this.hide;
      classObj[`cdr-col--hide@md-${this.hideMd}`] = this.hideMd;
      classObj[`cdr-col--hide@lg-${this.hideLg}`] = this.hideLg;
      classObj[`cdr-col--hide@xl-${this.hideXl}`] = this.hideXl;
      classObj[`cdr-col--hide@xxl-${this.hideXxl}`] = this.hideXxl;
      // offset left
      classObj[`cdr-col--offsetLeft${this.offsetLeft}`] = this.offsetLeft;
      classObj[`cdr-col--offsetLeft${this.offsetLeftMd}@md`] = this.offsetLeftMd;
      classObj[`cdr-col--offsetLeft${this.offsetLeftLg}@lg`] = this.offsetLeftLg;
      classObj[`cdr-col--offsetLeft${this.offsetLeftXl}@xl`] = this.offsetLeftXl;
      classObj[`cdr-col--offsetLeft${this.offsetLeftXxl}@xxl`] = this.offsetLeftXxl;
      // offset right
      classObj[`cdr-col--offsetRight${this.offsetRight}`] = this.offsetRight;
      classObj[`cdr-col--offsetRight${this.offsetRightMd}@md`] = this.offsetRightMd;
      classObj[`cdr-col--offsetRight${this.offsetRightLg}@lg`] = this.offsetRightLg;
      classObj[`cdr-col--offsetRight${this.offsetRightXl}@xl`] = this.offsetRightXl;
      classObj[`cdr-col--offsetRight${this.offsetRightXxl}@xxl`] = this.offsetRightXxl;
      // align
      classObj[`cdr-col--${this.alignSelf}`] = this.alignSelf;
      classObj[`cdr-col--${this.alignSelfMd}@md`] = this.alignSelfMd;
      classObj[`cdr-col--${this.alignSelfLg}@lg`] = this.alignSelfLg;
      classObj[`cdr-col--${this.alignSelfXl}@xl`] = this.alignSelfXl;
      classObj[`cdr-col--${this.alignSelfXxl}@xxl`] = this.alignSelfXxl;

      return classObj;
    },
  },
};
</script>
