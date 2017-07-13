<template>
  <div class="">
    <cdr-radio text="A" value="A" v-model="ex1"></cdr-radio>
    <cdr-radio text="B" value="B" v-model="ex1"></cdr-radio>
    <cdr-radio text="C" :value="{val:'C'}" v-model="ex1"></cdr-radio>
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
