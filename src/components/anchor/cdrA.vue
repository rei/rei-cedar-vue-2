<template>
  <a :class="modifierClass" :target="target" :rel="newRel">
    <slot></slot>
  </a>
</template>

<script>
  import modifier from 'Src/mixins/modifier';
  
  export default {
    name: 'cdr-a',
    mixins: [modifier],
    props: {
      target: String,
      rel: String,
    },
    computed: {
      baseClass() {
        const modifiers = this.modifier ? this.modifier.split(' ') : [];
        return modifiers.indexOf('button') >= 0 ? 'cdr-button' : 'cdr-link';
      },
      newRel() {
        if (this.target === '_blank') {
          return this.rel || 'noopener noreferrer';
        }
        return this.rel;
      },
    },
  };
</script>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrA.pcss';
</style>

