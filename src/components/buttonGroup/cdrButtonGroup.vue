<template>
  <section class="cdr-button-group">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'cdr-button-group',
};
</script>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrButtonGroup.pcss';
</style>
