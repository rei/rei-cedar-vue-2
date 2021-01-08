<template>
  <div :class="wrapperClass">
      <label
        v-if="!hideLabel"
        :class="labelClass"
        :for="forId"
        ref="label"
      >
        {{ label }}{{ required || optional ? ' ' : ''}}
        <span v-if="required" aria-label="required">
          *
        </span>

        <span
          v-else-if="optional"
          :class="optionalClass"
        >
          (optional)
        </span>
      </label>

<!-- TODO: ??? -->
    {{ this.labelEl && this.$slots.helper && (<br/>) }}


<!-- need to make booleans in setup for whether slots exist? -->
    { this.$slots.helper && (
      <span
        class={this.style['cdr-label-standalone__helper']}
      >
        <slot name="helper"/>
      </span>
    )}

    {this.$slots.info && (
      <span
        class={this.style['cdr-label-standalone__info']}
      >
        <slot name="info"/>
      </span>
    )}
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import style from './styles/CdrLabelStandalone.scss';

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
    // optionalClass
    // helper class
    // info class
    // labelClass() {
    //   return {
    //     [this.style['cdr-label-standalone__label']]: true,
    //     [this.style['cdr-label-standalone__label--disabled']]: this.disabled,
    //   };
    // },
    // wrapperClass() {
    //   const hasContent = !this.hideLabel || this.$slots.helper || this.$slots.info;
    //   return {
    //     [this.style['cdr-label-standalone']]: true,
    //     [this.style['cdr-label-standalone--spacing']]: hasContent,
    //   };
    // },
    return {

      hasLabel: ctx.slots.label,
      hasHelpeer: ctx.slots.helper,
      hasInfo: ctx.slots.info,
    };
  },
});

</script>
