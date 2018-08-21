<template>
  <div :class="$style['cdr-input-container']">
    <label
      v-if="!hideLabel"
      :class="labelClass"
      :for="inputId"
      ref="label"
    >{{ label }}
      <!-- @slot for required indicator -->
      <span
        v-if="$slots.required"
        :class="$style['cdr-input__required-label']">
        <slot name="required"/>
      </span>
    </label>
    <!-- @slot for information -->
    <span
      v-if="$slots.info"
      :class="$style['cdr-input__info-container']">
      <slot name="info"/>
    </span>
    <div :class="[inputWrapClass]">
      <textarea
        v-if="rows && rows > 1"
        :rows="[rows]"
        :class="[inputClass, modifierClass]"
        v-bind="$attrs"
        :id="inputId"
        :value="currentValue"
        @blur="onBlur"
        @input="onInput"
        @focus="onFocus"
        @paste="onPaste"
        @keydown="onKeydown"
        :required="required"
        :disabled="disabled"
        :aria-label="hideLabel ? label : null"
        ref="input"
      />

      <input
        v-else
        type="text"
        :class="[inputClass, modifierClass]"
        v-bind="$attrs"
        :id="inputId"
        :value="currentValue"
        @blur="onBlur"
        @input="onInput"
        @focus="onFocus"
        @paste="onPaste"
        @keydown="onKeydown"
        :required="required"
        :disabled="disabled"
        :aria-label="hideLabel ? label : null"
        ref="input"
      >
      <!-- @slot Icon to be put in front of input -->
      <span
        v-if="$slots.preicon"
        :class="$style['cdr-input__pre-icon']">
        <slot name="preicon"/>
      </span>
      <!-- @slot Icon to be put at end of input -->
      <span
        v-if="$slots.posticon"
        :class="$style['cdr-input__post-icon']">
        <slot name="posticon"/>
      </span>
    </div>
  </div>
</template>

<script>
// import debounce from 'srcdir/utils/debounce';
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for input
 * **NOTE:** `v-model` is required.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrInput',
  mixins: [modifier],
  inheritAttrs: false,
  props: {
    /**
     * `id` for the input that is mapped to the label `for` attribute. If one is not provided, it will be auto generated.
    */
    id: String,
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
     * Adds standard DDS design to signify input is required.
    */
    required: Boolean,
    /**
     * Number of rows for input.  Converts component to text-area if rows greater than 1.
    */
    rows: Number,
    /**
     * Error message to be displayed when `pattern` validation fails.
    */
    patternError: String,

    /** @ignore */
    disabled: Boolean,
    /** @ignore */
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      required: false,
    },
  },
  data() {
    return {
      errors: [],
      currentValue: this.value,
      touched: false,
      valid: false,
      focused: false,
      state: '',
    };
  },
  computed: {
    // Use given id or generate one
    inputId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    baseClass() {
      return 'cdr-input';
    },
    labelClass() {
      return {
        [this.$style['cdr-input__label']]: true,
        [this.$style['cdr-input__label--disabled']]: this.disabled,
      };
    },
    inputClass() {
      return {
        [this.$style['cdr-input']]: true,
        [this.$style['cdr-input--preicon']]: this.$slots.preicon,
      };
    },
    inputWrapClass() {
      return {
        [this.$style['cdr-input-wrap']]: true,
        [this.$style['cdr-input-wrap--actions']]: this.$slots.pre || this.$slots.post,
      };
    },
  },
  watch: {
    focused(val) {
      /**
      * New input value (if changed). Fires on blur.
      * @event change
      * @type string
      */
      if (val) {
        this.$emit('change', val);
      }
    },
    value(val) {
      this.setCurrentValue(val);
    },
  },
  methods: {
    onInput(e) {
      const { value } = e.target;
      /**
      * Current input value. Fires while typing.
      * Returns (value, event)
      * @event input
      * @type {event}
      */
      this.$emit('input', value, e);
      this.setCurrentValue(value);
    },
    onBlur(e) {
      this.$nextTick(() => {
        this.focused = false;
      });
      /**
      * Fires when input loses focus.
      * @event blur
      * @type {event}
      */
      this.$emit('blur', e);
    },
    onFocus(e) {
      /**
      * Fires when input gains focus.
      * @event focus
      * @type {event} */
      this.focused = true;
      this.$emit('focus', e);
    },
    onPaste(e) {
      /**
      * Fires when text is pasted into input.
      * @event paste
      * @type {event}
       */
      this.$emit('paste', e);
    },
    onKeydown(e) {
      /**
      * Fires when a key is pressed.
      * @event keydown
      * @type {event}
       */
      this.$emit('keydown', e);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrInput.vars.pcss';
  @import './styles/CdrInput.pcss';
</style>
