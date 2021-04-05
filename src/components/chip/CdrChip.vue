<template>
  <button
    :class="$style[this.baseClass]"
  >
    <span v-if="hasIconLeft" :class="$style['cdr-chip__icon-left']">
      <slot name="icon-left" />
    </span>
    <span v-if="hasIconRight" :class="$style['cdr-chip__icon-right']">
      <slot name="icon-right" />
    </span>
    <span :class="$style['cdr-chip__content']">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';

export default defineComponent({
  name: 'CdrChip',
  props: {
    type: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['info', 'warning', 'success', 'error'],
      ),
      default: 'info',
    },
  },
  setup(props, ctx) {
    const baseClass = 'cdr-chip';
    const hasIconLeft = ctx.slots['icon-left'];
    const hasIconRight = ctx.slots['icon-right'];
    return {
      baseClass,
      hasIconLeft,
      hasIconRight,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrChip.scss">
</style>
