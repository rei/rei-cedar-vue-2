<template>
  <div style="padding:20px; position:relative;">
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Popover
    </cdr-text>
    <cdr-button
      js-data="popover-toggle-button"
    >
      Popover
    </cdr-button>
    <cdr-popover
      toggle-button-selector="[js-data='popover-toggle-button']"
    >
      <h4>Welcome to my amazing popover</h4>
      <p>Thanks for stopping by.</p>
    </cdr-popover>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Popover',
  components: {
    ...Components,
  },
};
</script>

<style>
</style>
