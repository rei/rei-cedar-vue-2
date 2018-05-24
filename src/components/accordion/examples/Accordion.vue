<template>
  <div>
    <h2>Accordion</h2>
    <cdr-accordion
      id="darin"
      label="Accordion!"
    >
      <ul>
        <li>This is stuff in the slot</li>
      </ul>
    </cdr-accordion>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Accordion',
  components: Components,
};
</script>

<style>
</style>
