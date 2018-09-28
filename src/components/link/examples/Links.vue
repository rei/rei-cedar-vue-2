<template>
  <!-- eslint-disable max-len -->
  <div>
    <h2>Links</h2>

    <all-links />

    <h2>Links on Dark</h2>
    <div class="cdr-bg--dark">
      <all-links backstop="dark" />
    </div>
  </div>
</template>

<script>
// import Components from 'componentsdir/_index';
import AllLinks from './demo/AllLinks';

export default {
  name: 'Links',
  components: {
    // ...Components,
    AllLinks,
  },
};
</script>

<style>

</style>
