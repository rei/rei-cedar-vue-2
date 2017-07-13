<template>
  <div>
    <cdr-checkbox text="single" @change="change" v-model="ex1"></cdr-checkbox>
    <cdr-checkbox text="checked" @change="change" v-model="ex2"></cdr-checkbox>
    <p>single: {{ex1}}</p>
    <cdr-checkbox text="A" value="A" v-model="exGroup"></cdr-checkbox>
    <cdr-checkbox text="B" value="B" v-model="exGroup"></cdr-checkbox>
    <cdr-checkbox text="C" value="C" v-model="exGroup"></cdr-checkbox>
    <cdr-checkbox text="D" :value="{value:'D'}" v-model="exGroup"></cdr-checkbox>
    <cdr-checkbox text="E" :value="testVal" v-model="exGroup"></cdr-checkbox>
    <cdr-checkbox text="F" :value="testVal2" v-model="exGroup"></cdr-checkbox>
    <p>group: {{exGroup}}</p>
    <cdr-checkbox text="autofocus" autofocus></cdr-checkbox>
    <cdr-checkbox text="disabled" disabled></cdr-checkbox>
    <cdr-checkbox text="required" required></cdr-checkbox>
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
  methods: {
    change(val) {
      console.log('change', val);
    },
  },
};
</script>

<style>

</style>
