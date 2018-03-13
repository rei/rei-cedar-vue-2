<template>
  <div
    v-if="type === 'normal'"
    class="cdr-row"
    :class="rowClasses"
  >
    <slot/>
  </div>
  <ul
    v-else-if="type === 'list'"
    class="cdr-row"
    :class="rowClasses"
  >
    <slot/>
  </ul>
</template>

<script>
/**
 * Cedar 2 component for row
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrRow',
  props: {
    /**
     * Number of columns in the row (1-12, auto).
     */
    cols: {
      type: [String, Number],
      validator: (value) => {
        const str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']
          .indexOf(str) >= 0 || false;
      },
    },
    /** Sm breakpoint and above */
    colsSm: {
      type: [String, Number],
      validator: (value) => {
        const str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']
          .indexOf(str) >= 0 || false;
      },
    },
    /** Md breakpoint and above */
    colsMd: {
      type: [String, Number],
      validator: (value) => {
        const str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']
          .indexOf(str) >= 0 || false;
      },
    },
    /** Lg breakpoint and above */
    colsLg: {
      type: [String, Number],
      validator: (value) => {
        const str = value.toString();
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']
          .indexOf(str) >= 0 || false;
      },
    },
    /**
     * How columns should be justified within empty space of the row.
     * {left, center, right, around, between}.
     * See CSS flexbox justify-content.
     */
    justify: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between']
        .indexOf(value) >= 0) || false,
    },
    /** Sm breakpoint and above */
    justifySm: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between']
        .indexOf(value) >= 0) || false,
    },
    /** Md breakpoint and above */
    justifyMd: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between']
        .indexOf(value) >= 0) || false,
    },
    /** Lg breakpoint and above */
    justifyLg: {
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between']
        .indexOf(value) >= 0) || false,
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
    /** Sm breakpoint and above */
    alignSm: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** Md breakpoint and above */
    alignMd: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /** Lg breakpoint and above */
    alignLg: {
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /**
     * Overrides default gutter spacing.
     * {none}.
     */
    gutter: {
      type: String,
      validator: value => (['none', 'xxs'].indexOf(value) >= 0) || false,
    },
    /** Sm breakpoint and above */
    gutterSm: {
      type: String,
      validator: value => (['none', 'xxs'].indexOf(value) >= 0) || false,
    },
    /** Md breakpoint and above */
    gutterMd: {
      type: String,
      validator: value => (['none', 'xxs'].indexOf(value) >= 0) || false,
    },
    /** Lg breakpoint and above */
    gutterLg: {
      type: String,
      validator: value => (['none', 'xxs'].indexOf(value) >= 0) || false,
    },
    /**
     * Changes row to a column layout.
     * See CSS flexbox flex-direction.
     */
    vertical: {
      type: Boolean,
      default: false,
    },
    /** Sm breakpoint and above */
    verticalSm: {
      type: Boolean,
      default: false,
    },
    /** Md breakpoint and above */
    verticalMd: {
      type: Boolean,
      default: false,
    },
    /** Lg breakpoint and above */
    verticalLg: {
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
    /** Sm breakpoint and above */
    wrapSm: {
      type: Boolean,
      default: false,
    },
    /** Md breakpoint and above */
    wrapMd: {
      type: Boolean,
      default: false,
    },
    /** Lg breakpoint and above */
    wrapLg: {
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
    /** Sm breakpoint and above */
    nowrapSm: {
      type: Boolean,
      default: false,
    },
    /** Md breakpoint and above */
    nowrapMd: {
      type: Boolean,
      default: false,
    },
    /** Lg breakpoint and above */
    nowrapLg: {
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
  provide() {
    return {
      rowType: this.type,
    };
  },
  computed: {
    rowClasses() {
      const classObj = {};
      classObj[`cdr-row_row${this.cols}`] = this.cols;
      classObj[`cdr-row_row${this.colsSm}@sm`] = this.colsSm;
      classObj[`cdr-row_row${this.colsMd}@md`] = this.colsMd;
      classObj[`cdr-row_row${this.colsLg}@lg`] = this.colsLg;
      // justify
      classObj[`cdr-row--${this.justify}`] = this.justify;
      classObj[`cdr-row--${this.justifySm}@sm`] = this.justifySm;
      classObj[`cdr-row--${this.justifyMd}@md`] = this.justifyMd;
      classObj[`cdr-row--${this.justifyLg}@lg`] = this.justifyLg;
      // align
      classObj[`cdr-row--${this.align}`] = this.align;
      classObj[`cdr-row--${this.alignSm}@sm`] = this.alignSm;
      classObj[`cdr-row--${this.alignMd}@md`] = this.alignMd;
      classObj[`cdr-row--${this.alignLg}@lg`] = this.alignLg;
      // column
      classObj['cdr-row--column'] = this.vertical;
      classObj['cdr-row--column@sm'] = this.verticalSm;
      classObj['cdr-row--column@md'] = this.verticalMd;
      classObj['cdr-row--column@lg'] = this.verticalLg;
      // gutter
      classObj[`cdr-row--gutter-${this.gutter}`] = this.gutter;
      classObj[`cdr-row--gutter-${this.gutterSm}@sm`] = this.gutterSm;
      classObj[`cdr-row--gutter-${this.gutterMd}@md`] = this.gutterMd;
      classObj[`cdr-row--gutter-${this.gutterLg}@lg`] = this.gutterLg;
      // wrap
      classObj['cdr-row--wrap@sm'] = this.wrapSm;
      classObj['cdr-row--wrap@md'] = this.wrapMd;
      classObj['cdr-row--wrap@lg'] = this.wrapLg;
      // noWrap
      classObj['cdr-row--noWrap'] = this.nowrap;
      classObj['cdr-row--noWrap@sm'] = this.nowrapSm;
      classObj['cdr-row--noWrap@md'] = this.nowrapMd;
      classObj['cdr-row--noWrap@lg'] = this.nowrapLg;

      return classObj;
    },
  },
};
</script>
