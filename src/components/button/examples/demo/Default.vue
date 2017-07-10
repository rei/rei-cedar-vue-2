<template>
  <cdr-button-group class="button-example">
    <cdr-button data-backstop="cdr-button" type="submit" :on-click="log">Default with click</cdr-button>
    <cdr-button type="submit" modifier="small">Default small submit</cdr-button>
    <cdr-button type="reset" modifier="extra-small">Default extra small reset</cdr-button>
    <cdr-button disabled>Default Disabled</cdr-button>
  </cdr-button-group>
</template>

<script>
import Components from '../../../_index';

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
