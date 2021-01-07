<template>
  <div :class="wrapperClass">
    <table
      :class="componentClass"
    >
      <slot />
    </table>
  </div>

</template>

<script lang="ts">
// TODO: bind attrs and such to the table not the wrapper
// {... { attrs: this.$attrs } }

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
    const sizeClass = computed(() => props.size && buildClass('cdr-table', props.size, style));
    const stripedClass = computed(() => props.striped && modifyClassName('cdr-table', 'striped'));
    const hoverClass = computed(() => props.hover && modifyClassName('cdr-table', 'hover'));
    const borderClass = computed(() => props.border && !props.striped && modifyClassName('cdr-table', 'border'));
    const fullWidthClass = computed(() => props.fullWidth && responsiveModifyClass('cdr-table', 'full-width', this.fullWidth));
    const componentClass = computed(() => clsx(baseClass, sizeClass, stripedClass, hoverClass, borderClass, fullWidthClass));
    const wrapperClass = computed(() => props.responsive && modifyClassName('cdr-table', 'responsive'));

    return {
      wrapperClass,
      componentClass,
    };
  },
});

</script>
