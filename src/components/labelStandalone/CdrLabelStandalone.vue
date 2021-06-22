<template>
  <div :class="$style[baseClass]">
    <div :class="$style['cdr-label-standalone__label-wrapper']">
      <label
        :class="mapClasses($style, 'cdr-label-standalone__label', disabledLabelClass, srOnlyLabelClass)"
        :for="forId"
      >
        {{ label }}{{ required || optional ? '' : '' }}
        <span
          v-if="required"
          aria-label="required"
        >*</span>

        <span
          v-else-if="optional"
          :class="$style['cdr-label-standalone__optional']"
        >(optional)</span>
      </label>

      <br v-if="!hideLabel && hasHelper">
      <span
        :class="$style['cdr-label-standalone__helper']"
        :id="`${forId}-helper-text-top`"
        v-if="hasHelper"
      >
        <slot name="helper" />
      </span>
    </div>
    <div :class="mapClasses($style, 'cdr-label-standalone__input-wrap', inputSpacingClass)">
      <slot />
      <div
        v-if="hasInfoAction"
        :class="$style['cdr-label-standalone__info-action']"
      >
        <slot name="info-action" />
      </div>
    </div>

    <span
      v-if="hasInfo"
      :class="$style['cdr-label-standalone__info']"
    >
      <slot name="info" />
    </span>

    <div :class=":style['cdr-label-standalone__post-content']">
      <slot name="helper-text-bottom"/>
      <slot name="error"/>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue';
import mapClasses from '../../utils/mapClasses';

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
    const hasInfoAction = ctx.slots['info-action'];
    const disabledLabelClass = computed(() => props.disabled
      && 'cdr-label-standalone__label--disabled');
    const srOnlyLabelClass = computed(() => props.hideLabel
      && 'cdr-label-standalone__label--sr-only');
    const inputSpacingClass = computed(() => (!props.hideLabel || hasHelper || hasInfo)
      && 'cdr-label-standalone__input--spacing');
    return {
      mapClasses,
      hasHelper,
      hasInfo,
      hasInfoAction,
      baseClass,
      disabledLabelClass,
      srOnlyLabelClass,
      inputSpacingClass,
    };
  },
});

</script>

<style lang="scss" module src="./styles/CdrLabelStandalone.scss">
</style>
