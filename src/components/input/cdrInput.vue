<template>
  <div class="cdr-input-wrap">
    <label v-if="!hideLabel"
      :class="labelClass"
      :for="inputId"
      ref="label"
    >{{label}}<span v-if="required">*</span>
    </label>
    <div class="cdr-input-group" :class="[groupClass]">
      <slot name="pre"></slot>
      <div :class="[validationClass]">
        <textarea v-if="multiLine"
          :class="inputClass"
          v-bind="$attrs"
          :id="inputId"
          :value="lazyValue"
          v-on="$listeners"
          @blur="onBlur"
          @input="onInput"
          @focus="onFocus"
          @paste="onPaste"
          :required="required"
          :disabled="disabled"
          :aria-label="hideLabel ? label : null"
          :aria-describedby="errors.length ? messagesId : null"
          ref="input"
        ></textarea>

        <input v-else
          :type="type"
          :class="inputClass"
          v-bind="$attrs"
          :id="inputId"
          :value="lazyValue"
          v-on="$listeners"
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

        <span v-if="feedback" :class="validationIconClass" v-html="getIcon" ref="icon"></span>
      </div>
      <slot name="post"></slot>
    </div>
    <transition-group class="cdr-input-messages" :id="messagesId" ref="messages" name="cdr-animated-errors" tag="div">
      <div :class="messageClass"
        ref="error"
        v-for="error in errors"
        :error="error"
        :key="error">{{error}}</div>
    </transition-group>
  </div>
</template>

<script>
import debounce from '../../utils/debounce';

const checkIcon = require('!raw-loader!../../assets/icons/rei/icon-rei-check.svg');// eslint-disable-line import/no-webpack-loader-syntax
const errorIcon = require('!raw-loader!../../assets/icons/rei/icon-rei-error.svg');// eslint-disable-line import/no-webpack-loader-syntax
const warningIcon = require('!raw-loader!../../assets/icons/rei/icon-rei-warning.svg');// eslint-disable-line import/no-webpack-loader-syntax

export default {
  name: 'cdr-input',
  inheritAttrs: false,
  data() {
    return {
      errors: [],
      lazyValue: this.value,
      pristine: true,
      touched: false,
      valid: false,
      focused: false,
      state: '',
    };
  },
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
      required: false,
    },
  },
  computed: {
    // Use given id or generate one
    inputId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    messagesId() {
      return `err${this._uid}`; // eslint-disable-line no-underscore-dangle
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
        'cdr-input--actions': this.$slots.pre || this.$slots.post,
        'cdr-input--action-post': this.$slots.post,
        'cdr-input--action-pre': this.$slots.pre,
      };
    },
    validationClass() {
      return {
        'cdr-input-validation': true,
        'cdr-input-validation--actions': this.$slots.pre || this.$slots.post,
      };
    },
    validationIconClass() {
      return {
        'cdr-input-validation__icon': true,
        'cdr-input-validation__icon--error': this.isErr,
        'cdr-input-validation__icon--warn': this.isWarn,
        'cdr-input-validation__icon--valid': this.isValid,
        'cdr-input-validation--actions': this.$slots.pre || this.$slots.post,
      };
    },
    messageClass() {
      return {
        'cdr-input-messages__notification': true,
        'cdr-input-messages__notification--error': this.isErr,
        'cdr-input-messages__notification--warn': this.isWarn,
      };
    },
    groupClass() {
      return {
        'cdr-input-group': true,
        'cdr-input-group--actions': this.$slots.pre || this.$slots.post,
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
      } else if (!isNaN(this.debounce) && this.debounce !== '' && this.debounce !== true) {
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
    modifiers() {
      const modifiers = {
        lazy: false,
        number: false,
        trim: false,
      };

      if (!this._vnode.data.directives) {//eslint-disable-line
        return modifiers;
      }

      const model = this._vnode.data.directives.find(i => i.name === 'model');//eslint-disable-line

      if (!model) {
        return modifiers;
      }

      return Object.assign(modifiers, model.modifiers);
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(valArg) {
        let val = valArg;
        if (this.modifiers.trim) {
          val = val.trim();
        }

        if (this.modifiers.number) {
          val = Number(val);
        }

        if (!this.modifiers.lazy) {
          this.$emit('input', val);
        }

        this.lazyValue = val;
      },
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
  watch: {
    focused(val) {
      this.touched = true;

      if (val) {
        this.$emit('change', this.lazyValue);
      }
    },
    value() {
      this.lazyValue = this.value;
      this.validate();
    },
  },
  methods: {
    onInput(e) {
      this.pristine = false;
      this.inputValue = e.target.value;
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
      this.$refs.input.focus();
      this.$emit('focus', e);
    },
    onPaste(e) {
      this.validate(true);
      this.$emit('paste', e);
    },
    validate(immediate = false) {
      // only validate rules if there are any
      if (this.rules.length > 0) {
        const delay = immediate ? 0 : this.debounceVal;
        (debounce(() => {
          this.errors = [];
          this.valid = false;

          this.rules.forEach((rule) => {
            const validObj = rule(this.value);
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
