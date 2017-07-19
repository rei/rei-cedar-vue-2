<template>
  <div v-if="type === 'normal'" class="cdr-row" :class="rowClasses">
    <slot></slot>
  </div>
  <ul v-else-if="type === 'list'" class="cdr-row" :class="rowClasses">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'cdr-row',
  props: {
    /**
     * Number of columns in the row (1-12).
     */
    cols: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** md breakpoint and above */
    colsMd: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** lg breakpoint and above */
    colsLg: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** xl breakpoint and above */
    colsXl: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /** xxl breakpoint and above */
    colsXxl: {
      type: String,
      validator: (value) => {
        const num = parseInt(value, 10);
        return (num > 0 && num <= 12) || false;
      },
    },
    /**
     * How columns should be justified within empty space of the row.
     * {left, center, right, around, between}.
     * See CSS flexbox justify-content.
     */
    justify: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0) || false,
    },
    /** md breakpoint and above */
    justifyMd: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0) || false,
    },
    /** lg breakpoint and above */
    justifyLg: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0) || false,
    },
    /** xl breakpoint and above */
    justifyXl: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0) || false,
    },
    /** xxl breakpoint and above */
    justifyXxl: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value) >= 0) || false,
    },
    /**
     * How columns of different heights should align.
     * {top, middle, bottom, stretch}.
     * See CSS flexbox align-items.
     */
    align: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** md breakpoint and above */
    alignMd: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** lg breakpoint and above */
    alignLg: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** xl breakpoint and above */
    alignXl: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** xxl breakpoint and above */
    alignXxl: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /**
     * Overrides default gutter spacing.
     * {none}.
     */
    gutter: {
      type: String,
      validator: value => (['none'].indexOf(value) >= 0) || false,
    },
    /** md breakpoint and above */
    gutterMd: {
      type: String,
      validator: value => (['none'].indexOf(value) >= 0) || false,
    },
    /** lg breakpoint and above */
    gutterLg: {
      type: String,
      validator: value => (['none'].indexOf(value) >= 0) || false,
    },
    /** xl breakpoint and above */
    gutterXl: {
      type: String,
      validator: value => (['none'].indexOf(value) >= 0) || false,
    },
    /** xxl breakpoint and above */
    gutterXxl: {
      type: String,
      validator: value => (['none'].indexOf(value) >= 0) || false,
    },
    /**
     * Changes row to a column layout.
     * See CSS flexbox flex-direction.
     */
    vertical: {
      type: Boolean,
      default: false,
    },
    /** md breakpoint and above */
    verticalMd: {
      type: Boolean,
      default: false,
    },
    /** lg breakpoint and above */
    verticalLg: {
      type: Boolean,
      default: false,
    },
    /** xl breakpoint and above */
    verticalXl: {
      type: Boolean,
      default: false,
    },
    /** xxl breakpoint and above */
    verticalXxl: {
      type: Boolean,
      default: false,
    },
    /**
     * Enables row wrapping. Only needs to be changed if overriding `nowrap`
     * See CSS flexbox flex-wrap.
     */
    wrap: {
      type: Boolean,
      default: false,
    },
    /** md breakpoint and above */
    wrapMd: {
      type: Boolean,
      default: false,
    },
    /** lg breakpoint and above */
    wrapLg: {
      type: Boolean,
      default: false,
    },
    /** xl breakpoint and above */
    wrapXl: {
      type: Boolean,
      default: false,
    },
    /** xxl breakpoint and above */
    wrapXxl: {
      type: Boolean,
      default: false,
    },
    /**
     * Disables row wrapping and enables overflow scrolling.
     * See CSS flexbox flex-wrap.
     */
    nowrap: {
      type: Boolean,
      default: false,
    },
    /** md breakpoint and above */
    nowrapMd: {
      type: Boolean,
      default: false,
    },
    /** lg breakpoint and above */
    nowrapLg: {
      type: Boolean,
      default: false,
    },
    /** xl breakpoint and above */
    nowrapXl: {
      type: Boolean,
      default: false,
    },
    /** xxl breakpoint and above */
    nowrapXxl: {
      type: Boolean,
      default: false,
    },
    /**
     * Changes grid to built with ul>li rather than divs.
     * {normal, list}
     */
    type: {
      type: String,
      default: 'normal',
      validator: value => (['normal', 'list'].indexOf(value) >= 0) || false,
    },
  },

  computed: {
    rowClasses() {
      const classObj = {};
      classObj[`cdr-row_row${this.cols}`] = this.cols;
      classObj[`cdr-row_row${this.colsMd}@md`] = this.colsMd;
      classObj[`cdr-row_row${this.colsLg}@lg`] = this.colsLg;
      classObj[`cdr-row_row${this.colsXl}@xl`] = this.colsXl;
      classObj[`cdr-row_row${this.colsXxl}@xxl`] = this.colsXxl;
      // justify
      classObj[`cdr-row--${this.justify}`] = this.justify;
      classObj[`cdr-row--${this.justifyMd}@md`] = this.justifyMd;
      classObj[`cdr-row--${this.justifyLg}@lg`] = this.justifyLg;
      classObj[`cdr-row--${this.justifyXl}@xl`] = this.justifyXl;
      classObj[`cdr-row--${this.justifyXxl}@xxl`] = this.justifyXxl;
      // align
      classObj[`cdr-row--${this.align}`] = this.align;
      classObj[`cdr-row--${this.alignMd}@md`] = this.alignMd;
      classObj[`cdr-row--${this.alignLg}@lg`] = this.alignLg;
      classObj[`cdr-row--${this.alignXl}@xl`] = this.alignXl;
      classObj[`cdr-row--${this.alignXxl}@xxl`] = this.alignXxl;
      // column
      classObj['cdr-row--column'] = this.vertical;
      classObj['cdr-row--column@md'] = this.verticalMd;
      classObj['cdr-row--column@lg'] = this.verticalLg;
      classObj['cdr-row--column@xl'] = this.verticalXl;
      classObj['cdr-row--column@xxl'] = this.verticalXxl;
      // gutter
      classObj[`cdr-row--gutter-${this.gutter}`] = this.gutter;
      classObj[`cdr-row--gutter-${this.gutterMd}@md`] = this.gutterMd;
      classObj[`cdr-row--gutter-${this.gutterLg}@lg`] = this.gutterLg;
      classObj[`cdr-row--gutter-${this.gutterXl}@xl`] = this.gutterXl;
      classObj[`cdr-row--gutter-${this.gutterXxl}@xxl`] = this.gutterXxl;
      // wrap
      classObj['cdr-row--wrap@md'] = this.wrapMd;
      classObj['cdr-row--wrap@lg'] = this.wrapLg;
      classObj['cdr-row--wrap@xl'] = this.wrapXl;
      classObj['cdr-row--wrap@xxl'] = this.wrapXxl;
      // noWrap
      classObj['cdr-row--noWrap'] = this.nowrap;
      classObj['cdr-row--noWrap@md'] = this.nowrapMd;
      classObj['cdr-row--noWrap@lg'] = this.nowrapLg;
      classObj['cdr-row--noWrap@xl'] = this.nowrapXl;
      classObj['cdr-row--noWrap@xxl'] = this.nowrapXxl;

      return classObj;
    },
  },
};
</script>
