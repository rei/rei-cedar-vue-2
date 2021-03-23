<template>
  <div :class="[$style[baseClass], $style[wrapperClass]]">
    <label
      v-if="!hideLabel"
      :class="[$style['cdr-label-standalone__label'], $style[disabledLabelClass]]"
      :for="forId"
    >
      {{ label }}{{ required || optional ? ' ' : '' }}
      <span
        v-if="required"
        aria-label="required"
      >
        *
      </span>

      <span
        v-else-if="optional"
        :class="$style['cdr-label-standalone__optional']"
      >
        (optional)
      </span>
    </label>

    <br v-if="!hideLabel && hasHelper">
    <span
      :class="$style['cdr-label-standalone__helper']"
      v-if="hasHelper"
    >
      <slot name="helper" />
    </span>

    <span
      v-if="hasInfo"
      :class="$style['cdr-label-standalone__info']"
    >
      <slot name="info" />
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'CdrLabelStandalone',
  props: {
    forId: {
      type: String,
      required: true,
    },
    label: String,
    disabled: Boolean,
    required: Boolean,
    optional: Boolean,
    hideLabel: Boolean,
  },
  setup(props, ctx) {
    const baseClass = 'cdr-label-standalone';
    const hasHelper = ctx.slots.helper;
    const hasInfo = ctx.slots.info;
    const disabledLabelClass = computed(() => props.disabled
      && 'cdr-label-standalone__label--disabled');
    const wrapperClass = computed(() => (!props.hideLabel || hasHelper || hasInfo)
      && 'cdr-label-standalone--spacing');
    return {
      hasHelper,
      hasInfo,
      baseClass,
      disabledLabelClass,
      wrapperClass,
    };
  },
});

</script>

<style lang="scss" module src="./styles/CdrLabelStandalone.scss">
</style>
