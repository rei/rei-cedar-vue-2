<template>
  <fieldset
    :class="[$style[baseClass], $style[disabledClass]]"
    :disabled="disabled"
  >
    <legend>
      <slot name="label" /><span v-if="!hasLabelSlot">{{ label }}</span>
      <span v-if="required || optional" />
      <span aria-label="required">*</span>
      <span :class="$style['cdr-form-group__optional']">
        (optional)
      </span>
    </legend>
    <div :class="[$style['cdr-form-group__wrapper'], $style[errorClass]]">
      <slot />
    </div>
    <cdr-form-error
      :error="error"
      v-if="error"
    >
      <template slot="error">
        <slot name="error" />
      </template>
    </cdr-form-error>
  </fieldset>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import CdrFormError from '../formError/CdrFormError';

export default defineComponent({
  name: 'CdrFormGroup',
  components: {
    CdrFormError,
  },
  props: {
    label: {
      type: String,
      default: '',
      required: false,
    },
    // Set error styling
    error: {
      type: [Boolean, String],
      default: false,
    },
    required: Boolean,
    optional: Boolean,
    disabled: Boolean,
  },
  setup(props, ctx) {
    const baseClass = 'cdr-form-group';
    const errorClass = computed(() => props.error && 'cdr-form-group--error');
    const disabledClass = computed(() => props.disabled && 'cdr-form-group--disabled');
    const hasLabelSlot = ctx.slots.label;
    return {
      baseClass,
      errorClass,
      disabledClass,
      hasLabelSlot,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrFormGroup.scss">
</style>
