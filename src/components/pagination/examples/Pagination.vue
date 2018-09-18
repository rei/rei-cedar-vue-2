<template>
  <div>
    <h2>pagination</h2>
    <cdr-pagination
      :total-pages="paginationData.example1.length"
      :page-data="paginationData.example1"
    >
      <template
        slot-scope="pagination"
      >
        <div
          v-for="pag in pagination"
          :key="pag.title"
        >
          <h1>{{ pag.title }}</h1>
          <p>{{ pag.description }}</p>
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
};
</script>

<style>
</style>
