<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="tab-demo-section">
      <h2>Tabs</h2>
      <cdr-tabs>
        <cdr-tab name="Tab1">
          <h1>Tab One Content</h1>
        </cdr-tab>
        <cdr-tab name="Tab2">
          <h1>
            Tab Two Content
          </h1>
        </cdr-tab>
        <cdr-tab name="REALLY REALLY LARGE TAB NAME">
          <h1>
            Tab Three Content
          </h1>
        </cdr-tab>
        <cdr-tab name="4">
          <h1>
            Four Content
          </h1>
        </cdr-tab>
        <cdr-tab name="Five">
          <h1>
            Tab Five Content
          </h1>
        </cdr-tab>
        <cdr-tab name="Six">
          <h1>
            Tab Six Content
          </h1>
        </cdr-tab>
      </cdr-tabs>
    </div>
    <!-- Compact Modifier -->
    <div class="tab-demo-section">
      <h2>Compact Tabs</h2>
      <cdr-tabs modifier="compact">
        <cdr-tab name="one">
          <h1>tab one content</h1>
        </cdr-tab>
        <cdr-tab name="two">
          <h1>tab two content</h1>
        </cdr-tab>
        <cdr-tab name="three">
          <h1>tab three content</h1>
        </cdr-tab>
        <cdr-tab name="four">
          <h1>tab four content</h1>
        </cdr-tab>
        <cdr-tab name="five">
          <h1>tab five content</h1>
        </cdr-tab>
      </cdr-tabs>
    </div>
    <!-- Full Width Modifier -->
    <div class="tab-demo-section">
      <h2>Full Width Tabs</h2>
      <cdr-tabs modifier="full-width">
        <cdr-tab name="one">
          <h1>tab one content</h1>
        </cdr-tab>
        <cdr-tab name="two">
          <h1>tab two content</h1>
        </cdr-tab>
        <cdr-tab name="three">
          <h1>tab three content</h1>
        </cdr-tab>
        <cdr-tab name="four">
          <h1>tab four content</h1>
        </cdr-tab>
        <cdr-tab name="five">
          <h1>tab five content</h1>
        </cdr-tab>
      </cdr-tabs>
    </div>
    <!-- No Border Modifier -->
    <div class="tab-demo-section">
      <h2>No Border Tabs</h2>
      <cdr-tabs modifier="no-border">
        <cdr-tab name="one">
          <h1>tab one content</h1>
        </cdr-tab>
        <cdr-tab name="two">
          <h1>tab two content</h1>
        </cdr-tab>
        <cdr-tab name="three">
          <h1>tab three content</h1>
        </cdr-tab>
        <cdr-tab name="four">
          <h1>tab four content</h1>
        </cdr-tab>
        <cdr-tab name="five">
          <h1>tab five content</h1>
        </cdr-tab>
      </cdr-tabs>
    </div>
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
  .tab-demo-section {
    text-align: center;
    height: 150px;
    padding-top: 25px;
  }

  .tab-demo-section > h2 {
    text-align: left;
  }
</style>
