<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="tab-demo-section">
      <cdr-text
        tag="h2"
        modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
      >
        Tabs
      </cdr-text>
      <tabs-with-content />
    </div>
    <variants />
  </div>
</template>

<script>
import * as Components from 'srcdir/index';
import tabsWithContent from 'componentsdir/tabs/examples/demo/TabsWithContent';
import variants from 'componentsdir/tabs/examples/demo/TabsVariants';

export default {
  name: 'TabsExample',
  components: { ...Components, tabsWithContent, variants },
};
</script>

<style>
  .tab-demo-section {
    padding-top: 25px;
  }
</style>
