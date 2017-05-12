<template>
<div :class="className" v-if="type === 'checkbox' || type === 'radio'">
    <input :type="type" :name="name" :value="forvalue" :id="forvalue" :disabled="disabled" :required="required" :checked="checked"/>
    <label :for="forvalue">
      <span v-html="iconCheck" v-if="type === 'checkbox'"></span>
      <slot></slot>
    </label>
  </div>

  <div v-else>
    <label class="cdr-label" :for="forvalue">
      <slot></slot>
    </label>
    <div class="field-validation has-success" :success="success" v-if="success == true">
      <input :type="type" :class="buildClass" :id="forvalue" :placeholder="placeholder" :disabled="disabled" :required="required"/>
      <span class="icon-validation icon-success" v-html="iconSuccess"></span>
    </div>
    <div class="field-validation validation-msg has-error" :error="error" v-else-if="error == true">
      <input :type="type" :class="buildClass" :id="forvalue" :placeholder="placeholder" :disabled="disabled" :required="required"/>
      <span class="icon-validation icon-error" v-html="iconError"></span>
      <div class="field-msg_error">
        <span>Caution support information.</span>
      </div>
    </div>
    <div class="field-validation validation-msg has-warning" :warning="warning" v-else-if="warning == true">
      <input :type="type" :class="buildClass" :id="forvalue" :placeholder="placeholder" :disabled="disabled" :required="required"/>
      <span class="icon-validation icon-warning" v-html="iconWarning"></span>
      <div class="field-msg_error">
        <span class="" aria-hidden="true"></span>
        <span>Error support information.</span>
      </div>
    </div>
    <div v-else>
      <input :type="type" :class="buildClass" :id="forvalue" :placeholder="placeholder" :disabled="disabled" :required="required"/>
    </div>
  </div>
</template>

<script>
  const check = require('!raw-loader!../../assets/icons/icon-rei-check.svg');//eslint-disable-line
  const error = require('!raw-loader!../../assets/icons/icon-rei-error.svg');//eslint-disable-line
  const warning = require('!raw-loader!../../assets/icons/icon-rei-warning.svg');//eslint-disable-line
  const success = require('!raw-loader!../../assets/icons/icon-rei-success.svg');//eslint-disable-line

  export default {
    name: 'cdr-input',
    data() {
      return {
        iconCheck: check,
        iconError: error,
        iconWarning: warning,
        iconSuccess: success,
      };
    },
    props: {
      theme: String,
      modifier: {
        required: false,
        default: () => [],
      },
      validation: {
        required: false,
        default: () => null,
      },
      type: {
        type: String,
        required: false,
        default: '',
      },
      placeholder: {
        type: String,
        required: false,
        default: '',
      },
      forvalue: {
        type: String,
        required: false,
        default: '',
      },
      class: {
        type: String,
        required: false,
        default: '',
      },
      name: {
        type: String,
        required: false,
        default: '',
      },
      disabled: {
        type: Boolean,
        required: false,
      },
      required: {
        type: Boolean,
        required: true,
      },
      checked: {
        type: Boolean,
        required: false,
      },
      success: {
        type: Boolean,
        required: false,
      },
      error: {
        type: Boolean,
        required: false,
      },
      warning: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
      buildClass() {
        const baseClass = 'cdr-input';
        let final = '';
        if (this.theme) {
          final += `${this[this.theme][baseClass]} `;
          this.modifier.forEach((mod) => {
            final += `${this[this.theme][`cdr-input--${mod}`]} `;
          });
        } else {
          final += `${baseClass} `;
          this.modifier.forEach((mod) => {
            final += `cdr-input--${mod} `;
          });
        }
        return final;
      },
    },
  };
</script>
