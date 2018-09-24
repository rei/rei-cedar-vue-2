<template>
  <div>
    <h2>pagination</h2>
    <div
      v-for="datam in pageData"
      :key="datam.title"
    >
      <h1>{{ datam.title }}</h1>
      <p>{{ datam.description }}</p>
    </div>
    <cdr-pagination
      :total-pages="ex1Pages"
      :current-page="pageNum"
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
      pageNum: 1,
      pageData: this.getEx1PageData(this.pageNum),
    };
  },
  computed: {
    ex1() {
      return this.paginationData.example1;
    },
    // ex1Page() {
    //   return ;
    // },
    ex1Pages() {
      return Object.keys(this.ex1).length;
    },
  },
  methods: {
    getEx1PageData(page) {
      return this.ex1[page];
    },
    changeMethod(x) {
      this.pageData = this.getEx1PageData(x);
      console.log('CHANGED', x);
    },
  },
};
</script>

<style>
</style>
