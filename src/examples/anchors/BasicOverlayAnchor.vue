<template>
  <div id="example-overlay" class="cdr-stretch cdr-bg--dark-20">
    <cdr-a :modifier="['overlay']" href="#example-overlay"> An example overlay link</cdr-a>
  </div>
</template>

<script>
  import cdrA from '../../components/anchors/Anchor';

  export default {
    name: 'basic-anchor-example',
    components: { cdrA },
  };
</script>
<style scoped>
  .cdr-stretch {
    padding: 20px;
  }
</style>
