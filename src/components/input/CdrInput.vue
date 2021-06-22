<template>
  <cdr-label-standalone
    :for-id="id"
    :label="label"
    :hide-label="hideLabel"
    :required="required"
    :optional="optional"
    :disabled="disabled"
  >
    <template
      #helper
      v-if="hasHelperTop"
    >
      <slot name="helper-text-top" />
    </template>
    <template
      #info
      v-if="hasInfo"
    >
      <slot name="info" />
    </template>

    <!-- default input slot -->
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
        :aria-required="required"
        :aria-invalid="!!error"
        :aria-errormessage="!!error && `${id}-error`"
        v-bind="inputAttrs"
        :value="modelValue"
        :aria-describedby="describedby || false"
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
        :aria-required="required"
        :aria-invalid="!!error"
        :aria-errormessage="!!error && `${id}-error`"
        v-bind="inputAttrs"
        :aria-describedby="describedby || false"
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


    <template
      #info-action
      v-if="hasInfoAction"
    >
      <slot name="info-action" />
    </template>

    <template #helper-text-bottom v-if="hasHelperBottom && !error">
      <span
        :id="`${id}-helper-text-bottom`"
        :class="$style['cdr-input__helper-text']"
      >
        <slot name="helper-text-bottom" />
      </span>
    </template>

    <template #error v-if="error">
      <cdr-form-error
        :error="error"
        :role="errorRole"
        :id="`${id}-error`"
        v-if="error"
      >
        <template #error>
          <slot name="error" />
        </template>
      </cdr-form-error>
    </template>
  </cdr-label-standalone>
</template>
<script>
import { defineComponent, computed, ref } from 'vue';
import propValidator from '../../utils/propValidator';
import CdrLabelStandalone from '../labelStandalone/CdrLabelStandalone';
import CdrFormError from '../formError/CdrFormError';
import sizeProps from '../../props/size';
import backgroundProps from '../../props/background';
import { buildClass } from '../../utils/buildClass';
import mapClasses from '../../utils/mapClasses';

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
    // sets default attrs for inputs that should use a numeric keyboard but are not strictly "numbers" (security code, CC number, postal code)
    numeric: {
      type: Boolean,
      default: false,
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

    /**
     * Override the error message role, default is `status`.
     */
    errorRole: {
      type: String,
      required: false,
      default: 'status',
    },
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
    const hasPostIcons = false; // hasPostIcon && ctx.slots['post-icon']().length > 1;
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

    const describedby = computed(() => {
      return [
        ctx.slots['helper-text-top'] ? `${props.id}-helper-text-top` : '',
        ctx.slots['helper-text-bottom'] ? `${props.id}-helper-text-bottom` : '',
        ctx.attrs['aria-describedby'],
      ].filter((x) => x).join(' ');
    })


    const inputAttrs = computed(() => {
      const isNum = props.numeric || props.type === 'number';
      return {
        autocorrect: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        pattern: isNum && '[0-9]*',
        inputmode: isNum && 'numeric',
        novalidate: isNum,
        ...ctx.attrs,
      };
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
      describedby,
      mapClasses,
    };
  },
});
</script>
<style lang="scss" module src="./styles/CdrInput.scss">
</style>
