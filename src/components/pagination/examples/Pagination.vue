<template>
  <div>
    <h2>pagination</h2>

    <h3>Vue-router example</h3>
    <div
      v-for="datam in paginationData.example1[ex1Page]"
      :key="datam.title"
    >
      <h1>{{ datam.title }}</h1>
      <p>{{ datam.description }}</p>
    </div>

    <cdr-pagination
      :pages="makePages(20, 'router-page')"
      :total-pages="20"
      v-model="ex1Page"
      @change="doChange"
    />

    <p>Previous/Next only (known total)</p>

    <cdr-pagination
      :pages="makePages(ex2Pages, 'router-page-b', ex2Page - 2)"
      :total-pages="10"
      v-model="ex2Page"
      @change="doChange"
    />

    <p>Previous/Next only (unknown total)</p>

    <cdr-pagination
      :pages="makePages(ex2Pages, 'router-page-b', ex2Page - 2)"
      v-model="ex2Page"
      @change="doChange"
    />

    <p>Only 5 pages provided</p>

    <cdr-pagination
      :pages="makePages(5, 'router-page-c')"
      :total-pages="5"
      v-model="ex3Page"
      @change="doChange"
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
      ex1Page: 1,
      ex2Page: 5,
      ex3Page: 1,
    };
  },
  computed: {
    ex2Pages() {
      if (this.ex2Page === 1 || this.ex2Page === 10) {
        return 2;
      }
      return 3;
    },
  },
  methods: {
    makePages(total, arg = 'page', startingAt = 0) {
      const adjuster = startingAt > 0 ? startingAt : 0;
      const result = [];
      const arr = Array(total).fill().map((_, i) => i + adjuster + 1);
      arr.forEach((n) => {
        const obj = {};
        obj.page = n;
        obj.url = `?${arg}=${n}`;
        result.push(obj);
      });
      return result;
    },
    doChange(num, e) {
      e.preventDefault();
      console.log('changed', num); // eslint-disable-line
      this.$router.replace({ query: Object.assign({}, this.$route.query, { 'router-page': num }) });
    },
  },
};
</script>

<style>
</style>
