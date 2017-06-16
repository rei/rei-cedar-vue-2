<template>
  <a :class="modifierClass" :target="target" :rel="rel">
    <slot></slot>
  </a>
</template>

<script>
  import modifier from '../../mixins/modifier';
  
  export default {
    name: 'cdrA',
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
          return this.rel || 'noopener';
        }
        return this.rel;
      },
    },
  };
</script>
