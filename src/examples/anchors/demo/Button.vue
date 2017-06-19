<template>
  <div class="anchor-example">
    <cdr-a data-backstop="cdr-link--button" href="https://www.rei.com/" modifier="button">Link as button</cdr-a>
  </div>
</template>

<script>
import Components from '../../../components/_index';

export default {
  name: 'anchor-button',
  components: Components,
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }
</style>
