<template>
  <div>
    <h2>pagination</h2>
    <cdr-pagination
      :total-pages="ex1Pages"
      :page-data="getEx1PageData(0)"
    >
      <template slot-scope="data">
        <div
          v-for="datam in data"
          :key="datam.title"
        >
          <h1>{{ datam.title }}</h1>
          <p>{{ datam.description }}</p>
        </div>
      </template>
    </cdr-pagination>
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
  },
};
</script>

<style>
</style>
