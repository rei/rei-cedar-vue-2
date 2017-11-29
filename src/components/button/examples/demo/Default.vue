<template>
  <div>
    <div class="button-example">
      <cdr-button
        data-backstop="cdr-button"
        type="submit"
        :on-click="log"
      >Default with click</cdr-button>
      <cdr-button disabled>Default Disabled</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="sm"
      >Small button</cdr-button>
      <cdr-button
        type="submit"
        modifier="xs"
      >Extra Small button</cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'Default',
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
