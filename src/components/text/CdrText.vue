<template>
  <component
    :is="tag"
    :class="$style['cdr-text']"
  >
    <slot />
  </component>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CdrText',
  props: {
    tag: {
      type: String,
      default: 'p',
    },
  },
});
</script>

<style lang="scss" module src="./styles/CdrText.scss">
</style>
