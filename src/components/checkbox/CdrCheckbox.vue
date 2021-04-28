<template>
  <cdr-label-wrapper
    :class="$style[baseClass]"
    :size="size"
    :modifier="modifier"
    :label-class="labelClass"
    :content-class="contentClass"
    :background="background"
    :disabled="$attrs.disabled"
  >
    <template #input>
      <input
        :class="[$style['cdr-checkbox__input'], inputClass]"
        type="checkbox"
        v-bind="$attrs"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        :true-value="customValue ? null : trueValue"
        :false-value="customValue ? null : falseValue"
        :value="customValue"
        :indeterminate="indeterminate"
      >
    </template>
    <slot />
  </cdr-label-wrapper>
</template>
<script>
import { defineComponent } from 'vue';
import CdrLabelWrapper from '../labelWrapper/CdrLabelWrapper';
import sizeProps from '../../props/size';
import propValidator from '../../utils/propValidator';
import backgroundProps from '../../props/background';

export default defineComponent({
  name: 'CdrCheckbox',
  components: {
    CdrLabelWrapper,
  },
  inheritAttrs: false,
  props: {
    /**
     * Class that is added to the label for custom styles
     */
    labelClass: String,
    /**
     * Class that is added to the input for custom styles
     */
    inputClass: String,
    /**
     * Class that is added to the slot wrapper for custom styles
     */
    contentClass: String,
    /**
     * Show checkbox in indeterminate state. (NOTE: this is a visual-only state and there is no logic for when to show it)
    */
    indeterminate: {
      type: Boolean,
      default: false,
    },
    /**
     * The value when checked.
    */
    trueValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      default: true,
    },
    /**
     * The value when unchecked.
    */
    falseValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      default: false,
    },
    /**
     * The value when used in a checkbox group. Replaces `trueValue` and `falseValue`.
    */
    customValue: [String, Number, Boolean, Object, Array, Symbol, Function],
    // Set which background type the input renders on
    background: backgroundProps,
    size: sizeProps,

    modifier: {
      type: String,
      default: '',
      validator: (value) => propValidator(value, ['', 'hide-figure']),
    },
    /** @ignore */
    modelValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },
  },
  setup() {
    const baseClass = 'cdr-checkbox';

    return {
      baseClass,
    };
  },
});
</script>
<style lang="scss" module src="./styles/CdrCheckbox.scss">
</style>
