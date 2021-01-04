<template>
  <Component
    :is="tag"
    :class="`cdr-text ${modifierClass}`"
  >
    {{ this.$slots.default && this.$slots.default() }}
  </Component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

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
    }
  },
  setup(props) {
    const modifierClass = computed(() => props.modifier && `cdr-text--${props.modifier}`)
    return {
      modifierClass,
      tag: props.tag,
    }
  },
});
</script>
