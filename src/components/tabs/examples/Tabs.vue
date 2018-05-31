<template>
  <div>
    <h2>tabs</h2>
    <cdr-tabs>
      <cdr-tab name="Tab1">Content ONE</cdr-tab>
      <cdr-tab name="Tab2">Content TWO</cdr-tab>
      <cdr-tab name="Tab3">Content THREE</cdr-tab>
    </cdr-tabs>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'TabsExample',
  components: { ...Components },
};
</script>

<style>
</style>
