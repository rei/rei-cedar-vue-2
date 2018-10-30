<template>
  <div data-backstop="inline-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Inline space classes
    </cdr-text>
    <cdr-card class="example">
      <cdr-text class="cdr-inline--xxs"> cdr-inline--xxs </cdr-text>
      <cdr-text class="cdr-inline--xs"> cdr-inline--xs </cdr-text>
      <cdr-text class="cdr-inline--sm"> cdr-inline--sm </cdr-text>
      <cdr-text class="cdr-inline"> cdr-inline </cdr-text>
      <cdr-text class="cdr-inline--lg"> cdr-inline--lg </cdr-text>
      <cdr-text class="cdr-inline--xl"> cdr-inline--xl </cdr-text>
      <cdr-text class="cdr-inline--xxl"> cdr-inline--xxl </cdr-text>
    </cdr-card>
  </div>
</template>

<script>

import Components from 'componentsdir/_index';

export default {
  name: 'UtilitiesSpaceInline',
  components: Components,
};
</script>

<style>
  .example {
    background-color: rgba(27, 28, 28, 0.6);
  }

  .example > * {
    background-color: rgba(249, 229, 229, 0.8);
  }
</style>
