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
    >
      <cdr-checkbox
        custom-value="A"
        v-model="exGroup"
        @input="validate"
      >A</cdr-checkbox>
      <cdr-checkbox
        custom-value="B"
        v-model="exGroup"
        @input="validate"
      >B</cdr-checkbox>
      <cdr-checkbox
        custom-value="C"
        v-model="exGroup"
        @input="validate"
      >C</cdr-checkbox>
      <template slot="error">
        You must make a selection!
      </template>
    </cdr-form-group>

    <cdr-form-group
      label="Disabled example"
      :disabled="true"
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
    };
  },
  methods: {
    validate() {
      this.hasError = !this.exGroup.length;
    },
  },
};
</script>

<style>

</style>
