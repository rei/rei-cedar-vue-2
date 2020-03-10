<template>
  <!-- eslint-disable max-len -->
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
      class="cdr-align-text-center"
    >
      Tabs
    </cdr-text>

    <tabs-default />

    <!-- small -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        Small Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        size="small"
      >
        <cdr-tab-panel
          v-for="tab in tabs.slice(0, 5)"
          :key="tab"
          :name="tab"
          :id="'tab-panel-small-' + tab"
          :aria-labelledby="'tab-small-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

    <!-- full-width -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        Full-Width Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        modifier="full-width"
      >
        <cdr-tab-panel
          v-for="tab in tabs.slice(0, 5)"
          :key="tab"
          :name="tab"
          :id="'tab-panel-full-width-' + tab"
          :aria-labelledby="'tab-full-width-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

    <!-- No-border -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        No Border Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        modifier="no-border"
      >
        <cdr-tab-panel
          v-for="tab in tabs.slice(0, 5)"
          :key="tab"
          :name="tab"
          :id="'tab-panel-no-border-' + tab"
          :aria-labelledby="'tab-no-border-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>

    <!-- Centered -->
    <div class="tab-demo-secton">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
        class="cdr-align-text-center"
      >
        Centered Tabs
      </cdr-text>
      <cdr-tabs
        height="100px"
        modifier="centered"
      >
        <cdr-tab-panel
          v-for="tab in tabs"
          :key="tab"
          :name="tab"
          :id="'tab-panel-centered-' + tab"
          :aria-labelledby="'tab-centered-' + tab"
        >
          <cdr-text
            modifier="body-300"
          >
            Tab {{ tab }} content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <variants />
  </div>
</template>

<script>
import * as Components from 'srcdir/index';
import tabsDefault from 'componentsdir/tabs/examples/demo/TabsDefault';

export default {
  name: 'TabsExample',
  components: { ...Components, tabsDefault },
  data() {
    return {
      tabs: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
    };
  },
};
</script>

<style>
  .tab-demo-section {
    margin-bottom: 30px;
  }
</style>
