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
        v-if="required"
        :class="$style['cdr-input__required-label']">
        Required
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
        :class="[inputClass, sizeClass]"
        v-bind="$attrs"
        v-model="value"
        :id="inputId"
        @blur="onBlur"
        @input="onInput"
        @focus="onFocus"
        @paste="onPaste"
        @keydown="onKeydown"
        :disabled="disabled"
        :required="required"
        :aria-label="hideLabel ? label : null"
        ref="input"
      />
      <input
        v-else
        :type="type"
        :class="[inputClass, sizeClass]"
        v-bind="$attrs"
        v-model="value"
        :id="inputId"
        @blur="onBlur"
        @input="onInput"
        @focus="onFocus"
        @paste="onPaste"
        @keydown="onKeydown"
        :disabled="disabled"
        :required="required"
        :aria-label="hideLabel ? label : null"
        ref="input"
      >
      <!-- @slot Icon to be put in front of input -->
      <span
        v-if="$slots['pre-icon']"
        :class="$style['cdr-input__pre-icon']">
        <slot name="pre-icon"/>
      </span>
      <!-- @slot Icon to be put at end of input -->
      <span
        v-if="$slots['post-icon']"
        :class="$style['cdr-input__post-icon']">
        <slot name="post-icon"/>
      </span>
    </div>
    <div
      v-if="$slots['helper-text']"
      :class="$style['cdr-input__helper-text']">
      <slot name="helper-text"/>
    </div>
  </div>
</template>

<script>
import size from 'mixinsdir/size';
import propValidator from 'srcdir/utils/propValidator';
/**
 * Cedar 2 component for input
 * **NOTE:** `v-model` is required.
 * @version 1.0.0
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrInput',
  mixins: [size],
  inheritAttrs: false,
  props: {
    /**
     * `id` for the input that is mapped to the label `for` attribute. If one is not provided, it will be auto generated.
    */
    id: String,
    /**
     *  'type' attribute for the input as defined by w3c.  Only supporting text|email|number|password|search|url.
     *  The increment/decrement webkit psuedo element is hidden for number.
     *  See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input for more details.
    */
    type: {
      type: [String],
      default: 'text',
      validator: value => propValidator(
        value,
        ['text', 'email', 'number', 'password', 'search', 'url'],
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
    /** @ignore */
    disabled: Boolean,
    /** @ignore */
    required: Boolean,
    /** @ignore */
    value: String,
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
        [this.$style['cdr-input--multiline']]: this.rows > 1,
        [this.$style['cdr-input--preicon']]: this.$slots['pre-icon'],
      };
    },
    inputWrapClass() {
      return {
        [this.$style['cdr-input-wrap']]: true,
      };
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
    },
    onBlur(e) {
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
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrInput.pcss';
</style>
