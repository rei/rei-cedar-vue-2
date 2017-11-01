<template>
  <article :class="[modifierClass]">
   <slot></slot>
  </article>
</template>

<script>
import modifier from 'Src/mixins/modifier';

export default {
  name: 'cdr-card',
  mixins: [modifier],
  computed: {
    baseClass() {
      return 'cdr-card';
    },
  },
};
</script>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrCard.pcss';
</style>
