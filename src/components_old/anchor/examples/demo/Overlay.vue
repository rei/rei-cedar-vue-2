<template>
  <div class="anchor-example cdr-bg--dark-20">
    <cdr-a modifier="overlay" href="#example-overlay"> An example overlay link</cdr-a>
  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'anchor-overlay',
  components: Components,
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }
</style>
