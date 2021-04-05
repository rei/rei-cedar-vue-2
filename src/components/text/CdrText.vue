<template>
  <component
    :is="tag"
    :class="$style[baseClass]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { buildClass } from '../../utils/buildClass';

export default defineComponent({
  name: 'CdrText',
  props: {
    tag: {
      type: String,
      default: 'p',
    },
  },
  setup(props) {
    const baseClass = 'cdr-text';

    return {
      baseClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrText.scss">
</style>
