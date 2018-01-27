<template>
  <div data-backstop="inline-space-utilities">
    <h2>Inline space classes</h2>
    <cdr-card class="example">
      <p class="cdr-inline--xxs"> cdr-inline--xxs </p>
      <p class="cdr-inline--xs"> cdr-inline--xs </p>
      <p class="cdr-inline--sm"> cdr-inline--sm </p>
      <p class="cdr-inline"> cdr-inline </p>
      <p class="cdr-inline--lg"> cdr-inline--lg </p>
      <p class="cdr-inline--xl"> cdr-inline--xl </p>
      <p class="cdr-inline--xxl"> cdr-inline--xxl </p>
    </cdr-card>
  </div>
</template>

<script>

import Components from 'Components/_index';

export default {
  name: 'UtilitiesSpaceInline',
  components: Components,
};
</script>

<style type="text/css">
  .example {
    background-color: rgba(27, 28, 28, 0.6);
  }

  .example > * {
    background-color: rgba(249, 229, 229, 0.8);
  }
</style>
