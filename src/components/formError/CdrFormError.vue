<template>
  <div :class="componentClass">
    <span :class="iconClass"/> <slot v-if="hasErrorSlot" name="error"/>{{!hasErrorSlot && error}}
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import style from './styles/CdrFormError.scss';

export default {
  name: 'CdrFormError',
  props: {
    error: [Boolean, String],
  },
  setup(props, ctx) {
    const componentClass = style['cdr-form-error'];
    const iconClass = style['cdr-form-error__icon'];

    // TODO: does this neeed to be computed?
    const hasErrorSlot = ctx.slots.error;
    return {
      hasErrorSlot,
      componentClass,
      iconClass,
    };
  },
};
</script>
