<template>
  <div>
    <cdr-select v-model="selected" @input="inputMethod" prompt="Choose one">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </cdr-select>
    <p>Selected: {{selected}}</p>
    <cdr-select v-model="multiple" multiple @input="inputMethod" prompt="Choose one">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </cdr-select>
    <p>multiple: {{multiple}}</p>
  </div>
</template>

<script>
import Components from '../../components/_index';

export default {
  name: 'selects',
  components: Components,
  data() {
    return {
      selected: '',
      multiple: [],
    };
  },
  methods: {
    inputMethod(e) {
      console.log('input event', e);
    },
  },
};
</script>

<style>
  
</style>
