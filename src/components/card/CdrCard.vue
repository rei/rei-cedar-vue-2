<template>
  <article :class="modifierClass">
    <slot />
  </article>
</template>

<script>
import modifier from 'mixinsdir/modifier';

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

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrCard.vars.pcss';
  @import './styles/CdrCard.pcss';
</style>
