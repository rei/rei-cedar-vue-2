<template>
  <div class="cdr-input-group"> 
    <div class="cdr-input-validation" :class="[validationClass]">
      <input type="text" class="cdr-input" ref="input" :value="value" @input="updateValue($event.target.value)">
      <span v-if="validation" class="cdr-input-validation__icon" v-html="getIcon(validationObj)"></span>
    </div>
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
  },
  computed: {
    validationClass() {
      const baseClass = 'cdr-input-validation--';
      if (this.validation) {
        return `${baseClass}${this.validationObj.state}`;
      }
      return '';
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
      if (obj.state === 'valid') {
        icon = this.iconSuccess;
      } else if (obj.state === 'warn') {
        icon = this.iconWarning;
      } else if (obj.state === 'error') {
        icon = this.iconError;
      }
      return icon;
    },
  },
};
</script>

<style>

</style>
