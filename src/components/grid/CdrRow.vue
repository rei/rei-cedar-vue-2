<template>
  <component
    :is="tag"
    :class="componentClass"
  >
    <slot/>
  </component>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';

import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';
import style from './styles/CdrRow.scss';

export default {
  name: 'CdrRow',
  props: {
    /**
     * Number of equal-width columns in the row. A value of ‘auto’ will size columns as wide as their content.
     * Possible values: {1-12, auto}
     * Also accepts responsive values with `@breakpoint`: "2 4@md"
     */
    cols: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
      ),
    },
    /**
     * Justify columns within a row. See CSS flexbox justify-content.
     * Possible values: {left, center, right, around, between}.
     * Also accepts responsive values with `@breakpoint`: "center right@lg"
     */
    justify: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['left', 'center', 'right', 'around', 'between'],
      ),
    },
    /**
     * Align columns of different heights. See CSS flexbox align-items.
     * Possible values: {top, middle, bottom, stretch}.
     * Also accepts responsive values with `@breakpoint`: "top middle@sm"
     */
    align: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['top', 'middle', 'bottom', 'stretch'],
      ),
    },
    /**
     * Defines gutter size. Default gutter size is 16px @xs and @sm (small) and 32px @md and @lg (medium).
     * Possible values: {none, xxs, small, medium}.
     * Also accepts responsive values with `@breakpoint`: "none@md"
     */
    gutter: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['none', 'xxs', 'small', 'medium'],
      ),
    },
    /**
     * Changes row to a column layout. See CSS flexbox flex-direction.
     * Possible values: {vertical}.
     * Also accepts responsive values with `@breakpoint`: "vertical@md"
     */
    vertical: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['vertical'],
      ),
    },
    /**
     * Enables row wrapping. Only needs to be changed if overriding `nowrap`. See CSS flexbox flex-wrap.
     * Possible values: {wrap}.
     * Also accepts responsive values with `@breakpoint`: "wrap@md"
     */
    wrap: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['wrap'],
      ),
    },
    /**
     * Disables row wrapping and enables overflow scrolling. See CSS flexbox flex-wrap.
     * Possible values: {nowrap}.
     * Also accepts responsive values with `@breakpoint`: "nowrap@md"
     */
    nowrap: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['nowrap'],
      ),
    },
    /**
     * Sets grid to use `ul` and `li` or `div`.
     * Possible values: {normal, list}.
     */
    type: {
      type: String,
      default: 'normal',
      validator: (value) => propValidator(
        value,
        ['normal', 'list'],
        false,
      ),
    },
  },
  // TODO: use this for formGroup? accordion/tabs possibly?
  // https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity
  // provide() { ??????
  //   return {
  //     rowType: this.type,
  //   };
  // },

  // whoa provide/inject are actually kinda neat?

  setup(props) {
    const tag = this.type === 'list' ? 'ul' : 'div';
    const baseClass = style['cdr-row'];
    const colsClass = computed(() => buildClass('cdr-row_row', props.cols, style));
    const justifyClass = computed(() => buildClass('cdr-row', props.justify, style));
    const alignClass = computed(() => buildClass('cdr-row', props.align, style));
    const verticalClass = computed(() => buildClass('cdr-row', props.vertical, style));
    const gutterClass = computed(() => buildClass('cdr-row__gutter', props.gutter, style));
    const wrapClass = computed(() => buildClass('cdr-row', props.wrap, style));
    const nowrapClass = computed(() => buildClass('cdr-row', props.nowrap, style));

    return {
      clsx,
      tag,
      baseClass,
      colsClass,
      justifyClass,
      alignClass,
      verticalClass,
      gutterClass,
      wrapClass,
      nowrapClass,
    };
  },
};

</script>
