<template>
  <div class="anchor-example">
    <cdr-a data-backstop="cdr-link" href="https://www.rei.com/">An example link</cdr-a>
  </div>
</template>

<script>
import Components from '../../../components/_index';

export default {
  name: 'anchor-default',
  components: Components,
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }
</style>
