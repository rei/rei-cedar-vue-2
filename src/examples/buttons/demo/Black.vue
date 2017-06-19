<template>
  <cdr-button-group class="button-example">
    <cdr-button data-backstop="cdr-button--alternate" modifier="alternate">Black alternate</cdr-button>
    <cdr-button modifier="alternate small">Black alternate small</cdr-button>
    <cdr-button modifier="alternate extra-small">Black alternate extra small</cdr-button>
  </cdr-button-group>
</template>

<script>
import Components from '../../../components/_index';

export default {
  name: 'black',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
