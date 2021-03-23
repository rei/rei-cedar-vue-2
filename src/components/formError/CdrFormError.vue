<template>
  <div :class="$style[baseClass]">
    <span :class="$style[iconClass]" /> <slot name="error" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CdrFormError',
  props: {
    error: [Boolean, String],
  },
  setup() {
    const baseClass = 'cdr-form-error';
    const iconClass = 'cdr-form-error__icon';

    return {
      baseClass,
      iconClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrFormError.scss">
</style>
