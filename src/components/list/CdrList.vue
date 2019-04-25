<template>
  <component
    :is="tag"
    :class="[
      modifierClass,
      contentPriorityClass,
    ]"
  >
    <slot />
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import contentPriority from 'mixinsdir/contentPriority';

export default {
  name: 'CdrList',
  mixins: [
    modifier,
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

<style lang="scss" module>
  @import './styles/vars/CdrList.vars.scss';
  @import './styles/CdrList.scss';
</style>
