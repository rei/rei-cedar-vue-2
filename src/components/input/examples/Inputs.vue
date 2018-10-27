<template>
  <div>
    <h2>Text Inputs</h2>

    <cdr-input
      v-model="debounce"
      label="Validation with debounce"
      id="testing"
      placeholder="Enter hi"
      feedback
      name="yoyo"
      :rules="[validateFn]"
      debounce
      data-backstop="text-input"
    />

    <cdr-input
      v-model="requiredValidated"
      label="Required"
      feedback
      :rules="[validateFn]"
      required
    />

    <cdr-input
      v-model="required"
      label="Default required validation"
      required
    />

    <cdr-input
      v-model="nothing"
      label="Nothing"
    />

    <cdr-input
      v-model="nothing"
      label="This has no label"
      hide-label
      placeholder="hidden-label"
    />

    <cdr-input
      v-model="pattern"
      label="Pattern validation"
      required
      pattern="[a-zA-Z0-9\-\s'/@#+&%]+"
      pattern-error="Only letters, numbers, spaces, dashes,
      apostrophes, /, @, #, +, &amp; or % are allowed."
    />

    <cdr-input
      v-model="empty"
      label="Disabled Input"
      placeholder="I am disabled"
      disabled
    />

    <cdr-input
      v-model="valid"
      label="Success"
      feedback
      :rules="[validateFn]"
      immediate-validate
    />

    <cdr-input
      v-model="warning"
      label="Warning"
      feedback
      :rules="[validateFn]"
      immediate-validate
    />

    <cdr-input
      v-model="requiredWithIcon"
      id="required-with-icon"
      placeholder="Required with Icon"
      label="Input Label"
      required
      type="email">
      <!-- Info Slot -->
      <template slot="info">
        <a href="#/inputs">
          Info Link/Icon
        </a>
      </template>
      <template slot="pre-icon">
        <icon-twitter />
      </template>
      <template slot="post-icon">
        <icon-check-lg />
      </template>
      <template slot="helper-text">
        This is helper text.
      </template>
    </cdr-input>
    <br>


  </form>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Forms',
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
      } else if (!isNaN(inputText) && inputText !== '') { //eslint-disable-line
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
