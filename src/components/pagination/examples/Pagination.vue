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
      @input="handleInput"
      @select-change="doSelect"
    />

    <hr>

    <p>Previous/Next only (known total)</p>

    <cdr-pagination
      :pages="makePages(ex2Pages, 'router-page-b', ex2PageKnown - 2)"
      :total-pages="10"
      v-model="ex2PageKnown"
      @input="handleInput"
    />

    <hr>
    <p>Previous/Next only (unknown total)</p>

    <cdr-pagination
      :pages="makePages(ex2Pages, 'router-page-b', ex2PageUnknown - 2)"
      v-model="ex2PageUnknown"
      @input="handleInput"
    />

    <hr>
    <p>Only 5 pages provided</p>

    <cdr-pagination
      :pages="makePages(5, 'router-page-c')"
      :total-pages="5"
      v-model="ex3Page"
      @input="handleInput"
    />

    <hr>
    <p>Scoped Slot Link</p>

    <cdr-pagination
      :pages="makePages(5, 'router-page-d')"
      :total-pages="5"
      v-model="ex4Page"
      @input="handleInput"
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
    handleInput(num, e) {
      e.preventDefault();
      console.log('changed', num); // eslint-disable-line
      this.$router.replace({ query: Object.assign({}, this.$route.query, { 'router-page': num }) });
    },
    doSelect(url, e) {
      console.log('selected', url, e); // eslint-disable-line
    },
  },
};
</script>

<style>
</style>
