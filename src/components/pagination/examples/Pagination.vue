<template>
  <div>
    <h2>pagination</h2>

    <hr>
    <p>Normal</p>

    <!-- <cdr-pagination
      v-model="page"
      :pages="pages"
      :total-pages="10"
      data-backstop="pagination-default"
    /> -->
    <hr>

    <div
      v-for="datam in paginationData.example1[ex1Page]"
      :key="datam.title"
    >
      <h1>{{ datam.title }}</h1>
      <p>{{ datam.description }}</p>
    </div>

    <p>Using router-link/scoped slot</p>
    <cdr-pagination
      :pages="makePages(20, null)"
      :total-pages="20"
      v-model="ex1Page"
    >
      <!-- Previous -->
      <template v-slot:prevLink="prevLink">
        <router-link
          v-bind="prevLink.attrs"
          :to="{ query: { 'router-page': prevLink.page } }"
          replace
        >
          <component
            :is="prevLink.iconComponent"
            :class="prevLink.iconClass"
          />
          {{ prevLink.content }}
        </router-link>
      </template>
      <!-- Single Page links -->
      <template v-slot:link="link">
        <router-link
          v-bind="link.attrs"
          :to="{ query: { 'router-page': link.page } }"
          replace
        >
          {{ link.page }}
        </router-link>
      </template>
      <!-- Next -->
      <template v-slot:nextLink="nextLink">
        <router-link
          v-bind="nextLink.attrs"
          :to="{ query: { 'router-page': nextLink.page } }"
          replace
        >
          {{ nextLink.content }}
          <component
            :is="nextLink.iconComponent"
            :class="nextLink.iconClass"
          />
        </router-link>
      </template>
    </cdr-pagination>
    <p>Using p and scoped slot</p>
    <cdr-pagination
      :pages="makePages(20, null)"
      :total-pages="20"
      v-model="paraPage"
    >
      <template v-slot:prevLink="prevLink">
        <p
          v-bind="prevLink.attrs"
          @click="prevLink.click"
        >
          <component
            :is="prevLink.iconComponent"
            :class="prevLink.iconClass"
          />
          {{ prevLink.content }}
        </p>
      </template>
      <template v-slot:link="link">
        <p
          v-bind="link.attrs"
          @click="link.click"
        >
          {{ link.page }}
        </p>
      </template>
      <template v-slot:nextLink="nextLink">
        <p
          v-bind="nextLink.attrs"
          @click="nextLink.click"
        >
          {{ nextLink.content }}
          <component
            :is="nextLink.iconComponent"
            :class="nextLink.iconClass"
          />
        </p>
      </template>
    </cdr-pagination>

    <hr>

    <p>Previous/Next only (known total)</p>

    <cdr-pagination
      :pages="makePages(ex2Pages, '/#/pagination?ex2-known-page', ex2PageKnown - 2)"
      :total-pages="10"
      v-model="ex2PageKnown"
    />

    <hr>
    <p>Previous/Next only (unknown total)</p>

    <cdr-pagination
      :pages="makePages(ex2Pages, '/#/pagination?ex2-unknown-page', ex2PageUnknown - 2)"
      v-model="ex2PageUnknown"
    />

    <hr>
    <p>Only 5 pages provided</p>

    <cdr-pagination
      :pages="makePages(5, '/#/pagination?ex3-page')"
      :total-pages="5"
      v-model="ex3Page"
    />

  </div>
</template>

<script>
import * as Components from 'srcdir/index';

import paginationData from 'componentsdir/pagination/examples/data.json';

export default {
  name: 'Pagination',
  components: {
    ...Components,
  },
  data() {
    return {
      page: 3,
      pages: [
        { page: 1, url: '/#/pagination?page=1' },
        { page: 2, url: '/#/pagination?page=2' },
        { page: 3, url: '/#/pagination?page=3' },
        { page: 4, url: '/#/pagination?page=4' },
        { page: 5, url: '/#/pagination?page=5' },
        { page: 6, url: '/#/pagination?page=6' },
        { page: 7, url: '/#/pagination?page=7' },
        { page: 8, url: '/#/pagination?page=8' },
        { page: 9, url: '/#/pagination?page=9' },
        { page: 10, url: '/#/pagination?page=10' },
      ],
      paginationData,
      paraPage: 1,
      ex2PageKnown: 5,
      ex2PageUnknown: 5,
      ex3Page: 1,
    };
  },
  computed: {
    ex1Page: {
      get() {
        return parseInt(this.$route.query['router-page'], 10) || 1;
      },
      set() {
        // updated by component, we don't need to do anything
      },
    },
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
  },
};
</script>

<style>
</style>
