<template>
  <div :class="$style['cdr-input-container']">
    <label
      v-if="!hideLabel"
      :class="labelClass"
      :for="inputId"
      ref="label"
    >{{ label }}<span v-if="required">*</span>
    </label>
    <div :class="[inputWrapClass]">
      <textarea
        v-if="multiLine"
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
        :aria-describedby="errors.length ? messagesId : null"
        ref="input"
      />

      <input
        v-else
        :type="type"
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
        :aria-describedby="errors.length ? messagesId : null"
        ref="input"
      >
      <span
        v-if="$slots.preicon"
        :class="$style['cdr-input__pre-icon']"
        aria-hidden="true"
      >
        <!-- @slot Icon to be put in front of input -->
        <slot name="preicon"/>
      </span>
      <span
        v-if="feedback"
        :class="validationIconClass"
        v-html="getIcon"
        ref="icon"
      />
    </div>
    <transition-group
      :class="$style['cdr-input-messages']"
      :id="messagesId"
      ref="messages"
      name="cdr-animated-errors"
      tag="div"
    >
      <div
        :class="messageClass"
        ref="error"
        v-for="error in errors"
        :error="error"
        :key="error">{{ error }}</div>
    </transition-group>
  </div>
</template>

<script>
import debounce from 'srcdir/utils/debounce';
import modifier from 'mixinsdir/modifier';

// const checkIcon = require('assetsdir/icons/rei/check-lg.svg');
const errorIcon = require('assetsdir/icons/rei/warning-fill.svg');
const warningIcon = require('assetsdir/icons/rei/warning-tri.svg');

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
     * Changes the input to a textarea.
    */
    multiLine: Boolean,
    /**
     * Regex validation pattern. Useful for simple validation.
    */
    pattern: String,
    /**
     * Error message to be displayed when `pattern` validation fails.
    */
    patternError: String,
    /**
     * Enables icon feedback as part of validation for valid, warn, and error states.
    */
    feedback: Boolean,
    /**
     * Input type. NOTE: This component is meant for text style inputs. Other input types (checkbox, radio) have their own components.
    */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * Array of functions. Provide your own validation function(s). Takes the input string and outputs an object with a state and message. State is a String with value `valid`, `warning`, or `error`. Message is any String.
    */
    rules: {
      type: Array,
      default: () => [],
    },
    /**
     * Boolean or Number. `true` has a default of 500ms. Providing a number will set debounce to that (in ms). `false` is no debounce.
    */
    debounce: {
      type: [Boolean, Number],
      required: false,
      default: false,
    },
    /** @ignore */
    disabled: Boolean,
    /** @ignore */
    required: Boolean,
    /** @ignore */
    immediateValidate: Boolean,
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
      pristine: true,
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
    messagesId() {
      return `err${this._uid}`; // eslint-disable-line no-underscore-dangle
    },
    baseClass() {
      return 'cdr-input';
    },
    labelClass() {
      return {
        [this.$style['cdr-input__label']]: true,
        [this.$style['cdr-input__label--error']]: this.isErr,
        [this.$style['cdr-input__label--disabled']]: this.disabled,
      };
    },
    inputClass() {
      return {
        [this.$style['cdr-input']]: true,
        [this.$style['cdr-input--multiline']]: this.multiLine,
        [this.$style['cdr-input--error']]: this.isErr,
        [this.$style['cdr-input--warn']]: this.isWarn,
        [this.$style['cdr-input--preicon']]: this.$slots.preicon,
      };
    },
    inputWrapClass() {
      return {
        [this.$style['cdr-input-wrap']]: true,
        [this.$style['cdr-input-wrap--actions']]: this.$slots.pre || this.$slots.post,
      };
    },
    validationIconClass() {
    /* istanbul ignore next */
      return {
        [this.$style['cdr-input-wrap__icon']]: true,
        [this.$style['cdr-input-wrap__icon--error']]: this.isErr,
        [this.$style['cdr-input-wrap__icon--warn']]: this.isWarn,
        [this.$style['cdr-input-wrap__icon--valid']]: this.isValid,
      };
    },
    messageClass() {
      return {
        [this.$style['cdr-input-messages__notification']]: true,
        [this.$style['cdr-input-messages__notification--error']]: this.isErr,
        [this.$style['cdr-input-messages__notification--warn']]: this.isWarn,
      };
    },
    getIcon() {
      let icon = '';

      if (this.isErr) {
        icon = errorIcon;
      // } else if (this.isValid) {
      //   icon = checkIcon;
      } else if (this.isWarn) {
        icon = warningIcon;
      }

      return icon;
    },
    // Check if debounce is enabled, defined, or default
    debounceVal() {
      if (this.debounce === false) {
        return 0;
      } else if (!Number.isNaN(this.debounce) && this.debounce !== '' && this.debounce !== true) {
        return this.debounce;
      }
      return 500;
    },
    isErr() {
      return this.state === 'error';
    },
    isWarn() {
      return this.state === 'warn';
    },
    isValid() {
      return this.state === 'valid';
    },
  },
  watch: {
    focused(val) {
      this.touched = true;

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
      this.validate();
    },
  },
  mounted() {
    // Convert pattern to a rule for testing
    if (this.pattern) {
      const regPattern = new RegExp(this.pattern);
      this.rules.push((text) => {
        const obj = {};
        if (regPattern.test(text)) {
          obj.state = 'valid';
        } else {
          obj.state = 'error';
          obj.message = this.patternError || '';
        }
        return obj;
      });
    }
    // Provide some default validation for required
    if (this.required) {
      this.rules.push((text) => {
        const obj = {};
        // interacted with, not currently focsed, and empty
        if (this.touched && !this.focused && text === '') {
          obj.state = 'warn';
          obj.message = 'This field is required';
        }
        return obj;
      });
    }

    if (this.immediateValidate) {
      this.validate(true);
    }
  },
  methods: {
    onInput(e) {
      this.pristine = false;
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
      this.validate(true);
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
      this.validate(true);
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
    validate(immediate = false) {
      // only validate rules if there are any
      if (this.rules.length > 0) {
        const delay = immediate ? 0 : this.debounceVal;
        (debounce(() => {
          this.errors = [];
          this.valid = false;

          this.rules.forEach((rule) => {
            const validObj = rule(this.currentValue);
            validObj.state = validObj.state ? validObj.state : this.state;

            if (validObj.state === 'valid') {
              this.state = validObj.state;
            } else if (validObj.state === 'warn') {
              this.state = validObj.state;
              this.errors.push(validObj.message);
            } else {
              this.state = validObj.state;
              if (validObj.message) {
                this.errors.push(validObj.message);
              }
            }
          });
        }, delay))();
      }
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrInput.vars.pcss';
  @import './styles/CdrInput.pcss';
</style>
