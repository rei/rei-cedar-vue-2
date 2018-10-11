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
      :total-pages="total"
      v-model="ex1Page"
      @change="doChange"
    />

    <cdr-pagination
      :total-pages="833"
      v-model="ex2Page"
      @change="doChange"
    />

    <!-- <br>
    <br>

    <h3>Standard</h3>
    <div
      v-for="datam in paginationData.example1[ex2Page]"
      :key="datam.title"
    >
      <h1>{{ datam.title }}</h1>
      <p>{{ datam.description }}</p>
    </div>

    <cdr-pagination
      :total-pages="total"
      v-model="ex2Page"
    />

    <br>
    <br>

    <h3>Standard</h3>
    <div
      v-for="datam in paginationData.example1[ex3Page]"
      :key="datam.title"
    >
      <h1>{{ datam.title }}</h1>
      <p>{{ datam.description }}</p>
    </div>

    <cdr-pagination
      :total-pages="7"
      v-model="ex3Page"
      @change="doChange"
    />

    <br>
    <br>

    <h3>Standard</h3>
    <div
      v-for="datam in paginationData.example1[ex3Page]"
      :key="datam.title"
    >
      <h1>{{ datam.title }}</h1>
      <p>{{ datam.description }}</p>
    </div>

    <cdr-pagination
      :total-pages="8"
      v-model="ex3Page"
      @change="doChange"
    /> -->

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
      ex2Page: 10,
      ex3Page: 1,
    };
  },
  computed: {
    total() {
      return Object.keys(this.paginationData.example1).length;
    },
    computedUrls() {
      const urls = [];
      Object.keys(this.paginationData.example1);
      return urls;
    },
  },
  methods: {
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
