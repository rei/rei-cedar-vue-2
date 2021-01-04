<template>
  <div :class="alertClass">
    {{ this.$slots.default && this.$slots.default() }}
  </div>
</template>


<script lang="ts">
import { defineComponent, computed } from 'vue'
import propValidator from '../../utils/propValidator';

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
    const alertClass = computed(() => props.type && `cdr-alert cdr-alert--${props.type}`)
    return {
      alertClass,
    }
  }
});
</script>
