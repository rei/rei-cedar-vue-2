<template>
  <section class="cdr-button-group">
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'CdrButtonGroup',
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import 'cdrButtonGroup.pcss';
</style>
