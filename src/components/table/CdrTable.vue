<template>
  <div :class="$style[wrapperClass]">
    <table
      v-bind="$attrs"
      :class="clsx(
        $style[baseClass],
        $style[sizeClass],
        $style[stripedClass],
        $style[hoverClass],
        $style[borderClass],
        $style[fullWidthClass],
      )"
    >
      <slot />
    </table>
  </div>

</template>
<!-- TODO: class and style are now part of attrs, which breaks stuff? -->
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass, buildBooleanClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';

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
    const stripedClass = computed(() => props.striped && buildClass('cdr-table', 'striped'));
    const hoverClass = computed(() => props.hover && buildClass('cdr-table', 'hover'));
    const borderClass = computed(() => props.border && !props.striped && buildClass('cdr-table', 'border'));
    const fullWidthClass = computed(() => props.fullWidth &&
      buildBooleanClass(baseClass, props.fullWidth, 'full-width')
    );
    const wrapperClass = computed(() => props.responsive && buildClass('cdr-table', 'responsive'));

    return {
      wrapperClass,
      baseClass,
      sizeClass,
      stripedClass,
      hoverClass,
      borderClass,
      fullWidthClass,
    };
  },
});

</script>

<style lang="scss" module src="./styles/CdrTable.scss">
</style>
