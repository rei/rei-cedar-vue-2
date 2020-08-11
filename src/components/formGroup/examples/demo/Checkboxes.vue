<template>
  <div data-backstop="form-group-checkboxes">
    <cdr-form-group label="What's your favorite letter?">
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
      exGroup: ['A'],
    };
  },
};
</script>

<style>

</style>
