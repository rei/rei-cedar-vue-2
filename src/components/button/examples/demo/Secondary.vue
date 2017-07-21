<template>
  <cdr-button-group class="button-example">
  <cdr-button modifier="secondary compact">Secondary small</cdr-button>
    <cdr-button data-backstop="cdr-button--secondary" modifier="secondary">Secondary</cdr-button>
    <cdr-button modifier="secondary" disabled>Secondary Disabled</cdr-button>
  </cdr-button-group>
</template>

<script>
import * as Components from '../../../_index';

export default {
  name: 'secondary',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
