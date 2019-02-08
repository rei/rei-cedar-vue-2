<template>
  <div style="padding:20px;">
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Popover
    </cdr-text>
    <!-- <cdr-button
      class="popover-toggle-button"
    >
      Popover
    </cdr-button> -->
    <popover
      toggle-button-selector="[data-js='popover-toggle-button']"
    >
      <h4>Welcome to my amazing popover</h4>
      <p>Thanks for stopping by.</p>
    </popover>
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
