<template>
  <div>
    <h2>Checkboxes</h2>
    <cdr-checkbox v-model="ex1" @change="logChange">single</cdr-checkbox>
    <p>single: {{ex1}}</p>
    <cdr-checkbox v-model="ex2" @change="logChange" true-value="checked" false-value="unchecked">checked</cdr-checkbox>
    <p>checked: {{ex2}}</p>
    <cdr-checkbox v-model="ex3" @change="logChange" true-value="checked">custom true</cdr-checkbox>
    <p>custom true: {{ex3}}</p>
    <cdr-checkbox custom-value="A" v-model="exGroup" @change="logChange">A</cdr-checkbox>
    <cdr-checkbox custom-value="B" v-model="exGroup">B</cdr-checkbox>
    <cdr-checkbox custom-value="C" v-model="exGroup">C</cdr-checkbox>
    <cdr-checkbox :custom-value="{value:'D'}" v-model="exGroup">D</cdr-checkbox>
    <cdr-checkbox :custom-value="testVal" v-model="exGroup">E</cdr-checkbox>
    <cdr-checkbox :custom-value="testVal2" v-model="exGroup">F</cdr-checkbox>
    <p>group: {{exGroup}}</p>
    <cdr-checkbox disabled>disabled checkbox</cdr-checkbox>
    <cdr-checkbox v-model="checked" disabled>disabled and checked checkbox</cdr-checkbox>
 </div>
</template>

<script>
import * as Components from '../../_index';

export default {
  name: 'checkboxes',
  components: Components,
  data() {
    return {
      checked: true,
      ex1: false,
      ex2: 'checked',
      ex3: 'checked',
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
  methods: {
    logChange(val, e) {
      console.log('log', val, e); // eslint-disable-line
    },
  },
};
</script>

<style>

</style>
