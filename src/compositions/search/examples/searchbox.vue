<template>
  <div>
    <h2>Searchbox</h2>

    <cdr-search
      v-model="search1"
      :click="search"/>
    <p>Searching: {{ search1 }}</p>

    <cdr-search
      v-model="search1"
      :click="search"
      large/>
    <p>Searching: {{ search1 }}</p>

    <cdr-search
      v-model="search2"
      :click="search"
      bare/>
    <p>Searching: {{ search2 }}</p>

    <cdr-search
      v-model="search2"
      :click="search"
      bare
      large/>
    <p>Searching: {{ search2 }}</p>
  </div>
</template>

<script>
import cdrSearch from '../cdrSearch';

export default {
  name: 'Searchbox',
  components: { cdrSearch },
  data() {
    return {
      search1: '',
      search2: 'bare',
    };
  },
  methods: {
    search() {
      console.log(`Searching ${this.search1}`); // eslint-disable-line
    },
  },
};
</script>

<style>

</style>
