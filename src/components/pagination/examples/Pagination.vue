<template>
  <div>
    <h2>pagination</h2>
    <div
      v-for="datam in getEx1PageData(0)"
      :key="datam.title"
    >
      <h1>{{ datam.title }}</h1>
      <p>{{ datam.description }}</p>
    </div>
    <cdr-pagination
      :total-pages="20"
      :current-page="4"
      @change="changeMethod"
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
    getEx1PageData(page) {
      return this.ex1[page];
    },
    changeMethod(x) {
      console.log('CHANGED', x);
    },
  },
};
</script>

<style>
</style>
