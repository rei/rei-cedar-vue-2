<template>
  <div data-backstop="stack-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Stack classes
    </cdr-text>

    <cdr-card class="example">
      <cdr-text class="cdr-stack--xxs">
        cdr-stack--xxs
      </cdr-text>
      <cdr-text class="cdr-stack--xs">
        cdr-stack--xs
      </cdr-text>
      <cdr-text class="cdr-stack--sm">
        cdr-stack--sm
      </cdr-text>
      <cdr-text class="cdr-stack">
        cdr-stack
      </cdr-text>
      <cdr-text class="cdr-stack--lg">
        cdr-stack--lg
      </cdr-text>
      <cdr-text class="cdr-stack--xl">
        cdr-stack--xl
      </cdr-text>
      <cdr-text class="cdr-stack--xxl">
        cdr-stack--xxl
      </cdr-text>
    </cdr-card>

  </div>
</template>

<script>

import Components from 'componentsdir/_index';

export default {
  name: 'UtilitiesSpaceStack',
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
