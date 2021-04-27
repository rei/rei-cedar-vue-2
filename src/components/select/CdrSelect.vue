<template>
  <cdr-label-standalone
    :for-id="id"
    :label="label "
    :hide-label="hideLabel "
    :required="required "
    :optional="optional "
    :disabled="disabled "
  >
    <template
      slot="helper"
      v-if="hasHelper"
    >
      <slot name="helper-text" />
    </template>
    <template
      slot="info"
      v-if="hasInfo"
    >
      <slot name="info" />
    </template>
  </cdr-label-standalone>
  <div :class="$style['cdr-select-outer-wrap']">
    <div :class="$style['cdr-select-wrap']">
      <span
        v-if="hasPreIcon"
        :class="$style['cdr-select__pre-icon']"
      >
        <slot name="pre-icon" />
      </span>

      <select
        :class="[
          $style[baseClass],
          $style[sizeClass],
          $style[promptClass],
          $style[multipleClass],
          $style[backgroundClass],
          $style[errorClass],
          $style[preIconClass],
        ]"
        :id="selectId"
        :multiple="multiple"
        :size="multipleSize"
        :disabled="disabled"
        :required="required"
        :aria-label="hideLabel ? label : null"
        v-bind="$attrs"
        :value="modelValue"
        @change="$emit('update:modelValue', multiple
          ? processMultiple($event.target.options)
          : $event.target.value)
        "
      >
        <option
          v-if="prompt"
          :class="$style['cdr-select__prompt']"
          value=""
          disabled
        >
          {{ prompt }}
        </option>
        <option
          v-for="option in computedOpts"
          :key="option.text"
          :value="option.value"
        >
          {{ option.text }}
        </option>
        <slot />
      </select>

      <icon-caret-down :class="[$style['cdr-select__caret'], $style[caretDisabledClass]]" />
    </div>
    <div
      v-if="hasInfoAction"
      class="$style['cdr-select__info-action']"
    >
      <slot name="info-action" />
    </div>
  </div>
  <cdr-form-error
    :error="error"
    v-if="error"
  >
    <template slot="error">
      <slot name="error" />
    </template>
  </cdr-form-error>
</template>

<script>
import { defineComponent, computed } from 'vue';
import toArray from 'lodash-es/toArray';
import IconCaretDown from '../icon/comps/caret-down';
import CdrLabelStandalone from '../labelStandalone/CdrLabelStandalone';
import CdrFormError from '../formError/CdrFormError';
import sizeProps from '../../props/size';
import backgroundProps from '../../props/background';
import { buildClass } from '../../utils/buildClass';

// CHANGES
// prompt stylee now gets applied?
// v-model on change???? yess correct?
export default defineComponent({
  name: 'CdrSelect',
  components: {
    IconCaretDown,
    CdrLabelStandalone,
    CdrFormError,
  },
  inheritAttrs: false,
  props: {
    /**
     * `id` for the select that is mapped to the label `for` attribute. If one is not provided, it will be generated.
    */
    id: {
      type: String,
      required: true,
    },
    /**
     * Label text. This is required for a11y even if hiding the label with `hideLabel`.
    */
    label: {
      type: String,
      required: true,
    },
    /**
     * Removes the label element but sets the select `aria-label` to `label` text for a11y.
    */
    hideLabel: Boolean,
    /**
     * Adds an option that is disabled and selected by default to serve as a `placeholder` for the select.
    */
    prompt: String,
    /**
     * Build options programatically with data. Array of objects [{ text: String, value: String}] to give greater control. Array of strings ['String'] for simpler setup (value and text will be the same).
    */
    options: {
      type: Array,
    },
    // Set which background type the select renders on
    background: backgroundProps,
    size: sizeProps,
    // Set error styling
    error: {
      type: [Boolean, String],
      default: false,
    },
    modelValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },
    disabled: Boolean,
    required: Boolean,
    optional: Boolean,
    multiple: Boolean,
    multipleSize: Number,
  },
  setup(props, ctx) {
    const baseClass = 'cdr-select';

    const hasHelper = ctx.slots['helper-text'];
    const hasInfo = ctx.slots.info;
    const hasInfoAction = ctx.slots['info-action'];
    const hasPreIcon = ctx.slots['pre-icon'];

    const promptClass = computed(() => !props.modelValue && 'cdr-select--preicon');
    const multilineClass = computed(() => props.rows > 1 && 'cdr-select--multiline');
    const preIconClass = computed(() => hasPreIcon && 'cdr-select--preicon');
    const errorClass = computed(() => props.error && 'cdr-select--error');
    const backgroundClass = computed(() => `cdr-select--${props.background}`);
    const sizeClass = computed(() => props.size && buildClass(baseClass, props.size));
    const caretDisabledClass = computed(() => props.disabled && 'cdr-select--disabled');

    // TODO: refactor, would be much clearer as a 1-2 liner
    const computedOpts = computed(() => {
      const optsArr = [];
      if (props.options) {
        props.options.forEach((o) => {
          const optObj = {};
          let text = '';
          let val = '';
          if (typeof o === 'string') {
            text = o;
            val = o;
          } else {
            const { text: t, value: v } = o;
            text = t;
            val = v;
          }
          optObj.text = text;
          optObj.value = val;
          optsArr.push(optObj);
        });
      }
      return optsArr;
    });

    const processMultiple = (options) => toArray(options)
      .filter((o) => o.selected === true)
      .map((o) => o.value);

    return {
      baseClass,
      computedOpts,
      hasHelper,
      hasInfo,
      hasInfoAction,
      hasPreIcon,

      processMultiple,

      promptClass,
      multilineClass,
      preIconClass,
      errorClass,
      backgroundClass,
      sizeClass,
      caretDisabledClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrSelect.scss">
</style>
