<template>
  <div>
    <h2>Radios</h2>
    <cdr-radio text="A1" name="example" value="a1" v-model="ex1"></cdr-radio>
    <cdr-radio text="A2" name="example" value="a2" v-model="ex1"></cdr-radio>
    <cdr-radio text="A3" name="example" :value="{val:'a3'}" v-model="ex1"></cdr-radio>
    <cdr-radio text="A4" name="example" value="a4" v-model="ex1" disabled></cdr-radio>
    <cdr-radio text="A5" name="example" value="a5" v-model="ex1" autofocus></cdr-radio>
    <p>Group A Picked: {{ex1}}</p>

    <cdr-radio text="B1" name="example2" value="b1" v-model="ex2"></cdr-radio>
    <cdr-radio text="B2" name="example2" value="b2" v-model="ex2"></cdr-radio>
    <p>Group B Picked: {{ex2}}</p>
  </div>
</template>

<script>
import * as Components from '../../_index';

export default {
  name: 'radios',
  components: Components,
  data() {
    return {
      ex1: '',
      ex2: 'b2',
    };
  },
};
</script>

<style lang="css">
</style>
