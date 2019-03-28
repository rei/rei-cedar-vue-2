<template>
  <div data-backstop="mr-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      margin right space classes
    </cdr-text>
    <cdr-card class="example">
      <cdr-text class="cdr-space-mr-eighth-x">
        cdr-space-mr-eighth-x
      </cdr-text>
      <cdr-text class="cdr-space-mr-quarter-x">
        cdr-space-mr-quarter-x
      </cdr-text>
      <cdr-text class="cdr-space-mr-half-x">
        cdr-space-mr-half-x
      </cdr-text>
      <cdr-text class="cdr-space-mr-three-quarter-x">
        cdr-space-mr-three-quarter-x
      </cdr-text>
      <cdr-text class="cdr-space-mr-one-x">
        cdr-space-mr-one-x
      </cdr-text>
      <cdr-text class="cdr-space-mr-one-and-a-half-x">
        cdr-space-mr-one-and-a-half-x
      </cdr-text>
      <cdr-text class="cdr-space-mr-two-x">
        cdr-space-mr-two-x
      </cdr-text>
      <cdr-text class="cdr-space-mr-four-x">
        cdr-space-mr-four-x
      </cdr-text>
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
