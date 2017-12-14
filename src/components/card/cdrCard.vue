<template>
  <article :class="[modifierClass]">
    <slot/>
  </article>
</template>

<script>
import modifier from 'Src/mixins/modifier';

export default {
  name: 'CdrCard',
  mixins: [modifier],
  computed: {
    baseClass() {
      return 'cdr-card';
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/cdrCard.vars.pcss';
  @import 'styles/cdrCard.pcss';
</style>
