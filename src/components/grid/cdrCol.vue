<template>
  <div v-if="!isRow && !isList" class="cdr-col" :class="[spanClass, alignClass, offsetClass, hideClass]">
    <div class="cdr-col__content">
      <slot></slot>
    </div>
  </div>
  <li v-else-if="!isRow && isList" class="cdr-col" :class="[spanClass, alignClass, offsetClass, hideClass]">
    <div class="cdr-col__content">
      <slot></slot>
    </div>
  </li>
  <li v-else-if="isRow && isList" class="cdr-row cdr-col" :class="[spanClass, alignClass, offsetClass, hideClass]">
    <row class="cdr-col" v-bind="$attrs">
      <slot></slot>
    </row>
  </li>
  <row v-else class="cdr-col" :class="[spanClass, alignClass, offsetClass, hideClass]" v-bind="$attrs">
    <slot></slot>
  </row>
</template>

<script>
  import Row from './cdrRow';

  const blockName = 'cdr-col';
  const bpArr = ['Md', 'Lg', 'Xl', 'Xxl'];


  export default {
    name: 'cdr-col',
    components: { Row },
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
    inject: ['rowType'],
    computed: {
      isList() {
        return this.rowType === 'list';
      },
      spanClass() {
        let spanClass = '';
        if (this.span) { spanClass += `${blockName}_span${this.span} `; }
        bpArr.forEach((bp) => {
          if (this[`span${bp}`]) { spanClass += `${blockName}_span${this[`span${bp}`]}@${bp.toLowerCase()} `; }
        });
        return spanClass;
      },
      hideClass() {
        let hideClass = '';
        if (this.hide) { hideClass += `${blockName}--hide-${this.hide} `; }
        bpArr.forEach((bp) => {
          if (this[`hide${bp}`]) { hideClass += `${blockName}--hide@${bp.toLowerCase()}-${this[`hide${bp}`]} `; }
        });
        return hideClass;
      },
      offsetClass() {
        let offClass = '';
        if (this.offsetLeft) { offClass += `${blockName}--offsetLeft${this.offsetLeft} `; }
        bpArr.forEach((bp) => {
          if (this[`offsetLeft${bp}`]) { offClass += `${blockName}--offsetLeft${this[`offsetLeft${bp}`]}@${bp.toLowerCase()} `; }
        });
        if (this.offsetRight) { offClass += `${blockName}--offsetRight${this.offsetRight} `; }
        bpArr.forEach((bp) => {
          if (this[`offsetRight${bp}`]) { offClass += `${blockName}--offsetRight${this[`offsetRight${bp}`]}@${bp.toLowerCase()} `; }
        });
        return offClass;
      },
      alignClass() {
        let alignClass = '';
        if (this.alignSelf) { alignClass += `${blockName}--${this.alignSelf}`; }
        bpArr.forEach((bp) => {
          if (this[`alignSelf${bp}`]) { alignClass += `${blockName}--${this[`alignSelf${bp}`]}@${bp.toLowerCase()} `; }
        });
        return alignClass;
      },
    },
  };
</script>

<style>
</style>
