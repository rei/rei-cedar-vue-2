<template>
  <div :class="[$style[baseClass], $style[typeClass]]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';

export default defineComponent({
  name: 'CdrAlert',
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
  setup(props) {
    const baseClass = 'cdr-alert';
    const typeClass = computed(() => props.type && buildClass(baseClass, props.type));
    return {
      baseClass,
      typeClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrAlert.scss">
</style>
