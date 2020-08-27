<template>
  <div data-backstop="form-group-radios">
    <cdr-form-group label="What's your favorite radio?">

      <cdr-radio
        name="example"
        custom-value="casio"
        v-model="ex"
      >Casio</cdr-radio>

      <cdr-radio
        name="example"
        custom-value="panasonic"
        v-model="ex"
      >Panasonic</cdr-radio>

      <cdr-radio
        name="example"
        custom-value="sony"
        v-model="ex"
      >Sony</cdr-radio>

    </cdr-form-group>
  </div>
</template>

<script>
import { CdrFormGroup, CdrRadio } from 'srcdir/index';

export default {
  name: 'ParagraphsDemo',
  components: {
    CdrFormGroup,
    CdrRadio,
  },
  data() {
    return {
      ex: '',
    };
  },
};
</script>

<style>

</style>
