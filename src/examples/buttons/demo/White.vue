<template>
  <cdr-button-group class="button-example cdr-button-group cdr-bg--dark-20">
    <cdr-button data-backstop="cdr-button--secondary-alternate" :modifier="['secondary-alternate']">White alternate large</cdr-button>
    <cdr-button :modifier="['secondary-alternate', 'small']">White alternate small</cdr-button>
    <cdr-button :modifier="['secondary-alternate', 'extra-small']">White alternate extra small</cdr-button>
    <cdr-button :modifier="['secondary-alternate']" disabled>Disabled</cdr-button>
  </cdr-button-group>
</template>

<script>
import Components from '../../../components/_index';

export default {
  name: 'white',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
