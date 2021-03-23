<template>
  <!-- TODO: can probably make this an if/else? -->
  <div
    v-if="!this.isRow && !this.isList"
    :class="mapClasses($style, ...componentClasses)"
  >
    <div :class="$style[contentClass]">
      <slot/>
    </div>
  </div>
  <li
    v-else-if="!this.isRow && this.isList"
    :class="mapClasses($style, ...componentClasses)"
  >
    <div :class="this.style[contentClass]">
      <slot/>
    </div>
  </li>
  <li
    v-else-if="this.isRow && this.isList"
    :class="mapClasses($style, rowClass, ...componentClasses)"
    >
    <cdr-row
      :class="$style[baseClass]"
      v-bind="$attrs"
    >
      <slot/>
    </cdr-row>
  </li>
  <cdr-row
    v-else
    :class="mapClasses($style, ...componentClasses)"
    v-bind="$attrs"
  >
    <slot/>
  </cdr-row>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass'
import propValidator from '../../utils/propValidator';
import mapClasses from '../../utils/mapClasses';
import CdrRow from './CdrRow';

export default defineComponent({
  name: 'CdrCol',
  components: { CdrRow },
  // https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity
  inject: {
    rowType: { default: 'normal' },
  },
  inheritAttrs: false,
  props: {
    /**
     * Number of columns (out of 12) the column should span. Functions like bootstrap col-* classes.
     * Overrides widths set by "cols" prop on CdrRow.
     * Possible values: {1-12}
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    span: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * Number of columns (out of 12) of empty space to add left of this column.
     * Possible values: {0-12}
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    offsetLeft: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * Number of columns (out of 12) of empty space to add right of this column.
     * Possible values: {0-12}
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    offsetRight: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * How the column should align (overrides CdrRow alignment). See CSS flexbox align-self.
     * Possible values: {top, middle, bottom, stretch}.
     * Also accepts responsive values with `@breakpoint`: "middle@sm"
     */
    alignSelf: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['top', 'middle', 'bottom', 'stretch'],
      ),
    },
    /**
     * Makes the column act as a CdrRow. Setting this to true exposes all props of CdrRow in addition to cdr-col props.
     */
    isRow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props,ctx) {
    const baseClass = 'cdr-col';
    const rowClass = 'cdr-row';
    const contentClass = 'cdr-col__content';
    const isList = computed(() => props.rowType === 'list');

    const spanClass = computed(() => {
      const classStr = [];

      if (this.span) {
        this.span.split(' ').forEach((val) => {
          classStr.push(this.style[`cdr-col_span${val}`]);
        });
      }

      return classStr.join(' ');
    });
    const offsetLeftClass = computed(() => {
      const classStr = [];

      if (this.offsetLeft) {
        this.offsetLeft.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', `offsetLeft${val}`));
        });
      }

      return classStr.join(' ');
    });
    const offsetRightClass = computed(() => {
      const classStr = [];

      if (this.offsetRight) {
        this.offsetRight.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', `offsetRight${val}`));
        });
      }

      return classStr.join(' ');
    });
    const alignSelfClass = computed(() => {
      const classStr = [];

      if (this.alignSelf) {
        this.alignSelf.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', val));
        });
      }

      return classStr.join(' ');
    });

    // Function that takees space delineated class names and a $style and returns them

    return {
      mapClasses,
      isList,
      // baseClass,
      // spanClass,
      // offsetLeftClass,
      // offsetRightClass,
      // alignSelfClass,
      rowClass,
      componentClasses: [
        baseClass, spanClass, offsetLeftClass, offsetRightClass, alignSelfClass
      ]

    }
  },
});
</script>
<style lang="scss" module src="./styles/CdrCol.scss">
</style>
