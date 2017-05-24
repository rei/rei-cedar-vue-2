<template>
  <div>
    <h2>Anchors</h2>
    <default-anchor></default-anchor>
    <constrast-anchor></constrast-anchor>
    <overlay-anchor></overlay-anchor>
    <standalone-anchor></standalone-anchor>
    <button-anchor></button-anchor>
  </div>
</template>

<script>
import defaultAnchor from './demo/Default';
import constrastAnchor from './demo/Contrast';
import overlayAnchor from './demo/Overlay';
import standaloneAnchor from './demo/Standalone';
import buttonAnchor from './demo/Button';

export default {
  name: 'anchors',
  components: {
    defaultAnchor,
    constrastAnchor,
    overlayAnchor,
    standaloneAnchor,
    buttonAnchor,
  },
};
</script>

