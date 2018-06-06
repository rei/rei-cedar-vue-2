<template>
  <div data-backstop="stack-space-utilities">
    <h2>Stack classes</h2>

    <cdr-card class="example">
      <p class="cdr-stack--xxs">
        cdr-stack--xxs
      </p>
      <p class="cdr-stack--xs">
        cdr-stack--xs
      </p>
      <p class="cdr-stack--sm">
        cdr-stack--sm
      </p>
      <p class="cdr-stack">
        cdr-stack
      </p>
      <p class="cdr-stack--lg">
        cdr-stack--lg
      </p>
      <p class="cdr-stack--xl">
        cdr-stack--xl
      </p>
      <p class="cdr-stack--xxl">
        cdr-stack--xxl
      </p>
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
