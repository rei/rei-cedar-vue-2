<template>
  <div class="button-example">
    <cdr-button>Button 1</cdr-button>
    <cdr-button modifier="secondary">Button 2</cdr-button>
  </div>
</template>

<script>
import Components from 'Components/_index';

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
