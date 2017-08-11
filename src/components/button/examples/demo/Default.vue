<template>
<div>
  <cdr-button-group class="button-example">
    <cdr-button data-backstop="cdr-button" type="submit" :on-click="log">Default with click</cdr-button>
    <cdr-button disabled>Default Disabled</cdr-button>
  </cdr-button-group>
  <cdr-button-group class="button-example">
    <cdr-button type="submit" modifier="sm">Small button</cdr-button>
    <cdr-button type="submit" modifier="xs">Extra Small button</cdr-button>
  </cdr-button-group>
  </div>
</template>

<script>
import * as Components from '../../../_index';

export default {
  name: 'default',
  components: Components,
  methods: {
    log() {
      console.log('clicked'); // eslint-disable-line
    },
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
