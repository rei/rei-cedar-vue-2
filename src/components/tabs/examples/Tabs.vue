<template>
  <!-- eslint-disable max-len -->
  <div>
    <h2>tabs</h2>
    <cdr-tabs>
      <cdr-tab name="Tab1"><div class="demo-content-container">Tab One Content</div></cdr-tab>
      <cdr-tab name="Tab2"><div class="demo-content-container">Tab Two Content</div></cdr-tab>
      <cdr-tab name="REALLY REALLY LARGE TAB NAME"><div class="demo-content-container">Tab Three Content</div></cdr-tab>
      <cdr-tab name="4"><div class="demo-content-container">Tab Four Content</div></cdr-tab>
      <cdr-tab name="Five"><div class="demo-content-container">Tab Five Content</div></cdr-tab>
      <cdr-tab name="Six"><div class="demo-content-container">Tab Six Content</div></cdr-tab>
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
  .demo-content-container {
    text-align: center;
    padding-top: 175px;
    font-size: 30px;
    height: 400px;
  }
</style>
