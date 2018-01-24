<template>
  <div>
    <h2>Radios</h2>
    <cdr-radio
      id="test1"
      name="example"
      value="a1"
      v-model="ex1"
      data-backstop="radio-focus"
    >A1</cdr-radio>
    <cdr-radio
      name="example"
      value="a2"
      v-model="ex1"
    >A2</cdr-radio>
    <cdr-radio
      name="example"
      :value="{val:'a3'}"
      v-model="ex1"
    >A3</cdr-radio>
    <cdr-radio
      name="example"
      value="a4"
      v-model="ex1"
      disabled
    >A4 (disabled)</cdr-radio>
    <p>Group A Picked: {{ ex1 }}</p>

    <cdr-radio
      name="example2"
      value="b1"
      v-model="ex2"
    >B1</cdr-radio>
    <cdr-radio
      name="example2"
      value="b2"
      v-model="ex2"
    >B2</cdr-radio>
    <p>Group B Picked: {{ ex2 }}</p>

    <cdr-radio
      name="example3"
      value="c1"
      v-model="ex3"
      disabled
    >C1 (selected + disabled)</cdr-radio>
    <cdr-radio
      name="example3"
      value="c2"
      v-model="ex3"
    >C2</cdr-radio>
    <p>Group C Picked: {{ ex3 }}</p>
  </div>
</template>

<script>
import Components from '../../_index';

export default {
  name: 'Radios',
  components: Components,
  data() {
    return {
      ex1: '',
      ex2: 'b2',
      ex3: 'c1',
    };
  },
};
</script>

<style lang="css">
</style>
