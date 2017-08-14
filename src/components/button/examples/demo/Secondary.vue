<template>
<div>
  <cdr-button-group class="button-example">
    <cdr-button modifier="secondary" data-backstop="cdr-button--secondary" type="submit">Secondary</cdr-button>
    <cdr-button modifier="secondary" disabled>Secondary Disabled</cdr-button>
  </cdr-button-group>
  <cdr-button-group class="button-example">
    <cdr-button type="submit" modifier="sm secondary">Small secondary</cdr-button>
    <cdr-button type="submit" modifier="xs secondary">Extra Small secondary</cdr-button>
  </cdr-button-group>
  </div>
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
