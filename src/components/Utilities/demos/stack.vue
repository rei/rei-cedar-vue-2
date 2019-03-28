<template>
  <div data-backstop="mb-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      margin bottom classes
    </cdr-text>

    <cdr-card class="example">
      <cdr-text class="cdr-space-mb-eighth-x">
        cdr-space-mb-eighth-x
      </cdr-text>
      <cdr-text class="cdr-space-mb-quarter-x">
        cdr-space-mb-quarter-x
      </cdr-text>
      <cdr-text class="cdr-space-mb-half-x">
        cdr-space-mb-half-x
      </cdr-text>
      <cdr-text class="cdr-space-mb-three-quarter-x">
        cdr-space-mb-three-quarter-x
      </cdr-text>
      <cdr-text class="cdr-space-mb-one-x">
        cdr-space-mb-one-x
      </cdr-text>
      <cdr-text class="cdr-space-mb-one-and-a-half-x">
        cdr-space-mb-one-and-a-half-x
      </cdr-text>
      <cdr-text class="cdr-space-mb-two-x">
        cdr-space-mb-two-x
      </cdr-text>
      <cdr-text class="cdr-space-mb-four-x">
        cdr-space-mb-four-x
      </cdr-text>
    </cdr-card>

  </div>
</template>

<script>

import Components from 'componentsdir/_index';

export default {
  name: 'UtilitiesSpacemb',
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
