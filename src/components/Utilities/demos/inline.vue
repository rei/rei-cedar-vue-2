<template>
  <div data-backstop="inline-space-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Inline space classes
    </cdr-text>
    <!-- <cdr-card class="example">
      <cdr-text class="cdr-inline-eighth-x">
        cdr-inline-eighth-x
      </cdr-text>
      <cdr-text class="cdr-inline-quarter-x">
        cdr-inline-quarter-x
      </cdr-text>
      <cdr-text class="cdr-inline-half-x">
        cdr-inline-half-x
      </cdr-text>
      <cdr-text class="cdr-inline-three-quarter-x">
        cdr-inline-three-quarter-x
      </cdr-text>
      <cdr-text class="cdr-inline-1-x">
        cdr-inline-1-x
      </cdr-text>
      <cdr-text class="cdr-inline-1-and-a-half-x">
        cdr-inline-1-and-a-half-x
      </cdr-text>
      <cdr-text class="cdr-inline-2-x">
        cdr-inline-2-x
      </cdr-text>
      <cdr-text class="cdr-inline-4-x">
        cdr-inline-4-x
      </cdr-text>
    </cdr-card> -->
  </div>
</template>

<script>

// import Components from 'componentsdir/_index';
import { CdrText } from 'componentsdir/_index';

export default {
  name: 'UtilitiesSpaceInline',
  components: {
    CdrText,
  },
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
