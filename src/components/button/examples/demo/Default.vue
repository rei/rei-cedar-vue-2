<template>
  <cdr-button-group class="button-example">
    <cdr-button theme="red">RED</cdr-button>
    <cdr-button theme="red" modifier="compact">RED</cdr-button>
    <cdr-button type="submit" modifier="compact">Compact button</cdr-button>
    <cdr-button data-backstop="cdr-button" type="submit" :on-click="log">Default with click</cdr-button>
    <cdr-button disabled>Default Disabled</cdr-button>
  </cdr-button-group>
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
