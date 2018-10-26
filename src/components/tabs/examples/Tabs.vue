<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="tab-demo-section">
      <cdr-text
        tag="h2"
        modifier="heading-medium">
        Tabs
      </cdr-text>
      <cdr-tabs height="100px">
        <cdr-tab-panel name="Tab1">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="Tab2">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Two Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="REALLY REALLY LARGE TAB NAME">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="4">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="Five">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="Six">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Six Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- Compact Modifier -->
    <div class="tab-demo-section">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        Compact Tabs
      </cdr-text>
      <cdr-tabs modifier="compact">
        <cdr-tab-panel name="one">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Two Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- Full Width Modifier -->
    <div class="tab-demo-section">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        Full Width Tabs
      </cdr-text>
      <cdr-tabs modifier="full-width">
        <cdr-tab-panel name="one">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Two Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- No Border Modifier -->
    <div class="tab-demo-section">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        No Border Tabs
      </cdr-text>
      <cdr-tabs modifier="no-border">
        <cdr-tab-panel name="one">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab One Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Two Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Three Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Four Content
          </cdr-text>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <cdr-text
            tag="strong"
            modifier="subheading">
            Tab Five Content
          </cdr-text>
        </cdr-tab-panel>
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
</style>
