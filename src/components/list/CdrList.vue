<template>
  <component
    :is="tag"
    :class="[
      modifierClass,
      spacingClass,
      contentPriorityClass,
    ]"
  >
    <slot />
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import contentPriority from 'mixinsdir/contentPriority';

export default {
  name: 'CdrList',
  mixins: [
    modifier,
    space,
    contentPriority,
  ],
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
  @import './styles/vars/CdrList.vars.pcss';
  @import './styles/CdrList.pcss';
</style>
