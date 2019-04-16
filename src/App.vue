<template>
  <div
    id="app"
    class="cdr-container-fluid"
  >

    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
    >{{ route.name }} *
    </router-link>

    <links
      class="cpg-section"
      data-backstop="links"
    />
    <buttons
      class="cpg-section"
      data-backstop="buttons"
    />
    <cta
      class="cpg-section"
      data-backstop="cta-links"
    />
  </div>
</template>

<script>
import examples from 'componentsdir/examples';
import {CdrText, CdrButton, CdrLink, CdrCta } from 'componentsdir/_index'; // eslint-disable-line
import routes from './router';

const all = Object.assign({}, CdrText, CdrButton, CdrLink, CdrCta, examples);

export default {
  name: 'App',
  components: all,
  data() {
    return {
      routes,
      globalTheme: 'lightest',
    };
  },
  mounted() {
    if (this.$route.query['global-theme']) this.globalTheme = this.$route.query['global-theme'];
  },
  methods: {
    radioNavigate() {
      this.$router.replace({
        query: Object.assign(
          {},
          this.$route.query,
          { 'global-theme': this.globalTheme },
        ),
      });
    },
  },
};
</script>

<style scoped>
  .cpg-section {
    margin: 16px 0;
  }
</style>
