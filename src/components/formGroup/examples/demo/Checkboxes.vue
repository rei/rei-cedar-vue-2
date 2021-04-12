<template>
  <div data-backstop="form-group-checkboxes">
    <cdr-form-group
      label="What's your favorite letter?"
    >
      <cdr-checkbox
        custom-value="A"
        v-model="exGroup"
      >A</cdr-checkbox>
      <cdr-checkbox
        custom-value="B"
        v-model="exGroup"
      >B</cdr-checkbox>
      <cdr-checkbox
        custom-value="C"
        v-model="exGroup"
      >C</cdr-checkbox>
    </cdr-form-group>

    <cdr-form-group>

      <template slot="label">
        <cdr-text modifier="heading-sans-600">
          Optional Label Override Example
        </cdr-text>
      </template>
      <cdr-checkbox
        custom-value="A"
        v-model="exGroup"
      >A</cdr-checkbox>
      <cdr-checkbox
        custom-value="B"
        v-model="exGroup"
      >B</cdr-checkbox>
      <cdr-checkbox
        custom-value="C"
        v-model="exGroup"
      >C</cdr-checkbox>
    </cdr-form-group>

    <cdr-form-group
      label="What's your favorite optional letter?"
      :optional="true"
    >
      <cdr-checkbox
        custom-value="A"
        v-model="exGroup"
      >A</cdr-checkbox>
      <cdr-checkbox
        custom-value="B"
        v-model="exGroup"
      >B</cdr-checkbox>
      <cdr-checkbox
        custom-value="C"
        v-model="exGroup"
      >C</cdr-checkbox>
    </cdr-form-group>

    <cdr-form-group
      label="What's your favorite required letter?"
      :error="hasError"
      :required="true"
      aria-describedby="errorStatus"
    >
      <cdr-checkbox
        custom-value="A"
        v-model="errorA"
        @input="validate"
      >A</cdr-checkbox>
      <cdr-checkbox
        custom-value="B"
        v-model="errorA"
        @input="validate"
      >B</cdr-checkbox>
      <cdr-checkbox
        custom-value="C"
        v-model="errorA"
        @input="validate"
      >C</cdr-checkbox>
      <template slot="error">
        <span id="errorStatus">You must make a selection!</span>
      </template>
    </cdr-form-group>

    <cdr-form-group
      label="Are you sure you don't have a different favorite required letter?"
      :error="hasAlert"
      error-role="alert"
      :required="true"
      aria-describedby="errorAlert"
    >
      <cdr-checkbox
        custom-value="Q"
        v-model="errorB"
        @input="validateAlert"
      >A</cdr-checkbox>
      <cdr-checkbox
        custom-value="Z"
        v-model="errorB"
        @input="validateAlert"
      >B</cdr-checkbox>
      <cdr-checkbox
        custom-value="X"
        v-model="errorB"
        @input="validateAlert"
      >C</cdr-checkbox>
      <template slot="error">
        <span id="errorAlert">You must make a selection within two minutes!</span>
      </template>
    </cdr-form-group>

    <cdr-form-group
      label="Disabled example"
      :disabled="true"
      :required="true"
    >
      <cdr-checkbox
        custom-value="A"
        v-model="exGroup"
        :disabled="true"
      >A</cdr-checkbox>
      <cdr-checkbox
        custom-value="B"
        v-model="exGroup"
        :disabled="true"
      >B</cdr-checkbox>
      <cdr-checkbox
        custom-value="C"
        v-model="exGroup"
        :disabled="true"
      >C</cdr-checkbox>
    </cdr-form-group>
  </div>
</template>

<script>
import { CdrFormGroup, CdrCheckbox, CdrText } from 'srcdir/index';

export default {
  name: 'ParagraphsDemo',
  components: {
    CdrFormGroup,
    CdrCheckbox,
    CdrText,
  },
  data() {
    return {
      exGroup: [],
      hasError: true,
      hasAlert: true,
      errorA: [],
      errorB: [],
    };
  },
  methods: {
    validate() {
      this.hasError = !this.errorA.length;
    },
    validateAlert() {
      this.hasAlert = !this.errorB.length;
    },
  },
};
</script>

<style>

</style>
