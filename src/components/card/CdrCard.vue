<template>
  <component
    :is="tag"
    :class="$style[baseClass]"
  >
    <slot />
  </component>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CdrCard',
  props: {
    tag: {
      type: String,
      default: 'article',
    },
  },
  setup() {
    return {
      baseClass: 'cdr-card',
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrCard.scss">
</style>
