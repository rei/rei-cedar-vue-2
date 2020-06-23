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
  </div>
</template>

<script>
import { CdrFormGroup, CdrCheckbox } from 'srcdir/index';

export default {
  name: 'ParagraphsDemo',
  components: {
    CdrFormGroup,
    CdrCheckbox,
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
