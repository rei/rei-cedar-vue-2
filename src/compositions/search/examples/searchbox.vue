<template>
  <div>
    <h2>Searchbox</h2>

    <cdr-search v-model="search1" :click="search"></cdr-search>
    <p>Searching: {{search1}}</p>
  </div>
</template>

<script>
import cdrSearch from '../cdrSearch';

export default {
  name: 'searchbox',
  components: { cdrSearch },
  data() {
    return {
      search1: '',
    };
  },
  methods: {
    search() {
      console.log(`Searching ${this.search1}`);
    },
  },
};
</script>

<style>
  
</style>
