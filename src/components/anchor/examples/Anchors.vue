<template>
  <div>
    <h2>Anchors</h2>
    <div class="anchor-example">
      <cdr-a data-backstop="cdr-link" href="https://www.rei.com/">An example link</cdr-a>
    </div>
    <div class="anchor-example cdr-bg--dark-20">
      <cdr-a modifier="contrast" href="#example-contrast"> An example contrast link</cdr-a>
    </div>
    <div class="anchor-example">
      <cdr-a data-backstop="cdr-link--standalone" href="https://www.rei.com/" modifier="standalone">An example standalone link</cdr-a>
    </div>
    <div class="anchor-example">
      <p>
        <cdr-a data-backstop="cdr-link--button" href="https://www.rei.com/" modifier="button responsive">Link as button</cdr-a>
      </p>
      <p>
        <cdr-a data-backstop="cdr-link--button" href="https://www.rei.com/" modifier="button">Link as button (not responsive)</cdr-a>
      </p>
    </div>
  </div>
</template>

<script>
import * as Components from '../../_index';

export default {
  name: 'anchors',
  components: Components,
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }
</style>
