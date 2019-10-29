<template>
  <div data-backstop="pagination">
    <h2>pagination</h2>

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
      @navigate="handleNavigate"
      @select-change="doSelect"
    />

    <hr>

    <p>Previous/Next only (known total)</p>

    <cdr-pagination
      :pages="makePages(ex2Pages, 'router-page-b', ex2PageKnown - 2)"
      :total-pages="10"
      v-model="ex2PageKnown"
      @navigate="handleNavigate"
    />

    <hr>
    <p>Previous/Next only (unknown total)</p>

    <cdr-pagination
      :pages="makePages(ex2Pages, 'router-page-b', ex2PageUnknown - 2)"
      v-model="ex2PageUnknown"
      @navigate="handleNavigate"
    />

    <hr>
    <p>Only 5 pages provided</p>

    <cdr-pagination
      :pages="makePages(5, 'router-page-c')"
      :total-pages="5"
      v-model="ex3Page"
      @navigate="handleNavigate"
    />

    <hr>
    <p>Scoped Slot Link</p>

    <cdr-pagination
      :pages="makePages(5, 'router-page-d')"
      :total-pages="5"
      v-model="ex4Page"
      @navigate="handleNavigate"
    >
      <template
        slot="link"
        slot-scope="link"
      >
        <div
          :class="link.class"
          @click="e => ex4Page = link.page"
        >
          {{ link.href }}
        </div>
      </template>
      <template
        slot="prevLink"
        slot-scope="link"
      >
        <div @click="e => ex4Page = link.page">
          <cdr-icon
            :use="link.iconPath"
            :class="link.iconClass"
          />
          <span>{{ link.content }}</span>
        </div>
      </template>
      <template
        slot="nextLink"
        slot-scope="link"
      >
        <div @click="e => ex4Page = link.page">
          <span>{{ link.content }}</span>
          <cdr-icon
            :use="link.iconPath"
            :class="link.iconClass"
          />
        </div>
      </template>
    </cdr-pagination>

    <cdr-pagination
      v-model="page"
      :pages="pages"
      :total-pages="10"
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
      page: 1,
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
      ex1Page: 1,
      ex2PageKnown: 5,
      ex2PageUnknown: 5,
      ex3Page: 1,
      ex4Page: 3,
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
    handleNavigate(page, url, e) {
      e.preventDefault();
      console.log('handleNavigate', page, url, e); // eslint-disable-line
      // eslint-disable-next-line max-len
      this.$router.replace({ query: Object.assign({}, this.$route.query, { 'router-page': page }) });
    },
    doSelect(page, url, e) {
      console.log('doSelect', page, url, e); // eslint-disable-line
    },
  },
};
</script>

<style>
</style>
