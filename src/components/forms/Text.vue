<template>
  <div class="cdr-input-group"> 
    <label v-if="labelText" class="cdr-label" :for="_uid">{{labelText}}</label>
    <div class="cdr-input-validation" :class="[validationClass]">
      <input 
        type="text"
        class="cdr-input"
        ref="input"
        :value="value"
        @input="updateValue($event.target.value)"
        :id="_uid"
        :placeholder="inputPlaceholder"
        :required="isRequired"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :aria-label="inputLabel"
        :aria-describedby="getDescribed"
        >
      <span v-if="validation" class="cdr-input-validation__icon" v-html="getIcon(validationObj.state)"></span>
    </div>
    <span v-if="validationObj.message" :id="getDescribed" class="cdr-input-validation__message">{{validationObj.message}}</span>
  </div>
</template>

<script>
const check = require('!raw-loader!../../assets/icons/rei/icon-rei-check.svg');//eslint-disable-line
const error = require('!raw-loader!../../assets/icons/rei/icon-rei-error.svg');//eslint-disable-line
const warning = require('!raw-loader!../../assets/icons/rei/icon-rei-warning.svg');//eslint-disable-line
const success = require('!raw-loader!../../assets/icons/rei/icon-rei-success.svg');//eslint-disable-line

export default {
  name: 'input-text',
  data() {
    return {
      validationObj: {},
      iconCheck: check,
      iconError: error,
      iconWarning: warning,
      iconSuccess: success,
    };
  },
  props: {
    value: String,
    validation: Function,
    inputPlaceholder: String,
    inputLabel: String,
    labelText: String,
    isRequired: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    validationClass() {
      const baseClass = 'cdr-input-validation--';
      if (this.validation) {
        return `${baseClass}${this.validationObj.state}`;
      }
      return '';
    },
    getDescribed() {
      if (this.validationObj.message) {
        return `describe${this._uid}`; //eslint-disable-line
      }
      return false;
    },
  },
  methods: {
    updateValue(value) {
      const formattedValue = value;
      if (this.validation) {
        this.validationObj = this.validation(formattedValue);
      }
      // Emit the value through the input event
      this.$emit('input', formattedValue);
    },
    getIcon(obj) {
      let icon;
      if (obj === 'valid') {
        icon = this.iconSuccess;
      } else if (obj === 'warn') {
        icon = this.iconWarning;
      } else if (obj === 'error') {
        icon = this.iconError;
      }
      return icon;
    },
  },
};
</script>

<style>

</style>
