<template>
  <div>
    <h3>Unstyled List</h3>
    <cdr-list modifier="unstyled">
      <li>List unstyled</li>
      <li>List unstyled</li>
      <li>List unstyled</li>
    </cdr-list>

    <cdr-list modifier="unstyled compact">
      <li>List unstyled - compact</li>
      <li>List unstyled - compact</li>
      <li>List unstyled - compact</li>
    </cdr-list>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'UnstyledList',
  components: Components,
};
</script>

<style>

</style>
