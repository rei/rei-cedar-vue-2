<template>
  <div :class="wrapperClass">
    <table
      v-bind="$attrs"
      :class="componentClass"
    >
      <slot />
    </table>
  </div>

</template>
<!-- TODO: class and style are now part of attrs, which breaks stuff? -->
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass, modifyClassName, responsiveModifyClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrTable.scss';

export default defineComponent({
  name: 'CdrTable',
  props: {
    striped: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    fullWidth: {
      type: [Boolean, String],
      default: true,
    },
    responsive: {
      type: Boolean,
      default: true,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => propValidator(
        value,
        ['small', 'medium', 'large'],
      ),
    },
  },
  setup(props) {
    const baseClass = style['cdr-table'];
    // Performance? one big class computed or multiple? just use clsx in the template to bind them?
    const sizeClass = computed(() => props.size && buildClass('cdr-table', props.size, style));
    const stripedClass = computed(() => props.striped && modifyClassName('cdr-table', 'striped'));
    const hoverClass = computed(() => props.hover && modifyClassName('cdr-table', 'hover'));
    const borderClass = computed(() => props.border && !props.striped && modifyClassName('cdr-table', 'border'));
    const fullWidthClass = computed(() => props.fullWidth && responsiveModifyClass('cdr-table', 'full-width', this.fullWidth));

    const componentClass = computed(() => clsx(baseClass, sizeClass.value, stripedClass.value, hoverClass.value, borderClass.value, fullWidthClass.value));
    const wrapperClass = computed(() => props.responsive && modifyClassName('cdr-table', 'responsive'));

    return {
      wrapperClass,
      componentClass,
    };
  },
});

</script>
