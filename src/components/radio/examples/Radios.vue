<template>
  <div class="">
    <cdr-radio text="A" name="example" value="A" v-model="ex1"></cdr-radio>
    <cdr-radio text="B" name="example" value="B" v-model="ex1"></cdr-radio>
    <cdr-radio text="C" name="example" :value="{val:'C'}" v-model="ex1"></cdr-radio>
    <cdr-radio text="D" name="example" value="D" v-model="ex1" disabled></cdr-radio>
    <cdr-radio text="E" name="example" value="E" v-model="ex1" autofocus></cdr-radio>
    <p>Picked: {{ex1}}</p>
  </div>
</template>

<script>
import Components from '../../_index';

export default {
  name: 'radios',
  components: Components,
  data() {
    return {
      ex1: '',
    };
  },
};
</script>

<style lang="css">
</style>
