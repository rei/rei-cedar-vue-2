<template>
  <component
    :is="tag"
    :class="clsx($style[baseClass], modifierClass)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass';

export default defineComponent({
  name: 'CdrText',
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    modifier: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const baseClass = 'cdr-text';
    const modifierClass = computed(() => buildClass(baseClass, props.modifier));

    return {
      baseClass,
      modifierClass,
      clsx,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrText.scss">
</style>
