<template>
  <div>
    <h2>Anchors</h2>
    <default-anchor/>
    <constrast-anchor/>
    <standalone-anchor/>
    <button-anchor/>
  </div>
</template>

<script>
import defaultAnchor from './demo/Default';
import constrastAnchor from './demo/Contrast';
import standaloneAnchor from './demo/Standalone';
import buttonAnchor from './demo/Button';

export default {
  name: 'Anchors',
  components: {
    defaultAnchor,
    constrastAnchor,
    standaloneAnchor,
    buttonAnchor,
  },
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }

  .overlay-example {
    background-color: black;
  }
</style>

