<template>
  <div :class="$style[baseClass]">
    <span :class="$style[iconClass]" /> <slot name="error">{{error}}</slot>
  </div>
</template>
<script>
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
