<template>
  <div class="form-example">
    <h2>Text Inputs</h2>

    <cdr-input v-model="debounce"
      label="Validation with debounce"
      id="testing"
      placeholder="Enter hi"
      feedback
        name="yoyo"

      :rules="[validateFn]"
      debounce
      data-backstop="text-input"
      ></cdr-input>

    <cdr-input v-model="requiredValidated"
      label="Required"
      feedback
      :rules="[validateFn]"
      required
      ></cdr-input>

    <cdr-input v-model="required"
      label="Default required validation"
      required
      ></cdr-input>

    <cdr-input v-model="nothing"
      label="Nothing"
      ></cdr-input>

    <cdr-input v-model="nothing"
      label="This has no label"
      hide-label
      placeholder="hidden-label"
      ></cdr-input>

    <cdr-input v-model="pattern"
      label="Pattern validation"
      required
      pattern="[a-zA-Z0-9\-\s'/@#+&%]+"
      pattern-error="Only letters, numbers, spaces, dashes, apostrophes, /, @, #, +, &amp; or % are allowed."
      ></cdr-input>

    <cdr-input v-model="empty"
      label="Disabled"
      placeholder="I am disabled"
      disabled
      ></cdr-input>

    <cdr-input v-model="valid"
      label="Success"
      feedback
      :rules="[validateFn]"
      immediate-validate
      ></cdr-input>

    <cdr-input v-model="warning"
      label="Warning"
      feedback
      :rules="[validateFn]"
      immediate-validate
      ></cdr-input>

    <cdr-input v-model="error"
      label="Error"
      feedback
      :rules="[validateFn]"
      immediate-validate
      ></cdr-input>

    <cdr-input v-model="multi"
      label="Multiline"
      multi-line
      rows="5"
      data-backstop="form-textarea"
      ></cdr-input>

    <cdr-input v-model="valid"
      label="Multiline Success"
      feedback
      :rules="[validateFn]"
      multi-line
      rows="5"
      immediate-validate
      ></cdr-input>

    <cdr-input v-model="warning"
      label="Multiline Warning"
      feedback
      :rules="[validateFn]"
      multi-line
      rows="5"
      immediate-validate
      ></cdr-input>

    <cdr-input v-model="error"
      label="Multiline Error"
      feedback
      :rules="[validateFn]"
      multi-line
      rows="5"
      immediate-validate
      ></cdr-input>

    <cdr-input v-model="multi2"
      label="Multiline 10 rows"
      multi-line
      rows="10"
      ></cdr-input>
  </div>
</template>

<script>
  import * as Components from '../../_index';

  export default {
    name: 'forms',
    components: Components,
    data() {
      return {
        debounce: '',
        requiredValidated: '',
        required: '',
        nothing: '',
        pattern: '',
        empty: '',
        valid: 'hi',
        warning: '',
        error: 1,
        multi: '',
        multi2: '',
      };
    },
    methods: {
      validateFn(inputText) {
        const obj = {};
        if (inputText === 'hi') {
          obj.state = 'valid';
        } else if (inputText === '') {
          obj.state = 'warn';
          obj.message = 'Warning Message';
        } else if (!isNaN(inputText) && inputText !== '') {
          obj.state = 'error';
          obj.message = 'Error: needs to be letters';
        } else {
          obj.state = 'error';
          obj.message = 'Error Message';
        }
        return obj;
      },
    },
  };
</script>

<style>
  .form-example {
    padding: 10px;
  }
</style>
