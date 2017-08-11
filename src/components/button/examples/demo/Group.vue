<template>
  <cdr-button-group class="button-example">
    <cdr-button>Button 1</cdr-button>
    <cdr-button modifier="secondary">Button 2</cdr-button>
  </cdr-button-group>
</template>

<script>
import * as Components from '../../../_index';

export default {
  name: 'group',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
