<template>
  <cdr-label-standalone
    :for-id="id"
    :label="label"
    :hide-label="hideLabel"
    :required="required"
    :optional="optional"
    :disabled="disabled"
  >
    <template v-slot:helper v-if="hasHelperTop">
      <slot name="helper-text-top" />
    </template>
    <template v-slot:info v-if="hasHelperTop">
      <slot name="info" />
    </template>
  </cdr-label-standalone>
  <div :class="$style['cdr-input-outer-wrap']">
    <div :class="mapClasses($style, 'cdr-input-wrap', focusedClass)">
      <textarea
        v-if="rows && rows > 1"
        :rows="rows"
        :class="mapClasses($style,
          baseClass,
          multilineClass,
          preIconClass,
          postIconClass,
          postIconsClass,
          errorClass,
          backgroundClass,
          sizeClass,
        )"
        :id="id"
        :disabled="disabled"
        :required="required"
        :aria-label="hideLabel ? label : null"
        v-bind="inputAttrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <input
        v-else
        :type="type"
        :class="mapClasses($style,
          baseClass,
          preIconClass,
          postIconClass,
          postIconsClass,
          errorClass,
          backgroundClass,
          sizeClass,
        )"
        :id="id"
        :disabled="disabled"
        :required="required"
        :aria-label="hideLabel ? label : null"
        v-bind="inputAttrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      >
      <span
        v-if="hasPreIcon"
        :class="$style['cdr-input__pre-icon']"
      >
        <slot name="pre-icon" />
      </span>

      <span
        v-if="hasPostIcon"
        :class="$style['cdr-input__post-icon']"
      >
        <slot name="post-icon" />
      </span>
    </div>
    <div
      v-if="hasInfoAction"
      :class="$style['cdr-input__info-action']"
    >
      <slot name="info-action" />
    </div>
  </div>
  <span
    :class="$style['cdr-input__helper-text']"
    v-if="hasHelperBottom && !error"
  >
    <slot name="helper-text-bottom" />
  </span>
  <cdr-form-error
    :error="error"
    v-if="error"
  >
    <template v-slot:error>
      <slot name="error" />
    </template>
  </cdr-form-error>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import propValidator from '../../utils/propValidator';
import CdrLabelStandalone from '../labelStandalone/CdrLabelStandalone';
import CdrFormError from '../formError/CdrFormError';
import sizeProps from '../../props/size';
import backgroundProps from '../../props/background';
import { buildClass } from '../../utils/buildClass';
import mapClasses from '../../utils/mapClasses';

// CH CH CHANGES:
// ID is now required !!!
// HELPER-TEXT is now helper-text-bottom
// VALUE is modeelValue
// WRAPPER ELEMENT REMOVED! WRAP IF YOU NEED TO!

// CHECK THESE THINGS:
// does it still calculate postIconSSSSSS correctly?
// slots passed into sub-components working?
// do we need to re-emit focus/blur?!?!?!

export default defineComponent({
  name: 'CdrInput',
  components: {
    CdrLabelStandalone,
    CdrFormError,
  },
  inheritAttrs: false,
  props: {
    /**
     * `id` for the input that is mapped to the label `for` attribute.
    */
    id: {
      type: String,
      required: true,
    },
    /**
     *  'type' attribute for the input as defined by w3c.
     *  Only supporting text|email|number|password|search|url.
     *  The increment/decrement webkit psuedo element is hidden for number.
    */
    type: {
      type: [String],
      default: 'text',
      validator: (value) => propValidator(
        value,
        // TODO: moar types?
        ['text', 'email', 'number', 'password', 'search', 'url', 'tel'],
      ),
    },
    /**
     * Label text. This is required for a11y even if hiding the label with `hideLabel`.
    */
    label: {
      type: String,
      required: true,
    },
    /**
     * Removes the label element but sets the input `aria-label` to `label` text for a11y.
    */
    hideLabel: Boolean,
    /**
     * Number of rows for input.  Converts component to text-area if rows greater than 1.
    */
    rows: Number,
    // Set which background type the input renders on
    background: backgroundProps,
    size: sizeProps,
    // Set error styling
    error: {
      type: [Boolean, String],
      default: false,
    },
    disabled: Boolean,
    required: Boolean,
    optional: Boolean,
    modelValue: {
      type: [String, Number],
    },
  },
  setup(props, ctx) {
    const baseClass = 'cdr-input';
    // console.log(ctx.slots['post-icon']);
// TODO: delete un-used hasSlot props
    const isFocused = ref(false);
    const hasHelperTop = ctx.slots['helper-text-top'];
    const hasHelperBottom = ctx.slots['helper-text-bottom'];
    const hasPreIcon = ctx.slots['pre-icon'];
    const hasPostIcon = ctx.slots['post-icon'];
    // TODO: either this no longer works, or doesnt work in unit test due to VTU array slot bug?
    const hasPostIcons = false; //hasPostIcon && ctx.slots['post-icon']().length > 1;
    const hasInfo = ctx.slots.info;
    const hasInfoAction = ctx.slots['info-action'];

    const multilineClass = computed(() => props.rows > 1 && 'cdr-input--multiline');
    const preIconClass = computed(() => hasPreIcon && 'cdr-input--preicon');
    // TODO: make one class for this? if possible? there must have been a reason i did it like this.....
    const postIconClass = computed(() => hasPostIcon && 'cdr-input--posticon');
    const postIconsClass = computed(() => hasPostIcons && 'cdr-input--posticons');
    const errorClass = computed(() => props.error && 'cdr-input--error');
    const backgroundClass = computed(() => `cdr-input--${props.background}`);
    const sizeClass = computed(() => props.size && buildClass(baseClass, props.size));
    const focusedClass = computed(() => isFocused.value && 'cdr-input--focus');


    const inputAttrs = computed(() => {
      // TODO: do we also need to change the "type" when number?
      // TODO: does this work properly???? isn't it not quite right on vue2 next branch?
      const attrs = {
        autocorrect: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        ...ctx.attrs,
      };
      if (props.type === 'number') {
        attrs.pattern = '[0-9]*';
        attrs.inputmode = 'numeric';
        attrs.novalidate = 'novalidate';
      }
      return attrs;
    });
    
    return {
      baseClass,
      sizeClass,
      focusedClass,
      multilineClass,
      preIconClass,
      postIconClass,
      postIconsClass,
      errorClass,
      backgroundClass,
      isFocused,
      hasHelperTop,
      hasHelperBottom,
      hasPreIcon,
      hasPostIcon,
      hasInfo,
      hasInfoAction,
      inputAttrs,
      mapClasses,
    };
  },
});
</script>
<style lang="scss" module src="./styles/CdrInput.scss">
</style>
