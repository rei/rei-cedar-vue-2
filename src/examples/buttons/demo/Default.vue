<template>
  <cdr-button-group class="button-example">
    <cdr-button data-backstop="cdr-button" type="submit" :handle-click="log">Default with click</cdr-button>
    <cdr-button :type="'submit'" :modifier="['small']">Default small submit</cdr-button>
    <cdr-button :type="'reset'" :modifier="['extra-small']">Default extra small reset</cdr-button>
    <cdr-button disabled>Disabled</cdr-button>
  </cdr-button-group>
</template>

<script>
import Components from '../../../components/_index';

export default {
  name: 'default',
  components: Components,
  methods: {
    log() {
      this.$log('button clicked');
    },
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
