<template>
  <div class="anchor-example">
    <cdr-a data-backstop="cdr-link--standalone" href="https://www.rei.com/" modifier="standalone">An example standalone link</cdr-a>
  </div>
</template>

<script>
import Components from '../../../_index';

export default {
  name: 'anchor-standalone',
  components: Components,
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }
</style>
