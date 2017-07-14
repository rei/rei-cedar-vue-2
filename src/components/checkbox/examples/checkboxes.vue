<template>
  <div>
    <h2>Checkboxes</h2>
    <cdr-checkbox v-model="ex1">single</cdr-checkbox>
    <cdr-checkbox v-model="ex2">checked</cdr-checkbox>
    <p>single: {{ex1}}</p>
    <cdr-checkbox value="A" v-model="exGroup">A</cdr-checkbox>
    <cdr-checkbox value="B" v-model="exGroup">B</cdr-checkbox>
    <cdr-checkbox value="C" v-model="exGroup">C</cdr-checkbox>
    <cdr-checkbox :value="{value:'D'}" v-model="exGroup">D</cdr-checkbox>
    <cdr-checkbox :value="testVal" v-model="exGroup">E</cdr-checkbox>
    <cdr-checkbox :value="testVal2" v-model="exGroup">F</cdr-checkbox>
    <p>group: {{exGroup}}</p>
    <cdr-checkbox autofocus>autofocus</cdr-checkbox>
    <cdr-checkbox disabled>disabled</cdr-checkbox>
    <cdr-checkbox required>required</cdr-checkbox>
 </div>
</template>

<script>
import Components from '../../_index';

export default {
  name: 'checkboxes',
  components: Components,
  data() {
    return {
      ex1: false,
      ex2: true,
      exGroup: ['A', { value: 'D' }, [9, 8]],
      testVal: {
        value: 'X',
        more: {
          things: [1, 2, 3],
        },
      },
      testVal2: [9, 8],
    };
  },
};
</script>

<style>

</style>
