<template>
  <component
    :is="tag"
    :class="modifierClass"
  >
    <slot />
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrList',
  mixins: [modifier],
  props: {
    /**
     * Tag accepts a user defined element and expects either: 'ul' = Unordered List or 'ol' = Ordered List.
     */
    tag: {
      type: String,
      default: 'ul',
      validator: value => ['ul', 'ol'].indexOf(value) >= 0 || false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-list';
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrList.pcss';
</style>
