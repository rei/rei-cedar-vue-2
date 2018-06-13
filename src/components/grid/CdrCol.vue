<template>
  <!-- !row && !list -->
  <div
    v-if="!isRow && !isList"
    :class="[
      $style['cdr-col'],
      spanClass,
      offsetLeftClass,
      offsetRightClass,
      alignSelfClass,
    ]"
  >
    <div :class="$style['cdr-col__content']">
      <!-- @slot innerHTML inside of the column component -->
      <slot/>
    </div>
  </div>

  <!-- !row && list -->
  <li
    v-else-if="!isRow && isList"
    :class="[
      $style['cdr-col'],
      spanClass,
      offsetLeftClass,
      offsetRightClass,
      alignSelfClass,
    ]"
  >
    <div :class="$style['cdr-col__content']">
      <!-- @slot innerHTML inside of the column component -->
      <slot/>
    </div>
  </li>

  <!-- row && list -->
  <li
    v-else-if="isRow && isList"
    :class="[
      $style['cdr-row'],
      $style['cdr-col'],
      spanClass,
      offsetLeftClass,
      offsetRightClass,
      alignSelfClass,
    ]"
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
    :class="[
      $style['cdr-col'],
      spanClass,
      offsetLeftClass,
      offsetRightClass,
      alignSelfClass,
    ]"
    v-bind="$attrs"
  >
    <!-- @slot innerHTML inside of the column component -->
    <slot/>
  </cdr-row>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import propValidator from 'srcdir/utils/propValidator';
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
  mixins: [modifier],
  inject: {
    rowType: { default: 'normal' },
  },
  inheritAttrs: false,
  props: {
    /**
     * Number of columns (1-12) the column should span.
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    span: {
      type: String,
      validator: value => propValidator(
        value,
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * Number of columns (0-12) of empty space to add left of this column.
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    offsetLeft: {
      type: [String, Number],
      validator: value => propValidator(
        value,
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * Number of columns (0-12) of empty space to add right of this column.
     * Also accepts responsive values with `@breakpoint`: "12 8@lg"
     */
    offsetRight: {
      type: [String, Number],
      validator: value => propValidator(
        value,
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ),
    },
    /**
     * How the column should align (overrides cdr-row alignment). Possible values: {top, middle, bottom, stretch}. See CSS flexbox align-self.
     * Also accepts responsive values with `@breakpoint`: "middle@sm"
     */
    alignSelf: {
      type: String,
      validator: value => propValidator(
        value,
        ['top', 'middle', 'bottom', 'stretch'],
      ),
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
    spanClass() {
      const classStr = [];

      if (this.span) {
        this.span.split(' ').forEach((val) => {
          classStr.push(this.$style[`cdr-col_span${val}`]);
        });
      }

      return classStr.join(' ');
    },
    offsetLeftClass() {
      const classStr = [];

      if (this.offsetLeft) {
        this.offsetLeft.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', `offsetLeft${val}`));
        });
      }

      return classStr.join(' ');
    },
    offsetRightClass() {
      const classStr = [];

      if (this.offsetRight) {
        this.offsetRight.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', `offsetRight${val}`));
        });
      }

      return classStr.join(' ');
    },
    alignSelfClass() {
      const classStr = [];

      if (this.alignSelf) {
        this.alignSelf.split(' ').forEach((val) => {
          classStr.push(this.modifyClassName('cdr-col', val));
        });
      }

      return classStr.join(' ');
    },
  },
};
</script>

<style module>
@import 'cssdir/settings/_index.pcss';
@import "./styles/Grid.vars.pcss";
@import "./styles/CdrCol.pcss";
</style>
