<template>
  <div class="cdr-input-container">
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
        :required="required"
        :disabled="disabled"
        :aria-label="hideLabel ? label : null"
        :aria-describedby="errors.length ? messagesId : null"
        ref="input"
      >
      <span
        v-if="$slots.preicon"
        class="cdr-input__pre-icon"
        aria-hidden="true"
      >
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
      class="cdr-input-messages"
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
import debounce from 'Src/utils/debounce';
import modifier from 'Src/mixins/modifier';
/* eslint-disable */
// import/no-webpack-loader-syntax & import/no-unresolved
import checkIcon from '!raw-loader!Assets/icons/rei/cdr-check-lg.svg';
import errorIcon from '!raw-loader!Assets/icons/rei/cdr-x-circ-fill.svg';
import warningIcon from '!raw-loader!Assets/icons/rei/cdr-warning-tri.svg';
/* eslint-enable */

export default {
  name: 'CdrInput',
  mixins: [modifier],
  inheritAttrs: false,
  props: {
    /**
     * id for the input that is mapped to the label 'for' attribute.
     * If one is not provided, it will be auto generated.
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
     * Removes the label element but sets the input 'aria-label' to `label` text for a11y.
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
     * Enables icon feedback as part of validation
     * for valid, warn, and error states.
    */
    feedback: Boolean,
    /**
     * Input type. NOTE: This component is meant for text style inputs.
     * Other input types (checkbox, radio) have their own components.
    */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * Array of functions. Provide your own validation function(s).
     * Takes the input string and outputs an object with a state and message.
     * State is a String with value `valid`, `warning`, or `error`.
     * Message is any String.
    */
    rules: {
      type: Array,
      default: () => [],
    },
    /**
     * Boolean or Number.
     * true has a default of 500ms.
     * Providing a number will set debounce to that (in ms).
     * false is no debounce.
    */
    debounce: {
      type: Boolean,
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
        'cdr-label': true,
        'cdr-label--error': this.isErr,
        'cdr-label--disabled': this.disabled,
      };
    },
    inputClass() {
      return {
        'cdr-input': true,
        'cdr-input--multiline': this.multiLine,
        'cdr-input--error': this.isErr,
        'cdr-input--warn': this.isWarn,
        'cdr-input--preicon': this.$slots.preicon,
      };
    },
    inputWrapClass() {
      return {
        'cdr-input-wrap': true,
        'cdr-input-wrap--actions': this.$slots.pre || this.$slots.post,
      };
    },
    validationIconClass() {
      return {
        'cdr-input-wrap__icon': true,
        'cdr-input-wrap__icon--error': this.isErr,
        'cdr-input-wrap__icon--warn': this.isWarn,
        'cdr-input-wrap__icon--valid': this.isValid,
      };
    },
    messageClass() {
      return {
        'cdr-input-messages__notification': true,
        'cdr-input-messages__notification--error': this.isErr,
        'cdr-input-messages__notification--warn': this.isWarn,
      };
    },
    getIcon() {
      let icon = '';

      if (this.isErr) {
        icon = errorIcon;
      } else if (this.isValid) {
        icon = checkIcon;
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
      this.$emit('input', value);
      this.setCurrentValue(value);
    },
    onBlur(e) {
      this.validate(true);
      this.$nextTick(() => {
        this.focused = false;
      });
      this.$emit('blur', e);
    },
    onFocus(e) {
      this.focused = true;
      this.$emit('focus', e);
    },
    onPaste(e) {
      this.validate(true);
      this.$emit('paste', e);
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

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrInput.pcss';
</style>
