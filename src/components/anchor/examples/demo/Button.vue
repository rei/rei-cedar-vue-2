<template>
  <div class="anchor-example">
    <p>
      <cdr-a data-backstop="cdr-link--button" href="https://www.rei.com/" modifier="button responsive">Link as button</cdr-a>
    </p>
    <p>
      <cdr-a data-backstop="cdr-link--button" href="https://www.rei.com/" modifier="button">Link as button (not responsive)</cdr-a>
    </p>
  </div>
</template>

<script>
import Components from 'Components/_index';

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
