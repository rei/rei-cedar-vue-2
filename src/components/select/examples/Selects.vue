<template>
  <div>
    <cdr-select label="Prompt" v-model="selected" prompt="Choose one">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </cdr-select>
    <p>Selected: {{selected}}</p>

    <cdr-select label="Hidden label text" hideLabel v-model="selected" prompt="Hidden label">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </cdr-select>
    <p>Selected: {{selected}}</p>

    <cdr-select label="No Prompt" v-model="selected2">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </cdr-select>
    <p>Selected: {{selected2}}</p>

    <cdr-select label="Multiple Prompt" v-model="multiple" multiple size="4" prompt="Choose two">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </cdr-select>
    <p>selected: {{multiple}}</p>

    <cdr-select label="Multiple No Prompt" v-model="multiple2" multiple size="4" :options="multiple2Data"></cdr-select>
    <p>selected: {{multiple2}}</p>
  </div>
</template>

<script>
import Components from '../../_index';

export default {
  name: 'selects',
  components: Components,
  data() {
    return {
      selected: '',
      selected2: '1',
      multiple: ['1', '2'],
      multiple2: [],
      multiple2Data: ['a', 'b', 'c', 'd'],
    };
  },
};
</script>

<style>
  
</style>
