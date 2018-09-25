<template>
  <div>
    <h2>pagination</h2>
    <div
      v-for="datam in paginationData.example1[currentPage]"
      :key="datam.title"
    >
      <h1>{{ datam.title }}</h1>
      <p>{{ datam.description }}</p>
    </div>
    <cdr-pagination
      :total-pages="ex1Pages"
      v-model="currentPage"
      :on-click="doThis"
    />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

import paginationData from './data.json';

export default {
  name: 'Pagination',
  components: {
    ...Components,
  },
  data() {
    return {
      paginationData,
      currentPage: 1,
    };
  },
  computed: {
    ex1() {
      return this.paginationData.example1;
    },
    ex1Pages() {
      return Object.keys(this.ex1).length;
    },
  },
  methods: {
    doThis(num, e) {
      e.preventDefault();
      console.log('doThis', num);
      this.$router.replace({ query: Object.assign({}, this.$route.query, { page: num }) });
    },
  },
};
</script>

<style>
</style>
