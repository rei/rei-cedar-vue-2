<template>
  <div data-backstop="stack-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Stack classes
    </cdr-text>

    <cdr-card class="example">
      <cdr-text class="cdr-stack-eighth-x">
        cdr-stack-eighth-x
      </cdr-text>
      <cdr-text class="cdr-stack-quarter-x">
        cdr-stack-quarter-x
      </cdr-text>
      <cdr-text class="cdr-stack-half-x">
        cdr-stack-half-x
      </cdr-text>
      <cdr-text class="cdr-stack-three-quarter-x">
        cdr-stack-three-quarter-x
      </cdr-text>
      <cdr-text class="cdr-stack-1-x">
        cdr-stack-1-x
      </cdr-text>
      <cdr-text class="cdr-stack-1-and-a-half-x">
        cdr-stack-1-and-a-half-x
      </cdr-text>
      <cdr-text class="cdr-stack-2-x">
        cdr-stack-2-x
      </cdr-text>
      <cdr-text class="cdr-stack-4-x">
        cdr-stack-4-x
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
