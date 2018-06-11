<template>
  <component
    :is="type === 'list' ? 'ul' : 'div'"
    :class="[$style['cdr-row'], colsClass, justifyClass, alignClass, gutterClass, rowClasses]"
  >
    <!-- @slot innerHTML inside the row component -->
    <slot/>
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
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
     * Number of columns in the row (1-12, auto). Also accepts responsive values with `@breakpoint`: "2 4@md"
     */
    cols: {
      type: [String, Number],
      // validator: (value) => {
      //   const str = value.toString();
      //   return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']
      //     .indexOf(str) >= 0 || false;
      // },
    },
    /**
     * How columns should be justified within empty space of the row.
     * Possible values: {left, center, right, around, between}. See CSS flexbox justify-content.
     * Also accepts responsive values with `@breakpoint`: "center right@lg"
     */
    justify: {
      type: String,
      // validator: value => (['left', 'center', 'right', 'around', 'between']
      //   .indexOf(value) >= 0) || false,
    },
    /**
     * How columns of different heights should align. {top, middle, bottom, stretch}.
     * Also accepts responsive values with `@breakpoint`: "top middle@sm"
     * See CSS flexbox align-items.
     */
    align: {
      type: String,
      // validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value) >= 0) || false,
    },
    /**
     * Overrides default gutter spacing. {none, xxs}.
     * Also accepts responsive values with `@breakpoint`: "none@md"
     */
    gutter: {
      type: String,
      // validator: value => (['none', 'xxs'].indexOf(value) >= 0) || false,
    },
    /**
     * Changes row to a column layout. See CSS flexbox flex-direction.
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
     * Enables row wrapping. Only needs to be changed if overriding `nowrap`. See CSS flexbox flex-wrap.
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
     * Disables row wrapping and enables overflow scrolling. See CSS flexbox flex-wrap.
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
     * Changes grid to built with ul>li rather than divs. {normal, list}
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
    rowClasses() {
      const classObj = {};
      // column
      classObj[this.$style['cdr-row--column']] = this.vertical;
      classObj[this.$style['cdr-row--column@sm']] = this.verticalSm;
      classObj[this.$style['cdr-row--column@md']] = this.verticalMd;
      classObj[this.$style['cdr-row--column@lg']] = this.verticalLg;
      // wrap
      classObj[this.$style['cdr-row--wrap@sm']] = this.wrapSm;
      classObj[this.$style['cdr-row--wrap@md']] = this.wrapMd;
      classObj[this.$style['cdr-row--wrap@lg']] = this.wrapLg;
      // noWrap
      classObj[this.$style['cdr-row--noWrap']] = this.nowrap;
      classObj[this.$style['cdr-row--noWrap@sm']] = this.nowrapSm;
      classObj[this.$style['cdr-row--noWrap@md']] = this.nowrapMd;
      classObj[this.$style['cdr-row--noWrap@lg']] = this.nowrapLg;

      return classObj;
    },
  },
};
</script>

<style module>
@import 'cssdir/settings/_index.pcss';
@import "./styles/Grid.vars.pcss";
@import "./styles/CdrRow.pcss";
</style>
