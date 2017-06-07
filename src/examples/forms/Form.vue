<template>
  <div>
    <h2>Forms</h2>

    <cdr-input v-model="debounce"
      label="Validation with debounce"
      id="testing"
      placeholder="Enter hi"
      feedback
      :rules="[validateFn]"
      debounce
      ></cdr-input>

    <cdr-input v-model="required"
      label="Required"
      feedback
      :rules="[validateFn]"
      required
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
      ></cdr-input>

    <cdr-input v-model="multi2"
      label="Multiline 10 rows"
      multi-line
      rows="10"
      ></cdr-input>
  </div>
</template>

<script>
  import Components from '../../components/_index';

  export default {
    name: 'forms',
    components: Components,
    data() {
      return {
        debounce: '',
        required: '',
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
          obj.message = 'Error: needs to be string';
        } else {
          obj.state = 'error';
          obj.message = 'Error Message';
        }
        return obj;
      },
    },
  };
</script>
