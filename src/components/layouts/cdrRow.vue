<template>
  <div v-if="type === 'normal'" class="cdr-row" :class="[colsClass, justifyClass, alignClass, directionClass, wrapClass, nowrapClass, gutterClass]">
    <slot></slot>
  </div>
  <ul v-else-if="type === 'list'" class="cdr-row" :class="[colsClass, justifyClass, alignClass, directionClass, wrapClass, nowrapClass, gutterClass]">
    <slot></slot>
  </ul>
</template>

<script>
  const blockName = 'cdr-row';
  const bpArr = ['Md', 'Lg', 'Xl', 'Xxl'];

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
      colsClass() {
        let colClass = '';
        if (this.cols) { colClass += `${blockName}_row${this.cols} `; }
        bpArr.forEach((bp) => {
          if (this[`cols${bp}`]) { colClass += `${blockName}_row${this[`cols${bp}`]}-${bp.toLowerCase()} `; }
        });
        return colClass;
      },
      justifyClass() {
        let justifyClass = '';
        if (this.justify) { justifyClass += `${blockName}--${this.justify} `; }
        bpArr.forEach((bp) => {
          if (this[`justify${bp}`]) {
            justifyClass += `${blockName}--${this[`justify${bp}`]}-${bp.toLowerCase()} `;
          }
        });
        return justifyClass;
      },
      alignClass() {
        let alignClass = '';
        if (this.align) { alignClass += `${blockName}--${this.align}`; }
        bpArr.forEach((bp) => {
          if (this[`align${bp}`]) { alignClass += `${blockName}--${this[`align${bp}`]}-${bp.toLowerCase()} `; }
        });
        return alignClass;
      },
      directionClass() {
        let directionClass = '';
        if (this.vertical) { directionClass += `${blockName}--column `; }
        bpArr.forEach((bp) => {
          if (this[`vertical${bp}`]) { directionClass += `${blockName}--column-${bp.toLowerCase()} `; }
        });
        return directionClass;
      },
      gutterClass() {
        let gutterClass = '';
        if (this.gutter) { gutterClass += `${blockName}--gutter-${this.gutter} `; }
        bpArr.forEach((bp) => {
          if (this[`gutter${bp}`]) { gutterClass += `${blockName}--gutter-${this[`gutter${bp}`]}-${bp.toLowerCase()} `; }
        });
        return gutterClass;
      },
      wrapClass() {
        let wrapClass = '';
        bpArr.forEach((bp) => {
          if (this[`wrap${bp}`]) { wrapClass += `${blockName}--wrap-${bp.toLowerCase()} `; }
        });
        return wrapClass;
      },
      nowrapClass() {
        let wrapClass = '';
        if (this.nowrap) { wrapClass += `${blockName}--noWrap `; }
        bpArr.forEach((bp) => {
          if (this[`nowrap${bp}`]) { wrapClass += `${blockName}--noWrap-${bp.toLowerCase()} `; }
        });
        return wrapClass;
      },
    },
  };
</script>

<style>
</style>
