<template>
  <div
    id="app"
  >
    <p>Pick a component above to view.</p>
  </div>
</template>

<script>
// import examples from 'componentsdir/examples';

export default {
  name: 'App',
  components: {
    // ...examples,
  },
  data() {
    return {
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
