<template>
  <div id="example-contrast" class="anchor-example cdr-bg--dark-20">
    <cdr-a :modifier="['contrast']" href="#example-contrast"> An example contrast link</cdr-a>
  </div>
</template>

<script>
import Components from '../../../components/_index';

export default {
  name: 'anchor-contrast',
  components: Components,
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }
</style>
